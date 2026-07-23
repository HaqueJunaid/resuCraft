import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import { ArrowLeft, Briefcase, ChevronLeft, ChevronRight, Download, EyeIcon, EyeOffIcon, FileText, FolderIcon, GraduationCap, Share2, SparkleIcon, User } from "lucide-react";
import PersonalForm from "../components/PersonalForm";
import Preview from "../components/Preview";
import TempelateSelector from "../components/TempelateSelector";
import AccentSelector from "../components/AccentSelector";
import SummaryForm from "../components/SummaryForm";
import ExperienceForm from "../components/ExperienceForm";
import EducationForm from "../components/EducationForm";
import ProjectForm from "../components/ProjectForm";
import SkillForm from "../components/SkillForm";
import { useResumeStore } from "../store/useResumeStore";

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const updateResume = useResumeStore((state) => state.updateResume);

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3b82f6",
    public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);
  const [mobileView, setMobileView] = useState("edit"); // "edit" or "preview"

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'summary', name: 'Summary', icon: FileText },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'projects', name: 'Projects', icon: FolderIcon },
    { id: 'skills', name: 'Skills', icon: SparkleIcon },
  ]

  const activeSection = sections[activeSectionIndex];

  const loadExistingResume = async () => {
    // 1. Try Zustand store first
    const storeResumes = useResumeStore.getState().resumes;
    const resume = storeResumes.find((r) => r._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title || "Resume Builder";
      return;
    }

    // 2. Try legacy local storage fallback
    const saved = localStorage.getItem(`resume_${resumeId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setResumeData(parsed);
        document.title = parsed.title || "Resume Builder";
        return;
      } catch (e) {
        console.error("Failed to parse saved resume", e);
      }
    }

    // 3. Fall back to dummy data
    const dummyResume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (dummyResume) {
      setResumeData(dummyResume);
      document.title = dummyResume.title;
    } else {
      // Initialize empty template state with the id
      setResumeData(prev => ({ ...prev, _id: resumeId }));
    }
  };

  useEffect(() => {
    loadExistingResume();
  }, [resumeId]);

  // Persist edits to Zustand store and legacy localstorage
  useEffect(() => {
    if (resumeData && resumeData._id) {
      updateResume(resumeData._id, resumeData);
      localStorage.setItem(`resume_${resumeData._id}`, JSON.stringify(resumeData));
    }
  }, [resumeData, updateResume]);

  const togglePublic = () => {
    setResumeData({ ...resumeData, public: !resumeData.public })
  }

  const shareResume = async () => {
    const first = window.location.href.split('/app/')[0];
    let resumeUrl = first + '/view/' + resumeId;

    try {
      const jsonStr = JSON.stringify(resumeData);
      const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
      resumeUrl += `?d=${encoded}`;
    } catch (e) {
      console.error("Error encoding resume data", e);
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: resumeData.title || "My Resume",
          text: "Check out my resume!",
          url: resumeUrl
        });
      } catch (err) {
        console.log("Share cancelled or failed", err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(resumeUrl);
        alert("Share link copied to clipboard!");
      } catch (err) {
        alert("Failed to copy link: " + resumeUrl);
      }
    }
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto min-h-screen px-4 lg:px-6 pt-24 lg:pt-28 pb-10 text-neutral-100">
      {/* Top Header Row with Back Button & Actions */}
      <div className="flex flex-row justify-between items-center mb-6 w-full gap-4 flex-wrap print:hidden">
        <Link
          to="/app"
          className="flex items-center justify-center gap-1 w-fit text-neutral-400 hover:text-neutral-200 text-sm border px-3 py-1.5 rounded-md hover:border-green-500/80 transition-all ease-in-out duration-300 border-green-500/30 bg-neutral-950/50 backdrop-blur-md cursor-pointer"
        >
          <ArrowLeft className="size-5" />
          Back to dashboard
        </Link>

        <div className="flex items-center gap-2">
          {/* Share Button */}
          {resumeData.public && (
            <button onClick={shareResume} className="flex items-center gap-1 text-sm text-blue-600 bg-linear-to-r from-blue-50 to-blue-100 px-3 py-1.5 rounded-lg hover:ring hover:ring-blue-600 cursor-pointer">
              <Share2 className="size-4" />
              Share
            </button>
          )}

          {/* Public/Private Toggle Button */}
          <button onClick={togglePublic} className="flex items-center gap-1 text-sm text-violet-600 bg-linear-to-r from-violet-50 to-violet-100 px-3 py-1.5 rounded-lg hover:ring hover:ring-violet-600 cursor-pointer">
            {resumeData.public ? <EyeIcon className="size-4" /> : <EyeOffIcon className="size-4" />}
            {resumeData.public ? "Public" : "Private"}
          </button>

          {/* Download Button */}
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1 text-sm text-green-600 bg-linear-to-r from-green-50 to-green-100 px-3 py-1.5 rounded-lg hover:ring hover:ring-green-600 cursor-pointer"
          >
            <Download className="size-4" />
            Download
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Tab Switcher */}
      <div className="flex lg:hidden justify-center mb-6 gap-2 p-1 bg-neutral-900 border border-green-500/20 rounded-xl max-w-sm mx-auto print:hidden">
        <button
          onClick={() => setMobileView("edit")}
          className={`flex-1 py-2 px-4 text-center rounded-lg font-medium text-sm transition-all duration-200 ease-in-out cursor-pointer ${mobileView === "edit"
              ? "bg-green-500 text-black font-semibold shadow-md"
              : "text-neutral-400 hover:text-neutral-200"
            }`}
        >
          Edit Form
        </button>
        <button
          onClick={() => setMobileView("preview")}
          className={`flex-1 py-2 px-4 text-center rounded-lg font-medium text-sm transition-all duration-200 ease-in-out cursor-pointer ${mobileView === "preview"
              ? "bg-green-500 text-black font-semibold shadow-md"
              : "text-neutral-400 hover:text-neutral-200"
            }`}
        >
          Live Preview
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full items-start">
        {/* Left Form Column */}
        <div className={`flex-2 w-full lg:w-auto print:hidden ${mobileView === "edit" ? "block" : "hidden lg:block"}`}>
          <div className="relative overflow-visible bg-black rounded-lg border border-green-500/30 p-6 pt-1">
            {/* Progress Bar */}
            <hr className="absolute top-0 left-0 right-0 border-2 border-green-500/30" />
            <hr className="absolute top-0 left-0 h-1 bg-linear-to-r from-green-50 to-green-600 border-none transition-all ease-in-out duration-300" style={{ width: `${activeSectionIndex * 100 / (sections.length - 1)}%` }} />

            {/* Nav */}
            <div className="flex justify-between items-center mb-6 border-b border-green-500/30 py-2">
              {/* Buttons */}
              <div className="flex items-center gap-2">
                <TempelateSelector selectedTempelate={resumeData.template} onChange={(template) => setResumeData(prev => ({ ...prev, template }))} />
                <AccentSelector selectedColor={resumeData.accent_color} onChange={(accent_color) => setResumeData(prev => ({ ...prev, accent_color }))} />
              </div>

              <div className="flex items-center">
                {activeSectionIndex !== 0 && (
                  <button onClick={() => setActiveSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0))} disabled={activeSectionIndex === 0} className="flex items-center gap-1 p-3 rounded-l-2xl text-sm font-medium text-neutral-500/90 hover:bg-neutral-500/20 hover:text-neutral-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <ChevronLeft className="size-4" />
                    Prev
                  </button>
                )}
                <button onClick={() => setActiveSectionIndex((prevIndex) => Math.min(prevIndex + 1, sections.length - 1))} disabled={activeSectionIndex === sections.length - 1} className="flex items-center gap-1 p-3 rounded-r-2xl text-sm font-medium text-neutral-500/90 hover:bg-neutral-500/20 hover:text-neutral-200 transition-all duration-300 ease-in-out cursor-pointer">
                  Next
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {activeSection.id === 'personal' && <PersonalForm data={resumeData.personal_info} onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))} removeBackground={removeBackground} setRemoveBackgrond={setRemoveBackground} />}
              {activeSection.id === 'summary' && <SummaryForm data={resumeData.professional_summary} onChange={(data) => setResumeData(prev => ({ ...prev, professional_summary: data }))} />}
              {activeSection.id === 'experience' && <ExperienceForm data={resumeData.experience} onChange={(data) => setResumeData(prev => ({ ...prev, experience: data }))} />}
              {activeSection.id === 'education' && <EducationForm data={resumeData.education} onChange={(data) => setResumeData(prev => ({ ...prev, education: data }))} />}
              {activeSection.id === 'projects' && <ProjectForm data={resumeData.project} onChange={(data) => setResumeData(prev => ({ ...prev, project: data }))} />}
              {activeSection.id === 'skills' && <SkillForm data={resumeData.skills} onChange={(data) => setResumeData(prev => ({ ...prev, skills: data }))} />}
            </div>
          </div>
        </div>

        {/* Right Preview Column */}
        <div className={`flex-3 w-full lg:w-auto print:block ${mobileView === "preview" ? "block" : "hidden lg:block"}`}>
          {/* preview */}
          <Preview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

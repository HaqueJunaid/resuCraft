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

const ResumeBuilder = () => {
  const { resumeId } = useParams();
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

  const sections = [
    {id: 'personal', name: 'Personal Info', icon: User},
    {id: 'summary', name: 'Summary', icon: FileText},
    {id: 'experience', name: 'Experience', icon: Briefcase},
    {id: 'education', name: 'Education', icon: GraduationCap},
    {id: 'projects', name: 'Projects', icon: FolderIcon},
    {id: 'skills', name: 'Skills', icon: SparkleIcon},
  ]

  const activeSection = sections[activeSectionIndex];

  const loadExistingResume = async () => {
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadExistingResume();
  }, []);

  const togglePublic = () => {
    setResumeData({...resumeData, public: !resumeData.public})
  }

  const shareResume = async() => {
      const first = window.location.href.split('/app/')[0];
      const resumeUrl = first + '/view/' + resumeId;

      if (navigator.share) {
        navigator.share({url: resumeUrl, text: "My Resume"});
      } else {
        alert("Share not supported")
      }
  }

  return (
    <div className="relative w-full lg:w-3/4 mx-auto min-h-screen px-6 pt-25 lg:pt-28  lg:px-6 pb-10 text-neutral-100">
      <div className="flex flex-col lg:flex-row gap-6 w-full min-h-scree">
        <div className="flex-2 h-screen">
          <Link
            to="/app"
            className="flex items-center justify-center gap-1 w-fit text-neutral-400 hover:text-neutral-200 text-sm border px-3 py-1.5 rounded-md hover:border-green-500/80 transition-all ease-in-out duration-300 border-green-500/30 bg-neutral-950/50 backdrop-blur-md"
          >
            <ArrowLeft className="size-5" />
            Back to dashboard
          </Link>
          <div className="relative overflow mt-6 bg-black rounded-lg border border-green-500/30 p-6 pt-1">
            {/* Progress Bar */}
            <hr className="absolute top-0 left-0 right-0 border-2 border-green-500/30" />
            <hr className="absolute top-0 left-0 h-1 bg-linear-to-r from-green-500 to-green-600 border-none transition-all ease-in-out duration-300" style={{width: `${activeSectionIndex * 100 / (sections.length - 1)}%`}} />

            {/* Nav */}
            <div className="flex justify-between items-center mb-6 border-b border-green-500/30 py-2">
              {/* Buttons */}
              <div className="flex itemce-center gap-2">
                <TempelateSelector selectedTempelate={resumeData.template} onChange={(template) => setResumeData(prev => ({...prev, template}))} />
                <AccentSelector selectedColor={resumeData.accent_color} onChange={(accent_color) => setResumeData(prev => ({...prev, accent_color}))} />
              </div>

              <div className="flex items-center">
                {activeSectionIndex !== 0 && (
                  <button onClick={() => setActiveSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0))} disabled={activeSectionIndex === 0} className="flex items-center gap-1 p-3 rounded-l-2xl text-sm font-medium text-neutral-500/90 hover:bg-neutral-500/20 hover:text-neutral-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <ChevronLeft className="size-4"/>
                    Prev
                  </button>
                )}
                <button onClick={() => setActiveSectionIndex((prevIndex) => Math.min(prevIndex + 1, sections.length - 1))} disabled={activeSectionIndex === sections.length - 1} className="flex items-center gap-1 p-3 rounded-r-2xl text-sm font-medium text-neutral-500/90 hover:bg-neutral-500/20 hover:text-neutral-200 transition-all duration-300 ease-in-out cursor-pointer">
                    Next
                    <ChevronRight className="size-4"/>
                  </button>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {activeSection.id === 'personal' && <PersonalForm data={resumeData.personal_info} onChange={(data) => setResumeData(prev =>({...prev, personal_info: data}))} removeBackground={removeBackground} setRemoveBackgrond={setRemoveBackground} />}
              {activeSection.id === 'summary' && <SummaryForm data={resumeData.professional_summary} onChange={(data) => setResumeData(prev => ({...prev, professional_summary: data}))} />}
              {activeSection.id === 'experience' && <ExperienceForm data={resumeData.experience} onChange={(data) => setResumeData(prev => ({...prev, experience: data}))} />}
              {activeSection.id === 'education' && <EducationForm data={resumeData.education} onChange={(data) => setResumeData(prev => ({...prev, education: data}))} />}
              {activeSection.id === 'projects' && <ProjectForm data={resumeData.project} onChange={(data) => setResumeData(prev => ({...prev, project: data}))} />}
              {activeSection.id === 'skills' && <SkillForm data={resumeData.skills} onChange={(data) => setResumeData(prev => ({...prev, skills: data}))} />}
            </div>
          </div>
        </div>
        <div className="flex-3 mt-2.5">
            {/* Buttons */}
            <div className="flex items-center justify-end mb-4 gap-2">
                  {/* Share Butoon */}
                  {resumeData.public && (
                    <button onClick={shareResume} className="flex items-center gap-1 text-sm text-blue-600 bg-linear-to-r from-blue-50 to-blue-100 px-3 py-1.5 rounded-lg hover:ring hover:ring-blue-600">
                      <Share2 className="size-4" />
                      Share
                    </button>
                  )}

                  {/* Public/Private Toggle Button */}
                  <button onClick={togglePublic} className="flex items-center gap-1 text-sm text-violet-600 bg-linear-to-r from-violet-50 to-violet-100 px-3 py-1.5 rounded-lg hover:ring hover:ring-violet-600">
                    {resumeData.public ? <EyeIcon className="size-4" /> : <EyeOffIcon className="size-4"/>}
                    {resumeData.public ? "Public" : "Private"}
                  </button>

                  {/* Downlaod Button */}
                  <button 
                    onClick={() => window.print()} 
                    className="flex items-center gap-1 text-sm text-green-600 bg-linear-to-r from-green-50 to-green-100 px-3 py-1.5 rounded-lg hover:ring hover:ring-green-600"
                  >
                    <Download className="size-4"/>
                    Downlaod
                  </button>
            </div>

            {/* preview */}
            <Preview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

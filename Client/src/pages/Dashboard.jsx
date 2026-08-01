import { FilePenLine, Pencil, Plus, Trash, Upload, XIcon, FolderPlus, UploadCloud, FileText, LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResumeStore } from "../store/useResumeStore";
import { toast } from "react-toastify";
import ResumeSkeleton from "../components/ResumeSkeleton";

const Dashboard = () => {
  const navigator = useNavigate();
  const colours = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

  const resumes = useResumeStore((state) => state.resumes);
  const isStoreLoading = useResumeStore((state) => state.isLoading);
  const hasFetched = useResumeStore((state) => state.hasFetched);
  const addResume = useResumeStore((state) => state.addResume);
  const deleteResume = useResumeStore((state) => state.deleteResume);
  const renameResume = useResumeStore((state) => state.renameResume);

  const getInitials = (title) => {
    if (!title) return "RE";
    const parts = title.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return title.substring(0, 2).toUpperCase();
  };

  const calculateCompleteness = (resume) => {
    let score = 0;
    const total = 6;
    if (resume.personal_info && Object.keys(resume.personal_info).some(k => resume.personal_info[k])) score++;
    if (resume.professional_summary) score++;
    if (resume.experience && resume.experience.length > 0) score++;
    if (resume.education && resume.education.length > 0) score++;
    if (resume.project && resume.project.length > 0) score++;
    if (resume.skills && resume.skills.length > 0) score++;
    return Math.round((score / total) * 100);
  };

  const [isCreateResume, setIsCreateResume] = useState(false);
  const [isUploadResume, setIsUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null, title: "" });
  const [renameModal, setRenameModal] = useState({ isOpen: false, id: null, title: "" });
  const [isLoading, setIsLoading] = useState(false);

  const fetchResumes = useResumeStore((state) => state.fetchResumes);

  useEffect(() => {
    document.title = "resuCraft | Dashboard";
    fetchResumes();
  }, [fetchResumes]);

  const handleCreateResume = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newResume = {
      title: title.trim(),
      personal_info: {
        full_name: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        website: "",
        profession: "",
        image: ""
      },
      professional_summary: "",
      experience: [],
      education: [],
      project: [],
      skills: [],
      template: "classic",
      accent_color: "#3b82f6",
      public: false,
    };
    setIsLoading(true);

    try {
      const created = await addResume(newResume);
      
      if (created && created.error) {
        toast.error(created.error);
        return;
      }
      
      if (created && (created._id || created.id)) {
        setIsCreateResume(false);
        setTitle("");
        toast.success("Resume created successfully.");
        navigator("/app/builder/" + (created._id || created.id));
      }
    } catch (err) {
      toast.error(err.message || "An unexpected error occurred.");
    }finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (e, id, title) => {
    e.stopPropagation();
    setDeleteModal({ isOpen: true, id, title });
  };

  const handleConfirmDelete = () => {
    setIsLoading(true);
    if (deleteModal.id) {
      deleteResume(deleteModal.id);
      toast.success("Resume deleted successfully.");
    }
    setDeleteModal({ isOpen: false, id: null, title: "" });
    setIsLoading(false);
  };

  const handleRenameClick = (e, id, title) => {
    e.stopPropagation();
    setRenameModal({ isOpen: true, id, title });
  };

  const handleConfirmRename = (e) => {
    e.preventDefault();
    if (renameModal.id && renameModal.title.trim()) {
      renameResume(renameModal.id, renameModal.title.trim());
    }
    setRenameModal({ isOpen: false, id: null, title: "" });
  };

  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen pt-24 md:pt-30 px-4 lg:px-6 pb-10 text-neutral-100">
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 border-b border-neutral-900/60 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-neutral-100 tracking-tight">Dashboard</h1>
          <p className="text-sm text-neutral-400 mt-1">Manage, edit, and create your professional resumes</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto flex-col md:flex-row z-10">
          <button
            onClick={() => setIsCreateResume(true)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-neutral-950 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-green-500/10 hover:shadow-green-500/25 active:scale-[0.98] cursor-pointer"
          >
            <Plus size={16} className="stroke-3" />
            Create Resume
          </button>
          <button
            onClick={() => setIsUploadResume(true)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            <Upload size={16} />
            Upload
          </button>
        </div>
      </div>

      {isCreateResume && (
        <div className="fixed inset-0 h-screen w-full z-101 flex items-center justify-center">
          <div
            onClick={() => setIsCreateResume(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          ></div>

          <form
            onSubmit={handleCreateResume}
            className="relative z-102 border border-green-500/30 bg-neutral-950/80 backdrop-blur-xl px-6 py-6 w-[90%] sm:w-105 rounded-2xl flex flex-col shadow-2xl"
          >
            {/* Top gradient glow decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-transparent via-green-500/40 to-transparent"></div>

            <div className="flex justify-between items-start w-full mb-4">
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                  <FolderPlus size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-neutral-100">
                    Create a resume
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Start a new draft with a custom title
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsCreateResume(false)}
                className="w-8 h-8 hover:bg-neutral-900 rounded-md cursor-pointer flex items-center justify-center text-neutral-400 transition"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div className="space-y-1.5 my-3">
              <label className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider pl-1">Resume Title</label>
              <div className="flex items-center w-full bg-neutral-900/30 focus-within:bg-neutral-950 border border-neutral-800 focus-within:border-green-500/60 h-11 rounded-xl overflow-hidden px-4 gap-3 transition-all duration-300 focus-within:shadow-[0_0_15px_rgba(34,197,94,0.05)]">
                <FileText size={16} className="text-neutral-500" />
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g. Software Engineer resume"
                  className="bg-transparent text-neutral-200 placeholder-neutral-600 outline-none text-sm w-full h-full"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div className="flex gap-3 w-full mt-4">
              <button
                type="button"
                onClick={() => setIsCreateResume(false)}
                className="flex-1 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-sm cursor-pointer transition border border-neutral-800 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-neutral-950 font-bold text-sm cursor-pointer transition shadow-lg shadow-green-500/10 hover:shadow-green-500/20 active:scale-[0.98]"
                disabled={isLoading}
              >
                {isLoading ? <LoaderIcon className="animate-spin" size={18} /> : "Create"}
              </button>
            </div>
          </form>
        </div>
      )}

      {isUploadResume && (
        <div className="fixed inset-0 h-screen w-full z-101 flex items-center justify-center">
          <div
            onClick={() => setIsUploadResume(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          ></div>

          <form className="relative z-102 border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl px-6 py-6 w-[90%] sm:w-105 rounded-2xl flex flex-col shadow-2xl">
            {/* Top gradient glow decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-transparent via-green-500/40 to-transparent"></div>

            <div className="flex justify-between items-start w-full mb-4">
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                  <UploadCloud size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-neutral-100">
                    Upload your resume
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Import files from your device
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsUploadResume(false)}
                className="w-8 h-8 hover:bg-neutral-900 rounded-md cursor-pointer flex items-center justify-center text-neutral-400 transition"
              >
                <XIcon size={18} />
              </button>
            </div>

            <label
              htmlFor="fileInput"
              className="w-full border-2 mt-2 mb-4 bg-neutral-900/10 hover:bg-neutral-900/30 rounded-xl text-sm border-neutral-800 hover:border-green-500/40 p-8 flex flex-col items-center gap-3 cursor-pointer border-dashed transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-1">
                <UploadCloud size={20} />
              </div>
              <p className="text-xs text-neutral-400 text-center leading-relaxed">
                Drag & drop your files here, or <span className="text-green-500 underline font-semibold">browse</span>
              </p>
              <p className="text-[10px] text-neutral-500">Supports PDF, DOCX or JSON</p>
              <input id="fileInput" type="file" className="hidden" />
            </label>

            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setIsUploadResume(false)}
                className="flex-1 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-sm cursor-pointer transition border border-neutral-800 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-neutral-950 font-bold text-sm cursor-pointer transition shadow-lg shadow-green-500/10 hover:shadow-green-500/20 active:scale-[0.98]"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      )}

      {deleteModal.isOpen && (
        <div className="fixed inset-0 h-screen w-full z-101 overflow-hidden flex items-center justify-center">
          <div
            onClick={() => setDeleteModal({ isOpen: false, id: null, title: "" })}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          ></div>

          <div
            className="relative z-102 border border-red-500/30 px-6 py-6 w-[90%] sm:w-100 bg-neutral-950 rounded-xl flex items-center justify-center flex-col gap-4 text-center shadow-2xl"
          >
            <div className="flex justify-between items-center w-full pb-2 border-b border-red-500/20">
              <h2 className="text-xl font-semibold text-red-400">
                Delete Resume
              </h2>
              <button
                type="button"
                onClick={() => setDeleteModal({ isOpen: false, id: null, title: "" })}
                className="w-8 h-8 hover:bg-red-500/20 rounded-md cursor-pointer flex items-center justify-center text-red-400 border border-transparent transition"
              >
                <XIcon size={18} />
              </button>
            </div>
            <p className="text-neutral-300 text-sm py-2 leading-relaxed">
              Are you sure you want to delete <strong className="text-neutral-100">"{deleteModal.title}"</strong>? This action is permanent and cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setDeleteModal({ isOpen: false, id: null, title: "" })}
                className="flex-1 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-sm cursor-pointer transition border border-neutral-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold cursor-pointer transition shadow-lg shadow-red-600/20"
                disabled={isLoading}
              >
                {isLoading ? <LoaderIcon className="animate-spin" size={18} /> : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {renameModal.isOpen && (
        <div className="fixed inset-0 h-screen w-full z-101 overflow-hidden flex items-center justify-center">
          <div
            onClick={() => setRenameModal({ isOpen: false, id: null, title: "" })}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          ></div>

          <form
            onSubmit={handleConfirmRename}
            className="relative z-102 border border-green-500/30 px-6 py-6 w-[90%] sm:w-100 bg-neutral-950 rounded-xl flex items-center justify-center flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center w-full pb-2 border-b border-green-500/20 mb-4">
              <h2 className="text-xl font-semibold text-green-400">
                Rename Resume
              </h2>
              <button
                type="button"
                onClick={() => setRenameModal({ isOpen: false, id: null, title: "" })}
                className="w-8 h-8 hover:bg-green-500/20 rounded-md cursor-pointer flex items-center justify-center text-green-400 border border-transparent transition"
              >
                <XIcon size={18} />
              </button>
            </div>
            <input
              value={renameModal.title}
              onChange={(e) => setRenameModal({ ...renameModal, title: e.target.value })}
              type="text"
              placeholder="Enter new title"
              className="w-full px-3 py-2 bg-neutral-900 outline-none border border-neutral-700/60 focus:border-green-500/80 rounded-lg text-neutral-100 placeholder:font-light placeholder:text-neutral-500 text-sm transition"
              autoFocus
            />
            <div className="flex gap-3 w-full mt-5">
              <button
                type="button"
                onClick={() => setRenameModal({ isOpen: false, id: null, title: "" })}
                className="flex-1 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-sm cursor-pointer transition border border-neutral-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-neutral-950 font-semibold text-sm cursor-pointer transition shadow-lg shadow-green-500/20"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isStoreLoading && !hasFetched ? (
          Array.from({ length: 4 }).map((_, idx) => <ResumeSkeleton key={idx} />)
        ) : resumes.length === 0 && hasFetched ? (
          <div className="col-span-full py-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-neutral-900/50 rounded-full flex items-center justify-center mb-4 text-neutral-500 border border-neutral-800/60 shadow-inner">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold text-neutral-200 mb-2 tracking-tight">No resumes found</h3>
            <p className="text-neutral-500 mb-6 max-w-sm text-sm">
              You haven't created any resumes yet. Start by creating a new one or upload an existing draft.
            </p>
            <button
              onClick={() => setIsCreateResume(true)}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-lg font-medium transition cursor-pointer shadow-lg shadow-green-600/20 active:scale-[0.98] text-sm"
            >
              Create your first resume
            </button>
          </div>
        ) : (
          resumes.map((d, index) => {
            const baseColour = colours[index % colours.length];
            const completeness = calculateCompleteness(d);
            return (
              <div
                key={d._id}
                onClick={() => { navigator("/app/builder/" + d._id) }}
                className="p-5 rounded-2xl border border-neutral-900 bg-neutral-900/30 hover:border-neutral-800/80 transition-all duration-300 flex flex-col justify-between h-44 relative group cursor-pointer shadow-md select-none hover:bg-neutral-900/50"
              >
                {/* Top Row: Initials Badge + Completeness */}
                <div className="flex justify-between items-center w-full">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold"
                    style={{ backgroundColor: `${baseColour}20`, color: baseColour }}
                  >
                    {getInitials(d.title)}
                  </div>
                  <span className="text-[10px] text-green-400 font-mono bg-green-950/40 border border-green-800/40 px-2 py-0.5 rounded font-bold">
                    {completeness}%
                  </span>
                </div>

                {/* Title and Date */}
                <div className="mt-4 flex-1">
                  <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-green-400 transition-colors duration-200">
                    {d.title}
                  </h3>
                  <p className="text-[10px] text-neutral-500 mt-1 font-mono">
                    Updated {new Date(d.updatedAt || d.createdAt || new Date()).toLocaleDateString()}
                  </p>
                </div>

                {/* Hover Actions (Rename / Delete) */}
                <div className="absolute right-4 bottom-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={(e) => handleRenameClick(e, d._id, d.title)}
                    className="p-1.5 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-green-400 rounded-lg transition-colors cursor-pointer animate-none"
                    title="Rename"
                  >
                    <Pencil size={13} />
                  </button>
                  <button
                    onClick={(e) => handleDeleteClick(e, d._id, d.title)}
                    className="p-1.5 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-red-400 rounded-lg transition-colors cursor-pointer animate-none"
                    title="Delete"
                  >
                    <Trash size={13} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Dashboard;

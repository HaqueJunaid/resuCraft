import { FilePenLine, Pencil, Plus, Trash, Upload, XIcon } from "lucide-react";
import { dummyResumeData } from "../assets/assets";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigator = useNavigate();
  const colours = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResumes, setAllResumes] = useState([]);
  const [isCreateResume, setIsCreateResume] = useState(false);
  const [isUploadResume, setIsUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [resumeId, setResumeId] = useState("asdfasd4564asd121a");

  const handleCreateResume = async (e) => {
    e.preventDefault();
    console.log(title);

    navigator("/app/builder/" + resumeId);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are your really want to delete this resume ?");
    if (confirm){
      setAllResumes(allResumes.filter((resume) => resume._id != id));
    }
  };

  const loadAllResumes = async () => {
    document.title = "resuCraft | Dashboard"
    setAllResumes(dummyResumeData);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadAllResumes();
  }, []);

  return (
    <div className="w-3/4 mx-auto min-h-screen pt-30 px-6 pb-10 text-neutral-100">
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => setIsCreateResume(true)}
          className="w-full md:w-42 h-42 border hover:border-dashed hover:border-green-500/80 border-green-500/20 bg-green-300/5 backdrop-blur-sm flex flex-col gap-3 items-center justify-center rounded-xl transition-all duration-200 ease-in-out cursor-pointer"
        >
          <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full">
            <Plus className="text-green-950 font-semibold" />
          </div>
          <span className="text-sm font-semibold">Create Resume</span>
        </button>

        <button
          onClick={() => setIsUploadResume(true)}
          className="w-full md:w-42 h-42 border hover:border-dashed hover:border-neutral-300/80 border-neutral-300/20 bg-neutral-300/5 backdrop-blur-sm flex flex-col gap-3 items-center justify-center rounded-xl transition-all duration-200 ease-in-out cursor-pointer"
        >
          <div className="bg-neutral-200 w-10 h-10 flex items-center justify-center rounded-full">
            <Upload className="text-neutral-950 font-semibold" />
          </div>
          <span className="text-sm font-semibold">Upload Resume</span>
        </button>
      </div>

      {isCreateResume && (
        <div className="absolute h-screen w-full z-101 left-0 top-0 overflow-hidden">
          <div
            onClick={() => setIsCreateResume(false)}
            className="w-full h-screen lg:w-480 lg:h-480 left-1/2 top-1/2 -translate-1/2 absolute bg-black/50 lg:bg-radial lg:from-green-700/20 tlg:o-black/80 backdrop-blur-lg"
          ></div>

          <form
            onSubmit={handleCreateResume}
            className="absolute left-1/2 top-1/2 z-102 -translate-1/2 border border-green-500/50 px-10 py-7 w-[90%] lg:w-1/4 bg-black rounded-xl flex items-center justify-center flex-col"
          >
            <div className="flex justify-between items-center w-full">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Create a resume
              </h2>
              <div
                onClick={() => setIsCreateResume(false)}
                className="w-8 h-8 hover:bg-green-500/50 rounded-md cursor-pointer flex items-center justify-center"
              >
                <XIcon size={20} className="text-sm rounded-sm" />
              </div>
            </div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter resume title"
              className="w-full mt-3 px-2.5 py-2 outline-none border border-neutral-300/30 rounded-md placeholder:font-light placeholder:text-neutral-200/50"
            />
            <input
              type="submit"
              className="w-full mt-3 bg-green-500 text-white rounded-md cursor-pointer text-md hover:bg-green-500/90 p-2"
            />
          </form>
        </div>
      )}
      {isUploadResume && (
        <div className="absolute h-screen w-full z-101 left-0 top-0 overflow-hidden">
          <div
            onClick={() => setIsUploadResume(false)}
            className="w-full h-screen lg:w-480 lg:h-480 left-1/2 top-1/2 -translate-1/2 absolute bg-black/50 lg:bg-radial lg:from-green-700/20 tlg:o-black/80 backdrop-blur-lg"
          ></div>

          <form className="absolute left-1/2 top-1/2 z-102 -translate-1/2 border border-green-500/50 px-10 py-7 w-[90%] lg:w-1/4 bg-black rounded-xl flex items-center justify-center flex-col">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Upload your resume
              </h2>
              <div
                onClick={() => setIsUploadResume(false)}
                className="w-8 h-8 hover:bg-green-500/50 rounded-md cursor-pointer flex items-center justify-center"
              >
                <XIcon size={20} className="text-sm rounded-sm" />
              </div>
            </div>
            <label
              for="fileInput"
              class="w-full border mt-4 mb-2 lg:mb-3 bg-black rounded-md text-sm border-green-500/60 p-8 flex flex-col items-center gap-4  cursor-pointer hover:border-green-500 border-dashed transition"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-green-500"
                />
              </svg>
              <p class="text-neutral-500">Drag & drop your files here</p>
              <p class="text-neutral-400">
                Or <span class="text-green-500 underline">click</span> to upload
              </p>
              <input id="fileInput" type="file" class="hidden" />
            </label>
            <input
              type="submit"
              value={"Upload"}
              className="w-full mt-3 bg-green-500 text-white rounded-md cursor-pointer text-md hover:bg-green-500/90 p-2"
            />
          </form>
        </div>
      )}

      <hr className="my-6 text-neutral-500/40 border-dashed" />

      <div className="grid md:flex flex-wrap gap-4">
        {allResumes.map((d, index) => {
          const baseColour = colours[index % colours.length];
          return (
            <button 
              // to={`/app/builder/` + d._id}
              onClick={() => {navigator("/app/builder/" + d._id)}}
              key={index}
              className={`relative w-full group sm:max-w-36 h-72 md:h-48 flex flex-col items-center justify-center rounded-lg gap-2 border cursor-pointer`}
              style={{
                background: `linear-gradient(135deg, ${baseColour}10), ${baseColour}40`,
                borderColor: `${baseColour}40`,
              }}
            >
              <FilePenLine
                style={{ color: `${baseColour}` }}
                className="size-8 md:size-6"
              />
              <p
                className="text-md md:text-sm"
                style={{ color: `${baseColour}` }}
              >
                {d.title}
              </p>
              <p
                className="text-xs absolute bottom-2"
                style={{ color: `${baseColour}` }}
              >
                {new Date(d.updatedAt).toLocaleDateString()}
              </p>

              <div className="absolute right-3 lg:right-2 top-3 lg:top-2 flex gap-2 md:gap-0">
                <Trash
                  onClick={(e) => {e.stopPropagation(), handleDelete(d._id)}}
                  className="block lg:hidden lg:group-hover:block hover:bg-neutral-300/10 p-1 size-7 md:size-6 rounded-sm"
                  style={{ color: `${baseColour}` }}
                />
                <Pencil
                  onClick={(e) => {e.stopPropagation(), handleDelete(d._id)}}
                  className="block lg:hidden lg:group-hover:block hover:bg-neutral-300/10 p-1 size-7 md:size-6 rounded-sm"
                  style={{ color: `${baseColour}` }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

import { Briefcase, FolderCode, PlusIcon, Trash2 } from "lucide-react";

const ProjectForm = ({ data, onChange }) => {

  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-200">Project</h3>
          <p className="text-sm text-neutral-500">Add your projects</p>
        </div>
        <button
          onClick={addProject}
          className="mt-4 w-fit flex md:mt-0 items-center gap-1 text-xs text-green-600 bg-linear-to-br from-green-50 to-green-100 ring-green-500 hover:ring transition-all duration-300 ease-in-out px-3 py-2 rounded-lg"
        >
          <PlusIcon className="size-4" /> Add Project
        </button>
      </div>
      <div className="mt-4">
        {data !== 0 && (
          <div className="flex flex-col gap-3">
            {data.map((proj, index) => (
              <div
                key={index}
                className="p-4 border border-green-500/20 rounded-lg space-y-3"
              >
                <div className="flex justify-between items-start">
                  <h4>Project #{index + 1}</h4>
                  <button
                    onClick={() => removeProject(index)}
                    className="cursor-pointer text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-1 gap-3">
                  <input
                    value={proj.name || ""}
                    type="text"
                    onChange={(e) =>
                      updateProject(index, "name", e.target.value)
                    }
                    placeholder="Project Name"
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />
                  <input
                    value={proj.type || ""}
                    type="text"
                    onChange={(e) =>
                      updateProject(index, "type", e.target.value)
                    }
                    placeholder="Project Type"
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />
                  <textarea
                  rows={7}
                    value={proj.description || ""}
                    type="text"
                    onChange={(e) =>
                      updateProject(index, "description", e.target.value)
                    }
                    placeholder="Add project description..."
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />
                  
                </div>
              </div>
            ))}
          </div>
        )}

        {data.length === 0 && (
          <div className="w-full h-54 flex items-center flex-col justify-center">
            <FolderCode className="text-green-500/20 mb-2 size-15" />
            <p className="text-sm text-neutral-500">No work experience yet.</p>
            <p className="text-sm text-neutral-500">
              Click "Add Experience" to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;

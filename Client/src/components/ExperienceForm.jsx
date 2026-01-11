import { Briefcase, PlusIcon, Trash, Trash2 } from "lucide-react";

const ExperienceForm = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      description: "",
      is_current: false,
    };

    onChange([...data, newExperience]);
  };

  const removeExperience = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-200">
            Professional Experience
          </h3>
          <p className="text-sm text-neutral-500">Add your job experiences</p>
        </div>
        <button
          onClick={addExperience}
          className="mt-4 w-fit flex md:mt-0 items-center gap-1 text-xs text-green-600 bg-linear-to-br from-green-50 to-green-100 ring-green-500 hover:ring transition-all duration-300 ease-in-out px-3 py-2 rounded-lg"
        >
          <PlusIcon className="size-4" /> Add Experience
        </button>
      </div>
      <div className="mt-4">
        {data !== 0 && (
          <div className="flex flex-col gap-3">
            {data.map((exp, index) => (
              <div
                key={index}
                className="p-4 border border-green-500/20 rounded-lg space-y-3"
              >
                <div className="flex justify-between items-start">
                  <h4>Experience #{index + 1}</h4>
                  <button
                    onClick={() => removeExperience(index)}
                    className="cursor-pointer text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    value={exp.company || ""}
                    type="text"
                    onChange={(e) =>
                      updateExperience(index, "company", e.target.value)
                    }
                    placeholder="Company Name"
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />

                  <input
                    value={exp.position || ""}
                    type="text"
                    onChange={(e) =>
                      updateExperience(index, "position", e.target.value)
                    }
                    placeholder="Job Title"
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />

                  <input
                    value={exp.start_date || ""}
                    type="month"
                    onChange={(e) =>
                      updateExperience(index, "start_date", e.target.value)
                    }
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />

                  <input
                    value={exp.end_date || ""}
                    type="month"
                    onChange={(e) =>
                      updateExperience(index, "end_date", e.target.value)
                    }
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70 disabled:bg-neutral-700"
                    disabled={exp.is_current}
                  />
                </div>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    className="fill-green-500"
                    checked={exp.is_current || false}
                    onChange={(e) =>
                      updateExperience(
                        index,
                        "is_current",
                        e.target.checked ? true : false
                      )
                    }
                  />
                  <span className="text-xs text-light text-neutral-300/50">
                    Currently working ?
                  </span>
                </label>

                <textarea
                  rows={7}
                  placeholder={
                    "Job desctiption..."
                  }
                  className="mt-1 w-full outline-none border border-neutral-500/30 focus:border-green-500 px-3 py-2 rounded-lg transition-all ease-in-out text-sm duration-300 placeholder:font-light text-neutral-300"
                  value={data.description}
                  onChange={(e) => updateExperience(index, "description", e.target.value)}
                />
              </div>
            ))}
          </div>
        )}

        {data.length === 0 && (
          <div className="w-full h-54 flex items-center flex-col justify-center">
            <Briefcase className="text-green-500/20 size-15" />
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

export default ExperienceForm;

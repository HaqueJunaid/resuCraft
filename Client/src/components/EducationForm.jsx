import { Briefcase, GraduationCap, PlusIcon, Trash2 } from "lucide-react";

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index) ;
    onChange(updated);
  }

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = {...updated[index], [field]: value};
    onChange(updated)
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-200">Education</h3>
          <p className="text-sm text-neutral-500">Add your educaiton details</p>
        </div>
        <button onClick={addEducation} className="mt-4 w-fit flex md:mt-0 items-center gap-1 text-xs text-green-600 bg-linear-to-br from-green-50 to-green-100 ring-green-500 hover:ring transition-all duration-300 ease-in-out px-3 py-2 rounded-lg">
          <PlusIcon className="size-4" /> Add Educaiton
        </button>
      </div>
      <div className="mt-4">
        {data !== 0 && (
          <div className="flex flex-col gap-3">
            {data.map((edu, index) => (
              <div
                key={index}
                className="p-4 border border-green-500/20 rounded-lg space-y-3"
              >
                <div className="flex justify-between items-start">
                  <h4>Educaiton #{index + 1}</h4>
                  <button
                    onClick={() => removeEducation(index)}
                    className="cursor-pointer text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    value={edu.institution || ""}
                    type="text"
                    onChange={(e) =>
                      updateEducation(index, "institution", e.target.value)
                    }
                    placeholder="Institution Name"
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />
                  <input
                    value={edu.degree || ""}
                    type="text"
                    onChange={(e) =>
                      updateEducation(index, "degree", e.target.value)
                    }
                    placeholder="Degree (e.g., B.Tech)"
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />
                  <input
                    value={edu.field || ""}
                    type="text"
                    onChange={(e) =>
                      updateEducation(index, "field", e.target.value)
                    }
                    placeholder="Field of study"
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />
                  <input
                    value={edu.graduation_date || ""}
                    type="month"
                    onChange={(e) =>
                      updateEducation(index, "graduation_date", e.target.value)
                    }
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />
                  <input
                    value={edu.gpa || ""}
                    type="text"
                    onChange={(e) =>
                      updateEducation(index, "gpa", e.target.value)
                    }
                    placeholder="GPA (Optional)"
                    className="px-3 py-2 text-sm rounded-lg outline-none border border-neutral-500/50 focus:border-green-500/70"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {data.length === 0 && (
          <div className="w-full h-54 flex items-center flex-col justify-center">
            <GraduationCap className="text-green-500/20 mb-2 size-15" />
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

export default EducationForm;

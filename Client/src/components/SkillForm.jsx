import { Briefcase, PlusIcon, StarIcon, StarsIcon, Trash2, XIcon } from "lucide-react";
import { useRef } from "react";

const SkillForm = ({ data, onChange }) => {
  const ref = useRef(null);

  const addProject = (event) => {
    if (ref.current.value === "") {
      return alert("Empty skill can't be added");
    } else {
      const exists = data.find((d) => d === ref.current.value);
      if (!exists) {
        const newProject = ref.current.value;
        onChange([...data, newProject]);
        ref.current.value = "";
      }
    }
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
      <div className="flex flex-col">
        <div>
          <h3 className="text-lg font-semibold text-neutral-200">Skills</h3>
          <p className="text-sm text-neutral-500">
            Add your technical and soft skills
          </p>
          <div className="flex gap-2 mt-3">
            <input
            onKeyUp={(e) => e.key === "Enter" && addProject()}
              ref={ref}
              type="text"
              placeholder="Enter a skill (e.g., Javascript, C++, Python)"
              className="w-full border border-neutral-500/20 focus:border-green-500/90 outline-none px-3 py-2 rounded-lg"
            />
            <button
              onClick={addProject}
              className="flex items-center justify-center px-3.5 py-2 bg-linear-to-r from-green-50 to-green-100 hover:ring transition-all duration-300 ease-in-out hover:ring-green-500 text-green-600 rounded-lg gap-1"
            >
              <PlusIcon className="size-4" /> Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {data.length === 0 && (
          <div className="w-full h-54 flex items-center flex-col justify-center">
            <StarsIcon className="text-green-500/20 mb-2 size-15" />
            <p className="text-sm text-neutral-500">No skill added yet.</p>
            <p className="text-sm text-neutral-500">
              Add your technical and soft skills above.
            </p>
          </div>
        )}
        {data.length !== 0 && (
          <div className="w-full flex flex-wrap items-start justify-start gap-2">
            {data.map((d, index) => (
                <div className="flex items-center gap-2 rounded-3xl bg-green-500 text-white h-fit text-sm py-0.5 pl-2.5 px-2">
                {d}
                <span onClick={() => removeProject(index)}  className="size-4.5 rounded-full flex items-center justify-center hover:bg-green-600">
                    <XIcon className="size-3.5 font-bold" />
                </span></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillForm;

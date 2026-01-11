import {
  StarsIcon,
} from "lucide-react";

const SummaryForm = ({ data, onChange }) => {

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-200">
            Professional Summary
          </h3>
          <p className="text-sm text-neutral-500">
            Add a great summary about your profession
          </p>
        </div>
        <button className="mt-4 w-fit flex md:mt-0 items-center gap-1 text-xs text-violet-600 bg-linear-to-br from-violet-50 to-violet-100 ring-violet-500 hover:ring transition-all duration-300 ease-in-out px-3 py-2 rounded-lg">
          <StarsIcon className="size-4" /> Enchange
        </button>
      </div>

      <div className="space-y-1 mt-5">
        <textarea
          rows={10}
          placeholder={"Write a compelling professional summary that highlights your key strengths and cover objectives..."}
          className="mt-1 w-full outline-none border border-neutral-500/30 focus:border-green-500 px-3 py-2 rounded-lg transition-all ease-in-out text-sm duration-300 placeholder:font-light text-neutral-300"
          value={data}
          onChange={(e) => onChange(e.target.value)}
        />
        <p className="text-xs w-3/4 mx-auto text-center text-neutral-600">Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills.</p>
      </div>

      <button className="mt-4 px-4 py-2 bg-green-600/20 border border-green-500 rounded-lg cursor-pointer hover:bg-green-600/30 transition-all ease-in-out duration-300">
        Save Changes
      </button>
    </div>
  );
};

export default SummaryForm;

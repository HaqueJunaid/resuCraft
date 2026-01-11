import { Briefcase, Globe, Linkedin, LocateIcon, Mail, Phone, User } from "lucide-react"

const PersonalForm = ({data, onChange, removeBackground, setRemoveBackgrond}) => {

    const fields = [
        {key: 'full_name', label: "Full Name", icon: User, type: "text", required: true, placeholder: "Enter your full name"},
        {key: 'email', label: "Email Address", icon: Mail, type: "email", required: true, placeholder: "Enter your email address"},
        {key: 'phone', label: "Phone Number", icon: Phone, type: "tel", required: true, placeholder: "Enter your phone number"},
        {key: 'location', label: "Location", icon: LocateIcon, type: "text", required: true, placeholder: "Enter your location"},
        {key: 'profession', label: "Profession", icon: Briefcase, type: "text", required: true, placeholder: "Enter your profession"},
        {key: 'linkedin', label: "LinkedIn Profile", icon: Linkedin, type: "url", required: false, placeholder: "Enter your linkedin profile"},
        {key: 'website', label: "Personal Website", icon: Globe, type: "url", required: false, placeholder: "Enter your personal website"},
    ]

    const handleChange = (field, value) => {
        onChange({...data, [field]: value})
    }

  return (
    <div>
        <h3 className='text-lg font-semibold text-neutral-200'>Personal Information</h3>
        <p className='text-sm text-neutral-500'>Get started with the personal information</p>
        <div className='flex items-center gap-2'>
            <label>
                {data.image ? (
                    <img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} alt='Image' className='w-16 h-16 rounded-full object-cover mt-5 ring-3 ring-green-500 hover:opacity-80' />
                ):(
                    <div className='inline-flex items-center gap-2 mt-5 text-green-500 hover:text-slate-300 cursor-pointer'>
                        <User className="size-10 p-2.5 border rounded-full" />
                        Upload image
                    </div>
                )}
                <input type='file' accept='image/jpeg, image/png' className='hidden' onChange={(e) => handleChange("image", e.target.files[0])}/>
            </label>
            {typeof data.image === 'object' && (
                <div className='flex flex-col gap-1 mt-3 pl-4 text-sm'>
                    <p className=''>Remove Backgrond</p>
                    <label className='relative inline-flex items-center cursor-pointer text-green-500 gap-3'>
                        <input type='checkbox' className='sr-only peer' onChange={() => setRemoveBackgrond((prev) => !prev)} checked={removeBackground} />
                        <div className='w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300 ease-in-out'></div>
                        <span className='dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 ease-in-out peer-checked:translate-x-4'></span>
                    </label>
                </div>
            )}
        </div>

        {fields.map((field) => {
            const Icon = field.icon;
            return (
                <div key={field.key} className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                        <Icon className="size-4"/>
                        {field.label}
                        {field.required && <span className="text-green-500">*</span>}
                    </label>
                    <input type={field.type} value={data[field.key] || ""} onChange={(e) => handleChange(field.key, e.target.value)} required={field.required} placeholder={field.placeholder} className="mt-1 w-full outline-none border border-neutral-500/30 focus:border-green-500 px-3 py-2 rounded-lg transition-all ease-in-out text-sm duration-300 placeholder:font-light text-neutral-300" />
                </div>
            )
        })}

        <button className="mt-4 px-4 py-2 bg-green-600/20 border border-green-500 rounded-lg cursor-pointer hover:bg-green-600/30 transition-all ease-in-out duration-300">Save Changes</button>
    </div>
  )
}

export default PersonalForm
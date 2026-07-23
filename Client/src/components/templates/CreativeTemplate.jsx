import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe, Briefcase, GraduationCap, FolderIcon, Sparkles } from "lucide-react";

const CreativeTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="w-full min-h-inherit bg-stone-50 text-stone-800 font-sans p-8 flex flex-col justify-between">
            <div>
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b-4 mb-8" style={{ borderColor: accentColor }}>
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight uppercase" style={{ color: accentColor }}>
                            {data.personal_info?.full_name || "Your Name"}
                        </h1>
                        {data.personal_info?.profession && (
                            <p className="text-lg font-semibold tracking-wider uppercase mt-1 text-stone-600">
                                {data.personal_info.profession}
                            </p>
                        )}
                    </div>
                    
                    {/* Contact Info */}
                    <div className="mt-4 md:mt-0 grid grid-cols-1 gap-1 text-sm text-stone-600">
                        {data.personal_info?.email && (
                            <span className="flex items-center gap-2"><Mail size={14} style={{ color: accentColor }} /> {data.personal_info.email}</span>
                        )}
                        {data.personal_info?.phone && (
                            <span className="flex items-center gap-2"><Phone size={14} style={{ color: accentColor }} /> {data.personal_info.phone}</span>
                        )}
                        {data.personal_info?.location && (
                            <span className="flex items-center gap-2"><MapPin size={14} style={{ color: accentColor }} /> {data.personal_info.location}</span>
                        )}
                        {data.personal_info?.linkedin && (
                            <span className="flex items-center gap-2"><Linkedin size={14} style={{ color: accentColor }} /> {data.personal_info.linkedin}</span>
                        )}
                        {data.personal_info?.website && (
                            <span className="flex items-center gap-2"><Globe size={14} style={{ color: accentColor }} /> {data.personal_info.website}</span>
                        )}
                    </div>
                </header>

                {/* Main 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (Summary, Experience, Projects) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Summary */}
                        {data.professional_summary && (
                            <section>
                                <h2 className="text-xl font-bold border-b pb-2 mb-3 uppercase tracking-wide flex items-center gap-2" style={{ color: accentColor, borderColor: accentColor + '30' }}>
                                    <Sparkles size={18} /> Profile
                                </h2>
                                <p className="text-stone-700 leading-relaxed text-sm whitespace-pre-line">
                                    {data.professional_summary}
                                </p>
                            </section>
                        )}

                        {/* Experience */}
                        {data.experience && data.experience.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold border-b pb-2 mb-4 uppercase tracking-wide flex items-center gap-2" style={{ color: accentColor, borderColor: accentColor + '30' }}>
                                    <Briefcase size={18} /> Experience
                                </h2>
                                <div className="space-y-6">
                                    {data.experience.map((exp, index) => (
                                        <div key={index} className="space-y-1">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="font-bold text-stone-900 text-base">{exp.position}</h3>
                                                <span className="text-xs font-semibold px-2 py-1 bg-stone-200/50 rounded text-stone-600">
                                                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                                </span>
                                            </div>
                                            <p className="text-sm font-medium" style={{ color: accentColor }}>{exp.company}</p>
                                            {exp.description && (
                                                <p className="text-stone-700 text-sm mt-2 whitespace-pre-line leading-relaxed pl-3 border-l-2 border-stone-300">
                                                    {exp.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Projects */}
                        {data.project && data.project.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold border-b pb-2 mb-4 uppercase tracking-wide flex items-center gap-2" style={{ color: accentColor, borderColor: accentColor + '30' }}>
                                    <FolderIcon size={18} /> Projects
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.project.map((proj, index) => (
                                        <div key={index} className="p-4 bg-stone-100 rounded-lg border border-stone-200">
                                            <h3 className="font-bold text-stone-900 text-sm mb-1">{proj.name}</h3>
                                            {proj.type && <span className="text-xs px-2 py-0.5 bg-stone-200 text-stone-600 rounded">{proj.type}</span>}
                                            <p className="text-stone-600 text-xs mt-2 leading-relaxed">{proj.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column (Education & Skills) */}
                    <div className="space-y-8">
                        {/* Education */}
                        {data.education && data.education.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold border-b pb-2 mb-4 uppercase tracking-wide flex items-center gap-2" style={{ color: accentColor, borderColor: accentColor + '30' }}>
                                    <GraduationCap size={18} /> Education
                                </h2>
                                <div className="space-y-4">
                                    {data.education.map((edu, index) => (
                                        <div key={index} className="space-y-1">
                                            <h3 className="font-bold text-stone-900 text-sm">
                                                {edu.degree} {edu.field && `in ${edu.field}`}
                                            </h3>
                                            <p className="text-stone-600 text-xs">{edu.institution}</p>
                                            <div className="flex justify-between text-xs text-stone-500 mt-1">
                                                <span>{formatDate(edu.graduation_date)}</span>
                                                {edu.gpa && <span>GPA: {edu.gpa}</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Skills */}
                        {data.skills && data.skills.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold border-b pb-2 mb-4 uppercase tracking-wide flex items-center gap-2" style={{ color: accentColor, borderColor: accentColor + '30' }}>
                                    <Sparkles size={18} /> Skills
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.map((skill, index) => (
                                        <span key={index} className="px-3 py-1 bg-stone-200 text-stone-800 text-xs font-semibold rounded-full border border-stone-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeTemplate;

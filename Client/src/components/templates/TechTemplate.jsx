import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const TechTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="w-full min-h-inherit bg-white text-slate-800 font-mono p-8 flex flex-col justify-between">
            <div>
                {/* Header */}
                <header className="border-b-2 pb-4 mb-6" style={{ borderColor: accentColor }}>
                    <div className="flex justify-between items-baseline flex-wrap">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            {data.personal_info?.full_name || "Your Name"}
                        </h1>
                        <p className="font-semibold uppercase tracking-wider text-xs" style={{ color: accentColor }}>
                            {data.personal_info?.profession || "Software Engineer"}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-600 mt-2">
                        {data.personal_info?.email && <span>{data.personal_info.email}</span>}
                        {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
                        {data.personal_info?.location && <span>{data.personal_info.location}</span>}
                        {data.personal_info?.linkedin && <span className="break-all">{data.personal_info.linkedin}</span>}
                        {data.personal_info?.website && <span className="break-all">{data.personal_info.website}</span>}
                    </div>
                </header>

                {/* Professional Summary */}
                {data.professional_summary && (
                    <section className="mb-6">
                        <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                            // SUMMARY
                        </h2>
                        <p className="text-[11px] leading-relaxed text-slate-700 whitespace-pre-line">{data.professional_summary}</p>
                    </section>
                )}

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                            // TECHNICAL SKILLS
                        </h2>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px]">
                            {data.skills.map((skill, index) => (
                                <span key={index} className="px-2 py-0.5 bg-slate-100 rounded text-slate-800 border border-slate-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>
                            // EXPERIENCE
                        </h2>
                        <div className="space-y-4">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="space-y-1">
                                    <div className="flex justify-between items-baseline text-[11px]">
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold text-slate-900">{exp.position}</span>
                                            <span className="text-slate-500">@</span>
                                            <span className="font-semibold" style={{ color: accentColor }}>{exp.company}</span>
                                        </div>
                                        <span className="text-slate-500 font-medium">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                        </span>
                                    </div>
                                    {exp.description && (
                                        <div className="text-[10px] text-slate-600 pl-3 border-l border-slate-300 leading-relaxed whitespace-pre-line">
                                            {exp.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>
                            // PROJECTS
                        </h2>
                        <div className="space-y-3">
                            {data.project.map((proj, index) => (
                                <div key={index} className="space-y-1 text-[11px]">
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-bold text-slate-900">{proj.name}</span>
                                        {proj.type && <span className="text-[9px] text-slate-500 font-semibold uppercase">{proj.type}</span>}
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-[10px]">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {data.education && data.education.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>
                            // EDUCATION
                        </h2>
                        <div className="space-y-3">
                            {data.education.map((edu, index) => (
                                <div key={index} className="flex justify-between items-start text-[11px]">
                                    <div>
                                        <div className="font-bold text-slate-900">
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </div>
                                        <div className="text-slate-600 text-[10px]">{edu.institution}</div>
                                    </div>
                                    <div className="text-right text-[10px]">
                                        <div className="text-slate-500">{formatDate(edu.graduation_date)}</div>
                                        {edu.gpa && <div className="text-slate-500">GPA: {edu.gpa}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default TechTemplate;

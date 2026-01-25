import mongoose from "mongoose";
export declare const resumeModel: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    title: string;
    personal_info: {
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        location?: string | null;
        linkedin?: string | null;
        website?: string | null;
        profession?: string | null;
        image?: string | null;
    };
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }> & {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }> & {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }>;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    title: string;
    personal_info: {
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        location?: string | null;
        linkedin?: string | null;
        website?: string | null;
        profession?: string | null;
        image?: string | null;
    };
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }> & {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }> & {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }>;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    title: string;
    personal_info: {
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        location?: string | null;
        linkedin?: string | null;
        website?: string | null;
        profession?: string | null;
        image?: string | null;
    };
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }> & {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }> & {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }>;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    title: string;
    personal_info: {
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        location?: string | null;
        linkedin?: string | null;
        website?: string | null;
        profession?: string | null;
        image?: string | null;
    };
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }> & {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }> & {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }>;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    title: string;
    personal_info: {
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        location?: string | null;
        linkedin?: string | null;
        website?: string | null;
        profession?: string | null;
        image?: string | null;
    };
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }> & {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }> & {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }>;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    userId: mongoose.Types.ObjectId;
    title: string;
    personal_info: {
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        location?: string | null;
        linkedin?: string | null;
        website?: string | null;
        profession?: string | null;
        image?: string | null;
    };
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }> & {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }> & {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }>;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userId: mongoose.Types.ObjectId;
        title: string;
        personal_info: {
            email?: string | null;
            full_name?: string | null;
            phone?: string | null;
            location?: string | null;
            linkedin?: string | null;
            website?: string | null;
            profession?: string | null;
            image?: string | null;
        };
        skills: string[];
        experience: mongoose.Types.DocumentArray<{
            is_current: boolean;
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            is_current: boolean;
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
        }> & {
            is_current: boolean;
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
        }>;
        education: mongoose.Types.DocumentArray<{
            institution?: string | null;
            degree?: string | null;
            field?: string | null;
            graduation_date?: string | null;
            gpa?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            institution?: string | null;
            degree?: string | null;
            field?: string | null;
            graduation_date?: string | null;
            gpa?: string | null;
        }> & {
            institution?: string | null;
            degree?: string | null;
            field?: string | null;
            graduation_date?: string | null;
            gpa?: string | null;
        }>;
        project: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
        }>;
        public: boolean;
        template: string;
        accent_color: string;
        professional_summary?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        userId: mongoose.Types.ObjectId;
        title: string;
        personal_info: {
            email?: string | null;
            full_name?: string | null;
            phone?: string | null;
            location?: string | null;
            linkedin?: string | null;
            website?: string | null;
            profession?: string | null;
            image?: string | null;
        };
        skills: string[];
        experience: mongoose.Types.DocumentArray<{
            is_current: boolean;
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            is_current: boolean;
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
        }> & {
            is_current: boolean;
            description?: string | null;
            company?: string | null;
            position?: string | null;
            start_date?: string | null;
            end_date?: string | null;
        }>;
        education: mongoose.Types.DocumentArray<{
            institution?: string | null;
            degree?: string | null;
            field?: string | null;
            graduation_date?: string | null;
            gpa?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            institution?: string | null;
            degree?: string | null;
            field?: string | null;
            graduation_date?: string | null;
            gpa?: string | null;
        }> & {
            institution?: string | null;
            degree?: string | null;
            field?: string | null;
            graduation_date?: string | null;
            gpa?: string | null;
        }>;
        project: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
        }>;
        public: boolean;
        template: string;
        accent_color: string;
        professional_summary?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: mongoose.Types.ObjectId;
    title: string;
    personal_info: {
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        location?: string | null;
        linkedin?: string | null;
        website?: string | null;
        profession?: string | null;
        image?: string | null;
    };
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }> & {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }> & {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }>;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    title: string;
    personal_info: {
        email?: string | null;
        full_name?: string | null;
        phone?: string | null;
        location?: string | null;
        linkedin?: string | null;
        website?: string | null;
        profession?: string | null;
        image?: string | null;
    };
    skills: string[];
    experience: mongoose.Types.DocumentArray<{
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }> & {
        is_current: boolean;
        description?: string | null;
        company?: string | null;
        position?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }>;
    education: mongoose.Types.DocumentArray<{
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }> & {
        institution?: string | null;
        degree?: string | null;
        field?: string | null;
        graduation_date?: string | null;
        gpa?: string | null;
    }>;
    project: mongoose.Types.DocumentArray<{
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }> & {
        type?: string | null;
        name?: string | null;
        description?: string | null;
    }>;
    public: boolean;
    template: string;
    accent_color: string;
    professional_summary?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=resume.model.d.ts.map
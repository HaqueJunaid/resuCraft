import api from "./api";

const resumeServices = {
    createResume: async (resumeData) => {
        const response = await api.post("/resumes", resumeData);
        return response;
    },
    getResumes: async () => {
        const response = await api.get("/resumes");
        return response;
    },
    getResumeById: async (id) => {
        const response = await api.get(`/resumes/${id}`);
        return response;
    },
    updateResume: async (id, updateData) => {
        const response = await api.put(`/resumes/${id}`, updateData);
        return response;
    },
    deleteResume: async (id) => {
        const response = await api.delete(`/resumes/${id}`);
        return response;
    }
};

export default resumeServices;

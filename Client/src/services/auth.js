import api from "./api";

const authServices = {
    signup: async (signUpData) => {
        const response = await api.post("/auth/register", signUpData);
        return response;
    },
    login: async (loginData) => {
        const response = await api.post("/auth/login", loginData);
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
        }
        return response;
    },
    logout: async () => {
        try {
            await api.post("/auth/logout");
        } finally {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
    },
    verifyAccount: async (verifyData) => {
        const response = await api.post("/auth/verify", verifyData);
        return response;
    },
    forgotPassword: async (forgotData) => {
        const response = await api.post("/auth/forgot-password", forgotData);
        return response;
    },
    resetPassword: async (resetData) => {
        const response = await api.post("/auth/reset-password", resetData);
        return response;
    },
};

export default authServices;
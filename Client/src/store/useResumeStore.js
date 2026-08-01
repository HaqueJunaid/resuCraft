import { create } from 'zustand';
import resumeServices from '../services/resume';

const mapToFrontend = (backendData) => {
  return {
    _id: backendData.id,
    id: backendData.id,
    title: backendData.title,
    createdAt: backendData.createdAt,
    updatedAt: backendData.updatedAt,
    ...(backendData.content || {})
  };
};

const mapToBackend = (frontendData) => {
  const { _id, id, title, createdAt, updatedAt, userId, ...content } = frontendData;
  return {
    title,
    content
  };
};

export const useResumeStore = create((set, get) => ({
  resumes: [],
  isLoading: false,
  hasFetched: false,
  error: null,
  
  fetchResumes: async () => {
    if (get().hasFetched) return;
    set({ isLoading: true, error: null });
    try {
      const response = await resumeServices.getResumes();
      const mapped = response.data.resumes.map(mapToFrontend);
      set({ resumes: mapped, isLoading: false, hasFetched: true });
    } catch (error) {
      set({ error: error.response?.data?.error || error.message, isLoading: false });
    }
  },

  addResume: async (newResume) => {
    set({ isLoading: true, error: null });
    try {
      const response = await resumeServices.createResume(mapToBackend(newResume));
      const mapped = mapToFrontend(response.data.resume);
      set((state) => ({
        resumes: [mapped, ...state.resumes],
        isLoading: false
      }));
      return mapped;
    } catch (error) {
      const errorMsg = error.response?.data?.error || error.message;
      set({ error: errorMsg, isLoading: false });
      return { error: errorMsg };
    }
  },

  updateResume: async (id, updatedData) => {
    set({ isLoading: true, error: null });
    try {
      // Find existing resume to merge correctly
      const existing = useResumeStore.getState().resumes.find(r => r._id === id);
      const merged = { ...existing, ...updatedData };
      const response = await resumeServices.updateResume(id, mapToBackend(merged));
      const mapped = mapToFrontend(response.data.resume);
      set((state) => ({
        resumes: state.resumes.map((r) =>
          r._id === id ? mapped : r
        ),
        isLoading: false
      }));
      return mapped;
    } catch (error) {
      const errorMsg = error.response?.data?.error || error.message;
      set({ error: errorMsg, isLoading: false });
      return { error: errorMsg };
    }
  },

  deleteResume: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await resumeServices.deleteResume(id);
      set((state) => ({
        resumes: state.resumes.filter((r) => r._id !== id),
        isLoading: false
      }));
    } catch (error) {
      set({ error: error.response?.data?.error || error.message, isLoading: false });
    }
  },

  renameResume: async (id, newTitle) => {
    set({ isLoading: true, error: null });
    try {
      const existing = useResumeStore.getState().resumes.find(r => r._id === id);
      const merged = { ...existing, title: newTitle };
      const response = await resumeServices.updateResume(id, mapToBackend(merged));
      const mapped = mapToFrontend(response.data.resume);
      set((state) => ({
        resumes: state.resumes.map((r) =>
          r._id === id ? mapped : r
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: error.response?.data?.error || error.message, isLoading: false });
    }
  },
}));

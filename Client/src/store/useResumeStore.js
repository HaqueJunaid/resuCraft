import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { dummyResumeData } from '../assets/assets';

export const useResumeStore = create(
  persist(
    (set) => ({
      resumes: dummyResumeData,
      addResume: (newResume) => set((state) => ({
        resumes: [newResume, ...state.resumes]
      })),
      updateResume: (id, updatedData) => set((state) => ({
        resumes: state.resumes.map((r) =>
          r._id === id
            ? { ...r, ...updatedData, updatedAt: new Date().toISOString() }
            : r
        )
      })),
      deleteResume: (id) => set((state) => ({
        resumes: state.resumes.filter((r) => r._id !== id)
      })),
      renameResume: (id, newTitle) => set((state) => ({
        resumes: state.resumes.map((r) =>
          r._id === id
            ? { ...r, title: newTitle, updatedAt: new Date().toISOString() }
            : r
        )
      })),
    }),
    {
      name: 'resume-storage', // key in localStorage
    }
  )
);

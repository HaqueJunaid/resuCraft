import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import Preview from '../components/Preview';
import Logo from '../components/Logo';
import { useResumeStore } from '../store/useResumeStore';

const ResumeView = () => {
    const {resumeId} = useParams();
    const [searchParams] = useSearchParams();
    const [resumeData, setResumeData] = useState(null);
    
    const loadResume = async () => {
      // 1. Try decoding from query parameters first (cross-device/platform share)
      const dataParam = searchParams.get('d');
      if (dataParam) {
        try {
          const decoded = JSON.parse(decodeURIComponent(escape(atob(dataParam))));
          if (decoded) {
            setResumeData(decoded);
            document.title = decoded.title || "View Resume";
            return;
          }
        } catch (e) {
          console.error("Failed to decode share parameter", e);
        }
      }

      // 2. Try loading from Zustand store
      const storeResumes = useResumeStore.getState().resumes;
      const storeResume = storeResumes.find((r) => r._id === resumeId);
      if (storeResume) {
        setResumeData(storeResume);
        document.title = storeResume.title || "View Resume";
        return;
      }

      // 3. Try loading from legacy local storage (same-device local review)
      const saved = localStorage.getItem(`resume_${resumeId}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setResumeData(parsed);
          document.title = parsed.title || "View Resume";
          return;
        } catch (e) {
          console.error("Failed to parse saved resume", e);
        }
      }

      // 4. Fall back to dummy resume data records
      const resume = dummyResumeData.find((resume) => resume._id === resumeId);
      if (resume) {
        setResumeData(resume);
        document.title = resume.title || "View Resume";
      }
    }
    
    useEffect(() => {
      loadResume();
    }, [resumeId, searchParams]);

  return (
    <div className='text-white p-8 relative overflow-x-hidden w-full min-h-screen'>
        <div className='relative z-10 lg:absolute '>
            <Logo />
        </div>
        <div className='bg-green-500/20 w-100 h-100 absolute -left-15 -top-15 blur-[100px] rounded-full' />
        <div className='bg-green-500/20 w-100 h-100 absolute -right-15 -bottom-15 blur-[100px] rounded-full' />
        <div className='mt-16 lg:mt-6 relative flex justify-center'>
            {resumeData && resumeData.template && (
              <div className="w-full max-w-4xl">
                <Preview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
              </div>
            )}
        </div>
    </div>
  )
}

export default ResumeView;
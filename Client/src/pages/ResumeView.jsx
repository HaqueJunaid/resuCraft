import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import ClassicTemplate from '../components/templates/ClassicTemplate';
import MinimalImageTemplate from '../components/templates/MinimalImageTemplate';
import PremiumTemplate from '../components/templates/PremiumTemplate';
import MinimalTemplate from '../components/templates/MinimalTemplate';
import ModernTemplate from '../components/templates/ModernTemplate';
import Logo from '../components/Logo';

const ResumeView = () => {
    const {resumeId} = useParams();
    const [resumeData, setResumeData] = useState([]);
    
    const loadResume = async () => {
      setResumeData(dummyResumeData.find((resume) => resume._id === resumeId));
    }
    
    useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadResume();
    }, [])

  return (
    <div className='text-white p-8 relative overflow-x-hidden w-full min-h-screen overflow-y-hidden'>
        <div className='relative z-10 lg:absolute '>
            <Logo />
        </div>
        <div className='bg-green-500/20 w-100 h-100 absolute -left-15 -top-15 blur-[100px] rounded-full' />
        <div className='bg-green-500/20 w-100 h-100 absolute -right-15 -bottom-15 blur-[100px] rounded-full' />
        <div className='mt-6 lg:mt-2 relative'>
            {resumeData.template === 'minimal-image' && <MinimalImageTemplate accentColor={resumeData.accent_color} data={resumeData} />}
            {resumeData.template === 'classic' && <ClassicTemplate accentColor={resumeData.accent_color} data={resumeData} />}
            {resumeData.template === 'premium' && <PremiumTemplate accentColor={resumeData.accent_color} data={resumeData} />}
            {resumeData.template === 'minimal' && <MinimalTemplate accentColor={resumeData.accent_color} data={resumeData} />}
            {resumeData.template === 'modern' && <ModernTemplate accentColor={resumeData.accent_color} data={resumeData} />}
        </div>
    </div>
  )
}

export default ResumeView
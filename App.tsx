import React, { useState, useCallback } from 'react';
import { CvData, TemplateName } from './types';
import CvForm from './components/CvForm';
import CvPreview from './components/CvPreview';
import TemplateSelector from './components/TemplateSelector';
import LandingPage from './components/LandingPage';

const initialCvData: CvData = {
  personalInfo: {
    name: 'Amelia Chen',
    title: 'Senior Frontend Developer',
    email: 'amelia.chen@email.com',
    phone: '555-123-4567',
    address: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/ameliachen',
    portfolio: 'ameliachen.dev',
    profilePicture: '',
    logo: ''
  },
  summary: 'Innovative Senior Frontend Developer with 8+ years of experience in building and maintaining responsive web applications. Proficient in React, TypeScript, and modern JavaScript frameworks. Passionate about creating intuitive user interfaces and enhancing user experience through clean, efficient code and thoughtful design.',
  experience: [
    { id: 1, title: 'Senior Frontend Developer', company: 'Innovatech Solutions', location: 'San Francisco, CA', startDate: 'Jan 2020', endDate: 'Present', description: '- Led the development of a new customer-facing dashboard using React and TypeScript, resulting in a 25% increase in user engagement.\n- Mentored junior developers and conducted code reviews to ensure code quality and adherence to best practices.' },
    { id: 2, title: 'Frontend Developer', company: 'Creative Minds Inc.', location: 'Austin, TX', startDate: 'Jun 2016', endDate: 'Dec 2019', description: '- Developed and maintained client websites using HTML, CSS, and JavaScript (React).\n- Collaborated with UX/UI designers to translate wireframes into high-quality, functional code.' },
  ],
  education: [
    { id: 1, degree: 'B.S. in Computer Science', school: 'University of Texas at Austin', location: 'Austin, TX', startDate: 'Sep 2012', endDate: 'May 2016' },
  ],
  skills: [
    { id: 1, name: 'React' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'JavaScript (ES6+)' },
    { id: 4, name: 'Tailwind CSS' },
    { id: 5, name: 'Node.js' },
    { id: 6, name: 'UI/UX Design' },
    { id: 7, name: 'Agile Methodologies' }
  ],
};

const App: React.FC = () => {
  const [cvData, setCvData] = useState<CvData>(initialCvData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateName>('executive');
  const [view, setView] = useState<'landing' | 'editor'>('landing');

  const handlePrint = () => {
    window.print();
  };
  
  const loadExample = useCallback(() => {
    setCvData(initialCvData);
  }, []);

  if (view === 'landing') {
    return <LandingPage onStart={() => setView('editor')} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="no-print bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-20">
        <h1 
            className="text-2xl font-bold text-indigo-600 cursor-pointer"
            onClick={() => setView('landing')}
            title="Back to Home"
        >
            AI CV Forge
        </h1>
        <div className="flex items-center space-x-4">
          <button onClick={loadExample} className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 px-4 rounded-lg transition duration-300">
            Load Example
          </button>
          <button onClick={handlePrint} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Download PDF
          </button>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row pt-20">
        <div className="no-print w-full lg:w-2/5 p-4 lg:p-6 lg:h-[calc(100vh-80px)] lg:overflow-y-auto">
           <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
           <CvForm cvData={cvData} setCvData={setCvData} />
        </div>
        <div className="w-full lg:w-3/5 p-4 lg:p-10 bg-slate-200 flex justify-center items-start lg:h-[calc(100vh-80px)] lg:overflow-y-auto">
          <CvPreview cvData={cvData} template={selectedTemplate} />
        </div>
      </main>
    </div>
  );
};

export default App;

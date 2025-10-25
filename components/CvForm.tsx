import React, { useState } from 'react';
import { CvData, Experience, Education, Skill } from '../types';
import { improveText } from '../services/geminiService';

interface CvFormProps {
  cvData: CvData;
  setCvData: React.Dispatch<React.SetStateAction<CvData>>;
}

const MagicWandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 2.293a1 1 0 011.414 0l.001.001a1 1 0 010 1.414l-11 11a1 1 0 01-.937.378l-4-1a1 1 0 01-.62-1.28l1.539-3.848a1 1 0 01.442-.61L14.586 2.293a1 1 0 012.707 0z" />
    <path d="M12.293 7.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 12l-1.293-1.293a1 1 0 010-1.414zM3 16a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" />
  </svg>
);

const CvForm: React.FC<CvFormProps> = ({ cvData, setCvData }) => {
  const [loadingAiField, setLoadingAiField] = useState<string | null>(null);

  const handleChange = <K extends keyof CvData>(section: K, value: CvData[K]) => {
    setCvData(prev => ({ ...prev, [section]: value }));
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange('personalInfo', { ...cvData.personalInfo, [name]: value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange('personalInfo', { ...cvData.personalInfo, [name]: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (name: 'profilePicture' | 'logo') => {
    handleChange('personalInfo', { ...cvData.personalInfo, [name]: '' });
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange('summary', e.target.value);
  };
  
  const handleImproveWithAI = async (field: 'summary' | `exp-${number}`) => {
    setLoadingAiField(field);
    let currentText = '';
    let fieldNameForPrompt = '';
    
    if (field === 'summary') {
      currentText = cvData.summary;
      fieldNameForPrompt = 'Professional Summary';
    } else if (field.startsWith('exp-')) {
        const id = parseInt(field.split('-')[1]);
        const exp = cvData.experience.find(e => e.id === id);
        if(exp) {
            currentText = exp.description;
            fieldNameForPrompt = 'Experience Description';
        }
    }
    
    if (currentText) {
        const improved = await improveText(currentText, fieldNameForPrompt);
        if (field === 'summary') {
            handleChange('summary', improved);
        } else if (field.startsWith('exp-')) {
            const id = parseInt(field.split('-')[1]);
            const updatedExperience = cvData.experience.map(e => e.id === id ? { ...e, description: improved } : e);
            handleChange('experience', updatedExperience);
        }
    }
    setLoadingAiField(null);
  };

  const handleListChange = <T,>(section: keyof CvData, index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const list = cvData[section] as T[];
    const updatedList = list.map((item, i) => i === index ? { ...item, [name]: value } : item);
    setCvData(prev => ({ ...prev, [section]: updatedList }));
  };

  const addListItem = (section: 'experience' | 'education' | 'skills') => {
    const list = cvData[section];
    let newItem: Experience | Education | Skill;
    const newId = Date.now();
    if (section === 'experience') {
      newItem = { id: newId, title: '', company: '', location: '', startDate: '', endDate: '', description: '' };
    } else if (section === 'education') {
      newItem = { id: newId, degree: '', school: '', location: '', startDate: '', endDate: '' };
    } else {
      newItem = { id: newId, name: '' };
    }
    setCvData(prev => ({ ...prev, [section]: [...list, newItem] }));
  };
  
  const removeListItem = (section: keyof CvData, index: number) => {
    const list = cvData[section] as any[];
    setCvData(prev => ({ ...prev, [section]: list.filter((_, i) => i !== index) }));
  };

  const Input = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
      <input className="w-full bg-slate-50 border border-slate-300 rounded-md p-2 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" {...props} />
    </div>
  );

  const FileInput = ({ label, name, onChange, previewSrc, onRemove }: { label: string, name: 'profilePicture' | 'logo', onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, previewSrc?: string, onRemove: () => void }) => (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
      <div className="flex items-center space-x-4">
        <input type="file" name={name} accept="image/*" onChange={onChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"/>
        {previewSrc && (
          <div className="relative flex-shrink-0">
            <img src={previewSrc} alt="Preview" className="w-16 h-16 rounded-md object-cover border border-slate-300" />
            <button onClick={onRemove} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">&times;</button>
          </div>
        )}
      </div>
    </div>
  );
  
  const Textarea = ({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) => (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
      <textarea rows={4} className="w-full bg-slate-50 border border-slate-300 rounded-md p-2 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" {...props}></textarea>
    </div>
  );

  return (
    <div className="space-y-6">
      <details open className="bg-white rounded-lg p-4 border border-slate-200">
        <summary className="font-semibold text-lg cursor-pointer text-indigo-600">Personal Information</summary>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input label="Full Name" name="name" value={cvData.personalInfo.name} onChange={handlePersonalInfoChange} />
          <Input label="Job Title" name="title" value={cvData.personalInfo.title} onChange={handlePersonalInfoChange} />
          <Input label="Email" name="email" type="email" value={cvData.personalInfo.email} onChange={handlePersonalInfoChange} />
          <Input label="Phone" name="phone" type="tel" value={cvData.personalInfo.phone} onChange={handlePersonalInfoChange} />
          <Input label="Address" name="address" value={cvData.personalInfo.address} onChange={handlePersonalInfoChange} />
          <Input label="LinkedIn" name="linkedin" value={cvData.personalInfo.linkedin} onChange={handlePersonalInfoChange} />
          <Input label="Portfolio Website" name="portfolio" value={cvData.personalInfo.portfolio} onChange={handlePersonalInfoChange} />
          <FileInput label="Profile Picture" name="profilePicture" onChange={handleFileChange} previewSrc={cvData.personalInfo.profilePicture} onRemove={() => removeImage('profilePicture')} />
          <FileInput label="Logo (e.g., company, personal brand)" name="logo" onChange={handleFileChange} previewSrc={cvData.personalInfo.logo} onRemove={() => removeImage('logo')} />
        </div>
      </details>
      
      <details open className="bg-white rounded-lg p-4 border border-slate-200">
        <summary className="font-semibold text-lg cursor-pointer text-indigo-600">Professional Summary</summary>
        <div className="mt-4 relative">
          <Textarea label="Summary" value={cvData.summary} onChange={handleSummaryChange} />
          <button 
            onClick={() => handleImproveWithAI('summary')}
            className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white disabled:bg-slate-400"
            disabled={loadingAiField === 'summary'}
            title="Improve with AI"
          >
            {loadingAiField === 'summary' ? (
                <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
                <MagicWandIcon />
            )}
          </button>
        </div>
      </details>

      <details open className="bg-white rounded-lg p-4 border border-slate-200">
        <summary className="font-semibold text-lg cursor-pointer text-indigo-600">Work Experience</summary>
        <div className="space-y-4 mt-4">
          {cvData.experience.map((exp, index) => (
            <div key={exp.id} className="p-4 bg-slate-50 rounded-md space-y-4 border border-slate-200">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Experience #{index + 1}</h3>
                <button onClick={() => removeListItem('experience', index)} className="text-red-500 hover:text-red-600 font-bold">Remove</button>
              </div>
              <Input label="Job Title" name="title" value={exp.title} onChange={e => handleListChange('experience', index, e)} />
              <Input label="Company" name="company" value={exp.company} onChange={e => handleListChange('experience', index, e)} />
              <Input label="Location" name="location" value={exp.location} onChange={e => handleListChange('experience', index, e)} />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Start Date" name="startDate" value={exp.startDate} onChange={e => handleListChange('experience', index, e)} />
                <Input label="End Date" name="endDate" value={exp.endDate} onChange={e => handleListChange('experience', index, e)} />
              </div>
               <div className="relative">
                 <Textarea label="Description" name="description" value={exp.description} onChange={e => handleListChange('experience', index, e)} />
                 <button 
                    onClick={() => handleImproveWithAI(`exp-${exp.id}`)}
                    className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white disabled:bg-slate-400"
                    disabled={loadingAiField === `exp-${exp.id}`}
                    title="Improve with AI"
                  >
                  {loadingAiField === `exp-${exp.id}` ? (
                      <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                  ) : (
                      <MagicWandIcon />
                  )}
                 </button>
               </div>
            </div>
          ))}
          <button onClick={() => addListItem('experience')} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md">Add Experience</button>
        </div>
      </details>

       <details open className="bg-white rounded-lg p-4 border border-slate-200">
        <summary className="font-semibold text-lg cursor-pointer text-indigo-600">Education</summary>
        <div className="space-y-4 mt-4">
          {cvData.education.map((edu, index) => (
            <div key={edu.id} className="p-4 bg-slate-50 rounded-md space-y-4 border border-slate-200">
               <div className="flex justify-between items-center">
                <h3 className="font-medium">Education #{index + 1}</h3>
                <button onClick={() => removeListItem('education', index)} className="text-red-500 hover:text-red-600 font-bold">Remove</button>
              </div>
              <Input label="Degree" name="degree" value={edu.degree} onChange={e => handleListChange('education', index, e)} />
              <Input label="School" name="school" value={edu.school} onChange={e => handleListChange('education', index, e)} />
              <Input label="Location" name="location" value={edu.location} onChange={e => handleListChange('education', index, e)} />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Start Date" name="startDate" value={edu.startDate} onChange={e => handleListChange('education', index, e)} />
                <Input label="End Date" name="endDate" value={edu.endDate} onChange={e => handleListChange('education', index, e)} />
              </div>
            </div>
          ))}
          <button onClick={() => addListItem('education')} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md">Add Education</button>
        </div>
      </details>
      
       <details open className="bg-white rounded-lg p-4 border border-slate-200">
        <summary className="font-semibold text-lg cursor-pointer text-indigo-600">Skills</summary>
        <div className="space-y-4 mt-4">
          {cvData.skills.map((skill, index) => (
            <div key={skill.id} className="flex items-center space-x-2">
              <Input label={`Skill #${index+1}`} name="name" value={skill.name} onChange={e => handleListChange('skills', index, e)} className="flex-grow"/>
              <button onClick={() => removeListItem('skills', index)} className="mt-7 text-red-500 hover:text-red-600 font-bold p-2 bg-slate-200 rounded-md">Remove</button>
            </div>
          ))}
          <button onClick={() => addListItem('skills')} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md">Add Skill</button>
        </div>
      </details>
    </div>
  );
};

export default CvForm;

import React from 'react';
import { CvData } from '../../types';

interface TemplateProps {
  data: CvData;
}

const ProfessionalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="p-10 bg-white text-gray-800 font-sans text-base leading-relaxed">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{personalInfo.name}</h1>
        <p className="text-xl font-medium text-gray-600 mt-1">{personalInfo.title}</p>
        <div className="flex flex-wrap text-sm text-gray-500 mt-4 gap-x-6 gap-y-1">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.address}</span>
          <a href={`https://${personalInfo.linkedin}`} className="text-blue-600 hover:underline">{personalInfo.linkedin}</a>
          <a href={`https://${personalInfo.portfolio}`} className="text-blue-600 hover:underline">{personalInfo.portfolio}</a>
        </div>
      </header>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Summary</h2>
        <p>{summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Experience</h2>
        {experience.map(exp => (
          <div key={exp.id} className="mb-6">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm font-medium text-gray-500">{exp.startDate} - {exp.endDate}</p>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-md font-medium text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.location}</p>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Education</h2>
        {education.map(edu => (
          <div key={edu.id} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-sm font-medium text-gray-500">{edu.startDate} - {edu.endDate}</p>
            </div>
            <div className="flex justify-between items-baseline">
                <p className="text-md font-medium text-gray-700">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.location}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Skills</h2>
        <p className="text-gray-700">
          {skills.map(skill => skill.name).join(', ')}
        </p>
      </section>
    </div>
  );
};

export default ProfessionalTemplate;
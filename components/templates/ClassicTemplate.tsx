
import React from 'react';
import { CvData } from '../../types';

interface TemplateProps {
  data: CvData;
}

const ClassicTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="p-8 font-lora text-sm">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold tracking-wider">{personalInfo.name}</h1>
        <p className="text-lg font-semibold text-gray-700 mt-1">{personalInfo.title}</p>
        <div className="flex justify-center space-x-4 mt-2 text-xs text-gray-600">
          <span>{personalInfo.email}</span>
          <span>|</span>
          <span>{personalInfo.phone}</span>
          <span>|</span>
          <span>{personalInfo.address}</span>
        </div>
        <div className="flex justify-center space-x-4 mt-1 text-xs text-blue-700">
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>
          <a href={`https://${personalInfo.portfolio}`} target="_blank" rel="noopener noreferrer">{personalInfo.portfolio}</a>
        </div>
      </header>

      <hr className="my-6 border-t-2 border-gray-300" />
      
      <section>
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
        <p className="text-gray-800">{summary}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">WORK EXPERIENCE</h2>
        {experience.map(exp => (
          <div key={exp.id} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-bold">{exp.title}</h3>
              <p className="text-xs font-semibold text-gray-600">{exp.startDate} - {exp.endDate}</p>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-sm font-semibold italic">{exp.company}</p>
              <p className="text-xs text-gray-600">{exp.location}</p>
            </div>
            <ul className="list-disc list-inside mt-1 text-gray-700 space-y-1">
              {exp.description.split('\n').map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">EDUCATION</h2>
        {education.map(edu => (
          <div key={edu.id} className="mb-2">
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-bold">{edu.degree}</h3>
              <p className="text-xs font-semibold text-gray-600">{edu.startDate} - {edu.endDate}</p>
            </div>
            <div className="flex justify-between items-baseline">
                <p className="text-sm font-semibold italic">{edu.school}</p>
                <p className="text-xs text-gray-600">{edu.location}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">SKILLS</h2>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <span key={skill.id} className="text-sm text-gray-800">
              {skill.name}{index < skills.length - 1 && <span className="mx-2">&bull;</span>}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClassicTemplate;

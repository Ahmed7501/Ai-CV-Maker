import React from 'react';
import { CvData } from '../../types';

interface TemplateProps {
  data: CvData;
}

const PortfolioTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <section className={`mb-8 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{title}</h2>
        <div className="w-20 h-1 bg-gray-800 mx-auto mb-6"></div>
        {children}
    </section>
  );

  return (
    <div className="bg-white text-gray-900 font-sans text-base">
        <header className="relative bg-gray-800 text-white h-[250px] flex flex-col justify-center items-center text-center p-8">
            {personalInfo.logo && (
                <img src={personalInfo.logo} alt="Logo" className="absolute top-4 left-6 h-12 max-w-[150px] object-contain"/>
            )}
            {personalInfo.profilePicture && (
                 <img 
                    src={personalInfo.profilePicture} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg absolute -bottom-16"
                />
            )}
        </header>
        
        <div className="pt-20 pb-8 px-8">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-extrabold">{personalInfo.name}</h1>
                <p className="text-xl text-gray-600">{personalInfo.title}</p>
                 <div className="flex justify-center flex-wrap text-sm text-gray-500 mt-2 gap-x-4 gap-y-1">
                  <a href={`mailto:${personalInfo.email}`} className="text-indigo-600 hover:underline">{personalInfo.email}</a>
                  <span>&bull;</span>
                  <a href={`tel:${personalInfo.phone}`} className="text-indigo-600 hover:underline">{personalInfo.phone}</a>
                   <span>&bull;</span>
                  <span>{personalInfo.address}</span>
                </div>
                 <div className="flex justify-center flex-wrap text-sm text-gray-500 mt-1 gap-x-4 gap-y-1">
                  <a href={`https://${personalInfo.linkedin}`} className="text-indigo-600 hover:underline">LinkedIn</a>
                   <span>&bull;</span>
                  <a href={`https://${personalInfo.portfolio}`} className="text-indigo-600 hover:underline">Portfolio</a>
                </div>
            </div>

            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">{summary}</p>
            
            <Section title="Skills">
                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map(skill => (
                        <span key={skill.id} className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-md">{skill.name}</span>
                    ))}
                </div>
            </Section>

             <Section title="Experience">
                {experience.map(exp => (
                  <div key={exp.id} className="mb-6 text-center">
                    <h3 className="text-lg font-semibold">{exp.title} at {exp.company}</h3>
                    <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate} | {exp.location}</p>
                    <ul className="mt-2 text-gray-700 text-sm list-none space-y-1">
                      {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                    </ul>
                  </div>
                ))}
            </Section>

            <Section title="Education">
                {education.map(edu => (
                  <div key={edu.id} className="mb-4 text-center">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-md text-gray-700">{edu.school} | {edu.location}</p>
                      <p className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
            </Section>
        </div>
    </div>
  );
};

export default PortfolioTemplate;
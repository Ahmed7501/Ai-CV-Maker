
import React from 'react';
import { CvData } from '../../types';

interface TemplateProps {
  data: CvData;
}

const SwissTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{children}</h2>
  );
  
  const ContactItem: React.FC<{label: string, value: string, href?: string}> = ({label, value, href}) => (
    <div className="mb-3">
        <p className="text-xs font-bold text-gray-500 uppercase">{label}</p>
        {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 break-all hover:underline">{value}</a> : <p className="text-sm text-gray-800 break-all">{value}</p>}
    </div>
  );

  return (
    <div className="flex bg-white text-gray-900 font-sans">
      {/* Main Column */}
      <main className="w-2/3 p-8">
        <header className="mb-10">
            <h1 className="text-5xl font-extrabold tracking-tighter">{personalInfo.name}</h1>
            <p className="text-xl font-light text-gray-600 mt-1">{personalInfo.title}</p>
        </header>

        <section className="mb-8">
            <SectionTitle>Profile</SectionTitle>
            <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
        </section>

        <section className="mb-8">
            <SectionTitle>Experience</SectionTitle>
            {experience.map(exp => (
              <div key={exp.id} className="mb-5 relative pl-5">
                <div className="absolute left-0 top-1 h-full border-l-2 border-gray-200"></div>
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-gray-700 rounded-full"></div>
                <p className="text-xs font-semibold text-gray-500">{exp.startDate} - {exp.endDate}</p>
                <h3 className="text-base font-bold">{exp.title}</h3>
                <p className="text-sm font-semibold text-gray-600">{exp.company} | {exp.location}</p>
                <ul className="list-disc list-inside mt-1 text-gray-600 space-y-1 text-sm">
                    {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                </ul>
              </div>
            ))}
        </section>

        <section>
            <SectionTitle>Education</SectionTitle>
             {education.map(edu => (
              <div key={edu.id} className="mb-4">
                <p className="text-xs font-semibold text-gray-500">{edu.startDate} - {edu.endDate}</p>
                <h3 className="text-base font-bold">{edu.degree}</h3>
                <p className="text-sm font-semibold text-gray-600">{edu.school} | {edu.location}</p>
              </div>
            ))}
        </section>
      </main>

      {/* Sidebar */}
      <aside className="w-1/3 bg-gray-50 p-8 border-l border-gray-200">
        <SectionTitle>Contact</SectionTitle>
        <ContactItem label="Address" value={personalInfo.address} />
        <ContactItem label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
        <ContactItem label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
        <ContactItem label="LinkedIn" value={personalInfo.linkedin} href={`https://${personalInfo.linkedin}`} />
        <ContactItem label="Portfolio" value={personalInfo.portfolio} href={`https://${personalInfo.portfolio}`} />
        
        <div className="border-t border-gray-200 my-8"></div>
        
        <SectionTitle>Skills</SectionTitle>
        <ul className="text-sm">
            {skills.map(skill => (
                <li key={skill.id} className="mb-1">{skill.name}</li>
            ))}
        </ul>
      </aside>
    </div>
  );
};

export default SwissTemplate;
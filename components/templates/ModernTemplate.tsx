import React from 'react';
import { CvData } from '../../types';

interface TemplateProps {
  data: CvData;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-6">
        <h2 className="text-lg font-bold uppercase tracking-wider text-cyan-700 border-b-2 border-cyan-700 pb-1 mb-3">{title}</h2>
        {children}
    </section>
);

const ModernTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;
  
  // Fix: Changed icon prop type from JSX.Element to React.ReactNode to resolve namespace error.
  const ContactInfo: React.FC<{icon: React.ReactNode, text: string, href?: string}> = ({icon, text, href}) => (
    <div className="flex items-center mb-2">
        <span className="text-cyan-700 w-5 h-5 mr-3">{icon}</span>
        {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs break-all">{text}</a> : <span className="text-xs">{text}</span>}
    </div>
  );

  return (
    <div className="flex text-sm">
      {/* Left Column */}
      <aside className="w-1/3 bg-gray-100 p-6 text-gray-800">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{personalInfo.name}</h1>
            <p className="text-md text-cyan-800">{personalInfo.title}</p>
        </div>

        <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-700 mb-3">Contact</h2>
            <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} text={personalInfo.email} href={`mailto:${personalInfo.email}`}/>
            <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>} text={personalInfo.phone} href={`tel:${personalInfo.phone}`}/>
            <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} text={personalInfo.address} />
            <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>} text={personalInfo.linkedin} href={`https://${personalInfo.linkedin}`} />
            <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>} text={personalInfo.portfolio} href={`https://${personalInfo.portfolio}`}/>
        </section>

        <section className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-700 mb-3">Skills</h2>
            <ul className="text-xs">
                {skills.map(skill => (
                    <li key={skill.id} className="mb-1">{skill.name}</li>
                ))}
            </ul>
        </section>

        <section className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-700 mb-3">Education</h2>
            {education.map(edu => (
                <div key={edu.id} className="mb-3">
                    <h3 className="text-sm font-bold">{edu.degree}</h3>
                    <p className="text-xs italic">{edu.school}</p>
                    <p className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</p>
                </div>
            ))}
        </section>

      </aside>

      {/* Right Column */}
      <main className="w-2/3 p-6">
        <Section title="Summary">
            <p className="text-gray-700">{summary}</p>
        </Section>
        
        <Section title="Experience">
            {experience.map(exp => (
              <div key={exp.id} className="mb-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold">{exp.title}</h3>
                    <p className="text-sm font-semibold text-gray-700">{exp.company} | {exp.location}</p>
                  </div>
                  <p className="text-xs font-medium text-gray-500 min-w-max pl-2">{exp.startDate} - {exp.endDate}</p>
                </div>
                <ul className="list-disc list-inside mt-1 text-gray-600 space-y-1 text-xs">
                    {exp.description.split('\n').map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}
                </ul>
              </div>
            ))}
        </Section>
      </main>
    </div>
  );
};

export default ModernTemplate;
import React from 'react';
import { CvData } from '../../types';

interface TemplateProps {
  data: CvData;
}

const ExecutiveTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <section className={`mb-6 ${className}`}>
        <h2 className="text-sm font-bold uppercase tracking-wider text-blue-800 border-b-2 border-blue-200 pb-1 mb-3">{title}</h2>
        {children}
    </section>
  );

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 font-serif text-sm">
      <header className="p-8 border-b-2 border-gray-200 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{personalInfo.name}</h1>
          <p className="text-lg text-gray-600 mt-1">{personalInfo.title}</p>
        </div>
        {personalInfo.profilePicture && (
          <img 
            src={personalInfo.profilePicture} 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
          />
        )}
      </header>
      
      <div className="flex flex-grow">
        {/* Main Content */}
        <main className="w-2/3 p-8">
            <Section title="Professional Summary">
                <p className="text-gray-700 leading-relaxed">{summary}</p>
            </Section>
            
            <Section title="Work Experience">
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

        {/* Sidebar */}
        <aside className="w-1/3 p-8 bg-gray-50 border-l border-gray-200">
          <Section title="Contact">
            <div className="text-xs space-y-2">
                <p><strong>Email:</strong> {personalInfo.email}</p>
                <p><strong>Phone:</strong> {personalInfo.phone}</p>
                <p><strong>Address:</strong> {personalInfo.address}</p>
                <p><strong>LinkedIn:</strong> <a href={`https://${personalInfo.linkedin}`} className="text-blue-600 hover:underline">{personalInfo.linkedin}</a></p>
                <p><strong>Portfolio:</strong> <a href={`https://${personalInfo.portfolio}`} className="text-blue-600 hover:underline">{personalInfo.portfolio}</a></p>
            </div>
          </Section>
          
          <Section title="Skills">
              <ul className="list-disc list-inside text-xs">
                  {skills.map(skill => (
                      <li key={skill.id} className="mb-1">{skill.name}</li>
                  ))}
              </ul>
          </Section>

          <Section title="Education">
              {education.map(edu => (
                  <div key={edu.id} className="mb-3">
                      <h3 className="text-sm font-bold">{edu.degree}</h3>
                      <p className="text-xs italic">{edu.school}</p>
                      <p className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</p>
                  </div>
              ))}
          </Section>
        </aside>
      </div>

      <footer className="p-4 bg-gray-50 border-t border-gray-200 flex justify-center items-center">
        {personalInfo.logo && (
            <img src={personalInfo.logo} alt="Logo" className="h-8 max-w-[150px] object-contain"/>
        )}
      </footer>
    </div>
  );
};

export default ExecutiveTemplate;
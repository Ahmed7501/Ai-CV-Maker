
import React from 'react';
import { CvData } from '../../types';

interface TemplateProps {
  data: CvData;
}

const CreativeTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  const TimelineItem: React.FC<{title: string, subtitle: string, date: string, location?: string, children?: React.ReactNode}> = ({title, subtitle, date, location, children}) => (
    <div className="relative pl-8 mb-6 border-l-2 border-purple-300">
        <div className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-600 rounded-full border-2 border-white"></div>
        <p className="text-xs text-purple-800 font-semibold">{date}</p>
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
        <p className="text-sm italic text-gray-600">{subtitle} {location && `| ${location}`}</p>
        <div className="text-sm text-gray-700 mt-1">{children}</div>
    </div>
  )

  return (
    <div className="text-sm">
      <header className="bg-purple-600 text-white p-8">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <p className="text-xl text-purple-200 mt-1">{personalInfo.title}</p>
        <p className="mt-4 max-w-2xl text-purple-100">{summary}</p>
      </header>

      <div className="flex">
        <aside className="w-1/3 bg-gray-100 p-6">
            <h2 className="text-lg font-bold text-purple-800 uppercase mb-4">Contact</h2>
            <p className="font-semibold">{personalInfo.email}</p>
            <p className="font-semibold">{personalInfo.phone}</p>
            <p className="mt-2 text-gray-700">{personalInfo.address}</p>
            <p className="mt-4"><a href={`https://${personalInfo.linkedin}`} className="text-purple-600 font-bold hover:underline">LinkedIn</a></p>
            <p><a href={`https://${personalInfo.portfolio}`} className="text-purple-600 font-bold hover:underline">Portfolio</a></p>

            <h2 className="text-lg font-bold text-purple-800 uppercase mt-8 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill.id} className="bg-purple-200 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">{skill.name}</span>
                ))}
            </div>
        </aside>

        <main className="w-2/3 p-6">
            <h2 className="text-2xl font-bold text-purple-800 uppercase mb-6">Career Path</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Experience</h3>
            <div>
                {experience.map(exp => (
                    <TimelineItem 
                        key={exp.id} 
                        title={exp.title}
                        subtitle={exp.company}
                        location={exp.location}
                        date={`${exp.startDate} - ${exp.endDate}`}
                    >
                        <ul className="list-disc list-inside mt-1 space-y-1 text-xs">
                            {exp.description.split('\n').map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}
                        </ul>
                    </TimelineItem>
                ))}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Education</h3>
             <div>
                {education.map(edu => (
                     <TimelineItem 
                        key={edu.id} 
                        title={edu.degree}
                        subtitle={edu.school}
                        location={edu.location}
                        date={`${edu.startDate} - ${edu.endDate}`}
                    />
                ))}
            </div>
        </main>
      </div>
    </div>
  );
};

export default CreativeTemplate;

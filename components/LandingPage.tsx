import React from 'react';
import { TemplateName } from '../types';

interface LandingPageProps {
  onStart: () => void;
}

// Minimalistic SVG Icons for features
const TemplateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

const AiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const PreviewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

// Copied from TemplateSelector to avoid prop drilling, can be moved to a constants file
const templates: { name: TemplateName; label: string; imgSrc: string }[] = [
    { name: 'executive', label: 'Executive', imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22220%22%20height%3D%2216%22%20fill%3D%22%232563EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2265%22%20width%3D%22150%22%20height%3D%2210%22%20fill%3D%22%2393C5FD%22/%3E%3Ccircle%20cx%3D%22330%22%20cy%3D%2265%22%20r%3D%2230%22%20fill%3D%22%23DBEAFE%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22120%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22135%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22150%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22200%22%20width%3D%22100%22%20height%3D%228%22%20fill%3D%22%2360A5FA%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22220%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22235%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22510%22%20width%3D%2230%22%20height%3D%2215%22%20fill%3D%22%23BFDBFE%22/%3E%3C/svg%3E'},
    { name: 'portfolio', label: 'Portfolio', imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20width%3D%22400%22%20height%3D%22150%22%20fill%3D%22%231F2937%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%2250%22%20height%3D%2225%22%20fill%3D%22%239CA3AF%22/%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22150%22%20r%3D%2250%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22230%22%20width%3D%22240%22%20height%3D%2216%22%20fill%3D%22%23374151%22/%3E%3Crect%20x%3D%22120%22%20y%3D%22255%22%20width%3D%22160%22%20height%3D%2210%22%20fill%3D%22%236B7280%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22300%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22315%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22350%22%20width%3D%22100%22%20height%3D%228%22%20fill%3D%22%234B5563%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22370%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22385%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3C/svg%3E'},
    { name: 'modern', label: 'Modern', imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20width%3D%22130%22%20height%3D%22565%22%20fill%3D%22%23F3F4F6%22/%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%2260%22%20r%3D%2230%22%20fill%3D%22%23E0E7FF%22/%3E%3Crect%20x%3D%2225%22%20y%3D%22110%22%20width%3D%2280%22%20height%3D%228%22%20fill%3D%22%23A5B4FC%22/%3E%3Crect%20x%3D%2225%22%20y%3D%22130%22%20width%3D%2260%22%20height%3D%226%22%20fill%3D%22%23C7D2FE%22/%3E%3Crect%20x%3D%22160%22%20y%3D%2240%22%20width%3D%22180%22%20height%3D%2216%22%20fill%3D%22%234F46E5%22/%3E%3Crect%20x%3D%22160%22%20y%3D%2270%22%20width%3D%22120%22%20height%3D%2210%22%20fill%3D%22%236366F1%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22120%22%20width%3D%22210%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22135%22%20width%3D%22210%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22150%22%20width%3D%22180%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22190%22%20width%3D%22100%22%20height%3D%228%22%20fill%3D%22%23A5B4FC%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22210%22%20width%3D%22210%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22225%22%20width%3D%22210%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22240%22%20width%3D%22180%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3C/svg%3E'},
    { name: 'professional', label: 'Professional', imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22320%22%20height%3D%2218%22%20fill%3D%22%23111827%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2270%22%20width%3D%22200%22%20height%3D%2210%22%20fill%3D%22%234B5563%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2290%22%20width%3D%22320%22%20height%3D%222%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22120%22%20width%3D%22120%22%20height%3D%2210%22%20fill%3D%22%23374151%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22145%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22160%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22175%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22220%22%20width%3D%22120%22%20height%3D%2210%22%20fill%3D%22%23374151%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22245%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22260%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22275%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3C/svg%3E'},
    { name: 'swiss', label: 'Swiss', imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22%23F9FAFB%22/%3E%3Crect%20x%3D%22250%22%20y%3D%220%22%20width%3D%22150%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22180%22%20height%3D%2220%22%20fill%3D%22%231F2937%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2270%22%20width%3D%22120%22%20height%3D%2212%22%20fill%3D%22%236B7280%22/%3E%3Crect%20x%3D%22280%22%20y%3D%2240%22%20width%3D%2280%22%20height%3D%228%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%22280%22%20y%3D%2260%22%20width%3D%22100%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22280%22%20y%3D%2275%22%20width%3D%22100%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22120%22%20width%3D%22100%22%20height%3D%2210%22%20fill%3D%22%234B5563%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22145%22%20width%3D%22180%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22160%22%20width%3D%22180%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22175%22%20width%3D%22150%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3C/svg%3E'},
    { name: 'classic', label: 'Classic', imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%22100%22%20y%3D%2240%22%20width%3D%22200%22%20height%3D%2216%22%20fill%3D%22%23374151%22%20rx%3D%222%22/%3E%3Crect%20x%3D%22130%22%20y%3D%2265%22%20width%3D%22140%22%20height%3D%2210%22%20fill%3D%22%236B7280%22%20rx%3D%222%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22100%22%20width%3D%22320%22%20height%3D%222%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22130%22%20width%3D%22150%22%20height%3D%2210%22%20fill%3D%22%234B5563%22%20rx%3D%222%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22155%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22%20rx%3D%222%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22170%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22%20rx%3D%222%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22185%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22%20rx%3D%222%22/%3E%3C/svg%3E'},
    { name: 'creative', label: 'Creative', imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20width%3D%22400%22%20height%3D%22120%22%20fill%3D%22%23A78BFA%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22250%22%20height%3D%2220%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2270%22%20width%3D%22150%22%20height%3D%2212%22%20fill%3D%22%23EDE9FE%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22160%22%20width%3D%22280%22%20height%3D%2210%22%20fill%3D%22%235B21B6%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22185%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%236D28D9%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22160%22%20width%3D%2212%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%238B5CF6%22/%3E%3Crect%20x%3D%2245%22%20y%3D%22172%22%20width%3D%222%22%20height%3D%22100%22%20fill%3D%22%23C4B5FD%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22200%22%20width%3D%22250%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22272%22%20width%3D%2212%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%238B5CF6%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22272%22%20width%3D%22280%22%20height%3D%2210%22%20fill%3D%22%235B21B6%22/%3E%3C/svg%3E'},
];

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
        <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-500 rounded-full p-4 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-500">{description}</p>
        </div>
    );

  return (
    <div className="bg-white text-slate-800">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">AI CV Forge</h1>
            <button onClick={onStart} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                Get Started
            </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-indigo-600 text-white">
          <div className="container mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Craft Your Future with an AI-Powered CV</h2>
            <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto mb-8">
                Build a professional, standout CV in minutes. Our intelligent platform helps you choose the perfect template and write compelling content to land your dream job.
            </p>
            <button onClick={onStart} className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-50 transition duration-300 shadow-lg transform hover:scale-105">
                Create Your CV for Free
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <FeatureCard
                        icon={<TemplateIcon />}
                        title="Professional Templates"
                        description="Choose from a variety of expertly designed, ATS-friendly templates."
                    />
                    <FeatureCard
                        icon={<AiIcon />}
                        title="AI Enhancement"
                        description="Improve your summary and descriptions with a single click using powerful AI."
                    />
                    <FeatureCard
                        icon={<PreviewIcon />}
                        title="Live Preview"
                        description="See your changes in real-time as you type, ensuring a perfect result."
                    />
                    <FeatureCard
                        icon={<DownloadIcon />}
                        title="Easy PDF Download"
                        description="Export your finished CV as a high-quality, print-ready PDF file."
                    />
                </div>
            </div>
        </section>
        
        {/* Template Showcase */}
        <section className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold mb-4">Find Your Perfect Style</h3>
                <p className="text-slate-500 max-w-2xl mx-auto mb-10">Browse our template gallery. Switch between them anytime in the editor.</p>
            </div>
            <div className="relative">
                <div className="flex overflow-x-auto space-x-8 pb-8 px-6">
                    {templates.map(template => (
                        <div key={template.name} className="flex-shrink-0 text-center group">
                           <img 
                                src={template.imgSrc} 
                                alt={`${template.label} template preview`} 
                                className="w-64 h-96 object-cover object-top rounded-lg shadow-lg border-2 border-slate-200 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" 
                           />
                           <p className="mt-4 font-semibold text-slate-700">{template.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-800 text-white">
          <div className="container mx-auto px-6 py-20 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Land Your Dream Job?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Start building your professional CV today and take the next step in your career.
            </p>
            <button onClick={onStart} className="bg-indigo-600 hover:bg-indigo-500 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg transform hover:scale-105">
                Start Building Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6">
        <div className="container mx-auto px-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} AI CV Forge. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

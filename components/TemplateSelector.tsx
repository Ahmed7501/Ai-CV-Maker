import React from 'react';
import { TemplateName } from '../types';

interface TemplateSelectorProps {
  selectedTemplate: TemplateName;
  setSelectedTemplate: (template: TemplateName) => void;
}

const templates: { name: TemplateName; label: string; description: string; imgSrc: string }[] = [
    { 
        name: 'executive', 
        label: 'Executive', 
        description: 'A sophisticated design with a profile picture and logo space. Perfect for senior roles.',
        imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22220%22%20height%3D%2216%22%20fill%3D%22%232563EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2265%22%20width%3D%22150%22%20height%3D%2210%22%20fill%3D%22%2393C5FD%22/%3E%3Ccircle%20cx%3D%22330%22%20cy%3D%2265%22%20r%3D%2230%22%20fill%3D%22%23DBEAFE%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22120%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22135%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22150%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22200%22%20width%3D%22100%22%20height%3D%228%22%20fill%3D%22%2360A5FA%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22220%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22235%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22510%22%20width%3D%2230%22%20height%3D%2215%22%20fill%3D%22%23BFDBFE%22/%3E%3C/svg%3E'
    },
    { 
        name: 'portfolio', 
        label: 'Portfolio',
        description: 'A visually-driven layout that highlights your personal brand with a prominent photo and logo.',
        imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20width%3D%22400%22%20height%3D%22150%22%20fill%3D%22%231F2937%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%2250%22%20height%3D%2225%22%20fill%3D%22%239CA3AF%22/%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22150%22%20r%3D%2250%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22230%22%20width%3D%22240%22%20height%3D%2216%22%20fill%3D%22%23374151%22/%3E%3Crect%20x%3D%22120%22%20y%3D%22255%22%20width%3D%22160%22%20height%3D%2210%22%20fill%3D%22%236B7280%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22300%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22315%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22350%22%20width%3D%22100%22%20height%3D%228%22%20fill%3D%22%234B5563%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22370%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22385%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23E5E7EB%22/%3E%3C/svg%3E'
    },
    { 
        name: 'modern', 
        label: 'Modern', 
        description: 'A stylish, two-column layout with a splash of color. Great for creative and tech roles.',
        imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20width%3D%22130%22%20height%3D%22565%22%20fill%3D%22%23F3F4F6%22/%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%2260%22%20r%3D%2230%22%20fill%3D%22%23E0E7FF%22/%3E%3Crect%20x%3D%2225%22%20y%3D%22110%22%20width%3D%2280%22%20height%3D%228%22%20fill%3D%22%23A5B4FC%22/%3E%3Crect%20x%3D%2225%22%20y%3D%22130%22%20width%3D%2260%22%20height%3D%226%22%20fill%3D%22%23C7D2FE%22/%3E%3Crect%20x%3D%22160%22%20y%3D%2240%22%20width%3D%22180%22%20height%3D%2216%22%20fill%3D%22%234F46E5%22/%3E%3Crect%20x%3D%22160%22%20y%3D%2270%22%20width%3D%22120%22%20height%3D%2210%22%20fill%3D%22%236366F1%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22120%22%20width%3D%22210%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22135%22%20width%3D%22210%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22150%22%20width%3D%22180%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22190%22%20width%3D%22100%22%20height%3D%228%22%20fill%3D%22%23A5B4FC%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22210%22%20width%3D%22210%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22225%22%20width%3D%22210%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22160%22%20y%3D%22240%22%20width%3D%22180%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3C/svg%3E'
    },
    { 
        name: 'professional', 
        label: 'Professional',
        description: 'A clean, classic single-column design. ATS-friendly and perfect for corporate jobs.',
        imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22320%22%20height%3D%2218%22%20fill%3D%22%23111827%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2270%22%20width%3D%22200%22%20height%3D%2210%22%20fill%3D%22%234B5563%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2290%22%20width%3D%22320%22%20height%3D%222%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22120%22%20width%3D%22120%22%20height%3D%2210%22%20fill%3D%22%23374151%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22145%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22160%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22175%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22220%22%20width%3D%22120%22%20height%3D%2210%22%20fill%3D%22%23374151%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22245%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22260%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22275%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3C/svg%3E'
    },
    { 
        name: 'swiss', 
        label: 'Swiss',
        description: 'Minimalist and information-dense, inspired by Swiss design. Conveys sophistication.',
        imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22%23F9FAFB%22/%3E%3Crect%20x%3D%22250%22%20y%3D%220%22%20width%3D%22150%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22180%22%20height%3D%2220%22%20fill%3D%22%231F2937%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2270%22%20width%3D%22120%22%20height%3D%2212%22%20fill%3D%22%236B7280%22/%3E%3Crect%20x%3D%22280%22%20y%3D%2240%22%20width%3D%2280%22%20height%3D%228%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%22280%22%20y%3D%2260%22%20width%3D%22100%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%22280%22%20y%3D%2275%22%20width%3D%22100%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22120%22%20width%3D%22100%22%20height%3D%2210%22%20fill%3D%22%234B5563%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22145%22%20width%3D%22180%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22160%22%20width%3D%22180%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22175%22%20width%3D%22150%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3C/svg%3E'
    },
    { 
        name: 'classic', 
        label: 'Classic',
        description: 'A timeless, centered-header format. Ideal for academic and traditional fields.',
        imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%22100%22%20y%3D%2240%22%20width%3D%22200%22%20height%3D%2216%22%20fill%3D%22%23374151%22%20rx%3D%222%22/%3E%3Crect%20x%3D%22130%22%20y%3D%2265%22%20width%3D%22140%22%20height%3D%2210%22%20fill%3D%22%236B7280%22%20rx%3D%222%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22100%22%20width%3D%22320%22%20height%3D%222%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22130%22%20width%3D%22150%22%20height%3D%2210%22%20fill%3D%22%234B5563%22%20rx%3D%222%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22155%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22%20rx%3D%222%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22170%22%20width%3D%22320%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22%20rx%3D%222%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22185%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%23D1D5DB%22%20rx%3D%222%22/%3E%3C/svg%3E'
    },
    { 
        name: 'creative', 
        label: 'Creative',
        description: 'A bold, timeline-based design with a colorful header. Stands out from the crowd.',
        imgSrc: 'data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22565%22%20viewBox%3D%220%200%20400%20565%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22565%22%20fill%3D%22white%22/%3E%3Crect%20width%3D%22400%22%20height%3D%22120%22%20fill%3D%22%23A78BFA%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22250%22%20height%3D%2220%22%20fill%3D%22white%22/%3E%3Crect%20x%3D%2240%22%20y%3D%2270%22%20width%3D%22150%22%20height%3D%2212%22%20fill%3D%22%23EDE9FE%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22160%22%20width%3D%22280%22%20height%3D%2210%22%20fill%3D%22%235B21B6%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22185%22%20width%3D%22280%22%20height%3D%226%22%20fill%3D%22%236D28D9%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22160%22%20width%3D%2212%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%238B5CF6%22/%3E%3Crect%20x%3D%2245%22%20y%3D%22172%22%20width%3D%222%22%20height%3D%22100%22%20fill%3D%22%23C4B5FD%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22200%22%20width%3D%22250%22%20height%3D%226%22%20fill%3D%22%239CA3AF%22/%3E%3Crect%20x%3D%2240%22%20y%3D%22272%22%20width%3D%2212%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%238B5CF6%22/%3E%3Crect%20x%3D%2280%22%20y%3D%22272%22%20width%3D%22280%22%20height%3D%2210%22%20fill%3D%22%235B21B6%22/%3E%3C/svg%3E'
    },
];

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="mb-6 bg-white rounded-lg p-4 border border-slate-200">
      <h2 className="font-semibold text-lg text-indigo-600 mb-4">Select a Template</h2>
      <div className="space-y-3">
        {templates.map(({ name, label, description, imgSrc }) => (
          <div
            key={name}
            onClick={() => setSelectedTemplate(name)}
            className={`cursor-pointer border-2 rounded-lg p-3 flex items-center space-x-4 transition-all duration-200 ${
              selectedTemplate === name 
                ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500' 
                : 'border-slate-300 hover:border-indigo-400 hover:bg-slate-50'
            }`}
          >
            <img src={imgSrc} alt={`${label} template preview`} className="w-20 h-28 object-cover rounded-md shadow-sm flex-shrink-0 border border-slate-200" />
            <div>
              <h3 className="font-semibold text-slate-800">{label}</h3>
              <p className="text-slate-500 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
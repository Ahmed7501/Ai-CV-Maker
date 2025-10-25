import React from 'react';
import { CvData, TemplateName } from '../types';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import SwissTemplate from './templates/SwissTemplate';
import ExecutiveTemplate from './templates/ExecutiveTemplate';
import PortfolioTemplate from './templates/PortfolioTemplate';

interface CvPreviewProps {
  cvData: CvData;
  template: TemplateName;
}

const CvPreview: React.FC<CvPreviewProps> = ({ cvData, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'classic':
        return <ClassicTemplate data={cvData} />;
      case 'modern':
        return <ModernTemplate data={cvData} />;
      case 'creative':
        return <CreativeTemplate data={cvData} />;
      case 'professional':
        return <ProfessionalTemplate data={cvData} />;
      case 'swiss':
        return <SwissTemplate data={cvData} />;
      case 'executive':
        return <ExecutiveTemplate data={cvData} />;
      case 'portfolio':
        return <PortfolioTemplate data={cvData} />;
      default:
        return <ModernTemplate data={cvData} />;
    }
  };

  return (
    <div 
        id="printable-area" 
        className="w-[210mm] h-[297mm] bg-white text-black shadow-lg transform scale-90 lg:scale-100 origin-top"
    >
      {renderTemplate()}
    </div>
  );
};

export default CvPreview;
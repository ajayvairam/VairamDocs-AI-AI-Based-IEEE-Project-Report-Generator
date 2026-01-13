import React from 'react';
import { ReportData, FormattingOptions } from '../types';

interface ReportPreviewProps {
  data: ReportData;
  formatting: FormattingOptions;
  previewRef?: React.RefObject<HTMLDivElement>;
}

export const ReportPreview: React.FC<ReportPreviewProps> = ({ data, formatting, previewRef }) => {
  
  // Helper to parse bold markdown (**text**)
  const renderText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Calculate specific styles based on formatting options
  const containerStyle: React.CSSProperties = {
    paddingTop: `${formatting.marginTop}cm`,
    paddingBottom: `${formatting.marginBottom}cm`,
    paddingLeft: `${formatting.marginLeft}cm`,
    paddingRight: `${formatting.marginRight}cm`,
    fontSize: formatting.fontSize,
    lineHeight: formatting.lineSpacing,
    fontFamily: '"Times New Roman", Times, serif',
    textAlign: 'justify',
    maxWidth: formatting.paperSize === 'A4' ? '210mm' : '215.9mm',
    minHeight: formatting.paperSize === 'A4' ? '297mm' : '279.4mm',
    backgroundColor: 'white',
    margin: '0 auto',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  };

  const columnStyle: React.CSSProperties = formatting.columns === 2 ? {
    columnCount: 2,
    columnGap: '0.6cm', // IEEE standard gap
  } : {};

  const sectionTitleStyle = "font-bold text-center uppercase text-[10pt] mt-4 mb-2 border-b border-black/0 tracking-wider"; 

  // Function to render team members in a grid
  const renderTeamMembers = () => {
    const members = data.teamMembers;
    if (members.length === 0) return null;

    return (
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4 text-[11pt] leading-snug">
        {members.map((member) => (
          <div key={member.id} className="text-center min-w-[120px]">
            <p className="font-bold">{member.name || "Student Name"}</p>
            {member.registerNumber && <p className="italic text-[10pt]">{member.registerNumber}</p>}
            <p className="italic text-[10pt]">{data.department}</p>
            <p className="text-[10pt]">{data.collegeName}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div 
      ref={previewRef}
      className="print-content text-black overflow-hidden relative"
      style={containerStyle}
    >
      {/* Header Area - Always spans full width */}
      <div className="mb-6 text-center break-inside-avoid column-span-all">
        <h1 className="font-bold text-[24pt] leading-tight mb-6 uppercase">{data.title || "PROJECT TITLE"}</h1>
        
        {renderTeamMembers()}

         {data.guideName && (
          <div className="text-[11pt] mt-4 mb-2">
             <p className="italic">Guided by</p>
            <p className="font-bold">{data.guideName}</p>
          </div>
        )}
      </div>

      {/* Content Area - May be 2 columns */}
      <div style={columnStyle}>
        
        {/* Abstract */}
        <section className="mb-4 break-inside-avoid">
          <h2 className={sectionTitleStyle}>Abstract</h2>
          <div className="text-justify text-[9pt] font-bold italic mb-2">
            <span className="not-italic">Abstract—</span>
            {renderText(data.abstract)}
          </div>
          <div className="text-justify text-[9pt] font-bold italic">
            <span className="not-italic">Keywords—</span>
            {renderText(data.keywords)}
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-4">
          <h2 className={sectionTitleStyle}>I. Introduction</h2>
          <div className="whitespace-pre-wrap">{renderText(data.introduction)}</div>
        </section>

        {/* Problem Statement */}
        <section className="mb-4">
          <h2 className={sectionTitleStyle}>II. Problem Statement</h2>
          <div className="whitespace-pre-wrap">{renderText(data.problemStatement)}</div>
        </section>

         {/* Objectives */}
         <section className="mb-4">
          <h2 className={sectionTitleStyle}>III. Objectives</h2>
          <div className="whitespace-pre-wrap">{renderText(data.objectives)}</div>
        </section>

        {/* Literature Review */}
        <section className="mb-4">
          <h2 className={sectionTitleStyle}>IV. Literature Review</h2>
          <div className="whitespace-pre-wrap">{renderText(data.literatureReview)}</div>
        </section>

        {/* Methodology */}
        <section className="mb-4">
          <h2 className={sectionTitleStyle}>V. Methodology</h2>
          <div className="whitespace-pre-wrap">{renderText(data.methodology)}</div>
          
          {/* Flowchart Image Insertion */}
          {data.flowchartImage && (
            <div className="my-4 break-inside-avoid text-center">
              <img 
                src={data.flowchartImage} 
                alt="System Flowchart" 
                className="max-w-full h-auto mx-auto border border-gray-200"
                style={{ maxHeight: '8cm' }} 
              />
              <p className="text-[9pt] mt-2 font-bold italic">Fig. 1. Proposed System Architecture</p>
            </div>
          )}
        </section>

        {/* Results */}
        <section className="mb-4">
          <h2 className={sectionTitleStyle}>VI. Results</h2>
          <div className="whitespace-pre-wrap">{renderText(data.results)}</div>
        </section>

        {/* Conclusion */}
        <section className="mb-4">
          <h2 className={sectionTitleStyle}>VII. Conclusion</h2>
          <div className="whitespace-pre-wrap">{renderText(data.conclusion)}</div>
        </section>

        {/* Future Scope */}
        <section className="mb-4">
          <h2 className={sectionTitleStyle}>VIII. Future Scope</h2>
          <div className="whitespace-pre-wrap">{renderText(data.futureScope)}</div>
        </section>

        {/* References */}
        <section className="mb-4 break-inside-avoid">
          <h2 className={sectionTitleStyle}>References</h2>
          <div className="whitespace-pre-wrap text-[8pt]">{renderText(data.references)}</div>
        </section>

      </div>
    </div>
  );
};
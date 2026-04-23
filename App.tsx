import React, { useState, useRef } from 'react';
import { 
  ReportData, 
  DEFAULT_REPORT_DATA, 
  FormattingOptions, 
  IEEE_FORMATTING, 
  PaperSize, 
  FontSize, 
  LineSpacing, 
  MarginType,
  TeamMember
} from './types';
import { ReportPreview } from './components/ReportPreview';
import { generateSectionContent, refineText, exportDocx } from './services/geminiService';
import { 
  Printer, 
  Sparkles, 
  Settings2, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Users, 
  BookOpen, 
  Layout, 
  Download,
  Wand2,
  RefreshCw,
  Plus,
  Trash2,
  Image as ImageIcon,
  Diamond,
  ArrowRight,
  Home,
  Menu,
  X,
  FileDown,
  Eye,
  Edit3,
  CheckCircle2,
  ShieldCheck,
  Zap,
  GraduationCap
} from 'lucide-react';

// --- Landing Page Component ---

const LandingPage: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    // CHANGED: min-h-screen -> h-screen to allow scrolling inside the overflow-hidden body
    <div className="h-screen bg-slate-950 text-white flex flex-col font-sans overflow-y-auto custom-scrollbar selection:bg-cyan-500/30">
      
      {/* Header Bar Line */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={onStart}>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
               <Diamond className="text-white fill-white/20" size={24} />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-cyan-100 transition-colors">VairamDocs AI</span>
          </div>
          <div>
             <button 
                onClick={onStart}
                className="px-6 py-2.5 text-sm font-bold bg-white text-slate-950 rounded-full hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
             >
                Get Started
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <header className="flex flex-col justify-center items-center text-center px-4 pt-48 pb-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 shrink-0">
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 -z-10"></div>

        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
             <Sparkles size={12} />
             <span>The Future of Academic Reporting</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-200 drop-shadow-sm">
            Where Student Reports <br/>
            <span className="italic text-cyan-400">Shine Like a Diamond.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The ultimate professional tool for students. Generate IEEE-compliant project reports, collaborate with your team, and export perfectly formatted DOCX documents in seconds.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onStart}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-600 to-blue-600 font-sans rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 focus:ring-offset-slate-900 w-full sm:w-auto"
            >
              Start Creating Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-24 bg-slate-950 border-t border-white/5 relative shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Choose VairamDocs?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We combine cutting-edge AI with strict academic standards to give you the edge you need.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Wand2 size={32} />, 
                title: "AI Powerhouse", 
                desc: "Generate Introduction, Methodology, and Abstract sections instantly with our advanced Gemini-powered engine." 
              },
              { 
                icon: <Layout size={32} />, 
                title: "IEEE Precision", 
                desc: "Don't worry about margins or font sizes. We automatically format your report to strict IEEE conference standards." 
              },
              { 
                icon: <Users size={32} />, 
                title: "Team Ready", 
                desc: "Add all your team members, guide details, and even flowchart images easily. Built for group projects." 
              },
              { 
                icon: <FileDown size={32} />, 
                title: "DOCX Export", 
                desc: "Download your report as a fully editable Microsoft Word document, ready for final submissions." 
              },
              { 
                icon: <Sparkles size={32} />, 
                title: "Professional Polish", 
                desc: "Our 'Refine' tool acts as a professional editor, fixing grammar and improving academic tone instantly." 
              },
              { 
                icon: <ShieldCheck size={32} />, 
                title: "Privacy First", 
                desc: "Your data is processed securely. We don't store your personal project details after you close the session." 
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-300 group">
                <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl w-fit text-cyan-400 mb-6 group-hover:text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Capabilities Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden shrink-0">
         <div className="max-w-7xl mx-auto px-6 space-y-32">
            
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="p-3 bg-cyan-900/30 w-fit rounded-xl border border-cyan-500/20">
                     <GraduationCap className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-4xl font-display font-bold leading-tight">Academic Integrity & <br/><span className="text-cyan-400">Standard Formatting</span></h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                     Forget the hassle of setting margins, line spacing, and column gaps manually. VairamDocs AI implements the <strong>IEEE Conference Template</strong> specifications automatically.
                  </p>
                  <ul className="space-y-4">
                     {['Times New Roman 10pt/12pt', 'Double Column Layout', 'Bold & Centered Headings', 'Correct Citation Style'].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 text-slate-300">
                           <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>
                  <div className="relative bg-slate-800 border border-white/10 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                     <div className="h-64 bg-slate-700/50 rounded-lg flex items-center justify-center border border-white/5">
                        <span className="text-slate-500 font-display text-lg italic">IEEE Format Preview</span>
                     </div>
                     <div className="mt-4 flex gap-4">
                        <div className="h-4 w-1/3 bg-slate-600/50 rounded animate-pulse"></div>
                        <div className="h-4 w-2/3 bg-slate-600/50 rounded animate-pulse delay-75"></div>
                     </div>
                     <div className="mt-2 h-4 w-1/2 bg-slate-600/50 rounded animate-pulse delay-150"></div>
                  </div>
               </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="p-3 bg-purple-900/30 w-fit rounded-xl border border-purple-500/20">
                     <Zap className="text-purple-400" size={32} />
                  </div>
                  <h3 className="text-4xl font-display font-bold leading-tight">Lightning Fast <br/><span className="text-purple-400">Content Generation</span></h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                     Stuck on your methodology? Need a crisp abstract? Our AI engine, powered by Gemini 2.5, understands academic context and helps you write technically sound content in seconds.
                  </p>
                  <ul className="space-y-4">
                     {['Context-Aware Suggestions', 'Technical Vocabulary', 'Grammar & Tone Check', 'Instant Re-generation'].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 text-slate-300">
                           <CheckCircle2 className="text-purple-400 shrink-0" size={20} />
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"></div>
                   <div className="relative bg-slate-800 border border-white/10 rounded-2xl p-6 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                     <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                           <Sparkles size={20} className="text-purple-400" />
                           <span className="text-sm font-bold text-slate-300">AI Generator</span>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-lg border border-purple-500/30 text-slate-400 text-sm italic">
                           "The proposed system utilizes a Convolutional Neural Network..."
                        </div>
                        <div className="flex justify-end">
                           <div className="px-3 py-1 bg-purple-600 rounded-md text-xs font-bold text-white">Generated</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-950 border-t border-white/5 shrink-0">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
              <p className="text-slate-400 text-lg">Three simple steps to your perfect report.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
               {/* Connector Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -z-10"></div>

               <div className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center text-3xl font-bold text-cyan-400 mb-6 shadow-xl shadow-cyan-900/10 group-hover:border-cyan-500/50 transition-colors">1</div>
                  <h3 className="text-xl font-bold mb-2">Input Details</h3>
                  <p className="text-slate-400 leading-relaxed px-4">Enter project title, team info, and basic points about your project.</p>
               </div>
               <div className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center text-3xl font-bold text-cyan-400 mb-6 shadow-xl shadow-cyan-900/10 group-hover:border-cyan-500/50 transition-colors">2</div>
                  <h3 className="text-xl font-bold mb-2">AI Generation</h3>
                  <p className="text-slate-400 leading-relaxed px-4">Let our AI write and format the content for you instantly.</p>
               </div>
               <div className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center text-3xl font-bold text-cyan-400 mb-6 shadow-xl shadow-cyan-900/10 group-hover:border-cyan-500/50 transition-colors">3</div>
                  <h3 className="text-xl font-bold mb-2">Download DOCX</h3>
                  <p className="text-slate-400 leading-relaxed px-4">Get the editable Word file and submit your report confidently.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-white/5 shrink-0">
        <div className="max-w-4xl mx-auto text-center px-6">
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">Ready to make your report shine?</h2>
           <p className="text-slate-300 mb-8 text-lg">Join thousands of students who trust VairamDocs for their academic submissions.</p>
           <button 
              onClick={onStart}
              className="px-8 py-4 bg-white text-slate-900 text-lg font-bold rounded-full hover:bg-cyan-50 transition-all shadow-xl shadow-cyan-900/20"
            >
              Start Creating Report
            </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-center border-t border-white/5 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Diamond className="text-cyan-600" size={24} />
            <span className="font-display font-bold text-2xl text-slate-200">VairamDocs AI</span>
          </div>
          <div className="flex justify-center space-x-6 mb-8 text-sm text-slate-500">
             <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
          </div>
          <p className="text-slate-600 text-sm">
            ©2025 AJAY VAIRAM T - VAIRAM GROUP
          </p>
        </div>
      </footer>
    </div>
  );
};

// --- Helper Components ---

const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
);

const SectionButton: React.FC<{
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
  hasContent: boolean;
}> = ({ label, icon, active, onClick, hasContent }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between p-3.5 rounded-xl mb-3 transition-all duration-200 border group ${
      active 
        ? 'bg-gradient-to-r from-brand-50 to-white border-brand-200 shadow-md translate-x-1' 
        : 'bg-white border-gray-100 hover:border-brand-200 hover:bg-gray-50 text-slate-600'
    }`}
  >
    <div className="flex items-center space-x-3">
      <div className={`p-2 rounded-lg transition-colors ${active ? 'bg-brand-100 text-brand-600' : 'bg-gray-100 text-gray-400 group-hover:text-brand-500'}`}>
        {icon}
      </div>
      <span className={`font-semibold text-sm ${active ? 'text-brand-900' : 'text-slate-600'}`}>{label}</span>
    </div>
    <div className="flex items-center space-x-3">
      {hasContent && <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>}
      {active ? <ChevronUp size={16} className="text-brand-400" /> : <ChevronDown size={16} className="text-gray-300" />}
    </div>
  </button>
);

const AIButton: React.FC<{
  loading: boolean;
  onClick: () => void;
  label?: string;
}> = ({ loading, onClick, label = "Generate with AI" }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className="flex items-center space-x-2 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
  >
    {loading ? <LoadingSpinner /> : <Sparkles size={14} />}
    <span>{label}</span>
  </button>
);

// --- Main App ---

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [reportData, setReportData] = useState<ReportData>(DEFAULT_REPORT_DATA);
  const [formatting, setFormatting] = useState<FormattingOptions>(IEEE_FORMATTING);
  const [activeSection, setActiveSection] = useState<string>('basic');
  const [isGenerating, setIsGenerating] = useState<string | null>(null);
  const [mobileTab, setMobileTab] = useState<'editor' | 'preview'>('editor');
  
  const previewRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: keyof ReportData, value: any) => {
    setReportData(prev => ({ ...prev, [field]: value }));
  };

  // Team Member Management
  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: "",
      registerNumber: ""
    };
    setReportData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, newMember]
    }));
  };

  const updateTeamMember = (id: string, field: keyof TeamMember, value: string) => {
    setReportData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map(m => m.id === id ? { ...m, [field]: value } : m)
    }));
  };

  const removeTeamMember = (id: string) => {
    if (reportData.teamMembers.length <= 1) return; // Prevent deleting last member
    setReportData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter(m => m.id !== id)
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange('flowchartImage', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDocxDownload = async () => {
    try {
      const blob = await exportDocx(reportData, formatting);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${reportData.title || 'Report'}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Failed to download DOCX:', e);
      alert('Failed to generate DOCX report. Please ensure the backend server is running.');
    }
  };

  const handleAIGenerate = async (section: keyof ReportData) => {
    setIsGenerating(section);
    try {
      const newContent = await generateSectionContent(section, reportData);
      handleInputChange(section, newContent);
    } catch (e) {
      alert("Failed to generate content. Please try again.");
    } finally {
      setIsGenerating(null);
    }
  };

  const handleAIRefine = async (section: keyof ReportData) => {
    setIsGenerating(section);
    try {
      const refined = await refineText(reportData[section] as string);
      handleInputChange(section, refined);
    } catch (e) {
      alert("Failed to refine content.");
    } finally {
      setIsGenerating(null);
    }
  };

  if (showLanding) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  // Helper to render input groups
  const renderInputSection = (
    key: string, 
    title: string, 
    icon: React.ReactNode, 
    children: React.ReactNode
  ) => {
    const isActive = activeSection === key;
    let hasContent = false;
    
    if (key === 'basic') {
        hasContent = !!(reportData.title && reportData.teamMembers[0]?.name);
    } else if (key in reportData) {
        hasContent = !!reportData[key as keyof ReportData];
    }

    return (
      <div className="mb-1">
        <SectionButton 
          label={title} 
          icon={icon} 
          active={isActive} 
          onClick={() => setActiveSection(isActive ? '' : key)} 
          hasContent={hasContent}
        />
        {isActive && (
          <div className="p-5 bg-white border border-t-0 border-gray-100 rounded-b-xl mb-4 shadow-sm animate-fade-in mx-1">
            {children}
          </div>
        )}
      </div>
    );
  };

  const renderTextArea = (field: keyof ReportData, placeholder: string, rows = 6) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border border-gray-100">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
        <div className="flex space-x-2">
           <button 
             onClick={() => handleAIRefine(field)}
             disabled={!reportData[field] || isGenerating === field}
             className="text-xs font-medium text-slate-500 hover:text-brand-600 flex items-center space-x-1 px-2 py-1.5 rounded-md hover:bg-white border border-transparent hover:border-gray-200 transition-all disabled:opacity-30"
             title="Fix grammar & tone"
           >
             <RefreshCw size={12} />
             <span>Refine</span>
           </button>
           <AIButton 
             loading={isGenerating === field} 
             onClick={() => handleAIGenerate(field)} 
             label={reportData[field] ? "Re-generate" : "Generate Draft"}
            />
        </div>
      </div>
      <textarea
        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm leading-relaxed transition-all shadow-sm hover:border-gray-300 bg-white"
        rows={rows}
        placeholder={placeholder}
        value={reportData[field] as string}
        onChange={(e) => handleInputChange(field, e.target.value)}
      />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* Mobile Tab Toggle */}
      <div className="md:hidden flex bg-white border-b border-gray-200 z-30">
        <button 
          onClick={() => setMobileTab('editor')}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center space-x-2 ${mobileTab === 'editor' ? 'text-brand-600 border-b-2 border-brand-600' : 'text-gray-500'}`}
        >
          <Edit3 size={16} /> <span>Editor</span>
        </button>
        <button 
          onClick={() => setMobileTab('preview')}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center space-x-2 ${mobileTab === 'preview' ? 'text-brand-600 border-b-2 border-brand-600' : 'text-gray-500'}`}
        >
          <Eye size={16} /> <span>Preview</span>
        </button>
      </div>

      {/* Sidebar - Controls */}
      <div className={`${mobileTab === 'editor' ? 'flex' : 'hidden'} md:flex w-full md:w-[480px] bg-white border-r border-gray-200 flex-col h-full shadow-2xl z-20 no-print`}>
        {/* Header */}
        <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-slate-900 to-brand-900 text-white shadow-md z-10 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center space-x-2 mb-1.5">
                <Diamond className="text-cyan-400 fill-cyan-400/20" size={22} />
                <h1 className="text-xl font-display font-bold tracking-tight">VairamDocs AI</h1>
              </div>
              <p className="text-cyan-100/70 text-xs font-medium pl-8">Professional Academic Suite</p>
            </div>
            
            <button 
              onClick={() => setShowLanding(true)} 
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-all border border-white/10 group"
              title="Return to Home"
            >
              <Home size={16} className="group-hover:scale-105 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-wide">Home</span>
            </button>
          </div>
        </div>

        {/* Scrollable Form Area */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-slate-50/50">
          
          {/* Formatting Settings */}
          <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
             <div className="flex items-center space-x-2 mb-4 text-slate-800 border-b border-gray-100 pb-2">
                <Settings2 size={16} className="text-brand-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider">Formatting Options</h3>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                   <label className="text-[10px] uppercase font-bold text-slate-400">Paper Size</label>
                   <select 
                    value={formatting.paperSize}
                    onChange={(e) => setFormatting({...formatting, paperSize: e.target.value as PaperSize})}
                    className="w-full text-xs p-2.5 border border-gray-200 rounded-lg bg-gray-50 hover:border-brand-300 focus:border-brand-500 transition-colors"
                   >
                     <option value={PaperSize.A4}>A4 (210x297mm)</option>
                     <option value={PaperSize.Letter}>Letter (8.5x11")</option>
                   </select>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] uppercase font-bold text-slate-400">Font Size</label>
                   <select 
                    value={formatting.fontSize}
                    onChange={(e) => setFormatting({...formatting, fontSize: e.target.value as FontSize})}
                    className="w-full text-xs p-2.5 border border-gray-200 rounded-lg bg-gray-50 hover:border-brand-300 focus:border-brand-500 transition-colors"
                   >
                     <option value={FontSize.PT_10}>10 pt (Standard)</option>
                     <option value={FontSize.PT_11}>11 pt</option>
                     <option value={FontSize.PT_12}>12 pt</option>
                   </select>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] uppercase font-bold text-slate-400">Columns</label>
                   <select 
                    value={formatting.columns}
                    onChange={(e) => setFormatting({...formatting, columns: Number(e.target.value) as 1|2})}
                    className="w-full text-xs p-2.5 border border-gray-200 rounded-lg bg-gray-50 hover:border-brand-300 focus:border-brand-500 transition-colors"
                   >
                     <option value={1}>Single Column</option>
                     <option value={2}>Two Columns (IEEE)</option>
                   </select>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] uppercase font-bold text-slate-400">Line Spacing</label>
                   <select 
                    value={formatting.lineSpacing}
                    onChange={(e) => setFormatting({...formatting, lineSpacing: e.target.value as LineSpacing})}
                    className="w-full text-xs p-2.5 border border-gray-200 rounded-lg bg-gray-50 hover:border-brand-300 focus:border-brand-500 transition-colors"
                   >
                     <option value={LineSpacing.Single}>Single (1.0)</option>
                     <option value={LineSpacing.Relaxed}>Relaxed (1.15)</option>
                     <option value={LineSpacing.Double}>Double (1.5)</option>
                   </select>
                </div>
             </div>
          </div>

          <div className="space-y-1">
            {renderInputSection('basic', 'Project & Team Details', <Users size={18} />, (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Project Title</label>
                  <input type="text" value={reportData.title} onChange={(e) => handleInputChange('title', e.target.value)} className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" placeholder="Enter Project Title" />
                </div>

                {/* Team Members List */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase">Team Members</label>
                    <button onClick={addTeamMember} className="text-xs flex items-center text-brand-600 hover:text-brand-700 font-medium">
                      <Plus size={14} className="mr-1"/> Add Member
                    </button>
                  </div>
                  <div className="space-y-3">
                    {reportData.teamMembers.map((member, index) => (
                      <div key={member.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200 relative group">
                        <div className="absolute top-2 right-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          {reportData.teamMembers.length > 1 && (
                            <button onClick={() => removeTeamMember(member.id)} className="text-red-400 hover:text-red-600 p-1 bg-white rounded-full shadow-sm">
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          <input 
                            type="text" 
                            placeholder={`Student Name ${index + 1}`}
                            value={member.name} 
                            onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)} 
                            className="w-full p-2 text-sm bg-white border border-gray-200 rounded focus:border-brand-500 outline-none" 
                          />
                           <input 
                            type="text" 
                            placeholder="Register Number"
                            value={member.registerNumber} 
                            onChange={(e) => updateTeamMember(member.id, 'registerNumber', e.target.value)} 
                            className="w-full p-2 text-xs bg-white border border-gray-200 rounded focus:border-brand-500 outline-none" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                 <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Department</label>
                  <input type="text" value={reportData.department} onChange={(e) => handleInputChange('department', e.target.value)} className="w-full p-3 border border-gray-200 rounded-lg text-sm" placeholder="e.g. Computer Science" />
                </div>
                 <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">College Name</label>
                  <input type="text" value={reportData.collegeName} onChange={(e) => handleInputChange('collegeName', e.target.value)} className="w-full p-3 border border-gray-200 rounded-lg text-sm" placeholder="Institution Name" />
                </div>
                 <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Guide Name</label>
                  <input type="text" value={reportData.guideName} onChange={(e) => handleInputChange('guideName', e.target.value)} className="w-full p-3 border border-gray-200 rounded-lg text-sm" placeholder="Dr. / Prof. Name" />
                </div>
              </div>
            ))}

            {renderInputSection('abstract', 'Abstract & Keywords', <FileText size={18} />, (
              <div className="space-y-4">
                 {renderTextArea('abstract', 'Summarize the project...')}
                 {renderTextArea('keywords', 'Key terms separated by commas...')}
              </div>
            ))}

            {renderInputSection('introduction', 'Introduction', <Layout size={18} />, renderTextArea('introduction', 'Introduce the domain, context, and motivation...'))}
            
            {renderInputSection('problemStatement', 'Problem Statement', <Layout size={18} />, renderTextArea('problemStatement', 'Define the core problem addressing...'))}
            
            {renderInputSection('objectives', 'Objectives', <Layout size={18} />, renderTextArea('objectives', 'List the primary goals of the project...'))}
            
            {renderInputSection('literatureReview', 'Literature Review', <BookOpen size={18} />, renderTextArea('literatureReview', 'Summarize existing research papers...'))}
            
            {renderInputSection('methodology', 'Methodology & Flowchart', <Settings2 size={18} />, (
              <div className="space-y-4">
                {renderTextArea('methodology', 'Explain the proposed system architecture and algorithms...')}
                
                {/* Flowchart Image Upload */}
                <div className="pt-2 border-t border-gray-100">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">System Architecture / Flowchart</label>
                  <div className="flex items-center space-x-3">
                    <label className="flex-1 cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-brand-400 hover:bg-brand-50 transition-all group">
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                      <div className="text-center">
                        <ImageIcon className="mx-auto text-gray-400 group-hover:text-brand-500 mb-1" size={24} />
                        <span className="text-xs text-gray-500 group-hover:text-brand-600">Click to upload image</span>
                      </div>
                    </label>
                    {reportData.flowchartImage && (
                      <div className="h-16 w-16 relative border rounded bg-white p-1">
                        <img src={reportData.flowchartImage} alt="Preview" className="h-full w-full object-contain" />
                        <button onClick={() => handleInputChange('flowchartImage', null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5"><Trash2 size={10}/></button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {renderInputSection('results', 'Results & Discussion', <Layout size={18} />, renderTextArea('results', 'Present the outcomes, graphs (described), and analysis...'))}
            
            {renderInputSection('conclusion', 'Conclusion', <FileText size={18} />, renderTextArea('conclusion', 'Conclude findings and final thoughts...'))}
            
            {renderInputSection('futureScope', 'Future Scope', <Sparkles size={18} />, renderTextArea('futureScope', 'Suggest potential enhancements...'))}
            
            {renderInputSection('references', 'References', <BookOpen size={18} />, renderTextArea('references', '[1] Author, "Title", Journal, Year...'))}

          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-200 bg-white relative">
            <button 
                onClick={handleDocxDownload}
                className="w-full flex items-center justify-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white py-3.5 px-4 rounded-xl shadow-lg hover:shadow-brand-500/30 transition-all font-semibold active:scale-[0.98]"
            >
                <FileDown size={20} />
                <span>Download DOCX Report</span>
            </button>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className={`${mobileTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 justify-center items-start custom-scrollbar relative print-container`}>
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="scale-[0.6] md:scale-75 lg:scale-100 origin-top transition-transform duration-200 z-10 shadow-2xl mt-4 md:mt-0">
           {/* Visual Aid for Print Margin */}
           <div className="absolute top-4 right-[-140px] no-print text-slate-400 text-xs hidden lg:flex flex-col gap-2 items-start">
             <span className="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200 font-medium">IEEE Standard</span>
           </div>
           
           <ReportPreview 
             data={reportData} 
             formatting={formatting} 
             previewRef={previewRef}
            />
        </div>
      </div>

    </div>
  );
}
export interface TeamMember {
  id: string;
  name: string;
  registerNumber: string;
  email?: string;
}

export interface ReportData {
  // Basic Details
  title: string;
  
  // Team Details
  teamMembers: TeamMember[];
  
  // Institution Details
  collegeName: string;
  department: string;
  guideName: string;
  
  // Content Sections
  abstract: string;
  keywords: string;
  introduction: string;
  problemStatement: string;
  objectives: string;
  literatureReview: string;
  methodology: string;
  
  // Visuals
  flowchartImage: string | null; // Base64 string for the image
  
  results: string;
  conclusion: string;
  futureScope: string;
  references: string;
}

export enum PaperSize {
  A4 = 'A4',
  Letter = 'Letter'
}

export enum FontSize {
  PT_10 = '10pt',
  PT_11 = '11pt',
  PT_12 = '12pt'
}

export enum LineSpacing {
  Single = '1',
  Relaxed = '1.15',
  Double = '1.5'
}

export enum MarginType {
  IEEE = 'IEEE',
  Custom = 'Custom'
}

export interface FormattingOptions {
  paperSize: PaperSize;
  fontSize: FontSize;
  lineSpacing: LineSpacing;
  marginType: MarginType;
  // Specific margins in cm
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  columns: 1 | 2;
}

export const DEFAULT_REPORT_DATA: ReportData = {
  title: "AI-DRIVEN AUTOMATION IN MODERN MANUFACTURING",
  teamMembers: [
    { id: '1', name: "Jane Doe", registerNumber: "REG12345678" }
  ],
  collegeName: "Institute of Technology & Science",
  department: "Computer Science and Engineering",
  guideName: "Dr. Alan Turing",
  abstract: "This project explores the integration of artificial intelligence in manufacturing processes...",
  keywords: "Artificial Intelligence, Manufacturing, Automation, Machine Learning, Industry 4.0",
  introduction: "The advent of Industry 4.0 has revolutionized the way we perceive manufacturing...",
  problemStatement: "Traditional manufacturing systems lack adaptability and real-time error correction...",
  objectives: "1. To design an AI model for defect detection.\n2. To implement real-time monitoring...",
  literatureReview: "[1] A. Smith, 'Future of AI', 2023.\n[2] B. Jones, 'Automation Today', 2022.",
  methodology: "The proposed system utilizes Convolutional Neural Networks (CNN) for image analysis...",
  flowchartImage: null,
  results: "The system achieved an accuracy of 98.5% in detecting defects...",
  conclusion: "In conclusion, AI-driven automation significantly reduces error rates...",
  futureScope: "Future work will focus on integrating IoT sensors for predictive maintenance...",
  references: "[1] A. Smith, 'Future of AI', IEEE Trans. Ind., vol. 1, no. 1, 2023.\n[2] B. Jones, 'Automation Today', Proc. IEEE Conf., 2022."
};

export const IEEE_FORMATTING: FormattingOptions = {
  paperSize: PaperSize.A4,
  fontSize: FontSize.PT_10,
  lineSpacing: LineSpacing.Single,
  marginType: MarginType.IEEE,
  marginTop: 1.9,
  marginBottom: 2.54,
  marginLeft: 1.9,
  marginRight: 1.9,
  columns: 2
};
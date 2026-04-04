

export interface Project {
  id: string;
  title: string;
  category: 'Marketing' | 'Dev' | 'Design';
  description: string;
  longDescription?: string; // For Popup
  client?: string;          // For Popup
  purpose?: string;         // For Popup
  image: string;
  tech?: string[];
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  image: string;
  link?: string;
  icon?: string;
}

export interface Partner {
    name: string;
    image: string; // URL to logo
    website: string;
    industry: string; // New: Industry field for partners
}

export interface OutsourceHighlight {
  company: string;
  result: string;
  cost: string;
  impact: string;
  tags: string[];
  description: string; // New description field
  status?: 'success' | 'failure'; // New: Added status to distinguish campaign types
  logos?: string[]; // Optional array of brand logos
}
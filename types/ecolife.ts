/**
 * Shared Type Definitions for EcoLife Signature Case Study (Milestone 3 / Requirement R4)
 */

export interface EcoLifeShowcaseProps {
  onOpenDetail: () => void;
  className?: string;
}

export interface EcoLifeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type EcoLifeModalTabId =
  | 'overview'
  | 'tech-pillars'
  | 'creative-media'
  | 'legal-records'
  | 'floorplans-3d';

export interface EcoLifeStatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface PillarPreviewItem {
  id: number;
  badge: string;
  title: string;
  category: string;
  tech: string[];
  metric: string;
  desc: string;
}

export interface ScopeMatrixRow {
  stt: string;
  pillar: string;
  category: string;
  techStack: string;
  metrics: string;
  impact: string;
}

export interface FloorplanUnit {
  id: string;
  code: string;
  name: string;
  areaGross: string;
  areaNet: string;
  bedrooms: string;
  bathrooms: string;
  orientation: string;
  view: string;
  highlight: string;
  imageSrc: string;
}

export interface LegalMinute {
  code: string;
  minuteNumber: string;
  legalBase: string;
  title: string;
  clientRep: {
    name: string;
    title: string;
    org: string;
  };
  agencyRep: {
    name: string;
    title: string;
    org: string;
  };
  scope: string;
  result: string;
  deliveryDate: string;
  statusBadge: string;
}

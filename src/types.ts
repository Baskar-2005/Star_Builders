export interface Project {
  id: string;
  name: string;
  tagline: string;
  location: string;
  type: 'Villa' | 'Commercial' | 'Interior' | 'Ongoing' | 'Turnkey';
  completionYear: string;
  areaSqFt: number;
  heroImage: string;
  gallery: string[];
  description: string;
  clientName: string;
  clientQuote: string;
  keyFeatures: string[];
  materialsUsed: string[];
  timelineMonths: number;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  features: string[];
  popularFor: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  avatar: string;
  projectPhoto: string;
  review: string;
  verifiedGoogle: boolean;
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  deliverables: string[];
  durationWeeks: string;
}

export interface MaterialBrand {
  category: string;
  brandName: string;
  logoText: string;
  specifications: string;
  warranty: string;
  badge: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Villas' | 'Commercial' | 'Interiors' | 'Ongoing' | 'Completed';
  location: string;
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface EstimationResult {
  estimatedCostRange: string;
  estimatedCostMin: number;
  estimatedCostMax: number;
  ratePerSqFt: number;
  estimatedDurationMonths: number;
  structuralBreakdown: { category: string; percentage: string; description: string }[];
  aiRecommendations: string[];
}

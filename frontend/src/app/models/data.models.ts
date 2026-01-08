export interface DanceStyle {
  id: number;
  name: string;
  description: string;
  suitableFor: string;
  image: string;
}

export interface Course {
  id: number;
  title: string;
  level: string;
  location: string;
  day: string;
  time: string;
  description: string;
}

export interface Performance {
  id: number;
  type: 'Solo' | 'Gruppe' | 'Workshop';
  title: string;
  description: string;
  suitableFor: string[];
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  category: 'performance' | 'training' | 'show';
}


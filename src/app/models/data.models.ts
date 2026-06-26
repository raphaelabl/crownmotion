import { Time } from "@angular/common";

export interface ContentImage{
  id: number;
  image: string;
  title: string;
  pos?: number;
}

export interface FileContent{
  id: number;
  file: string;
  title: string;
  description?: string;
}

export interface DanceStyle {
  id: number;
  name: string;
  description: string;
  suitableFor: string;
  image: ContentImage;
}

export interface Course {
  id: number;
  title: string;
  level: number;
  level_label: string;
  location: string;
  fromDate: Date;
  toDate: Date;
  weekDay: number;
  week_day_label: string;
  startTime: Time;
  durationMinutes: number;
  description: string;
  courseImage?: ContentImage;
  courseFile?: FileContent;
  price: number;
}

export interface Performance {
  id: number;
  type: 'Solo' | 'Gruppe' | 'Workshop';
  title: string;
  description: string;
  suitableFor: string[];
}

export interface Experience{
    id: number,
    fromYear: number,
    toYear: number,
    title: string,
    description: string
}

export interface ContentImage {
  id: number;
  image: string;
  title: string;
}

export interface Qualifications{
  id: number;
  year: number;
  title: string;
  description?: string;
}

export interface Registration{
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  privacy: boolean;
}
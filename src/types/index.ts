export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  location: string;
}

export interface Differential {
  icon: string;
  title: string;
  description: string;
}

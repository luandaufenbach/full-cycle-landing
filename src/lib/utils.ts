import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colors = {
  primary: '#2E7D32',
  secondary: '#4CAF50',
  accent: '#81C784',
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E0E0E0',
  },
  text: '#1F2937',
  dark: '#1B4332',
};

export const transitionDuration = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
};

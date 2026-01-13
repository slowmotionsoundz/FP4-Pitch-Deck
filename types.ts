
export interface SlideData {
  id: number;
  type: 'title' | 'divider' | 'content' | 'grid' | 'contact' | 'flow';
  title?: string;
  subtitle?: string;
  content?: string | string[];
  points?: string[];
  footer?: string;
  bgType?: 'dark' | 'orange';
  image?: string;
}

export enum SlideViewMode {
  PRESENTATION = 'PRESENTATION',
  OVERVIEW = 'OVERVIEW'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Paper {
  id: string;
  title: string;
  category: string;
  date: string;
  abstract: string;
  content: string[]; // Array of paragraphs for the full article
}

export interface StrategyPoint {
  title: string;
  value: string;
  description: string;
}
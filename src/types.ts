export interface CreativePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  technicalSpecs: { label: string; value: string }[];
  principles: string[];
  sensoryDetails?: {
    visual: string;
    tactile: string;
    temporal: string;
  };
}

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
  description: string;
  pantone?: string;
  luminance: string;
  usage: string;
}

export interface Masterwork {
  id: string;
  title: string;
  year: string;
  category: string;
  client: string;
  heroImage: string;
  aspectRatio: string;
  synopsis: string;
  curatorialQuote: string;
  materials: {
    name: string;
    shaderProperties: string;
  }[];
  cinematography: {
    lens: string;
    lightingRig: string;
    colorGrade: string;
    aspect: string;
  };
  metrics?: {
    scale: string;
    duration: string;
    medium: string;
  };
}

export type AtmosphereMode = 'obsidian' | 'titanium' | 'amber-aurora' | 'monochrome';

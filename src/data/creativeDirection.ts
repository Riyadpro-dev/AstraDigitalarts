import { CreativePillar, ColorSwatch, Masterwork } from '../types';

export const CREATIVE_CONCEPT = {
  codename: "THE MONOLITH OF PERCEPTION",
  mandate: "Metaphysical Luxury in the Digital Age",
  manifestoLead:
    "We reject the homogenized banality of algorithmic SaaS and hyper-saturated novelty. Astra Digital Arts operates at the collision of brutalist architectural stillness, high-fashion restraint, and cinematic physics.",
  narrativeCore:
    "Astra treats digital media not as ephemeral pixels, but as sculptural matter—carved out of light, density, vacuum, and time. Every composition is framed as an artifact worthy of a permanent museum archive or a bespoke private vault.",
};

export const CREATIVE_PILLARS: CreativePillar[] = [
  {
    id: "narrative",
    number: "01",
    title: "Visual Narrative",
    subtitle: "Sacred Digital Brutalism & Cosmic Stillness",
    tagline: "The artifact speaks through deliberate absence rather than noise.",
    description:
      "A journey through deep void where solitary monolithic structures emerge from darkness, illuminated only by grazing volumetric lights. The story is one of architectural reverence: digital artifacts treated with the weight, reverence, and gravity of ancient obsidian relics discovered centuries into the future.",
    technicalSpecs: [
      { label: "Narrative Arc", value: "Emergence → Revelation → Contemplation" },
      { label: "Pacing", value: "48-60 BPM breathing cadence; zero frenetic cuts" },
      { label: "Spatial Stance", value: "Low-angle heroic focal planes, monumental scale" },
      { label: "Narrative Tone", value: "Quiet authority, austere luxury, enigmatic precision" }
    ],
    principles: [
      "No decorative ornamentation without structural justification.",
      "Negative space constitutes at least 65% of any primary canvas.",
      "Tension created through extreme contrast of massive scale versus micro-detail.",
      "The artifact commands reverence through silence, never begging for attention."
    ],
    sensoryDetails: {
      visual: "Dense black voids punctured by sharp specular grazing lines.",
      tactile: "Cold honed basalt, brushed meteorite titanium, cooled volcanic glass.",
      temporal: "Glacial, intentional reveals that reward prolonged gaze."
    }
  },
  {
    id: "concept",
    number: "02",
    title: "Creative Concept",
    subtitle: "The Monolith of Perception",
    tagline: "Bridging the tactile sanctity of physical matter with infinite computational depth.",
    description:
      "At the intersection of classical Haute Joaillerie, brutalist monumentality, and spatial computing. Astra translates immaterial algorithms into tangible sensory luxury. Digital arts become physical monoliths that bend ambient light and anchor human attention in an era of fractured digital noise.",
    technicalSpecs: [
      { label: "Core Metaphor", value: "The Celestial Relic (Physical Artifact in Void)" },
      { label: "Curatorial Stance", value: "Post-digital materiality; sensory weight" },
      { label: "Audience Persona", value: "Museum curators, luxury maison directors, private collectors" },
      { label: "Studio Value Baseline", value: "$20K–$120K commissioned art direction and spatial installations" }
    ],
    principles: [
      "Physical plausibility: all light, caustic refractions, and reflections obey non-linear optical laws.",
      "Every piece feels heavy—carrying physical mass, inertia, and acoustic resonance.",
      "High luxury through scarcity and deliberate restraint."
    ]
  },
  {
    id: "typography",
    number: "03",
    title: "Typography & Hierarchies",
    subtitle: "Classical Editorial Roman vs. Engineering Precision",
    tagline: "The friction between classical monumental serif and cold surgical monospace.",
    description:
      "We pair the timeless authority of classical display roman forms (Cinzel, Cormorant Garamond) with the clinical, telemetry-grade precision of monospace annotations (JetBrains Mono). Headings evoke stone carving on Roman arches; micro-annotations evoke archival laboratory documentation.",
    technicalSpecs: [
      { label: "Display Serifs", value: "Cinzel & Cormorant Garamond (Optical sizes 48px - 110px)" },
      { label: "Editorial Subheads", value: "Cormorant Italic (300 weight, 1.4 line-height)" },
      { label: "Micro Metadata", value: "JetBrains Mono (uppercase, tracking +0.18em, 11px/13px)" },
      { label: "Body Typography", value: "Plus Jakarta Sans (low contrast, optical kerning, 16px-18px)" }
    ],
    principles: [
      "Step scale ratio of 1.333 (Perfect Fourth) for monumental hierarchy.",
      "Zero truncated titles or wrapped buttons—all labels have breathing room.",
      "Technical coordinates (lat/long, frame rates, shader parameters) anchor artistic prose.",
      "Strict prohibition of standard, generic sans-serif default stacks."
    ]
  },
  {
    id: "color",
    number: "04",
    title: "Chromatic Palette",
    subtitle: "Chiaroscuro Obsidian & Burnished Champagne",
    tagline: "Color is deployed with extreme parsimony to preserve the sanctity of the void.",
    description:
      "A palette founded on subterranean neutrals: Deep Obsidian Void (#08080A), Smoked Basalt (#121216), and Cold Titanium (#27272F). High points of illumination are struck using Burnished Champagne Gold (#C5A059) and Pale Liquid Platinum (#EDEDEF).",
    technicalSpecs: [
      { label: "Primary Void", value: "Obsidian Core (#08080A / HSL 240, 11%, 4%)" },
      { label: "Accent Radiance", value: "Burnished Champagne (#C5A059 / Pantone 871 C)" },
      { label: "Subsurface Glow", value: "Amber Embers (#E58235 at 8% opacity)" },
      { label: "High Key Metal", value: "Titanium White (#F5F5F7 / 95% reflectance)" }
    ],
    principles: [
      "No rainbow gradients or decorative purple-cyan neons.",
      "Brightness delta between background and containers kept strictly under 7%.",
      "Gold is reserved solely for focal focal points and active state engagement.",
      "Text contrast rigorously exceeds WCAG AAA standards for ambient readability."
    ]
  },
  {
    id: "materials",
    number: "05",
    title: "Materials & Tactility",
    subtitle: "High-Index Refraction & Subsurface Scattering",
    tagline: "Surfaces possess tangible temperature, friction, and optical density.",
    description:
      "Materials are physically grounded: Smoked obsidian glass with 1.54 IOR index, brushed aerospace titanium with anisotropic highlight streaks, fractured crystalline quartz with internal caustics, and molten gold with micro-surface roughness.",
    technicalSpecs: [
      { label: "Smoked Obsidian", value: "Roughness 0.04 | Transmission 0.88 | IOR 1.54" },
      { label: "Anisotropic Titanium", value: "Metallic 0.96 | Anisotropy 0.82 | Roughness 0.22" },
      { label: "Liquid Champagne Gold", value: "Metallic 1.0 | Specular 0.95 | Micro-bump 0.01" },
      { label: "Acoustic Dampening", value: "Matte basalt coating absorbing 98% ambient glare" }
    ],
    principles: [
      "Every digital object looks as if it could be picked up, cold to the touch.",
      "Subsurface scattering gives black materials organic depth rather than flat deadness.",
      "Edge highlights define silhouette geometries without needing artificial borders."
    ]
  },
  {
    id: "lighting",
    number: "06",
    title: "Lighting & Atmosphere",
    subtitle: "Volumetric Chiaroscuro & Anamorphic Grazing",
    tagline: "Light is treated as a sculpting knife cutting through volumetric fog.",
    description:
      "Shadows are deep and velvety, never washed out. Single-source key lighting rakes across textures at steep 15-degree grazing angles, emphasizing micro-reliefs, tool marks, and crystal inclusions. Atmospheric dust motes drift lazily through beam paths.",
    technicalSpecs: [
      { label: "Key Light Rig", value: "Single directional spot with 2.8° barn-door cutoff" },
      { label: "Fill Ratio", value: "1:8 extreme contrast chiaroscuro" },
      { label: "Atmosphere", value: "Volumetric ray scattering at 0.012 density" },
      { label: "Lens Characteristics", value: "35mm Anamorphic with horizontal oval bokeh and blue-gold flares" }
    ],
    principles: [
      "Light always originates from a plausible physical or celestial vector.",
      "Avoid omnidirectional, flat 'SaaS card' drop shadows.",
      "Film grain (35mm ISO 200 simulation) bridges computational pixels to cinematic film."
    ]
  },
  {
    id: "motion",
    number: "07",
    title: "Motion & Physics Language",
    subtitle: "Damped Inertia & Gravitational Weight",
    tagline: "Speed is cheap; mass, momentum, and deliberate deceleration are luxurious.",
    description:
      "Interfaces and 3D scenes operate with hydraulic resistance. We use custom damped springs with high mass coefficients. Rapid snappy animations are banned in favor of graceful, monumental decelerations that feel like moving a solid vault door.",
    technicalSpecs: [
      { label: "Spring Physics", value: "Mass 1.4 | Stiffness 110 | Damping 24" },
      { label: "Easing Profile", value: "Cubic-bezier(0.16, 1, 0.3, 1) — High impulse, glacial settle" },
      { label: "Frame Cadence", value: "Sub-sampled 120 FPS interpolation with micro-motion blur" },
      { label: "Audio Sync", value: "Low-frequency tactile sub-harmonics tied to displacement" }
    ],
    principles: [
      "No bouncy 'playful' springs. Movement conveys stone, glass, and steel.",
      "Hover interactions alter illumination vectors rather than just moving coordinates.",
      "Transitions behave as continuous architectural transformations, never abrupt cuts."
    ]
  },
  {
    id: "emotion",
    number: "08",
    title: "Emotional Experience",
    subtitle: "Sacred Awe & Subterranean Sanctity",
    tagline: "Elevating the visitor from casual consumer to reverent spectator.",
    description:
      "The ultimate objective is psychological transformation. The patron feels they have crossed a threshold into an underground sanctum or a cathedral of pure light. The interface instills a sense of stillness, exclusivity, and enduring permanence.",
    technicalSpecs: [
      { label: "Psychological State", value: "Contemplative reverence, intellectual calm" },
      { label: "Dwell Target", value: "4.8+ minutes continuous immersion" },
      { label: "Sensory Overload Index", value: "Zero (BPM normalized to resting pulse)" },
      { label: "Archival Permanence", value: "Cryptographic certificate of authenticity codex" }
    ],
    principles: [
      "The client never feels hurried or pushed through a typical marketing funnel.",
      "Every touchpoint reinforces scarcity, exclusivity, and master craftsmanship.",
      "The work leaves an indelible psychological imprint of monumental silence."
    ]
  }
];

export const COLOR_SWATCHES: ColorSwatch[] = [
  {
    name: "Obsidian Core",
    hex: "#08080A",
    role: "Primary Void Canvas",
    description: "Polished volcanic glass void absorbing 97.6% of ambient light.",
    pantone: "Black 6 C",
    luminance: "2.4%",
    usage: "Full-bleed background canvases, deep shadows, and monolithic mass."
  },
  {
    name: "Basalt Monolith",
    hex: "#121216",
    role: "Secondary Structural Surfaces",
    description: "Honed basalt architectural slab with subtle subsurface scattering.",
    pantone: "Black 7 C",
    luminance: "6.8%",
    usage: "Elevated pedestals, card containers, and structural divider blocks."
  },
  {
    name: "Cold Titanium",
    hex: "#27272F",
    role: "Micro-Borders & Hairline Guides",
    description: "Aerospace brushed titanium alloy providing anisotropic edge sheen.",
    pantone: "Cool Gray 11 C",
    luminance: "18.2%",
    usage: "1px hairline borders, telemetry dividers, and badge boundaries."
  },
  {
    name: "Burnished Champagne",
    hex: "#C5A059",
    role: "Sacred Accent & Key Light Highlights",
    description: "Warm reflective gold dust evoking classical horological balance.",
    pantone: "Pantone 871 C Metallic",
    luminance: "84.5%",
    usage: "Primary interactive triggers, active tabs, and specular focal points."
  },
  {
    name: "Liquid Platinum",
    hex: "#EDEDEF",
    role: "Primary Display Typography",
    description: "Diamond dust reflection ensuring crisp contrast without eye strain.",
    pantone: "Silver 10077 C",
    luminance: "94.0%",
    usage: "Display headings, monumental titles, and telemetry coordinates."
  }
];

export const MASTERWORKS: Masterwork[] = [
  {
    id: "chronos-monolith",
    title: "Chronos Monolith — The Architecture of Time",
    year: "2025",
    category: "Kinetic Digital Sculpture & Spatial Installation",
    client: "Audemars Piguet × Geneva Watchmaking Grand Prix",
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=90",
    aspectRatio: "2.39:1",
    synopsis:
      "A monumental digital sculpture constructed from 36 interlocking liquid titanium rings that rotate according to gravitational lunar tides. Commissioned for the Geneva Watchmaking Grand Prix to inaugurate the Haute Horlogerie contemporary wing.",
    curatorialQuote:
      "“Astra created an artifact that feels both ten thousand years old and from a civilization centuries ahead of our own.”",
    materials: [
      { name: "Anisotropic Titanium", shaderProperties: "Metallic 0.98 | Roughness 0.18 | Anisotropy 0.85" },
      { name: "Liquid Black Mercury", shaderProperties: "Viscosity 1.8 | Surface Tension 0.92 | IOR 2.40" },
      { name: "Smoked Sapphire Crystal", shaderProperties: "Transmission 0.94 | Dispersion Abbe 58" }
    ],
    cinematography: {
      lens: "Cooke Anamorphic /i 40mm T2.3",
      lightingRig: "Low-raking 1200W HMI spotlight with custom brass gobo",
      colorGrade: "Kodak 5219 Vision3 emulation with crushed silver shadows",
      aspect: "2.39:1 CinemaScope"
    },
    metrics: {
      scale: "12.4m High Digital Monolith",
      duration: "Continuous Generative Cycle (No Loops)",
      medium: "Realtime 8K Unreal 5 + Custom Spatial Audio Rig"
    }
  },
  {
    id: "solaris-singularity",
    title: "Solaris Singularity — The Gravitational Lens",
    year: "2026",
    category: "Astronomical Spatial Light Sculpture",
    client: "Fondation Beyeler × European Southern Observatory",
    heroImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1800&q=90",
    aspectRatio: "2.39:1",
    synopsis:
      "An 8-meter optical disc of forged obsidian and aerogel crystal generating an artificial gravitational microlens. Photonic caustics refract ambient museum light according to Einsteinian field equations, producing an event horizon of liquid amber radiation.",
    curatorialQuote:
      "“A terrifyingly beautiful convergence of general relativity, optical precision, and spiritual silence.”",
    materials: [
      { name: "Forged Aerogel Crystal", shaderProperties: "Transmission 0.98 | IOR 1.02 | Rayleigh Scattering 0.4" },
      { name: "Blackbody Radiance Core", shaderProperties: "Emission 9400 nits | Temp 3200K | Thermal Luminance Map" },
      { name: "Zero-Dispersion Diamond Glass", shaderProperties: "Abbe Number 68 | Specular Micro-Facet GGX 0.02" }
    ],
    cinematography: {
      lens: "Zeiss Supreme Prime 21mm T1.5",
      lightingRig: "High-contrast Grazing Fresnel 5K with cryogenic beam collimator",
      colorGrade: "Kodak Double-X Pan 5222 tone curve with liquid amber core",
      aspect: "2.39:1 CinemaScope"
    },
    metrics: {
      scale: "8.2m Suspended Orbital Ring",
      duration: "Continuous Stellar Gravimetry Feed",
      medium: "Realtime 12K Volumetric Raymarching + Gravitational Sim"
    }
  },
  {
    id: "elysium-veil",
    title: "Elysium Veil — Spatial Fabric of Memory",
    year: "2025",
    category: "Haute Couture Generative Environment",
    client: "Venice Biennale of Architecture & Maison Margiela",
    heroImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1800&q=90",
    aspectRatio: "2.39:1",
    synopsis:
      "An ethereal spatial pavilion composed of millions of microscopic digital silk threads reacting to biometric heartbeats of visitors entering the sanctum. Light bends through the fibers like moonlight through oceanic fog.",
    curatorialQuote:
      "“A transcendent manifestation of digital luxury—silence transformed into physical space.”",
    materials: [
      { name: "Micro-Woven Photonic Silk", shaderProperties: "Subsurface Scattering 0.8 | Sheen 0.92" },
      { name: "Cold Basalt Pavement", shaderProperties: "Roughness 0.88 | Ambient Occlusion 0.76" },
      { name: "Volumetric Mist", shaderProperties: "Absorption 0.04 | Scattering Anisotropy 0.6" }
    ],
    cinematography: {
      lens: "Arri Master Prime 27mm T1.3",
      lightingRig: "Soft overhead diffuse skylight with filtered atmospheric fog",
      colorGrade: "Monochrome Platinum with warm champagne highlights",
      aspect: "2.39:1 CinemaScope"
    },
    metrics: {
      scale: "450 sqm Spatial Pavilion",
      duration: "Realtime Interactive Biometric Responsive",
      medium: "Spatial LiDAR + Custom Multi-Channel Fluid Simulation"
    }
  },
  {
    id: "lacrimosa-monolith",
    title: "Lacrimosa No. 9 — The Acoustic Monolith",
    year: "2025",
    category: "Harmonic Kinetic Resonance Pavilion",
    client: "Philharmonie de Paris × IRCAM",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=90",
    aspectRatio: "2.39:1",
    synopsis:
      "Ninety-six ultra-dense acoustic carbon-fiber slabs suspended in an elliptical chamber. The monoliths oscillate at sub-audible infrasound frequencies (14–32 Hz), translating choral polyphony into physical standing ripples across dark ferrofluid reflecting pools.",
    curatorialQuote:
      "“You do not merely see the sculpture; you feel the cathedral of sound physically compressing your ribcage.”",
    materials: [
      { name: "Acoustically Honed Carbon Fiber", shaderProperties: "Density 1.82 g/cm³ | Acoustic Damping 0.002" },
      { name: "Viscous Magnetic Ferrofluid", shaderProperties: "Magnetic Susceptibility 4.2 | Dynamic Viscosity 1.95" },
      { name: "Brushed Gunmetal Resonators", shaderProperties: "Metallic 0.95 | Frequency Texture 24kHz" }
    ],
    cinematography: {
      lens: "Angénieux Optimo 28-76mm T2.6",
      lightingRig: "Diffuse sodium-vapor monochromatic wash with low raking sidelight",
      colorGrade: "Hyper-crushed deep indigo & brushed silver tonality",
      aspect: "2.39:1 CinemaScope"
    },
    metrics: {
      scale: "620 sqm Elliptical Sound Chamber",
      duration: "Algorithmic 96-Channel Generative Infrasound",
      medium: "Sub-Bass Infrasonic Actuators + Realtime Waveguide Simulation"
    }
  },
  {
    id: "aethelgard-core",
    title: "Aethelgard Core — The Obsidian Reliquary",
    year: "2026",
    category: "Autonomous Spatial Sculpture",
    client: "Fondation Cartier pour l'art contemporain",
    heroImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1800&q=90",
    aspectRatio: "2.39:1",
    synopsis:
      "A floating hexagonal prism of obsidian stone harboring a core of pulsating molten gold. The sculpture responds to cosmic radiation sensor feeds from the European Space Agency, translating stellar phenomena into tactile physical light shifts.",
    curatorialQuote:
      "“The piece commands total silence in the gallery. It possesses an intimidating, sacred presence.”",
    materials: [
      { name: "Natural Volcanic Obsidian", shaderProperties: "Roughness 0.05 | Concoidal Fracture Map" },
      { name: "Molten 24K Gold Embers", shaderProperties: "Emission 8500 nits | Blackbody 2400K" },
      { name: "Anti-Reflective Museum Glazing", shaderProperties: "Specular 0.01 | Reflection 0.2%" }
    ],
    cinematography: {
      lens: "Leica Summilux-C 50mm T1.4",
      lightingRig: "Single narrow beam with rim light reflection bounce",
      colorGrade: "Deep obsidian chiaroscuro with intense amber core",
      aspect: "2.39:1 CinemaScope"
    },
    metrics: {
      scale: "3.8m Levitation Installation",
      duration: "Perpetual ESA Satellite Groundfeed",
      medium: "Direct Stellar Telemetry + Volumetric Light Projection"
    }
  },
  {
    id: "hyperion-chrysalis",
    title: "Hyperion Chrysalis — The Bioluminescent Archive",
    year: "2026",
    category: "Cybernetic Scenography & Algorithmic Growth",
    client: "Mori Art Museum Tokyo × teamLab Void",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
    aspectRatio: "2.39:1",
    synopsis:
      "A cybernetic chrysalis suspended inside a subterranean chamber, grown from mathematical L-systems and neural mycelium simulations. Over 40,000 algorithmic crystalline tendrils pulse with cold cyan and platinum bioluminescence, reacting to ambient seismic tremors along the Tokyo fault line.",
    curatorialQuote:
      "“A glimpse into synthetic biology where digital architecture breathes with organic fragility.”",
    materials: [
      { name: "Photonic Polymer Tendrils", shaderProperties: "Subsurface Absorption 0.72 | Internal Emission 4200 nits" },
      { name: "Chilled Bismuth Alloy Shell", shaderProperties: "Thin-Film Interference | IOR 2.15" },
      { name: "Cold Cathode Nitrogen Chambers", shaderProperties: "Atmospheric Glow 0.35 | Gas Discharge Radiance" }
    ],
    cinematography: {
      lens: "Canon K35 Vintage Prime 35mm T1.3",
      lightingRig: "Internal fiber-optic self-illumination with ambient charcoal fill",
      colorGrade: "Fuji Eterna 500T with cold cyan & platinum bioluminescent grading",
      aspect: "2.39:1 CinemaScope"
    },
    metrics: {
      scale: "14.6m Subterranean Spiral Structure",
      duration: "Live Tokyo Seismograph Velocity Trigger",
      medium: "40,000 Discrete Algorithmic Tendril Nodes + Micro-LiDAR"
    }
  },
  {
    id: "orion-reliquary",
    title: "The Orion Reliquary — Monolith of the Deep Void",
    year: "2026",
    category: "Haute Horlogerie Spatial Kinetic Vault",
    client: "Vacheron Constantin × Musée d'Art et d'Histoire Genève",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
    aspectRatio: "2.39:1",
    synopsis:
      "A monolithic vault of unpolished meteoritic iron encasing a tourbillon movement measuring the cosmic drift of the Orion constellation over a 26,000-year precession cycle. Laser interferometers cast microscopic celestial star maps across the museum floor in real time.",
    curatorialQuote:
      "“An altar consecrated to deep time, dwarfing the brevity of human existence.”",
    materials: [
      { name: "Gibeon Meteorite Iron", shaderProperties: "Widmanstätten Etch Pattern | Anisotropic Iron-Nickel" },
      { name: "18K White Gold Escapement", shaderProperties: "Specular Reflection 0.96 | Polished Bevels 0.05" },
      { name: "Optical Sapphire Laser Prisms", shaderProperties: "Total Internal Reflection 0.99 | Dispersion Abbe 60" }
    ],
    cinematography: {
      lens: "Leica Noctilux-M 50mm f/0.95 ASPH",
      lightingRig: "Micro-collimated laser grazing with razor-thin volumetric split",
      colorGrade: "Monochrome Platinum with microscopic 24K gold specular accents",
      aspect: "2.39:1 CinemaScope"
    },
    metrics: {
      scale: "5.5-Tonne Meteoritic Iron Monolith",
      duration: "26,000-Year Astronomical Precession Cycle",
      medium: "Laser Interferometry Mapping + Mechanical Escapement Engine"
    }
  },
  {
    id: "umbra-obelisk",
    title: "Umbra Obelisk — The Monolith of Pure Absence",
    year: "2025",
    category: "Brutalist Spatial Light Absorption Monument",
    client: "Serpentine Galleries London × Royal Institute of British Architects",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=90",
    aspectRatio: "2.39:1",
    synopsis:
      "A 10-meter obelisk coated in super-black carbon nanotube coatings that absorb 99.965% of visible light, standing inside a blinding white gallery rotunda. As spectators approach, directional ultrasound creates localized acoustic voids, eliminating all ambient sound within 2 meters.",
    curatorialQuote:
      "“It looks like a hole cut out of reality itself. A silence so profound it becomes physical weight.”",
    materials: [
      { name: "Vantablack Carbon Nanotubes", shaderProperties: "Absorption 99.965% | Zero Specular Reflection" },
      { name: "Acoustic Destructive Null Arrays", shaderProperties: "Active Sound Cancellation -42dB Infrasonic" },
      { name: "Honed Carrara Marble Rotunda", shaderProperties: "Diffuse Albedo 0.92 | Matte Finish" }
    ],
    cinematography: {
      lens: "Cooke S4/i 32mm T2.0",
      lightingRig: "360-degree perimeter high-key cyclorama with razor-sharp shadow cutoff",
      colorGrade: "Extreme Chiaroscuro 1000:1 Contrast Ratio",
      aspect: "2.39:1 CinemaScope"
    },
    metrics: {
      scale: "10.0m Vertical Obelisk",
      duration: "Permanent Public Scenography",
      medium: "Super-Black Nanotech Coating + Directional Ultrasound Null Arrays"
    }
  }
];

export const TYPOGRAPHY_SPECIMENS = [
  {
    role: "Hero Monolith Display",
    font: "Cinzel (Roman Lapidary Display)",
    weight: "700 Heavy",
    sample: "THE MONOLITH OF PERCEPTION",
    usage: "Flagship headlines, monumental entrance titles, sacred statements."
  },
  {
    role: "Curatorial Editorial Voice",
    font: "Cormorant Garamond (Classical Venetian Serif)",
    weight: "300 Light Italic",
    sample: "“Silence is not an emptiness, but the ultimate density of intention.”",
    usage: "Curatorial statements, artistic manifestos, philosophical footnotes."
  },
  {
    role: "Technical Telemetry & Parameters",
    font: "JetBrains Mono (Precision Engineering Monospace)",
    weight: "400 Regular / Uppercase",
    sample: "COORD: 46°12'09\"N 06°08'44\"E // IOR: 1.54 // FPS: 120.00 // SHUTTER: 180°",
    usage: "Shader metrics, camera logs, spatial dimensions, metadata badges."
  },
  {
    role: "Primary Editorial Body Text",
    font: "Plus Jakarta Sans (Architectural Sans)",
    weight: "300 Light & 400 Regular",
    sample: "Astra treats computational graphics not as disposable novelty, but as permanent physical matter.",
    usage: "Expository dossiers, project documentation, client commissioning dialogs."
  }
];

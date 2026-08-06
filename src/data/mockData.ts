import { Project, Service, Testimonial, ProcessStage, MaterialBrand, GalleryItem } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ocean-pearl-villa',
    name: 'Ocean Pearl Villa',
    tagline: 'Contemporary Coastal Luxury Residence',
    location: 'ECR Highway, Puducherry',
    type: 'Villa',
    completionYear: '2024',
    areaSqFt: 4800,
    heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A masterpiece of coastal modern architecture overlooking the Bay of Bengal in Puducherry. Designed with high cantilever decks, double-height glass glazing, teakwood louvers, and a temperature-controlled infinity plunge pool.',
    clientName: 'Dr. S. Rajendran',
    clientQuote: 'Star Builders turned our dream coastal land into an architectural icon. Every visitor is amazed by the structural precision and lighting.',
    keyFeatures: [
      'Double-height ceiling living hall with motorized glass panels',
      'Private infinity plunge pool with teakwood deck',
      'Smart home automation for lighting, climate, and security',
      'Anti-corrosive marine grade TMT steel structure'
    ],
    materialsUsed: ['Tata Tiscon Superduct TMT', 'UltraTech Weather Plus Cement', 'Kajaria Grandeur Italian Tiles', 'Fenesta German UPVC Windows'],
    timelineMonths: 14,
    status: 'Completed'
  },
  {
    id: 'maple-residency',
    name: 'Maple Residency',
    tagline: 'Modern Minimalist Family Haven',
    location: 'Lawspet, Pondicherry',
    type: 'Villa',
    completionYear: '2023',
    areaSqFt: 3600,
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designed around an indoor open-to-sky courtyard with lush tropical planters. Blends traditional Pondicherry French-colonial elegance with sharp modern lines.',
    clientName: 'Er. V. Anand & Family',
    clientQuote: 'Delivered 2 weeks ahead of our housewarming date! Star Builders is the gold standard for commitment and quality in Puducherry.',
    keyFeatures: [
      'Zen indoor courtyard with water cascade feature',
      'Solar grid power pre-wired roof terrace',
      'Custom Burma teakwood entrance door',
      'Insulated acoustic walls for zero road noise'
    ],
    materialsUsed: ['ACC Concrete', 'Finolex FRLSH Wiring', 'Kohler Sanitary Ware', 'Asian Paints Royale Aspira'],
    timelineMonths: 11,
    status: 'Completed'
  },
  {
    id: 'galaxy-heights',
    name: 'Galaxy Heights',
    tagline: 'Ultra-Modern Commercial Plaza',
    location: 'Mission Street, Puducherry',
    type: 'Commercial',
    completionYear: '2023',
    areaSqFt: 12500,
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A 5-story prime commercial hub featuring structural silicone curtain glazing, high-speed capsule elevator, basement parking, and zero-loss solar rooftop power generation.',
    clientName: 'Galaxy Commercial Holdings',
    clientQuote: 'Flawless execution from structural approval to final handover. Occupancy was 100% booked within 30 days of completion.',
    keyFeatures: [
      'Low-E insulated structural glass facade',
      'Basement automated car parking system',
      '100% power backup with silent generator enclosure',
      'Fire suppression system compliant with NBC codes'
    ],
    materialsUsed: ['Jindal Steel Columns', 'Saint-Gobain Solar Control Glass', 'Schindler Elevator System', 'Havells Commercial Lighting'],
    timelineMonths: 18,
    status: 'Completed'
  },
  {
    id: 'sunrise-enclave',
    name: 'Sunrise Enclave',
    tagline: 'Signature Luxury Duplex Community',
    location: 'White Town, Puducherry',
    type: 'Ongoing',
    completionYear: '2025',
    areaSqFt: 5200,
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An ongoing prestige project in the heart of White Town, Puducherry. Combines French heritage archways with contemporary luxury interiors and cantilevered sky gardens.',
    clientName: 'K. Meenakshi & S. Sundaram',
    clientQuote: 'We track weekly construction progress through live WhatsApp video updates and Star Builders site reports. Transparent and reassuring!',
    keyFeatures: [
      'Heritage French facade restored with modern concrete core',
      'Rooftop Jacuzzi lounge and barbecue garden',
      'Evaporative passive cooling building orientation',
      'Biometric access and perimeter laser security'
    ],
    materialsUsed: ['Tata Tiscon TMT', 'UltraTech Super', 'Somany Slip-shield Tiles', 'Grohe Fittings'],
    timelineMonths: 12,
    status: 'Ongoing'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    subtitle: 'Custom Dream Homes & Duplexes',
    iconName: 'Home',
    description: 'Building beautiful, earthquake-resistant homes that last for generations. Complete foundation to roof delivery tailored to your family needs.',
    features: ['100% Custom Floor Plans', 'Vastu Compliant Architecture', 'Strict On-Time Guarantee', '10-Year Structural Guarantee'],
    popularFor: 'Individual House Construction in Puducherry & ECR',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'luxury-villas',
    title: 'Luxury Villas',
    subtitle: 'Bespoke High-End Mansions',
    iconName: 'Sparkles',
    description: 'Premium villas engineered for modern living with floor-to-ceiling glass, infinity pools, private terraces, and automated smart features.',
    features: ['Double-Height Ceilings', 'Private Swimming Pools', 'Landscape Garden Design', 'Smart Home Integration'],
    popularFor: 'Beachfront Villas & Gated Communities',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    subtitle: 'Plazas, Offices & Showrooms',
    iconName: 'Building2',
    description: 'Smart, functional, and future-ready commercial spaces designed to maximize rentable square footage and impress corporate clients.',
    features: ['Glass Curtain Facades', 'Basement Parking Design', 'Fire & Safety NBC Compliance', 'High-Speed Lift Provisions'],
    popularFor: 'Retail Showrooms, IT Parks & Clinics',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    subtitle: '3D Visualized Interior Luxury',
    iconName: 'Palette',
    description: 'Stylish, ergonomic interior concepts crafted by experienced interior architects. Includes modular kitchens, wardrobes, ceiling lighting, and furniture.',
    features: ['3D Photorealistic Renders', 'Factory-Finish Modular Kitchens', 'Custom Lighting Concept', 'Acoustic Panel Treatments'],
    popularFor: 'Turnkey Villa & Apartment Interiors',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'renovation',
    title: 'Renovation & Restructuring',
    subtitle: 'Revitalize Existing Properties',
    iconName: 'Wrench',
    description: 'Transforming old or inherited structures into contemporary architectural icons with structural retrofitting and modern aesthetic upgrades.',
    features: ['Structural Load Testing', 'French Heritage Restoration', 'Floor Addition & Expansion', 'Waterproofing Overhaul'],
    popularFor: 'Heritage Villa Upgrades in White Town',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'turnkey',
    title: 'Turnkey Projects',
    subtitle: 'End-to-End Stress-Free Building',
    iconName: 'KeyRound',
    description: 'From initial soil testing and approval drawings to handover with keys in hand. We manage every detail, budget, labor, and quality check.',
    features: ['Fixed Cost Contract', 'Single Point Contact Engineer', 'Daily Digital Progress Updates', 'Zero Hidden Cost Guarantee'],
    popularFor: 'NRIs & Busy Professionals',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Consultation',
    subtitle: 'Understanding Your Vision',
    icon: 'MessageSquare',
    description: 'Initial meeting to discuss your dream layout, family requirements, plot orientation, budget targets, and timeline expectations.',
    deliverables: ['Client Expectation Checklist', 'Initial Budget Estimate', 'Site Survey Plan'],
    durationWeeks: '1 Week'
  },
  {
    step: '02',
    title: 'Planning',
    subtitle: 'Feasibility & Soil Survey',
    icon: 'Compass',
    description: 'Comprehensive soil bearing capacity test, boundary digital survey, and plot Vastu analysis to prepare structural baseline.',
    deliverables: ['Soil Testing Report', 'Vastu Orientation Chart', 'Cost Allocation Matrix'],
    durationWeeks: '1 - 2 Weeks'
  },
  {
    step: '03',
    title: 'Architecture & 3D',
    subtitle: 'Visualizing Every Corner',
    icon: 'PenTool',
    description: 'Our senior architects create 2D floor plans, 3D exterior elevations, and photorealistic walkthroughs until you approve every detail.',
    deliverables: ['2D Architectural Blueprints', '3D Photorealistic Views', 'Electrical & Plumbing Schematics'],
    durationWeeks: '2 - 3 Weeks'
  },
  {
    step: '04',
    title: 'Government Approval',
    subtitle: 'Hassle-Free Plan Sanctions',
    icon: 'FileCheck',
    description: 'We handle all documentation and plan sanction submissions with Puducherry Planning Authority (PPA) / Local Municipalities.',
    deliverables: ['PPA Approved Drawing Copy', 'Building Permission Certificate', 'Structural Design Sign-off'],
    durationWeeks: '3 - 4 Weeks'
  },
  {
    step: '05',
    title: 'Foundation',
    subtitle: 'Engineered Strength',
    icon: 'Layers',
    description: 'Excavation, anti-termite ground treatment, RCC footing, column starter placement, and plinth beam construction.',
    deliverables: ['Anti-Termite Warranty Card', 'Concrete Cube Strength Test', 'Plinth Beam Clearance'],
    durationWeeks: '4 - 6 Weeks'
  },
  {
    step: '06',
    title: 'Construction',
    subtitle: 'Superstructure Building',
    icon: 'Hammer',
    description: 'Brickwork masonry, RCC column casting, slab shuttering, steel binding, and concrete pouring with mechanical vibrators.',
    deliverables: ['Slab Steel Binding Quality Certificate', 'Curing Supervision Log', 'Brick Masonry Alignment Check'],
    durationWeeks: '12 - 16 Weeks'
  },
  {
    step: '07',
    title: 'Interior & Finishes',
    subtitle: 'Crafting Elegance',
    icon: 'Palette',
    description: 'Plastering, tile flooring installation, electrical wiring, plumbing concealed piping, UPVC window fitting, and wall painting.',
    deliverables: ['Water Pressure Test Log', 'Electrical Insulation Check', 'Modular Furniture Installation'],
    durationWeeks: '8 - 10 Weeks'
  },
  {
    step: '08',
    title: 'Quality Check',
    subtitle: '150-Point Inspection',
    icon: 'ShieldCheck',
    description: 'Rigorous 150-point quality auditing covering door alignments, tile hollow sound test, plumbing leaks, and paint sheen finish.',
    deliverables: ['150-Point Audit Report', 'Snag List Rectification Certificate', 'Deep Cleaning Clearance'],
    durationWeeks: '1 - 2 Weeks'
  },
  {
    step: '09',
    title: 'Handover',
    subtitle: 'Welcome To Your Dream Home',
    icon: 'Key',
    description: 'Grand housewarming handover ceremony with golden key presentation, warranty documentation folder, and maintenance guide.',
    deliverables: ['Key Set in Star Builders Case', '10-Year Structural Warranty', 'As-Built Drawings Folder'],
    durationWeeks: 'Day of Celebration'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Gayi Teekook',
    role: 'Villa Owner',
    location: 'Shanthi Nagar, Puducherry',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectPhoto: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    review: 'Star Builders works are professional and they have skilled workforce specialized in their field. We are completely satisfied with their price, time schedule, and structural quality.',
    verifiedGoogle: true
  },
  {
    id: 't2',
    name: 'Amrutha & Sridhar',
    role: 'Homeowners',
    location: 'Lawspet, Pondicherry',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    projectPhoto: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    review: 'One of the best Constructors in Puducherry is absolutely STAR BUILDERS. Finished our project on time. Very friendly to the client with total material transparency.',
    verifiedGoogle: true
  },
  {
    id: 't3',
    name: 'Manoj B',
    role: 'Commercial Property Investor',
    location: 'Mission Street, Puducherry',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectPhoto: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    review: 'Great experience. On time delivery of service, clear itemized billing with zero hidden costs. Highly recommend them for commercial and high-end residential builds.',
    verifiedGoogle: true
  }
];

export const MATERIAL_BRANDS: MaterialBrand[] = [
  {
    category: 'Structural Steel',
    brandName: 'Tata Tiscon Superduct TMT',
    logoText: 'TATA TISCON',
    specifications: 'Fe-550D grade high-ductility corrosion resistant TMT bars',
    warranty: 'Tested for coastal salt-air anti-corrosion',
    badge: 'Premium Grade',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'Cement & Concrete',
    brandName: 'UltraTech & ACC Super',
    logoText: 'UltraTech',
    specifications: 'Micro-fine particles for dense water-impermeable concrete matrix',
    warranty: '53 Grade PPC / OPC certified',
    badge: 'High Performance',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'Flooring & Marble',
    brandName: 'Kajaria Grandeur & Somany',
    logoText: 'Kajaria',
    specifications: '800x1600mm vitrified large format slabs with stain-resistance',
    warranty: 'Zero water absorption vitrified',
    badge: 'Luxury Finish',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'Electrical Wiring',
    brandName: 'Finolex & Havells FRLSH',
    logoText: 'Finolex',
    specifications: 'Flame Retardant Low Smoke Zero Halogen 99.9% pure copper cables',
    warranty: 'IS 694 Certified Electrical Safety',
    badge: 'Safety Certified',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'Sanitary Fixtures',
    brandName: 'Kohler & Jaquar Artize',
    logoText: 'KOHLER',
    specifications: 'Thermostatic rain showers, wall-hung anti-bacterial closets',
    warranty: '10 Years Manufacturer Warranty',
    badge: 'Designer Collection',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'Paints & Coating',
    brandName: 'Asian Paints Royale Aspira',
    logoText: 'Asian Paints',
    specifications: 'Teflon surface protector with 7-year anti-fungal exterior guard',
    warranty: '7 Years Weather Proof Guarantee',
    badge: 'Eco-Friendly',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Ocean Pearl Grand Elevation',
    category: 'Villas',
    location: 'ECR, Puducherry',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape'
  },
  {
    id: 'g2',
    title: 'French Heritage Inspired Hall',
    category: 'Interiors',
    location: 'White Town, Puducherry',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait'
  },
  {
    id: 'g3',
    title: 'Galaxy Commercial Curtain Wall',
    category: 'Commercial',
    location: 'Mission Street',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square'
  },
  {
    id: 'g4',
    title: 'Maple Residency Courtyard',
    category: 'Villas',
    location: 'Lawspet, Pondicherry',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape'
  },
  {
    id: 'g5',
    title: 'Custom Teak & LED Staircase',
    category: 'Interiors',
    location: 'Shanthi Nagar',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait'
  },
  {
    id: 'g6',
    title: 'Sunrise Enclave Duplex Underway',
    category: 'Ongoing',
    location: 'White Town',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square'
  },
  {
    id: 'g7',
    title: 'Contemporary Kitchen Design',
    category: 'Interiors',
    location: 'Lawspet',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape'
  },
  {
    id: 'g8',
    title: 'Luxury Villa Night Illumination',
    category: 'Completed',
    location: 'Puducherry Coast',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape'
  }
];

export const COMPARISON_POINTS = [
  { feature: 'Quality & Concrete', others: 'Standard Grade 20 Concrete', star: 'M25/M30 Machine Mix Concrete' },
  { feature: 'Construction Timeline', others: 'Frequent Delays & Unclear Dates', star: 'On-Time Guarantee with Penalty Clause' },
  { feature: 'Price & Material Transparency', others: 'Hidden Costs & Unspecified Brands', star: '100% Itemized Billing & Branded Specs' },
  { feature: 'Client Communication', others: 'Irregular Verbal Updates', star: 'Weekly Digital Reports & Live Video Logs' },
  { feature: 'Structural Steel', others: 'Unbranded Local Steel', star: 'Tata Tiscon / JSW Fe-550D TMT Steel' },
  { feature: 'Structural Warranty', others: 'No Written Warranty', star: 'Up to 10-Year Written Structural Warranty' },
  { feature: 'Safety & Approval', others: 'Basic Sanction Plan', star: 'Full PPA Approval & NBC Compliance' }
];

export const FAQS_DATA = [
  {
    question: 'How much does house construction cost per square foot in Puducherry?',
    answer: 'At Star Builders, basic luxury residential construction starts from ₹2,100 per sq.ft., premium luxury homes range between ₹2,600 to ₹3,200 per sq.ft., and royal custom villas with imported finishes range from ₹3,500+ per sq.ft. All estimates include full labor, material, site supervision, and structural warranties.'
  },
  {
    question: 'Do you assist with Puducherry Planning Authority (PPA) approvals?',
    answer: 'Yes! We manage 100% of the plan sanctioning process with PPA and local municipalities. Our in-house architect team submits compliant drawings, soil survey certificates, and structural engineer endorsements.'
  },
  {
    question: 'How long does it take to construct a 2,500 sq.ft villa?',
    answer: 'On average, a 2,500 sq.ft villa takes approximately 8 to 10 months from foundation excavation to final key handover. We provide a milestone-tracked project schedule with strict timeline guarantees.'
  },
  {
    question: 'Can NRIs monitor the construction progress remotely?',
    answer: 'Absolutely. Over 40% of our clients are NRIs or residing outside Puducherry. We provide weekly photo/video logs, milestone video calls, and a transparent digital dashboard so you stay informed at every stage.'
  },
  {
    question: 'What materials do you use for coastal corrosion protection in Puducherry?',
    answer: 'Given Puducherry coastal marine exposure, we use anti-corrosive epoxy-coated TMT steel (Tata Tiscon Superduct), sulphate-resistant cement for foundations, double-coat anti-fungal exterior paints, and high-density UPVC/aluminium window frames.'
  }
];

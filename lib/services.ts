import { Home, Palette, Layout, Lightbulb, Sofa, Building2 ,type LucideIcon, HardHat, Wrench, Scan, Network, Cuboid} from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
}


export const services: Service[] = [
  {
    slug: 'architectural-bim-modeling',
    icon: Building2,
    title: 'Architectural BIM Modeling',
    description:
      'We create highly detailed architectural BIM models that support design, documentation, and construction workflows. Our models ensure accuracy, coordination, and smooth collaboration across project teams from concept to construction.',
    features: [
      'Detailed Architectural 3D Modeling',
      'LOD 300 & LOD 350 Development',
      'Floor Plans, Sections & Elevations',
      'Interior & Exterior BIM Documentation',
      'As-Built Modeling',
      'Construction Drawing Extraction',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
  },

  {
    slug: 'structural-bim-modeling',
    icon: HardHat,
    title: 'Structural BIM Modeling',
    description:
      'Our structural BIM solutions provide precise modeling for steel and concrete structures, enabling fabrication-ready documentation and improved construction accuracy.',
    features: [
      'Structural Steel Modeling',
      'RCC & Concrete Modeling',
      'Rebar Detailing',
      'Shop Drawing Preparation',
      'Connection Detailing (LOD 350)',
      'Fabrication-Level Documentation',
    ],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
  },

  {
    slug: 'mep-bim-services',
    icon: Wrench,
    title: 'MEP BIM Services',
    description:
      'We deliver coordinated MEP BIM models that eliminate clashes, improve efficiency, and support seamless construction and facility operations.',
    features: [
      'HVAC Modeling & Coordination',
      'Plumbing & Firefighting Modeling',
      'Electrical & Cable Tray Modeling',
      'Clash Detection & Resolution',
      'MEP Shop Drawings',
      'Coordination Drawings',
    ],
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e4c9fdb5',
  },

  {
    slug: 'scan-to-bim-services',
    icon: Scan,
    title: 'Scan to BIM Services',
    description:
      'We convert point cloud data into accurate BIM models for renovation, retrofit, and facility documentation, ensuring real-world conditions are captured precisely.',
    features: [
      'Point Cloud to BIM Conversion',
      'Existing Condition Modeling',
      'Retrofit & Renovation BIM',
      'Industrial Plant Modeling',
      'Equipment & Piping Modeling',
      'As-Built Documentation',
    ],
    image: 'https://images.unsplash.com/photo-1581093588401-22f65c1c9a1c',
  },

  {
    slug: 'bim-coordination-management',
    icon: Network,
    title: 'BIM Coordination & Management',
    description:
      'Our coordination and BIM management services ensure all disciplines work together seamlessly, reducing risks and improving project efficiency.',
    features: [
      'Clash Detection (Navisworks)',
      'BIM Execution Plan (BEP) Support',
      'Model Validation & Quality Checks',
      'Interdisciplinary Coordination',
      '4D Construction Sequencing',
      '5D Quantity Take-Off',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
  },

  {
    slug: 'revit-advanced-bim-support',
    icon: Cuboid,
    title: 'Revit & Advanced BIM Support',
    description:
      'We provide advanced Revit and BIM support to standardize workflows, develop parametric content, and deliver data-rich models for long-term facility management.',
    features: [
      'Revit Family Creation',
      'Parametric Component Development',
      'LOD 350 Detailed Modeling',
      'Custom BIM Standards Setup',
      'Data-Rich Model Integration',
      'Facility Management (FM) Ready Models',
    ],
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284',
  },
];


export const portfolioItems = [
  {
    id: 1,
    title: 'BIM Modeling',
    category: 'Commercial',
    image: 'https://skylarkconstructions.com/wp-content/uploads/2020/07/bim-e1643953135631.jpg',
     images: [
      "https://distinctive-lavender-ejagyqithd.edgeone.app/10.jpg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/11.jpg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/12.png",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/13.jpeg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/14.jpeg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/15.jpeg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/16.jpeg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/2.png",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/3.png",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/4.png",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/5.jpg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/6.jpg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/7.jpg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/8.jpg",
      "https://distinctive-lavender-ejagyqithd.edgeone.app/9.jpg"
]
  },
  {
    id: 2,
    title: 'Scan To Bim Modeling',
    category: 'Commercial',
    image: 'https://blog.novatr.com/hs-fs/hubfs/bim-scan.jpg?width=1602&height=856&name=bim-scan.jpg',
      images:[
        "https://square-blush-tmzmq1brfm.edgeone.app/1.png",
        "https://square-blush-tmzmq1brfm.edgeone.app/2.png",
        "https://square-blush-tmzmq1brfm.edgeone.app/3.jpg",
        "https://square-blush-tmzmq1brfm.edgeone.app/4.jpg",
        "https://square-blush-tmzmq1brfm.edgeone.app/5.jpeg",
        "https://square-blush-tmzmq1brfm.edgeone.app/6.jpeg",
        "https://square-blush-tmzmq1brfm.edgeone.app/7.jpeg",
        "https://square-blush-tmzmq1brfm.edgeone.app/8.jpeg",
        "https://square-blush-tmzmq1brfm.edgeone.app/9.jpeg",
        "https://unemployed-amber-p560knomye.edgeone.app/Screenshot_6.png"
      ]


  },
  {
    id: 3,
    title: 'Revit Modeling',
    category: 'Commercial',
    image: 'https://www.elogictech.com/blog/wp-content/uploads/2025/05/1715863607_BIMRevit.jpg',
    images:[
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/1.jpg",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/2.jpg",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/3.jpg",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/4.jpeg",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/5.jpeg",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/6.jpeg",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/7.jpeg",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/8.jpeg",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/Screenshot_1.png",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/Screenshot_4.png",
      "https://ridiculous-harlequin-idgxyicvnc.edgeone.app/Screenshot_5.png",

    ]
  },
  {
    id: 4,
    title: 'Executive Office',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
  },
  {
    id: 5,
    title: 'Commercial Building',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    images:[
      "https://vertical-black-ujknw8l5lu.edgeone.app/1.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/2.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/3.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/4.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/5.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/6.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/7.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/8.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/9.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/10.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/11.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/12.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/13.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/14.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/15.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/16.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/17.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/18.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/19.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/20.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/21.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/22.png",
      "https://vertical-black-ujknw8l5lu.edgeone.app/23.png"
    ]
  },
  {
    id: 6,
    title: 'Residential Project',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    images:[
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.37.51%20PM%20(1).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.37.51%20PM.jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.37.53%20PM.jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.09%20PM.jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.10%20PM%20(1).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.10%20PM.jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.19%20PM.jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.20%20PM%20(1).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.20%20PM%20(2).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.20%20PM.jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.21%20PM%20(1).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.21%20PM%20(2).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.21%20PM%20(3).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.21%20PM%20(4).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.21%20PM%20(5).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.21%20PM.jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.22%20PM%20(1).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.22%20PM%20(2).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.22%20PM%20(3).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.22%20PM%20(4).jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.22%20PM.jpeg",
      "https://national-violet-7axueixyp0.edgeone.app/WhatsApp%20Image%202026-02-25%20at%208.38.23%20PM.jpeg"
]
  },
]
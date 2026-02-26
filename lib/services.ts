import { Home, Palette, Layout, Lightbulb, Sofa, Building2 ,type LucideIcon} from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
}

/**
 * Extended service content
 * - Descriptions are intentionally longer for better UI balance
 * - Copy is marketing friendly but still professional
 */
export const services: Service[] = [
  {
    slug: 'residential-design',
    icon: Home,
    title: 'Residential Design',
    description:
      'Our residential design service transforms houses into deeply personal living environments. We analyze your lifestyle, habits, and aesthetic preferences to craft interiors that feel natural, comfortable, and timeless. From concept development and mood boards to final styling and installation, every detail is carefully curated to create spaces that reflect who you are and how you live.',
    features: [
      'Space Planning',
      'Color Consultation',
      'Furniture Selection',
      'Custom Solutions',
      'Material & Finish Selection',
      '3D Design Concepts',
    ],
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },

  {
    slug: 'commercial-design',
    icon: Building2,
    title: 'Commercial Design',
    description:
      'We design commercial environments that elevate brand identity, enhance productivity, and create memorable customer experiences. Our process blends functionality, aesthetics, and brand storytelling to produce workspaces, retail environments, and hospitality interiors that inspire both employees and visitors.',
    features: [
      'Office Design',
      'Retail Spaces',
      'Hospitality Interiors',
      'Brand Integration',
      'Workspace Optimization',
      'Client Experience Design',
    ],
    image:
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },

  {
    slug: 'space-planning',
    icon: Layout,
    title: 'Space Planning',
    description:
      'Smart space planning is the foundation of every successful interior. We study how people move, interact, and use each area to create layouts that feel intuitive and efficient. Through detailed floor plans and 3D visualization, we ensure every square foot works harder while maintaining visual harmony and comfort.',
    features: [
      'Detailed Floor Plans',
      'Traffic Flow Optimization',
      'Functional Zoning',
      '3D Visualization',
      'Furniture Layouts',
      'Ergonomic Planning',
    ],
    image:
      'https://redress.co.za/wp-content/uploads/2019/03/spaceplanning.jpg',
  },

  {
    slug: 'color-consultation',
    icon: Palette,
    title: 'Color Consultation',
    description:
      'Color has the power to shape mood, perception, and atmosphere. Our experts help you select harmonious palettes that enhance architecture, lighting, and materials. Whether bold and expressive or calm and neutral, we craft color schemes that create cohesive and emotionally engaging environments.',
    features: [
      'Color Psychology',
      'Paint & Finish Selection',
      'Fabric Coordination',
      'Lighting Interaction',
      'Palette Development',
      'Accent Strategy',
    ],
    image:
      'https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },

  {
    slug: 'furniture-selection',
    icon: Sofa,
    title: 'Furniture Selection',
    description:
      'We curate furniture and décor that balance beauty, comfort, and durability. By sourcing from trusted manufacturers and artisans, we ensure each piece complements the overall design vision while meeting functional needs. The result is a cohesive, stylish interior with character and longevity.',
    features: [
      'Custom Furniture Design',
      'Vendor Sourcing',
      'Styling & Accessories',
      'Delivery & Installation',
      'Material & Upholstery Selection',
      'Budget Planning',
    ],
    image:
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },

  {
    slug: 'lighting-design',
    icon: Lightbulb,
    title: 'Lighting Design',
    description:
      'Lighting shapes how a space looks, feels, and functions. We design layered lighting systems that combine natural, ambient, task, and accent lighting to create depth and flexibility. Our approach enhances atmosphere while improving usability and energy efficiency.',
    features: [
      'Natural Light Optimization',
      'Ambient Lighting Design',
      'Task & Accent Lighting',
      'Smart Lighting Controls',
      'Fixture Selection',
      'Energy Efficient Planning',
    ],
    image:
      'https://media.designcafe.com/wp-content/uploads/2019/11/17054916/latest-designs-for-boutique-lighting-1.jpg',
  },
];


export const portfolioItems = [
  {
    id: 1,
    title: 'BIM Modeling',
    category: 'Commercial',
    image: 'https://skylarkconstructions.com/wp-content/uploads/2020/07/bim-e1643953135631.jpg',
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
      ]


  },
  {
    id: 3,
    title: 'Revit Modeling',
    category: 'Commercial',
    image: 'https://www.elogictech.com/blog/wp-content/uploads/2025/05/1715863607_BIMRevit.jpg',
    images:[
      "https://select-teal-p31cnm7zma.edgeone.app/1.jpg",
      "https://select-teal-p31cnm7zma.edgeone.app/2.jpg",
      "https://select-teal-p31cnm7zma.edgeone.app/3.jpg",
      "https://select-teal-p31cnm7zma.edgeone.app/4.jpeg",
      "https://select-teal-p31cnm7zma.edgeone.app/5.jpeg",
      "https://select-teal-p31cnm7zma.edgeone.app/6.jpeg",
      "https://select-teal-p31cnm7zma.edgeone.app/7.jpeg",
      "https://select-teal-p31cnm7zma.edgeone.app/8.jpeg",

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
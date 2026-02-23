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
      'https://images.pexels.com/photos/3807693/pexels-photo-3807693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
      'https://images.pexels.com/photos/1297315/pexels-photo-1297315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];
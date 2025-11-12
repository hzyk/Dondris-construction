
import { FaHandshake, FaStar, FaShieldAlt, FaClock, FaUsersCog, FaHeart, FaRoad, FaBolt, FaWarehouse, FaTools, FaThermometerHalf, FaHome, FaWater, FaTree, FaTh, FaArrowUp, FaLightbulb, FaWrench, FaHardHat, FaProjectDiagram, FaUsers, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { NavLink, Highlight, CoreValue, Service, SocialLink } from './types';

export const navLinks: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Services' },
  { id: 'contact', title: 'Contact' },
];

export const highlights: Highlight[] = [
  { icon: FaHardHat, title: '10+ Years', text: 'Experience' },
  { icon: FaProjectDiagram, title: 'Trusted', text: 'Projects' },
  { icon: FaUsers, title: 'Reliable', text: 'Team' },
];

export const coreValues: CoreValue[] = [
  { icon: FaHandshake, title: 'Integrity' },
  { icon: FaStar, title: 'Quality' },
  { icon: FaShieldAlt, title: 'Safety' },
  { icon: FaClock, title: 'Reliability' },
  { icon: FaUsersCog, title: 'Teamwork' },
  { icon: FaHeart, title: 'Customer Satisfaction' },
];

export const services: Service[] = [
  { icon: FaRoad, title: 'Road Making' },
  { icon: FaBolt, title: 'Storm Light' },
  { icon: FaWarehouse, title: 'Building of Warehouses' },
  { icon: FaTools, title: 'Renovation Services' },
  { icon: FaThermometerHalf, title: 'Insulation' },
  { icon: FaHome, title: 'Building of Houses' },
  { icon: FaWater, title: 'Plumbing' },
  { icon: FaTree, title: 'Landscaping' },
  { icon: FaTh, title: 'Tiling' },
  { icon: FaArrowUp, title: 'Ceiling' },
  { icon: FaLightbulb, title: 'Electricity' },
  { icon: FaWrench, title: 'Welding' },
];

export const socialLinks: SocialLink[] = [
  { icon: FaFacebook, url: '#' },
  { icon: FaLinkedin, url: '#' },
  { icon: FaInstagram, url: '#' },
];

export const WHATSAPP_BASE_URL = "https://wa.me/27786151390";

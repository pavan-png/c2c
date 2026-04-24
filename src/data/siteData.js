import {
  BriefcaseBusiness,
  Building2,
  Bot,
  BrainCircuit,
  Clock3,
  Code2,
  Cpu,
  GraduationCap,
  Handshake,
  Megaphone,
  MonitorSmartphone,
  Rocket,
  School,
  SearchCheck,
  UserRoundSearch,
  Users,
  Wifi,
} from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'courses', label: 'Courses' },
  { id: 'placement', label: 'Placement' },
  { id: 'corporate', label: 'Corporate Training' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '500+', label: 'Placements' },
  { value: '120+', label: 'Companies' },
  { value: '98%', label: 'Success Rate' },
];

export const serviceItems = [
  {
    title: 'Digital Marketing',
    description:
      'SEO, social media, paid campaigns, content strategy, and measurable growth programs built for brands that want real business impact.',
    icon: Megaphone,
    accent: 'from-orange-500/20 to-orange-100',
  },
  {
    title: 'Training & Placement',
    description:
      'Industry-ready training programs with hands-on guidance, mock interviews, and strong placement support for freshers and professionals.',
    icon: GraduationCap,
    accent: 'from-violet-500/20 to-violet-100',
  },
  {
    title: 'IT & Non-IT Staffing',
    description:
      'Fast and reliable hiring solutions for startups and enterprises across technology, HR, operations, sales, and business roles.',
    icon: BriefcaseBusiness,
    accent: 'from-sky-500/20 to-sky-100',
  },
  {
    title: 'Academic Projects',
    description:
      'End-to-end academic support including implementation guidance, documentation, diagrams, PPT preparation, and project mentoring.',
    icon: School,
    accent: 'from-emerald-500/20 to-emerald-100',
  },
  {
    title: 'IT Projects',
    description:
      'Custom solutions for web, mobile, enterprise, and startup products delivered with scalable engineering and business-focused thinking.',
    icon: MonitorSmartphone,
    accent: 'from-cyan-500/20 to-cyan-100',
  },
];

export const leadership = {
  name: 'K. Anil Chowdary',
  role: 'Founder & CEO',
  experience: '3+ years in HR & EdTech',
  image:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
};

export const courseCards = [
  {
    title: 'Agentic AI',
    description: 'Build intelligent AI workflows, autonomous agents, prompts, tools, and real-world automation patterns.',
    duration: '8 Weeks',
    mode: 'Online/Offline',
    tag: 'Trending',
    icon: Bot,
    coverTitle: 'AI',
    coverSubtitle: 'Agentic Systems',
    coverGlow: 'from-fuchsia-500 via-violet-500 to-sky-500',
    coverPanel: 'from-slate-950 via-violet-950 to-slate-900',
    iconWrap: 'from-fuchsia-400/20 to-cyan-300/20',
  },
  {
    title: 'Java Full Stack',
    description: 'Master Java, Spring Boot, REST APIs, MySQL, React basics, deployment, and enterprise project flow.',
    duration: '12 Weeks',
    mode: 'Online/Offline',
    tag: 'Long Term',
    icon: Code2,
    coverTitle: 'JAVA',
    coverSubtitle: 'Full Stack',
    coverGlow: 'from-amber-400 via-orange-500 to-red-500',
    coverPanel: 'from-slate-950 via-orange-950 to-slate-900',
    iconWrap: 'from-orange-400/20 to-amber-300/20',
  },
  {
    title: 'MERN Stack Development',
    description: 'Learn MongoDB, Express, React, Node.js, APIs, authentication, and production-ready full stack apps.',
    duration: '10 Weeks',
    mode: 'Online/Offline',
    tag: 'Career Track',
    icon: MonitorSmartphone,
    coverTitle: 'MERN',
    coverSubtitle: 'Web Development',
    coverGlow: 'from-emerald-400 via-cyan-400 to-blue-500',
    coverPanel: 'from-slate-950 via-emerald-950 to-slate-900',
    iconWrap: 'from-emerald-400/20 to-cyan-300/20',
  },
  {
    title: 'Python Full Stack',
    description: 'Start from Python fundamentals and move into Django, APIs, databases, frontend integration, and deployment.',
    duration: '10 Weeks',
    mode: 'Online/Offline',
    tag: 'Most Popular',
    icon: BrainCircuit,
    coverTitle: 'PYTHON',
    coverSubtitle: 'Full Stack',
    coverGlow: 'from-sky-500 via-blue-500 to-yellow-400',
    coverPanel: 'from-slate-950 via-blue-950 to-slate-900',
    iconWrap: 'from-sky-400/20 to-yellow-300/20',
  },
  {
    title: 'VLSI Design',
    description: 'Understand digital design, HDL basics, simulation, synthesis flow, chip concepts, and hardware careers.',
    duration: '8 Weeks',
    mode: 'Online/Offline',
    tag: 'Core Tech',
    icon: Cpu,
    coverTitle: 'VLSI',
    coverSubtitle: 'Chip Design',
    coverGlow: 'from-cyan-400 via-blue-500 to-indigo-500',
    coverPanel: 'from-slate-950 via-cyan-950 to-slate-900',
    iconWrap: 'from-cyan-400/20 to-indigo-300/20',
  },
  {
    title: 'Internet of Things (IoT)',
    description: 'Create smart connected solutions with sensors, controllers, cloud integrations, automation, and devices.',
    duration: '8 Weeks',
    mode: 'Online/Offline',
    tag: 'Future Ready',
    icon: Wifi,
    coverTitle: 'IoT',
    coverSubtitle: 'Smart Systems',
    coverGlow: 'from-teal-400 via-cyan-400 to-violet-500',
    coverPanel: 'from-slate-950 via-teal-950 to-slate-900',
    iconWrap: 'from-teal-400/20 to-violet-300/20',
  },
];

export const careerAccelerationItems = [
  'Interview Preparation',
  'Resume Building',
  'Mock Assessments',
  'Corporate Communication',
  'Live Project Mentoring',
  'Placement Drills',
];

export const jobOpenings = [
  {
    title: 'Senior React Developer',
    details: 'Hyderabad • ₹18–28 LPA • 3 openings',
  },
  {
    title: 'Digital Marketing Executive',
    details: 'Guntur • ₹6–9 LPA • 8 openings',
  },
  {
    title: 'HR Recruiter (Non-IT)',
    details: 'Vijayawada • ₹5–8 LPA • 5 openings',
  },
];

export const corporatePrograms = [
  {
    title: 'Workshops',
    description:
      'Half-day and full-day interactive sessions on emerging technologies, leadership, productivity, and team growth.',
    icon: Rocket,
  },
  {
    title: 'College Training',
    description:
      'Campus-to-corporate programs for final-year students with strong industry alignment and practical delivery.',
    icon: UserRoundSearch,
  },
  {
    title: 'Company Training',
    description:
      'Customized 1–6 month training tracks for internal teams with outcome-oriented design and measurable ROI.',
    icon: Building2,
  },
];

export const featureBadges = [
  'Live projects',
  'Industry mentors',
  '100% placement support',
  'Alumni network',
];

export const footerLinks = {
  quickLinks: ['About Us', 'Services', 'Courses', 'Careers'],
  contact: ['Vijayawada, Andhra Pradesh', 'hello@c2c.in', '+91 90145 55370'],
};

export const partnerHighlights = [
  {
    title: 'Trusted Recruitment',
    description: 'Structured hiring support with faster turnaround and stronger fitment.',
    icon: Handshake,
  },
  {
    title: 'Skill Transformation',
    description: 'Programs designed around market demand, not outdated syllabi.',
    icon: SearchCheck,
  },
];

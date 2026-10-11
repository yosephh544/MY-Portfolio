// Project screenshots discovered in assets
import tmsDashboard from '../assets/TMS/Dashboard.png';
import tmsLogin from '../assets/TMS/login.png';
import billDashboard from '../assets/Bill-System/dashboard.png';
import billLogin from '../assets/Bill-System/login.png';
import invSuperadmin from "../assets/Inventory-Man't/SuperadminDashboard.png";
import invUserPage from "../assets/Inventory-Man't/userPage.png";
import invLogin from "../assets/Inventory-Man't/login.png";
import cvImage from '../assets/CV/cv.png';

export const personalInfo = {
  name: 'Yoseph Hailemariam',
  displayName: 'Yoseph H/Mariam',
  role: 'Full-Stack Software Developer & Team Lead',
  shortBio:
    'Full-Stack Software Developer specializing in backend development with C#, .NET, Java, and Python. Experienced in designing RESTful APIs, business logic, database systems, and responsive applications using Angular and React. Experienced in deploying and supporting production systems, optimizing SQL databases, and leading development of enterprise applications.',
  location: 'Addis Ababa, Ethiopia',
  phone: '+251-9 20 49 67 30',
  email: 'yosephhaile99@gmail.com',
  github: 'https://github.com/yosephh544',
  linkedin: 'https://linkedin.com/in/yoseph-h-mariam',
  status: 'Open to Full-Stack & Technical Lead Roles',
  cvImage: cvImage,
  cvPath: '/cv.png',
  cvFilename: 'cv.png',
};

export const educationData = [
  {
    institution: 'Hilcoe School of Computer Science and Technology',
    degree: 'Bachelor of Software Engineering',
    period: 'Software Engineering Graduate',
    highlights: [
      'Core focus on Software Architecture, Distributed Systems, Algorithms, and Object-Oriented Engineering.',
      'Comprehensive study in Database Management Systems, System Analysis, and Network Protocols.',
    ],
  },
];

export const languagesData = [
  { language: 'English', proficiency: 'Fluent' },
  { language: 'Amharic', proficiency: 'Fluent' },
];

export const techBadges = [
  'C#',
  '.NET',
  'Angular',
  'React',
  'Java',
  'Spring Boot',
  'Python',
  'MS SQL Server',
  'MySQL',
  'SSRS',
  'REST APIs',
  'Docker',
  'IIS',
  'Git',
];

export const skillsCategories = [
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'C#', projects: ['Water Utility Billing System', 'Transport Management System (DPMS)', 'Pharmacy Inventory & POS'] },
      { name: '.NET / ASP.NET', projects: ['Water Utility Billing System', 'Transport Management System (DPMS)', 'Pharmacy Inventory & POS'] },
      { name: 'Java', projects: ['Enterprise Software Systems'] },
      { name: 'Spring Boot', projects: ['Backend Microservices & REST APIs'] },
      { name: 'Python', projects: ['Backend Automation & Scripting'] },
      { name: 'REST APIs', projects: ['Water Utility Billing System', 'Transport Management System (DPMS)', 'Pharmacy Inventory & POS'] },
    ],
  },
  {
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'Angular', projects: ['Water Utility Billing System', 'Transport Management System (DPMS)'] },
      { name: 'React', projects: ['Pharmacy Inventory & POS', 'Developer Portfolio'] },
      { name: 'JavaScript', projects: ['All Projects'] },
      { name: 'HTML & CSS', projects: ['All Projects'] },
      { name: 'Tailwind CSS', projects: ['Pharmacy Inventory & POS', 'Developer Portfolio'] },
    ],
  },
  {
    name: 'Database & Reporting',
    icon: 'Database',
    skills: [
      { name: 'MS SQL Server', projects: ['Water Utility Billing System', 'Transport Management System (DPMS)', 'Pharmacy Inventory & POS'] },
      { name: 'MySQL', projects: ['Enterprise Relational Databases'] },
      { name: 'SSRS', projects: ['Transport Management System (DPMS)', 'Water Utility Billing System'] },
      { name: 'Database Optimization', projects: ['Transport Management System (DPMS)', 'Water Utility Billing System'] },
    ],
  },
  {
    name: 'Tools & Deployment',
    icon: 'Cloud',
    skills: [
      { name: 'Git', projects: ['All Projects'] },
      { name: 'Docker', projects: ['Containerized Services'] },
      { name: 'IIS', projects: ['Transport Management System (DPMS)', 'Water Utility Billing System'] },
      { name: 'System Deployment', projects: ['Transport Management System (DPMS)', 'Water Utility Billing System'] },
    ],
  },
  {
    name: 'Engineering & Integration',
    icon: 'Cpu',
    skills: [
      { name: 'API Integration', projects: ['Transport Management System (DPMS)', 'Water Utility Billing System'] },
      { name: 'Business Logic Architecture', projects: ['All Projects'] },
      { name: 'Production Support & Troubleshooting', projects: ['Transport Management System (DPMS)', 'Water Utility Billing System'] },
      { name: 'Technical Team Leadership', projects: ['Water Utility Billing System', 'Transport Management System (DPMS)'] },
    ],
  },
];

export const projectsData = [
  {
    id: 'water-utility-billing',
    title: 'Water Utility Billing System (BPS)',
    category: 'Utility & Billing',
    featured: true,
    badge: 'Deployed Nationwide Across Utilities',
    role: 'Full-Stack Developer & Team Lead',
    shortDesc:
      'Enterprise billing and revenue management platform deployed across multiple cities and utilities throughout the country, featuring offline meter reading synchronization and automated tariff workflows.',
    myContribution:
      'Led the development of multiple core modules using Angular, React, .NET, and SQL Server. Developed RESTful APIs, complex business logic, and third-party integrations. Deployed and supported the system for different utilities throughout the country. Provided production support and troubleshooting, and showcased the platform to visiting UNICEF delegates.',
    technologies: ['C#', '.NET', 'Angular', 'React', 'MS SQL Server', 'SSRS', 'SignalR', 'REST APIs'],
    hasScreenshots: true,
    isPlaceholder: false,
    screenshots: [
      {
        id: 'dashboard',
        label: 'Main Dashboard',
        description: 'Revenue collection overview, active billing cycles, and utility operational metrics.',
        src: billDashboard,
      },
      {
        id: 'login',
        label: 'Login Portal',
        description: 'Secure role-based authentication portal for municipal billing operators and administrators.',
        src: billLogin,
      },
    ],
    featuresImplemented: [
      'End-to-end customer billing lifecycle (meter reading, calculation, printing, settlement, penalty rules)',
      'Offline/online meter reading data synchronization with conflict-free batch updates',
      'Customer Relationship Management (CRM) module for inquiries, complaints, and service status',
      'Human Resource Management (HRM) module for meter reader assignments and route allocation',
      'Real-time collection monitoring and operational dashboards via SignalR broadcasts',
      'Custom municipal reporting engine exporting directly to PDF and Excel formats',
    ],
    featuresPlanned: [],
    operationalOutcome:
      'Successfully deployed across multiple municipal utilities and demonstrated directly to UNICEF delegates and regional bureau leadership.',
    githubUrl: 'https://github.com/yosephh544',
  },
  {
    id: 'transport-management-system',
    title: 'Transport Management System (DPMS)',
    category: 'Transport & Logistics',
    featured: true,
    badge: 'Government Enterprise Deployment',
    role: 'FullStack Developer',
    shortDesc:
      'Centralized Driver and Public Transport Management System (DPMS) deployed for Oromia and Benishangul Transport Management Agencies.',
    myContribution:
      'Led development of core DPMS modules using Angular, React, .NET, and SQL Server. Developed backend business logic and RESTful APIs, including third-party integrations. Deployed the system for Oromia and Benishangul Transport Management Agencies. Provided production support, maintenance, and troubleshooting. Designed SSRS reports for complex reporting requirements and optimized SQL queries and database operations for large datasets.',
    technologies: ['C#', '.NET', 'Angular', 'React', 'MS SQL Server', 'SSRS', 'IIS', 'REST APIs'],
    hasScreenshots: true,
    isPlaceholder: false,
    screenshots: [
      {
        id: 'dashboard',
        label: 'Transport Dashboard',
        description: 'Regional vehicle statistics, driver licensing records, and terminal activity feeds.',
        src: tmsDashboard,
      },
      {
        id: 'login',
        label: 'Bureau Login',
        description: 'Role-based access gateway scoped to regional transport branches and checkpoint operators.',
        src: tmsLogin,
      },
    ],
    featuresImplemented: [
      'Comprehensive regional vehicle registry and historical inspection tracking',
      'Driver licensing, point deductions, and renewal qualification workflows',
      'Public transport vehicle scheduling and freight logistics manifest tracking',
      'Role-based access control (RBAC) enforcing district-level branch authorization',
      'Optimized SQL queries and database operations for large municipal datasets',
      'Designed SSRS reports for complex government reporting requirements',
      'Production deployment on Windows IIS Web Servers across regional branches',
    ],
    featuresPlanned: [],
    operationalOutcome:
      'Deployed to regional transport bureaus and operational transit hubs, streamlining documentation and driver verification across branches.',
    githubUrl: 'https://github.com/yosephh544',
  },
  {
    id: 'pharmacy-inventory-system',
    title: 'Pharmacy Inventory Management System & POS',
    category: 'Healthcare & Inventory',
    featured: true,
    badge: 'Batch Tracking & FEFO Workflows',
    role: 'Full-Stack Developer',
    shortDesc:
      'Healthcare dispensary and retail pharmacy platform featuring multi-batch stock tracking, expiration alerts, FEFO dispatch workflows, and point-of-sale functionality.',
    myContribution:
      'Implemented the relational database schema supporting multiple batches per medicine; created the FEFO (First-Expired, First-Out) stock dispatch algorithm in C# and SQL Server; built the responsive React user and superadmin interfaces with real-time stock status and expiry warnings; structured cashier checkout logic and inventory deduction.',
    technologies: ['React', 'C#', '.NET', 'MS SQL Server', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    hasScreenshots: true,
    isPlaceholder: false,
    screenshots: [
      {
        id: 'superadmin',
        label: 'Superadmin Dashboard',
        description: 'Executive inventory metrics, low-stock notifications, and dispensary branch monitoring.',
        src: invSuperadmin,
      },
      {
        id: 'userPage',
        label: 'Cashier & User Page',
        description: 'Fast dispensing interface with batch selection, pricing calculations, and checkout logging.',
        src: invUserPage,
      },
      {
        id: 'login',
        label: 'Pharmacy Login',
        description: 'Role-based authentication dividing dispensary cashiers, inventory managers, and superadmins.',
        src: invLogin,
      },
    ],
    featuresImplemented: [
      'Medicine catalog with category management and unit definitions',
      'Multi-batch tracking with expiration date monitoring',
      'FEFO (First-Expired, First-Out) dispatch ordering to reduce expired stock losses',
      'Point-of-sale cashier interface with instant total calculation and stock deduction',
      'Role-based user management (Superadmin, Pharmacist, Cashier)',
      'Automated upcoming expiry warning badges',
    ],
    featuresPlanned: [],
    operationalOutcome:
      'Implemented core inventory and cashier workflows to prevent medicine expiration losses and streamline dispensary sales.',
    githubUrl: 'https://github.com/yosephh544',
  },
];

export const experienceTimeline = [
  {
    period: 'FEB 2026 – PRESENT',
    role: 'FullStack Developer',
    organization: 'DAF-TEH Computer Engineering',
    scope: 'Oromia & Benishangul Transport Management Agencies (DPMS)',
    description:
      'Leading development of core DPMS modules and production systems for regional government transport agencies.',
    highlights: [
      'Led development of core DPMS modules using Angular, React, .NET, and SQL Server.',
      'Developed backend business logic and RESTful APIs, including third-party integrations.',
      'Deployed the system for Oromia and Benishangul Transport Management Agencies.',
      'Provided production support, maintenance, and troubleshooting.',
      'Designed SSRS reports for complex reporting requirements.',
      'Optimized SQL queries and database operations for large datasets.',
    ],
    technologies: ['Angular', 'React', '.NET', 'MS SQL Server', 'SSRS', 'IIS', 'REST APIs'],
  },
  {
    period: 'JUL 2025 – JAN 2026',
    role: 'Full-stack Developer & Team Lead',
    organization: 'DAF-TEH Computer Engineering',
    scope: 'Municipal Water Utility Systems',
    description:
      'Led development and nationwide rollout of enterprise multi-module utility billing and operational software.',
    highlights: [
      'Led development of Multiple modules using Angular, React, .NET, and SQL Server.',
      'Developed RESTful APIs, business logic, and third-party integrations.',
      'Deployed and supported the system for different Utilities throughout the country.',
      'Provided production support and troubleshooting.',
    ],
    technologies: ['Angular', 'React', '.NET', 'MS SQL Server', 'C#', 'REST APIs'],
  },
  {
    period: 'MAY 2025',
    role: 'Internship',
    organization: 'DAFTech Social ICT Solutions PLC',
    scope: 'Software Engineering Internship',
    description:
      'Gained hands-on professional industry experience developing core features and database services.',
    highlights: [
      'Feature Building',
      'Database Support',
      'API Development',
      'Bug Fixing',
      'Teamwork',
    ],
    technologies: ['C#', 'MS SQL Server', 'API Development', 'Database Support'],
  },
];

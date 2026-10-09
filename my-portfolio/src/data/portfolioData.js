// Project screenshots discovered in assets
import tmsDashboard from '../assets/TMS/Dashboard.png';
import tmsLogin from '../assets/TMS/login.png';
import billDashboard from '../assets/Bill-System/dashboard.png';
import billLogin from '../assets/Bill-System/login.png';
import invSuperadmin from "../assets/Inventory-Man't/SuperadminDashboard.png";
import invUserPage from "../assets/Inventory-Man't/userPage.png";
import invLogin from "../assets/Inventory-Man't/login.png";

export const personalInfo = {
  name: 'Yoseph H/Mariam',
  role: 'Full-Stack Software Developer & Team Leader',
  shortBio:
    'I build, integrate, deploy, and support real-world enterprise software systems across Ethiopia — from municipal water utility billing platforms and regional transport management systems to payment gateways and pharmacy inventory software.',
  location: 'Addis Ababa, Ethiopia',
  email: 'yosephhaile99@gmail.com',
  github: 'https://github.com/yosephh544',
  linkedin: 'https://linkedin.com/in/yoseph-h-mariam',
  status: 'Open to Full-Stack & Technical Lead Roles',
  cvPath: '/resume.pdf',
  cvFilename: 'resume.pdf',
};

export const techBadges = [
  'ASP.NET Core',
  'C#',
  'Angular',
  'React',
  'TypeScript',
  'SQL Server',
  'REST APIs',
  'SignalR',
  'Docker',
  'IIS',
  'Tailwind CSS',
];

export const skillsCategories = [
  {
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', projects: ['Pharmacy Inventory & POS', 'Smart Telemetry (Temp-Ai)'] },
      { name: 'Angular', projects: ['Water Utility Billing System', 'Transport Management System (Oromia & Benishangul)', 'Enterprise Planning Module'] },
      { name: 'JavaScript', projects: ['All Projects'] },
      { name: 'TypeScript', projects: ['Transport Management System (Oromia & Benishangul)', 'Water Utility Billing System', 'Pharmacy Inventory & POS'] },
      { name: 'HTML & CSS', projects: ['All Projects'] },
      { name: 'Tailwind CSS', projects: ['Pharmacy Inventory & POS', 'Portfolio'] },
    ],
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'C#', projects: ['Water Utility Billing System', 'Transport Management System (Oromia & Benishangul)', 'Payment Gateway / Merchant Portal', 'Pharmacy Inventory & POS'] },
      { name: 'ASP.NET Core', projects: ['Water Utility Billing System', 'Transport Management System (Oromia & Benishangul)', 'Payment Gateway / Merchant Portal'] },
      { name: 'REST APIs', projects: ['All Projects'] },
    ],
  },
  {
    name: 'Database',
    icon: 'Database',
    skills: [
      { name: 'SQL Server', projects: ['Water Utility Billing System', 'Transport Management System (Oromia & Benishangul)', 'Pharmacy Inventory & POS'] },
      { name: 'SQL & Database Design', projects: ['All Projects'] },
      { name: 'Query Optimization', projects: ['Water Utility Billing System', 'Transport Management System (Oromia & Benishangul)'] },
    ],
  },
  {
    name: 'Tools & Deployment',
    icon: 'Cloud',
    skills: [
      { name: 'Git', projects: ['All Projects'] },
      { name: 'Docker', projects: ['Backend Microservices', 'Integration Pipelines'] },
      { name: 'IIS', projects: ['Transport Management System (Oromia & Benishangul)', 'Water Utility Billing System'] },
      { name: 'Deployment & Production Support', projects: ['Transport Management System (Oromia & Benishangul)', 'Water Utility Billing System'] },
    ],
  },
  {
    name: 'Integrations & Engineering',
    icon: 'Cpu',
    skills: [
      { name: 'Third-Party APIs', projects: ['Payment Gateway / Merchant Portal', 'Water Utility Billing System'] },
      { name: 'Payment Integrations', projects: ['Payment Gateway / Merchant Portal', 'Water Utility Billing System'] },
      { name: 'Reporting Engines', projects: ['Water Utility Billing System', 'Transport Management System (Oromia & Benishangul)', 'Enterprise Planning Module'] },
      { name: 'Debugging & System Integration', projects: ['All Projects'] },
    ],
  },
];

export const projectsData = [
  {
    id: 'water-utility-billing',
    title: 'Water Utility Billing System',
    category: 'Utility & Billing',
    featured: true,
    badge: 'Deployed Across Multiple Cities',
    role: 'Full-Stack Developer & Team Leader',
    shortDesc:
      'Enterprise billing and revenue management platform deployed across multiple cities and utilities, featuring offline meter reading synchronization and automated tariff workflows.',
    myContribution:
      'Led the full-stack engineering team; developed the core customer billing workflows and tariff state machine in ASP.NET Core; designed SQL Server database schemas and optimized stored procedures for municipal datasets; integrated SignalR live dashboards; supported deployments and user onboarding across multiple cities; presented the platform to UNICEF officials as a digital transformation showcase.',
    technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'SignalR', 'REST APIs', 'T-SQL'],
    hasScreenshots: true,
    isPlaceholder: false,
    screenshots: [
      {
        id: 'dashboard',
        label: 'Main Dashboard',
        description: 'Executive revenue collection overview, active billing cycles, and system metrics.',
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
    title: 'Transport Management System (Oromia & Benishangul Agencies)',
    category: 'Transport & Fleet',
    featured: true,
    badge: 'Government Enterprise System',
    role: 'Full-Stack Software Developer',
    shortDesc:
      'Centralized transport management system for Oromia and Benishangul regional transport agencies, handling driver licensing, vehicle registry, and public transit logistics.',
    myContribution:
      'Engineered backend REST APIs in ASP.NET Core for vehicle registration, licensing workflows, and terminal dispatch; developed responsive Angular components with parameterized search filters; designed normalized SQL Server database schemas; tuned SQL queries and indexing to maintain sub-second response times under peak terminal loads; participated in production IIS deployment and supported regional branch staff.',
    technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'IIS', 'T-SQL'],
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
      'Optimized query indexing across large vehicle registries to eliminate bottleneck delays',
      'Production deployment on Windows IIS Web Servers across regional branches',
    ],
    featuresPlanned: [],
    operationalOutcome:
      'Deployed to regional transport bureaus and operational transit hubs, streamlining documentation and driver verification across branches.',
    githubUrl: 'https://github.com/yosephh544',
  },
  {
    id: 'pharmacy-inventory-system',
    title: 'Pharmacy Inventory Management System',
    category: 'Healthcare & Retail',
    featured: true,
    badge: 'Batch Tracking & FEFO Workflows',
    role: 'Full-Stack Developer',
    shortDesc:
      'Healthcare dispensary and retail pharmacy platform featuring multi-batch stock tracking, expiration alerts, FEFO dispatch workflows, and point-of-sale functionality.',
    myContribution:
      'Implemented the relational database schema supporting multiple batches per medicine; created the FEFO (First-Expired, First-Out) stock dispatch algorithm in C# and SQL Server; built the responsive React user and superadmin interfaces with real-time stock status and expiry warnings; structured cashier checkout logic and inventory deduction.',
    technologies: ['React', 'ASP.NET Core', 'SQL Server', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
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
    featuresPlanned: [
      'Integrated USB/Bluetooth barcode scanner hardware support',
      'Automated purchase order generation when stock falls below reorder thresholds',
      'Multi-store inventory transfer logistics',
    ],
    operationalOutcome:
      'Implemented core inventory and cashier workflows to prevent medicine expiration losses and streamline dispensary sales.',
    githubUrl: 'https://github.com/yosephh544',
  },
  {
    id: 'payment-gateway-merchant-portal',
    title: 'Payment Gateway / Merchant Portal',
    category: 'Financial & Payments',
    featured: true,
    badge: 'Fintech Integration & Merchant Services',
    role: 'Team Leader & Full-Stack Developer (Merchant Portal)',
    shortDesc:
      'Digital payment processing and merchant management platform facilitating merchant onboarding, business verification, API credentials, and webhook configurations.',
    myContribution:
      'Led the merchant portal development work; engineered merchant onboarding and business verification workflows; implemented user and role management, API credential generation, webhook URL management, and settlement account configuration; integrated third-party payment endpoints (Telebirr & banking rails) with idempotent state machines to prevent duplicate charges.',
    technologies: ['ASP.NET Core', 'C#', 'Telebirr API', 'Webhooks', 'SQL Server', 'React'],
    hasScreenshots: false,
    isPlaceholder: true,
    placeholderNote: 'Architectural Preview (Live Merchant Portal UI screenshots will be added once staging captures are finalized).',
    screenshots: [],
    featuresImplemented: [
      'Merchant onboarding workflow with business profile and KYC document submission',
      'API key and secret generation with permission scoping for merchant integrations',
      'Webhook listener with HMAC cryptographic signature validation and replay protection',
      'Settlement account management for automated bank payouts',
      'Idempotent transaction state machine ensuring zero duplicate billing entries',
      'Merchant management dashboard displaying recent transaction statuses',
    ],
    featuresPlanned: [
      'Full automated bank clearing and dispute resolution workflows',
      'Automated recurring merchant subscription billing',
    ],
    operationalOutcome:
      'Established secure merchant onboarding and payment integration capabilities with cryptographic webhook validation.',
    githubUrl: 'https://github.com/yosephh544',
  },
  {
    id: 'enterprise-planning-module',
    title: 'Municipal Enterprise Planning Module',
    category: 'Government Enterprise',
    featured: false,
    badge: 'Budget & Milestone Workflows',
    role: 'Full-Stack Developer',
    shortDesc:
      'Departmental budget planning and project milestone tracking module designed for public sector administrative coordination.',
    myContribution:
      'Developed workflow state services in ASP.NET Core; built interactive progress tracking components in Angular; optimized SQL Server aggregation queries for real-time departmental budget rollups.',
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Workflows', 'T-SQL'],
    hasScreenshots: false,
    isPlaceholder: true,
    placeholderNote: 'System Architecture Schematic (Internal government intranet module).',
    screenshots: [],
    featuresImplemented: [
      'Multi-tier budget approval workflow with hierarchical authorization',
      'Milestone tracking with planned vs. actual project variance analysis',
      'Departmental expenditure rollup and automated executive summary generation',
    ],
    featuresPlanned: [],
    operationalOutcome:
      'Standardized planning and capital expenditure monitoring across municipal departments.',
    githubUrl: 'https://github.com/yosephh544',
  },
  {
    id: 'temp-ai-telemetry',
    title: 'Smart Telemetry & IoT Sensor Gateway',
    category: 'IoT & Telemetry',
    featured: false,
    badge: 'Real-Time Telemetry & Alerting',
    role: 'Full-Stack Developer',
    shortDesc:
      'Real-time IoT sensor telemetry dashboard and alerting service monitoring environmental thresholds for sensitive facilities.',
    myContribution:
      'Built real-time React monitoring interface with live updating chart streams via WebSockets; implemented threshold anomaly evaluation logic for temperature breaches.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'REST APIs'],
    hasScreenshots: false,
    isPlaceholder: true,
    placeholderNote: 'Telemetry Architecture Preview (Hardware sensor gateway module).',
    screenshots: [],
    featuresImplemented: [
      'Live WebSocket metric streaming with real-time chart rendering',
      'Automated threshold breach evaluation and alert triggers',
      'Historical environmental trend logging',
    ],
    featuresPlanned: [],
    operationalOutcome:
      'Delivered continuous visibility into facility climate conditions with instantaneous breach alerts.',
    githubUrl: 'https://github.com/yosephh544',
  },
];

export const experienceTimeline = [
  {
    period: 'Recent Production Deployments',
    role: 'Full-Stack Developer & Team Leader',
    organization: 'Water Utility Billing Systems',
    scope: 'Deployed Across Multiple Cities & Utilities',
    description:
      'Led the full-stack engineering team responsible for developing, deploying, and supporting an enterprise billing platform for public water utilities across Ethiopia.',
    highlights: [
      'Built automated customer billing workflows, tiered tariff calculations, and penalty engines in ASP.NET Core.',
      'Designed SQL Server schemas and tuned stored procedures to handle high-volume billing cycles with sub-second execution.',
      'Engineered offline-capable meter reading data collection for field agents with automated server synchronization.',
      'Integrated SignalR real-time dashboards for live municipal collection oversight.',
      'Demonstrated the operational system directly to visiting UNICEF officials and regional bureau leadership.',
    ],
    technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'SignalR', 'T-SQL', 'REST APIs'],
  },
  {
    period: 'Regional Government Systems',
    role: 'Full-Stack Software Developer',
    organization: 'Transport Management Systems (Oromia & Benishangul Agencies)',
    scope: 'Regional Transport Agencies',
    description:
      'Contributed to developing, deploying, and supporting enterprise transport management systems for regional government agencies.',
    highlights: [
      'Developed backend REST APIs in ASP.NET Core for driver licensing, vehicle registration, and public transit scheduling.',
      'Created modular Angular interfaces with dynamic search and filtering across tens of thousands of records.',
      'Structured normalized SQL Server databases and optimized query execution plans for peak terminal hours.',
      'Implemented role-based access control (RBAC) scoping permissions across regional branch offices.',
      'Assisted in production IIS Web Server deployment and provided direct operational support.',
    ],
    technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'IIS', 'T-SQL'],
  },
  {
    period: 'Fintech & Integrations',
    role: 'Team Leader & Full-Stack Developer (Merchant Portal)',
    organization: 'Payment Gateway / Merchant Portal',
    scope: 'Digital Payment Integrations',
    description:
      'Led development of the merchant portal and third-party payment integration workflows.',
    highlights: [
      'Engineered merchant onboarding, business verification, and settlement account configurations.',
      'Built API credential generation, permission scoping, and webhook configuration tools.',
      'Implemented idempotent webhook listeners with cryptographic HMAC validation to prevent duplicate charges.',
    ],
    technologies: ['ASP.NET Core', 'C#', 'Telebirr API', 'Webhooks', 'SQL Server', 'React'],
  },
  {
    period: 'Healthcare Dispensary Systems',
    role: 'Full-Stack Software Developer',
    organization: 'Pharmacy Inventory Management System',
    scope: 'Retail Pharmacy & Inventory',
    description:
      'Engineered an inventory and point-of-sale platform for pharmacies requiring strict batch and expiry management.',
    highlights: [
      'Designed database schema supporting multi-batch inventory with FEFO (First-Expired, First-Out) dispatch ordering.',
      'Built responsive React interfaces for cashier checkout and superadmin inventory monitoring.',
      'Created automated alerts for medicines approaching expiration (90, 60, and 30 days).',
    ],
    technologies: ['React', 'ASP.NET Core', 'SQL Server', 'Tailwind CSS', 'REST APIs'],
  },
];

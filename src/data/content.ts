export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  skills: string[];
  cta: string;
  link: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  technology: string;
  description: string;
  problem: string;
  approach: string;
  solution: string;
  techList: string[];
  features: string[];
  result: string;
  github?: string;
  demo?: string;
}

export const services: ServiceItem[] = [
  {
    icon: 'Code',
    title: 'Software Development',
    description: 'Build reliable web applications, APIs, backend systems and automation solutions.',
    skills: ['Python', 'Django', 'FastAPI', 'REST APIs', 'PostgreSQL', 'MongoDB', 'JavaScript', 'React', 'AWS', 'Docker', 'Redis', 'Celery'],
    cta: 'Explore Development',
    link: '/services/software-development',
  },
  {
    icon: 'Bug',
    title: 'Debugging & Automation',
    description: 'Find bugs, solve technical issues and automate repetitive processes.',
    skills: ['Python debugging', 'Django debugging', 'API troubleshooting', 'Database issues', 'JavaScript bugs', 'Automation scripts', 'Web scraping', 'File automation', 'API integrations'],
    cta: 'Fix a Problem',
    link: '/services/debugging-automation',
  },
  {
    icon: 'Database',
    title: 'Data & Digital Support',
    description: 'Accurate support for repetitive, administrative and data-heavy digital work.',
    skills: ['Data entry', 'Excel', 'Google Sheets', 'Data cleaning', 'PDF to Word', 'PDF to Excel', 'Web research', 'Copy-paste tasks', 'Typing', 'Document formatting'],
    cta: 'Need Data Support?',
    link: '/services/data-digital-support',
  },
  {
    icon: 'PenLine',
    title: 'Content & Language',
    description: 'Clear, engaging and professionally formatted written content.',
    skills: ['Script writing', 'YouTube scripts', 'Content writing', 'Proofreading', 'Translation', 'Transcription', 'Product descriptions', 'Content formatting'],
    cta: 'Discuss Content',
    link: '/services/content-language',
  },
  {
    icon: 'Zap',
    title: 'Quick Digital Tasks',
    description: "Have a small task that doesn't fit into a category? Send it over.",
    skills: ['Small fixes', 'File conversion', 'Research', 'Formatting', 'Simple scripts', 'Data collection', 'Online tasks', 'Digital assistance'],
    cta: 'Send a Quick Task',
    link: '/quick-task',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'login-auth-api',
    title: 'Login & Authentication API',
    category: 'Backend Development',
    technology: 'Django REST Framework • Python • JWT',
    description: 'A secure REST API implementing user registration, authentication and protected endpoints.',
    problem: 'Applications need a reliable, secure way to manage user authentication and protect sensitive endpoints from unauthorized access.',
    approach: 'Designed a RESTful API using Django REST Framework with JWT-based authentication, covering registration, login, token refresh and protected resource access.',
    solution: 'Built a complete authentication system with token-based security, password hashing, and permission classes for protected routes.',
    techList: ['Django REST Framework', 'Python', 'JWT', 'PostgreSQL', 'Django ORM'],
    features: [
      'User registration with validation',
      'JWT token authentication',
      'Protected endpoint access control',
      'Password hashing and security',
      'Token refresh mechanism',
    ],
    result: 'A production-ready authentication API that can be integrated into any frontend application requiring secure user management.',
    github: '#',
  },
  {
    id: 'tcp-udp-chat',
    title: 'TCP / UDP Chat Application',
    category: 'Networking',
    technology: 'Python • Socket Programming',
    description: 'A client-server communication project demonstrating TCP and UDP socket communication.',
    problem: 'Understanding network communication protocols requires hands-on implementation of both reliable (TCP) and fast (UDP) data transmission.',
    approach: 'Implemented a client-server architecture using Python sockets, supporting both TCP for reliable messaging and UDP for fast, connectionless communication.',
    solution: 'Created a chat application that demonstrates real-time messaging over TCP and UDP protocols with a clean client-server model.',
    techList: ['Python', 'Socket Programming', 'TCP', 'UDP', 'Threading'],
    features: [
      'TCP-based reliable messaging',
      'UDP-based fast communication',
      'Multi-client server handling',
      'Real-time message broadcasting',
      'Protocol comparison demonstration',
    ],
    result: 'A functional chat application that demonstrates practical understanding of network protocols and socket programming.',
    github: '#',
  },
  {
    id: 'text-summarization',
    title: 'Text Summarization System',
    category: 'NLP / AI',
    technology: 'Python • NLP',
    description: 'An NLP-based application designed to automatically generate concise summaries from longer text.',
    problem: 'Processing large volumes of text manually is time-consuming and inefficient for quick information extraction.',
    approach: 'Applied natural language processing techniques to analyze text, identify key sentences, and generate concise summaries that preserve essential meaning.',
    solution: 'Built an NLP pipeline that processes input text, ranks sentences by importance, and produces readable summaries.',
    techList: ['Python', 'NLP', 'NLTK', 'Text Processing', 'Machine Learning'],
    features: [
      'Automatic text analysis',
      'Key sentence extraction',
      'Configurable summary length',
      'Multi-document support',
      'Readable output formatting',
    ],
    result: 'A text summarization tool that reduces long documents to concise summaries while retaining core information.',
    github: '#',
  },
  {
    id: 'species-extinction',
    title: 'Species Extinction Prediction',
    category: 'Machine Learning',
    technology: 'Python • Machine Learning',
    description: 'A machine-learning project focused on predicting species extinction risk using environmental and historical data.',
    problem: 'Predicting species extinction risk from environmental data can help identify vulnerable species before it is too late.',
    approach: 'Trained machine learning models on environmental and historical data to classify species extinction risk levels.',
    solution: 'Developed a predictive model that analyzes environmental features and historical trends to estimate extinction risk.',
    techList: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Data Analysis'],
    features: [
      'Feature engineering from environmental data',
      'Classification model training',
      'Risk level prediction',
      'Data visualization',
      'Model evaluation and metrics',
    ],
    result: 'A machine learning model capable of predicting species extinction risk from environmental and historical data.',
    github: '#',
  },
  {
    id: 'podtalk',
    title: 'PODTALK',
    category: 'Web Application',
    technology: 'Flask • Python • Database',
    description: 'A podcast-focused web application with backend functionality for managing podcast content.',
    problem: 'Podcast creators need a simple way to manage and organize their podcast content in one place.',
    approach: 'Built a Flask-based web application with database integration for managing podcast episodes, metadata, and content.',
    solution: 'Created a web application with full backend functionality for podcast content management, including CRUD operations and data persistence.',
    techList: ['Flask', 'Python', 'SQLite', 'HTML', 'CSS'],
    features: [
      'Podcast episode management',
      'Content CRUD operations',
      'Database persistence',
      'Episode metadata handling',
      'Web-based interface',
    ],
    result: 'A functional podcast management web application with complete backend operations.',
    github: '#',
  },
  {
    id: 'data-cleaning-automation',
    title: 'Data Cleaning & Automation',
    category: 'Data / Automation',
    technology: 'Python • Excel • Data Processing',
    description: 'A demonstration project showing how messy datasets can be cleaned, transformed and organized into useful structured information.',
    problem: 'Real-world datasets are often messy, inconsistent, and unstructured, making them difficult to use for analysis or reporting.',
    approach: 'Developed Python scripts that automate the process of cleaning, transforming, and organizing raw data into structured formats.',
    solution: 'Built an automation pipeline that handles missing values, standardizes formats, removes duplicates, and outputs clean structured data.',
    techList: ['Python', 'Pandas', 'Excel', 'Data Processing', 'Automation'],
    features: [
      'Automated data cleaning',
      'Duplicate removal',
      'Format standardization',
      'Missing value handling',
      'Structured output generation',
    ],
    result: 'An automation tool that transforms messy datasets into clean, structured, and analysis-ready data.',
    github: '#',
  },
];

export interface FAQItemData {
  question: string;
  answer: string;
}

export const faqItems: FAQItemData[] = [
  {
    question: 'What type of projects do you accept?',
    answer: 'Both small digital tasks and larger software-development projects.',
  },
  {
    question: 'Can you fix existing code?',
    answer: 'Yes. Existing Python, Django, API, JavaScript and database issues can be reviewed and debugged.',
  },
  {
    question: 'Do you accept small tasks?',
    answer: 'Yes. Small tasks are welcome.',
  },
  {
    question: 'Can you work on long-term projects?',
    answer: 'Yes, depending on scope and availability.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Submit the project form with as much detail as possible.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes, depending on the nature of the project.',
  },
  {
    question: 'Can I send a task before knowing exactly what service I need?',
    answer: 'Yes. Describe the problem and DevAssist Studio can determine the appropriate service.',
  },
];

export const techStack = [
  'Python', 'Django', 'FastAPI', 'JavaScript', 'React', 'Next.js',
  'PostgreSQL', 'MongoDB', 'Redis', 'Celery', 'AWS', 'Docker',
  'Kubernetes', 'Git', 'REST APIs', 'HTML', 'CSS', 'TailwindCSS',
];

export const founderTech = [
  'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS',
  'Docker', 'Kubernetes', 'Redis', 'Celery', 'JavaScript', 'React',
];

export const projectTypes = [
  'Software Development',
  'Bug Fixing',
  'Automation',
  'Data Entry',
  'Data Cleaning',
  'Typing',
  'Research',
  'Content Writing',
  'Script Writing',
  'Translation',
  'Quick Task',
  'Other',
];

export const budgetRanges = [
  'Under ₹1,000',
  '₹1,000–₹5,000',
  '₹5,000–₹10,000',
  '₹10,000–₹25,000',
  '₹25,000+',
  'Not Sure',
];

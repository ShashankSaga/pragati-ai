// Comprehensive internship database for AI recommendations
const internshipDatabase = {
    'Technology': [{
            title: 'Software Development Intern',
            company: 'TechCorp India',
            location: 'Bangalore',
            duration: '6 months',
            stipend: '₹25,000',
            skills: ['JavaScript', 'Python', 'React', 'Node.js', 'MongoDB'],
            description: 'Full-stack development role with modern web technologies',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'AI/ML Research Intern',
            company: 'DataScience Labs',
            location: 'Hyderabad',
            duration: '4 months',
            stipend: '₹30,000',
            skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis'],
            description: 'Work on cutting-edge AI research projects',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Mobile App Development',
            company: 'AppInnovate',
            location: 'Mumbai',
            duration: '5 months',
            stipend: '₹22,000',
            skills: ['React Native', 'Flutter', 'JavaScript', 'Firebase'],
            description: 'Build next-generation mobile applications',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Cloud Infrastructure Intern',
            company: 'CloudTech Solutions',
            location: 'Chennai',
            duration: '5 months',
            stipend: '₹28,000',
            skills: ['AWS', 'Docker', 'Kubernetes', 'DevOps', 'Linux'],
            description: 'Design and manage cloud infrastructure solutions',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Cybersecurity Analyst',
            company: 'SecureNet India',
            location: 'Delhi',
            duration: '4 months',
            stipend: '₹26,000',
            skills: ['Ethical Hacking', 'Network Security', 'CISSP', 'Penetration Testing'],
            description: 'Protect digital assets and identify security vulnerabilities',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Frontend Developer',
            company: 'WebCraft Studios',
            location: 'Pune',
            duration: '4 months',
            stipend: '₹20,000',
            skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Sass'],
            description: 'Create responsive and interactive user interfaces',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        },
        {
            title: 'Backend Developer',
            company: 'ServerSide Tech',
            location: 'Bangalore',
            duration: '6 months',
            stipend: '₹24,000',
            skills: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Microservices'],
            description: 'Build scalable server-side applications',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Blockchain Developer',
            company: 'CryptoTech Labs',
            location: 'Mumbai',
            duration: '5 months',
            stipend: '₹32,000',
            skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js'],
            description: 'Develop decentralized applications and smart contracts',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Game Developer',
            company: 'GameStudio Pro',
            location: 'Hyderabad',
            duration: '4 months',
            stipend: '₹23,000',
            skills: ['Unity', 'C#', '3D Modeling', 'Game Physics'],
            description: 'Create immersive gaming experiences',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Quality Assurance Tester',
            company: 'TestPro Solutions',
            location: 'Chennai',
            duration: '3 months',
            stipend: '₹18,000',
            skills: ['Selenium', 'Manual Testing', 'Automation Testing', 'JIRA'],
            description: 'Ensure software quality through comprehensive testing',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        }
    ],
    'Marketing': [{
            title: 'Digital Marketing Specialist',
            company: 'MarketPro Digital',
            location: 'Delhi',
            duration: '4 months',
            stipend: '₹18,000',
            skills: ['SEO', 'Google Ads', 'Social Media', 'Content Marketing'],
            description: 'Lead digital marketing campaigns for top brands',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Content Strategy Intern',
            company: 'Creative Minds',
            location: 'Pune',
            duration: '3 months',
            stipend: '₹15,000',
            skills: ['Content Writing', 'SEO', 'Analytics', 'Social Media'],
            description: 'Develop content strategies for diverse clients',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        },
        {
            title: 'Social Media Manager',
            company: 'SocialBuzz Agency',
            location: 'Mumbai',
            duration: '4 months',
            stipend: '₹20,000',
            skills: ['Instagram', 'Facebook', 'Twitter', 'Content Creation', 'Analytics'],
            description: 'Manage social media presence for multiple brands',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Email Marketing Specialist',
            company: 'MailCraft Solutions',
            location: 'Bangalore',
            duration: '3 months',
            stipend: '₹17,000',
            skills: ['Mailchimp', 'Email Design', 'A/B Testing', 'Marketing Automation'],
            description: 'Create and optimize email marketing campaigns',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        },
        {
            title: 'Brand Marketing Associate',
            company: 'BrandMax India',
            location: 'Delhi',
            duration: '5 months',
            stipend: '₹22,000',
            skills: ['Brand Strategy', 'Market Research', 'Campaign Management', 'Creative Brief'],
            description: 'Develop and execute brand marketing strategies',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Performance Marketing Analyst',
            company: 'AdMetrics Pro',
            location: 'Chennai',
            duration: '4 months',
            stipend: '₹21,000',
            skills: ['Google Analytics', 'Facebook Ads', 'ROI Analysis', 'Conversion Optimization'],
            description: 'Optimize marketing campaigns for maximum performance',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Influencer Marketing Coordinator',
            company: 'InfluencerHub',
            location: 'Mumbai',
            duration: '3 months',
            stipend: '₹19,000',
            skills: ['Influencer Outreach', 'Campaign Management', 'Social Media', 'Negotiation'],
            description: 'Coordinate influencer partnerships and campaigns',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        },
        {
            title: 'Marketing Analytics Intern',
            company: 'DataDriven Marketing',
            location: 'Hyderabad',
            duration: '4 months',
            stipend: '₹23,000',
            skills: ['Google Analytics', 'Tableau', 'SQL', 'Market Research'],
            description: 'Analyze marketing data to drive strategic decisions',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        }
    ],
    'Finance': [{
            title: 'Financial Analyst Intern',
            company: 'InvestCorp India',
            location: 'Mumbai',
            duration: '6 months',
            stipend: '₹28,000',
            skills: ['Excel', 'Financial Modeling', 'Python', 'SQL'],
            description: 'Analyze market trends and investment opportunities',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'FinTech Development',
            company: 'PayTech Solutions',
            location: 'Bangalore',
            duration: '5 months',
            stipend: '₹26,000',
            skills: ['Python', 'Blockchain', 'API Development', 'Security'],
            description: 'Build innovative financial technology solutions',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Investment Banking Analyst',
            company: 'Capital Markets Ltd',
            location: 'Mumbai',
            duration: '6 months',
            stipend: '₹35,000',
            skills: ['Financial Analysis', 'Valuation', 'Excel', 'PowerPoint'],
            description: 'Support M&A transactions and capital raising activities',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Risk Management Associate',
            company: 'RiskGuard Financial',
            location: 'Delhi',
            duration: '5 months',
            stipend: '₹27,000',
            skills: ['Risk Assessment', 'Statistical Analysis', 'Python', 'R'],
            description: 'Identify and mitigate financial risks',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Corporate Finance Intern',
            company: 'CorpFin Solutions',
            location: 'Chennai',
            duration: '4 months',
            stipend: '₹24,000',
            skills: ['Financial Planning', 'Budgeting', 'Excel', 'SAP'],
            description: 'Support corporate financial planning and analysis',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Credit Analyst',
            company: 'LendSmart Finance',
            location: 'Pune',
            duration: '4 months',
            stipend: '₹22,000',
            skills: ['Credit Analysis', 'Financial Statements', 'Excel', 'SQL'],
            description: 'Evaluate creditworthiness of loan applications',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Wealth Management Trainee',
            company: 'WealthMax Advisors',
            location: 'Mumbai',
            duration: '5 months',
            stipend: '₹25,000',
            skills: ['Portfolio Management', 'Client Relations', 'Financial Planning'],
            description: 'Assist in managing high-net-worth client portfolios',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Insurance Analyst',
            company: 'SecureLife Insurance',
            location: 'Kolkata',
            duration: '4 months',
            stipend: '₹20,000',
            skills: ['Actuarial Science', 'Risk Assessment', 'Excel', 'Statistics'],
            description: 'Analyze insurance risks and develop pricing models',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        }
    ],
    'Data Science': [{
            title: 'Data Scientist Intern',
            company: 'Analytics Pro',
            location: 'Chennai',
            duration: '6 months',
            stipend: '₹32,000',
            skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Tableau'],
            description: 'Extract insights from complex datasets',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Business Intelligence Analyst',
            company: 'DataViz Corp',
            location: 'Hyderabad',
            duration: '4 months',
            stipend: '₹24,000',
            skills: ['SQL', 'Power BI', 'Excel', 'Statistics'],
            description: 'Create dashboards and business reports',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Machine Learning Engineer',
            company: 'AI Innovations Lab',
            location: 'Bangalore',
            duration: '6 months',
            stipend: '₹35,000',
            skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'MLOps'],
            description: 'Build and deploy machine learning models at scale',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Data Engineer',
            company: 'BigData Solutions',
            location: 'Mumbai',
            duration: '5 months',
            stipend: '₹28,000',
            skills: ['Apache Spark', 'Hadoop', 'Python', 'SQL', 'AWS'],
            description: 'Design and maintain data pipelines and infrastructure',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Data Analyst',
            company: 'InsightCorp',
            location: 'Delhi',
            duration: '4 months',
            stipend: '₹22,000',
            skills: ['Excel', 'SQL', 'Python', 'Tableau', 'Statistics'],
            description: 'Analyze business data to drive strategic decisions',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Quantitative Analyst',
            company: 'QuanTech Finance',
            location: 'Mumbai',
            duration: '5 months',
            stipend: '₹30,000',
            skills: ['Python', 'R', 'Statistics', 'Financial Modeling', 'Mathematics'],
            description: 'Apply mathematical models to financial markets',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Research Analyst',
            company: 'Market Research Pro',
            location: 'Pune',
            duration: '4 months',
            stipend: '₹20,000',
            skills: ['Survey Design', 'SPSS', 'R', 'Data Collection', 'Report Writing'],
            description: 'Conduct market research and analyze consumer behavior',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'NLP Engineer',
            company: 'LanguageTech AI',
            location: 'Hyderabad',
            duration: '5 months',
            stipend: '₹33,000',
            skills: ['Python', 'NLP', 'NLTK', 'spaCy', 'Transformers'],
            description: 'Develop natural language processing applications',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        }
    ],
    'Design': [{
            title: 'UX/UI Designer',
            company: 'DesignStudio',
            location: 'Bangalore',
            duration: '4 months',
            stipend: '₹20,000',
            skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
            description: 'Design user-centered digital experiences',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Graphic Design Intern',
            company: 'Creative Agency',
            location: 'Mumbai',
            duration: '3 months',
            stipend: '₹16,000',
            skills: ['Photoshop', 'Illustrator', 'InDesign', 'Branding'],
            description: 'Create visual content for marketing campaigns',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        },
        {
            title: 'Product Designer',
            company: 'InnovateLabs',
            location: 'Delhi',
            duration: '5 months',
            stipend: '₹25,000',
            skills: ['Sketch', 'Figma', 'User Testing', 'Wireframing', 'Design Systems'],
            description: 'Design end-to-end product experiences',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Motion Graphics Designer',
            company: 'AnimateStudio',
            location: 'Chennai',
            duration: '4 months',
            stipend: '₹22,000',
            skills: ['After Effects', 'Cinema 4D', 'Premiere Pro', 'Animation'],
            description: 'Create engaging motion graphics and animations',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Web Designer',
            company: 'WebCraft Agency',
            location: 'Pune',
            duration: '3 months',
            stipend: '₹18,000',
            skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'WordPress'],
            description: 'Design and develop responsive websites',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        },
        {
            title: 'Brand Designer',
            company: 'BrandCraft Studios',
            location: 'Mumbai',
            duration: '4 months',
            stipend: '₹21,000',
            skills: ['Brand Identity', 'Logo Design', 'Typography', 'Packaging Design'],
            description: 'Develop comprehensive brand identities',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: '3D Designer',
            company: 'Dimension Studios',
            location: 'Bangalore',
            duration: '5 months',
            stipend: '₹24,000',
            skills: ['Blender', 'Maya', '3ds Max', 'Substance Painter', 'V-Ray'],
            description: 'Create stunning 3D models and visualizations',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Game UI/UX Designer',
            company: 'GameCraft Studios',
            location: 'Hyderabad',
            duration: '4 months',
            stipend: '₹23,000',
            skills: ['Unity', 'Game Design', 'User Interface', 'Prototyping'],
            description: 'Design intuitive gaming interfaces and experiences',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        }
    ],
    'Healthcare': [{
            title: 'Healthcare Data Analyst',
            company: 'MedTech Innovations',
            location: 'Delhi',
            duration: '5 months',
            stipend: '₹27,000',
            skills: ['Python', 'R', 'Healthcare Analytics', 'SQL'],
            description: 'Analyze healthcare data for better patient outcomes',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Medical Research Assistant',
            company: 'Research Institute',
            location: 'Chennai',
            duration: '6 months',
            stipend: '₹23,000',
            skills: ['Research Methods', 'Data Collection', 'Statistical Analysis'],
            description: 'Support clinical research projects',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Biomedical Engineer Intern',
            company: 'MedDevice Corp',
            location: 'Bangalore',
            duration: '5 months',
            stipend: '₹26,000',
            skills: ['CAD Design', 'Medical Devices', 'MATLAB', 'Biomechanics'],
            description: 'Design and develop medical devices and equipment',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Clinical Data Manager',
            company: 'ClinTrial Solutions',
            location: 'Mumbai',
            duration: '4 months',
            stipend: '₹24,000',
            skills: ['Clinical Data Management', 'EDC Systems', 'GCP', 'SAS'],
            description: 'Manage and validate clinical trial data',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Health Informatics Specialist',
            company: 'HealthTech Systems',
            location: 'Hyderabad',
            duration: '4 months',
            stipend: '₹25,000',
            skills: ['EHR Systems', 'Health Data Analytics', 'HL7', 'SQL'],
            description: 'Optimize healthcare information systems',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Pharmaceutical Research Intern',
            company: 'PharmaLabs India',
            location: 'Pune',
            duration: '6 months',
            stipend: '₹22,000',
            skills: ['Drug Discovery', 'Laboratory Techniques', 'Chemistry', 'Biology'],
            description: 'Support pharmaceutical research and development',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Medical Content Writer',
            company: 'HealthContent Pro',
            location: 'Delhi',
            duration: '3 months',
            stipend: '₹18,000',
            skills: ['Medical Writing', 'Research', 'SEO', 'Content Strategy'],
            description: 'Create accurate and engaging medical content',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Telemedicine Support Specialist',
            company: 'TeleMed Solutions',
            location: 'Chennai',
            duration: '4 months',
            stipend: '₹20,000',
            skills: ['Healthcare Technology', 'Patient Support', 'EMR Systems'],
            description: 'Support telemedicine platforms and patient care',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        }
    ],
    'Education': [{
            title: 'EdTech Product Intern',
            company: 'LearnTech Solutions',
            location: 'Bangalore',
            duration: '4 months',
            stipend: '₹21,000',
            skills: ['Product Management', 'User Experience', 'Analytics'],
            description: 'Help build the future of online education',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Content Development Intern',
            company: 'EduContent Corp',
            location: 'Pune',
            duration: '3 months',
            stipend: '₹17,000',
            skills: ['Content Writing', 'Curriculum Design', 'Video Editing'],
            description: 'Create engaging educational content',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        },
        {
            title: 'Learning Analytics Specialist',
            company: 'EduData Analytics',
            location: 'Delhi',
            duration: '5 months',
            stipend: '₹24,000',
            skills: ['Python', 'R', 'Education Analytics', 'Tableau'],
            description: 'Analyze learning data to improve educational outcomes',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Instructional Designer',
            company: 'LearnDesign Studio',
            location: 'Mumbai',
            duration: '4 months',
            stipend: '₹22,000',
            skills: ['Instructional Design', 'E-learning', 'Articulate', 'Adobe Captivate'],
            description: 'Design effective learning experiences and curricula',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Educational Technology Consultant',
            company: 'EduTech Consultancy',
            location: 'Chennai',
            duration: '4 months',
            stipend: '₹23,000',
            skills: ['Educational Technology', 'Training', 'Project Management'],
            description: 'Help institutions implement educational technology solutions',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Online Course Creator',
            company: 'SkillBuilder Platform',
            location: 'Hyderabad',
            duration: '3 months',
            stipend: '₹19,000',
            skills: ['Course Development', 'Video Production', 'Content Strategy'],
            description: 'Create comprehensive online courses and tutorials',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Language Learning App Developer',
            company: 'LinguaTech',
            location: 'Bangalore',
            duration: '5 months',
            stipend: '₹25,000',
            skills: ['Mobile App Development', 'Linguistics', 'React Native'],
            description: 'Develop innovative language learning applications',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Academic Research Assistant',
            company: 'University Research Center',
            location: 'Kolkata',
            duration: '6 months',
            stipend: '₹20,000',
            skills: ['Research Methods', 'Academic Writing', 'Data Analysis'],
            description: 'Support academic research projects and publications',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        }
    ],
    'Business Development': [{
            title: 'Business Development Associate',
            company: 'Growth Partners',
            location: 'Mumbai',
            duration: '5 months',
            stipend: '₹25,000',
            skills: ['Sales', 'Market Research', 'Client Relations', 'Analytics'],
            description: 'Drive business growth and partnerships',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Strategy Consultant Intern',
            company: 'Strategic Advisors',
            location: 'Delhi',
            duration: '4 months',
            stipend: '₹29,000',
            skills: ['Strategic Planning', 'Market Analysis', 'Consulting'],
            description: 'Provide strategic insights to Fortune 500 companies',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Sales Development Representative',
            company: 'SalesForce India',
            location: 'Bangalore',
            duration: '4 months',
            stipend: '₹22,000',
            skills: ['Lead Generation', 'CRM', 'Cold Calling', 'Email Marketing'],
            description: 'Generate and qualify sales leads for the sales team',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        },
        {
            title: 'Market Research Analyst',
            company: 'MarketInsights Corp',
            location: 'Chennai',
            duration: '4 months',
            stipend: '₹21,000',
            skills: ['Market Research', 'Survey Design', 'Data Analysis', 'Report Writing'],
            description: 'Conduct comprehensive market research and competitive analysis',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Partnership Manager Intern',
            company: 'Alliance Networks',
            location: 'Pune',
            duration: '5 months',
            stipend: '₹24,000',
            skills: ['Partnership Development', 'Negotiation', 'Relationship Management'],
            description: 'Develop and manage strategic business partnerships',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Customer Success Associate',
            company: 'ClientCare Solutions',
            location: 'Hyderabad',
            duration: '4 months',
            stipend: '₹20,000',
            skills: ['Customer Support', 'Account Management', 'CRM', 'Communication'],
            description: 'Ensure customer satisfaction and drive retention',
            requirements: ['Undergraduate', 'Graduate'],
            type: 'Paid'
        },
        {
            title: 'Business Analyst',
            company: 'ProcessPro Consulting',
            location: 'Mumbai',
            duration: '5 months',
            stipend: '₹26,000',
            skills: ['Business Analysis', 'Process Improvement', 'SQL', 'Excel'],
            description: 'Analyze business processes and recommend improvements',
            requirements: ['Graduate', 'Post Graduate'],
            type: 'Paid'
        },
        {
            title: 'Startup Operations Intern',
            company: 'InnoventureHub',
            location: 'Bangalore',
            duration: '3 months',
            stipend: '₹18,000',
            skills: ['Operations Management', 'Project Coordination', 'Analytics'],
            description: 'Support startup operations and scaling initiatives',
            requirements: ['High School', 'Undergraduate'],
            type: 'Paid'
        }
    ]
};

// AI Recommendation Algorithm
class InternshipRecommendationEngine {
    constructor() {
        this.database = internshipDatabase;
    }

    // Calculate skill match score
    calculateSkillMatch(userSkills, internshipSkills) {
        const userSkillsLower = userSkills.toLowerCase().split(',').map(s => s.trim());
        let matchCount = 0;

        internshipSkills.forEach(skill => {
            if (userSkillsLower.some(userSkill =>
                    userSkill.includes(skill.toLowerCase()) ||
                    skill.toLowerCase().includes(userSkill)
                )) {
                matchCount++;
            }
        });

        return (matchCount / internshipSkills.length) * 100;
    }

    // Calculate location match score
    calculateLocationMatch(userLocation, internshipLocation) {
        if (userLocation === 'Remote' || internshipLocation === 'Remote') return 100;
        return userLocation === internshipLocation ? 100 : 70; // Partial match for nearby cities
    }

    // Calculate education match score
    calculateEducationMatch(userEducation, internshipRequirements) {
        return internshipRequirements.includes(userEducation) ? 100 : 60;
    }

    // Main recommendation function
    getRecommendations(userProfile) {
        const {
            skills,
            education,
            interest,
            location
        } = userProfile;
        const relevantInternships = this.database[interest] || [];

        // Add internships from related fields for better coverage
        const allInternships = [...relevantInternships];

        // Add some cross-field recommendations
        Object.keys(this.database).forEach(field => {
            if (field !== interest) {
                // Add top internship from each field for diversity
                if (this.database[field].length > 0) {
                    allInternships.push(this.database[field][0]);
                }
            }
        });

        const scoredInternships = allInternships.map(internship => {
            const skillScore = this.calculateSkillMatch(skills, internship.skills);
            const locationScore = this.calculateLocationMatch(location, internship.location);
            const educationScore = this.calculateEducationMatch(education, internship.requirements);

            // Weighted average (skills: 40%, location: 35%, education: 25%)
            const overallScore = Math.round(
                (skillScore * 0.4) + (locationScore * 0.35) + (educationScore * 0.25)
            );

            return {
                ...internship,
                matchScore: overallScore,
                skillMatchScore: Math.round(skillScore),
                locationMatchScore: Math.round(locationScore),
                educationMatchScore: Math.round(educationScore)
            };
        });

        // Sort by match score and return top recommendations
        return scoredInternships
            .sort((a, b) => b.matchScore - a.matchScore)
            .slice(0, 6); // Return top 6 recommendations
    }
}

// Initialize the recommendation engine
const recommendationEngine = new InternshipRecommendationEngine();

// Form handling
document.getElementById('studentForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const userProfile = {
        fullName: formData.get('fullName'),
        skills: formData.get('skills'),
        education: formData.get('education'),
        interest: formData.get('interest'),
        location: formData.get('location')
    };

    // Validate form
    if (!userProfile.fullName || !userProfile.skills || !userProfile.education ||
        !userProfile.interest || !userProfile.location) {
        alert('Please fill in all required fields.');
        return;
    }

    // Show loading animation
    const loadingElement = document.getElementById('loading');
    const resultsElement = document.getElementById('results');
    const formSection = document.querySelector('.form-section');

    loadingElement.classList.add('show');
    resultsElement.classList.remove('show');

    // Disable form
    const submitBtn = this.querySelector('.btn-primary');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));

    try {
        // Get recommendations from AI engine
        const recommendations = recommendationEngine.getRecommendations(userProfile);

        // Display results
        displayRecommendations(recommendations, userProfile);
        // Track this submission for government analytics
        govDashboard.trackUserSubmission(userProfile, recommendations);

        // Hide loading and show results
        loadingElement.classList.remove('show');
        resultsElement.classList.add('show');


        // Scroll to results
        resultsElement.scrollIntoView({
            behavior: 'smooth'
        });

    } catch (error) {
        console.error('Error generating recommendations:', error);
        alert('Sorry, there was an error generating recommendations. Please try again.');
        loadingElement.classList.remove('show');
    } finally {
        // Re-enable form
        submitBtn.disabled = false;
        submitBtn.textContent = 'Generate AI Recommendations';
    }
});

// Function to display recommendations
function displayRecommendations(recommendations, userProfile) {
    const grid = document.getElementById('recommendationsGrid');
    grid.innerHTML = '';

    recommendations.forEach((internship, index) => {
        const card = document.createElement('div');
        card.className = `internship-card ${index === 0 ? 'top-match' : 'recommended'}`;
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${internship.title}</h3>
                <div class="match-score">Match Score: ${internship.matchScore}%</div>
            </div>
            <div class="card-details">
                <div class="detail-item">
                    <span class="detail-label">Company:</span>
                    <span class="detail-value">${internship.company}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Location:</span>
                    <span class="detail-value">${internship.location}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">${internship.duration}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Stipend:</span>
                    <span class="detail-value">${internship.stipend}/month</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Skills:</span>
                    <span class="detail-value">${internship.skills.join(', ')}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Type:</span>
                    <span class="detail-value">${internship.type} Internship</span>
                </div>
                <div class="detail-item" style="grid-column: 1 / -1;">
                    <span class="detail-label">Description:</span>
                    <span class="detail-value">${internship.description}</span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');

        question.addEventListener('click', () => {
            const isActive = answer.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherToggle = otherItem.querySelector('.faq-toggle');
                otherAnswer.classList.remove('active');
                otherToggle.classList.remove('active');
                otherToggle.textContent = '+';
            });

            // Toggle current item
            if (!isActive) {
                answer.classList.add('active');
                toggle.classList.add('active');
                toggle.textContent = '×';
            }
        });
    });
});

// Smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});
// Government Dashboard Analytics
class GovernmentDashboard {
    constructor() {
        this.userData = [];
        this.skillsData = new Map();
        this.locationData = new Map();
        this.fieldData = new Map();
        this.totalMatches = 0;
        this.totalMatchScore = 0;
    }

    // Track user submissions for analytics
    trackUserSubmission(userProfile, recommendations) {
        this.userData.push({
            ...userProfile,
            timestamp: new Date(),
            recommendations: recommendations,
            bestMatchScore: recommendations[0]?.matchScore || 0
        });

        this.updateAnalytics();
        this.updateDashboard();
    }

    updateAnalytics() {
        // Reset data
        this.skillsData.clear();
        this.locationData.clear();
        this.fieldData.clear();
        this.totalMatches = 0;
        this.totalMatchScore = 0;

        // Process user data
        this.userData.forEach(user => {
            // Track skills
            const skills = user.skills.split(',').map(s => s.trim());
            skills.forEach(skill => {
                this.skillsData.set(skill, (this.skillsData.get(skill) || 0) + 1);
            });

            // Track locations
            this.locationData.set(user.location, (this.locationData.get(user.location) || 0) + 1);

            // Track fields
            this.fieldData.set(user.interest, (this.fieldData.get(user.interest) || 0) + 1);

            // Track match scores
            this.totalMatches++;
            this.totalMatchScore += user.bestMatchScore;
        });
    }

    updateDashboard() {
        // Update statistics
        document.getElementById('totalUsers').textContent = this.userData.length;
        document.getElementById('totalInternships').textContent = this.getTotalInternships();
        document.getElementById('successfulMatches').textContent = this.userData.filter(u => u.bestMatchScore > 70).length;
        document.getElementById('avgMatchScore').textContent = this.totalMatches > 0 ?
            Math.round(this.totalMatchScore / this.totalMatches) + '%' : '0%';

        // Update charts (simplified text display for this demo)
        this.updateSkillsChart();
        this.updateLocationChart();
        this.updateFieldChart();
    }

    getTotalInternships() {
        let total = 0;
        Object.values(internshipDatabase).forEach(category => {
            total += category.length;
        });
        return total;
    }

    updateSkillsChart() {
        const topSkills = Array.from(this.skillsData.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        const chartContainer = document.getElementById('skillsTrendChart');
        if (topSkills.length === 0) {
            chartContainer.innerHTML = '<div>No data available yet. Submit profiles to see trends.</div>';
            return;
        }

        let chartHTML = '<div style="width: 100%; text-align: left;">';
        chartHTML += '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Top Skills in Demand</h4>';

        topSkills.forEach((skill, index) => {
            const percentage = Math.round((skill[1] / this.userData.length) * 100);
            chartHTML += `
                <div style="margin-bottom: 0.8rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
                        <span style="font-weight: 500;">${skill[0]}</span>
                        <span style="color: var(--primary-indigo);">${skill[1]} users (${percentage}%)</span>
                    </div>
                    <div style="background: var(--border-light); border-radius: 4px; height: 8px;">
                        <div style="background: linear-gradient(135deg, var(--primary-blue), var(--primary-indigo)); 
                                   height: 100%; border-radius: 4px; width: ${percentage}%;"></div>
                    </div>
                </div>
            `;
        });

        chartHTML += '</div>';
        chartContainer.innerHTML = chartHTML;
    }

    updateLocationChart() {
        const locationEntries = Array.from(this.locationData.entries())
            .sort((a, b) => b[1] - a[1]);

        const chartContainer = document.getElementById('locationChart');
        if (locationEntries.length === 0) {
            chartContainer.innerHTML = '<div>No location data available yet.</div>';
            return;
        }

        let chartHTML = '<div style="width: 100%; text-align: left;">';
        chartHTML += '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Location Preferences</h4>';

        locationEntries.forEach((location) => {
            const percentage = Math.round((location[1] / this.userData.length) * 100);
            chartHTML += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; 
                           padding: 0.5rem; background: var(--bg-secondary); border-radius: 8px;">
                    <span style="font-weight: 500;">${location[0]}</span>
                    <span style="color: var(--accent-purple);">${location[1]} (${percentage}%)</span>
                </div>
            `;
        });

        chartHTML += '</div>';
        chartContainer.innerHTML = chartHTML;
    }

    updateFieldChart() {
        const fieldEntries = Array.from(this.fieldData.entries())
            .sort((a, b) => b[1] - a[1]);

        const chartContainer = document.getElementById('fieldChart');
        if (fieldEntries.length === 0) {
            chartContainer.innerHTML = '<div>No field data available yet.</div>';
            return;
        }

        let chartHTML = '<div style="width: 100%; text-align: left;">';
        chartHTML += '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Popular Fields</h4>';

        fieldEntries.forEach((field) => {
            const percentage = Math.round((field[1] / this.userData.length) * 100);
            chartHTML += `
                <div style="margin-bottom: 0.8rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
                        <span style="font-weight: 500;">${field[0]}</span>
                        <span style="color: var(--accent-cyan);">${percentage}%</span>
                    </div>
                    <div style="background: var(--border-light); border-radius: 4px; height: 6px;">
                        <div style="background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple)); 
                                   height: 100%; border-radius: 4px; width: ${percentage}%;"></div>
                    </div>
                </div>
            `;
        });

        chartHTML += '</div>';
        chartContainer.innerHTML = chartHTML;
    }
}

// Initialize dashboard
const govDashboard = new GovernmentDashboard();
// AI-Powered Chatbot using Hugging Face API
class AIChatbot {
    constructor() {
        this.isOpen = false;
        this.HF_API_KEY = "HUGGING_FACE_TOKEN_REMOVED";
        this.conversationHistory = [];
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const send = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.closeChat());
        send.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    toggleChat() {
        const window = document.getElementById('chatbot-window');
        if (this.isOpen) {
            this.closeChat();
        } else {
            window.classList.add('open');
            this.isOpen = true;
            document.getElementById('chatbot-input').focus();
        }
    }

    closeChat() {
        const window = document.getElementById('chatbot-window');
        window.classList.remove('open');
        this.isOpen = false;
    }

    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();

        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';
        this.showTyping();

        try {
            const botResponse = await this.getAIResponse(message);
            this.hideTyping();
            this.addMessage(botResponse, 'bot');
        } catch (error) {
            console.error('Error getting AI response:', error);
            this.hideTyping();
            this.addMessage("Sorry, I'm having trouble connecting right now. Please try again in a moment!", 'bot');
        }
    }

    async getAIResponse(userMessage) {
        const contextualMessage = `You are a career counselor assistant for Pragati AI, an internship recommendation platform. A user asks: "${userMessage}". Please provide helpful career guidance, internship advice, or information about skill development. Keep responses concise and professional.`;

        try {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${this.HF_API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        inputs: contextualMessage,
                        parameters: {
                            max_length: 150,
                            temperature: 0.7,
                            do_sample: true
                        }
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            let botReply = "";
            if (data && data.length > 0) {
                if (data[0].generated_text) {
                    botReply = data[0].generated_text.replace(contextualMessage, "").trim();
                } else if (data[0].summary_text) {
                    botReply = data[0].summary_text;
                } else {
                    botReply = JSON.stringify(data[0]);
                }
            }

            if (!botReply || botReply.length < 10) {
                return this.getFallbackResponse(userMessage);
            }

            return this.cleanResponse(botReply);

        } catch (error) {
            console.error('API Error:', error);
            return this.getFallbackResponse(userMessage);
        }
    }

    cleanResponse(response) {
        return response
            .replace(/^(User:|Bot:|AI:|Assistant:)/gi, '')
            .replace(/\n+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    getFallbackResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('internship') || lowerMessage.includes('job')) {
            return "I'd be happy to help you find the right internship! Our platform offers personalized recommendations based on your skills and interests. Have you tried filling out our assessment form above?";
        }

        if (lowerMessage.includes('skill') || lowerMessage.includes('learn')) {
            return "Skill development is crucial for career growth! You can use our Skill Gap Analysis feature to identify which skills to focus on for your target field. What area are you interested in?";
        }

        if (lowerMessage.includes('career') || lowerMessage.includes('future')) {
            return "Career planning is important! I can help you explore different career paths, understand skill requirements, and find relevant internship opportunities. What's your field of interest?";
        }

        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! I'm here to help with your career journey. You can ask me about internships, skill development, career advice, or how to use our platform features!";
        }

        return "I'm here to help with career guidance and internship advice! Could you tell me more about what specific information you're looking for?";
    }

    addMessage(message, type) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `${type}-message`;
        messageDiv.innerHTML = this.formatMessage(message);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    formatMessage(message) {
        return message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
    }

    showTyping() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) {
            typing.remove();
        }
    }
}

// Section navigation
// Update the existing showSection function
function showSection(sectionName) {
    // Hide all sections
    document.querySelector('.hero-section').style.display = sectionName === 'studentPortal' ? 'block' : 'none';
    document.querySelector('.form-section').style.display = sectionName === 'studentPortal' ? 'block' : 'none';
    document.querySelector('.faq-section').style.display = sectionName === 'studentPortal' ? 'block' : 'none';
    document.getElementById('govDashboard').style.display = sectionName === 'govDashboard' ? 'block' : 'none';
    document.getElementById('skillGapAnalysis').style.display = sectionName === 'skillGapAnalysis' ? 'block' : 'none';

    // Close mobile menu
    toggleMobileMenu(false);
}

// Hamburger menu functionality
function toggleMobileMenu(force = null) {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (force !== null) {
        hamburger.classList.toggle('active', force);
        navMenu.classList.toggle('active', force);
    } else {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu click handler
    document.getElementById('hamburgerBtn').addEventListener('click', () => {
        toggleMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const menuContainer = document.querySelector('.menu-container');
        if (!menuContainer.contains(event.target)) {
            toggleMobileMenu(false);
        }
    });

    // Initialize dashboard with some sample data for demonstration
    setTimeout(() => {
        govDashboard.updateDashboard();
    }, 1000);
    new AIChatbot();
});
// Skill Gap Analysis Engine
class SkillGapAnalyzer {
    constructor() {
        this.fieldSkillsMap = {
            'Technology': ['JavaScript', 'Python', 'React', 'Node.js', 'Java', 'AWS', 'Docker', 'Git', 'SQL', 'HTML', 'CSS'],
            'Marketing': ['SEO', 'Google Analytics', 'Social Media', 'Content Marketing', 'Email Marketing', 'PPC', 'Adobe Creative Suite'],
            'Finance': ['Excel', 'Financial Modeling', 'Python', 'R', 'Bloomberg Terminal', 'SQL', 'Risk Management'],
            'Data Science': ['Python', 'R', 'SQL', 'Machine Learning', 'Tableau', 'Pandas', 'NumPy', 'Statistics', 'TensorFlow'],
            'Design': ['Figma', 'Adobe Creative Suite', 'Sketch', 'Prototyping', 'UI/UX', 'Typography', 'Color Theory'],
            'Healthcare': ['Medical Knowledge', 'Data Analysis', 'Research Methods', 'Statistical Analysis', 'EMR Systems'],
            'Education': ['Curriculum Design', 'Learning Management Systems', 'Educational Technology', 'Assessment Design'],
            'Business Development': ['CRM', 'Sales', 'Market Research', 'Strategic Planning', 'Negotiation', 'Analytics']
        };

        this.learningResources = {
            'JavaScript': {
                difficulty: 'medium',
                time: '2-3 months',
                priority: 'high'
            },
            'Python': {
                difficulty: 'medium',
                time: '2-4 months',
                priority: 'high'
            },
            'React': {
                difficulty: 'medium',
                time: '1-2 months',
                priority: 'medium'
            },
            'Machine Learning': {
                difficulty: 'hard',
                time: '4-6 months',
                priority: 'high'
            },
            'SQL': {
                difficulty: 'easy',
                time: '1-2 months',
                priority: 'high'
            },
            'AWS': {
                difficulty: 'medium',
                time: '2-3 months',
                priority: 'medium'
            },
            'Figma': {
                difficulty: 'easy',
                time: '2-4 weeks',
                priority: 'medium'
            },
            'SEO': {
                difficulty: 'easy',
                time: '1-2 months',
                priority: 'high'
            }
        };
    }

    analyzeSkillGap(userSkills, targetField, experienceLevel) {
        const userSkillsArray = userSkills.toLowerCase().split(',').map(s => s.trim());
        const requiredSkills = this.fieldSkillsMap[targetField] || [];

        const matchingSkills = [];
        const missingSkills = [];

        requiredSkills.forEach(skill => {
            const isMatched = userSkillsArray.some(userSkill =>
                userSkill.includes(skill.toLowerCase()) ||
                skill.toLowerCase().includes(userSkill)
            );

            if (isMatched) {
                matchingSkills.push(skill);
            } else {
                missingSkills.push(skill);
            }
        });

        return {
            matchingSkills,
            missingSkills,
            matchPercentage: Math.round((matchingSkills.length / requiredSkills.length) * 100),
            learningPath: this.generateLearningPath(missingSkills, experienceLevel),
            marketDemand: this.getMarketDemand(requiredSkills)
        };
    }

    generateLearningPath(missingSkills, experienceLevel) {
        return missingSkills.slice(0, 6).map(skill => {
            const resource = this.learningResources[skill] || {
                difficulty: 'medium',
                time: '1-3 months',
                priority: 'medium'
            };

            return {
                skill,
                ...resource,
                description: `Master ${skill} to enhance your ${experienceLevel.toLowerCase()} level expertise`
            };
        });
    }

    getMarketDemand(skills) {
        const highDemandSkills = ['Python', 'JavaScript', 'React', 'Machine Learning', 'AWS', 'SQL'];
        const mediumDemandSkills = ['Java', 'Docker', 'Figma', 'SEO'];

        return skills.map(skill => {
            let demand = 'Low';
            if (highDemandSkills.includes(skill)) demand = 'High';
            else if (mediumDemandSkills.includes(skill)) demand = 'Medium';

            return {
                skill,
                demand
            };
        });
    }
}

// Initialize Skill Gap Analyzer
const skillGapAnalyzer = new SkillGapAnalyzer();

// Form handler for skill gap analysis
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('skillGapForm')?.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const analysisData = {
            targetField: formData.get('targetField'),
            currentSkills: formData.get('currentSkills'),
            experienceLevel: formData.get('experienceLevel')
        };

        const results = skillGapAnalyzer.analyzeSkillGap(
            analysisData.currentSkills,
            analysisData.targetField,
            analysisData.experienceLevel
        );

        displaySkillGapResults(results, analysisData);
    });
});

// Display skill gap analysis results
function displaySkillGapResults(results, userData) {
    const resultsSection = document.getElementById('skillGapResults');

    // Matching Skills
    const matchingSkillsDiv = document.getElementById('matchingSkills');
    matchingSkillsDiv.innerHTML = `
        <p style="color: var(--success); font-weight: 600; margin-bottom: 1rem;">
            ${results.matchPercentage}% Skills Match
        </p>
        ${results.matchingSkills.map(skill => 
            `<span class="skill-tag skill-present">${skill}</span>`
        ).join('')}
        ${results.matchingSkills.length === 0 ? '<p style="color: var(--text-muted);">No matching skills found. Time to start learning!</p>' : ''}
    `;

    // Missing Skills
    const missingSkillsDiv = document.getElementById('missingSkills');
    missingSkillsDiv.innerHTML = `
        <p style="color: var(--warning); font-weight: 600; margin-bottom: 1rem;">
            ${results.missingSkills.length} Skills to Learn
        </p>
        ${results.missingSkills.map(skill => 
            `<span class="skill-tag skill-missing">${skill}</span>`
        ).join('')}
    `;

    // Learning Path
    const learningPathDiv = document.getElementById('learningPath');
    learningPathDiv.innerHTML = results.learningPath.map(item => `
        <div class="learning-item">
            <h4>${item.skill}</h4>
            <p>${item.description}</p>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
                <span class="difficulty-badge difficulty-${item.difficulty}">${item.difficulty}</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${item.time}</span>
            </div>
        </div>
    `).join('');

    // Market Demand
    const marketDemandDiv = document.getElementById('marketDemand');
    marketDemandDiv.innerHTML = results.marketDemand.map(item => `
        <div class="demand-indicator demand-${item.demand.toLowerCase()}">
            <span style="font-weight: 500;">${item.skill}</span>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 0.8rem; color: var(--text-secondary);">${item.demand} Demand</span>
                <div class="demand-bar">
                    <div class="demand-fill"></div>
                </div>
            </div>
        </div>
    `).join('');

    // Show results
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({
        behavior: 'smooth'
    });
}
import React from 'react';
import { GraduationCap, Globe, Stethoscope, BookOpen, Users, Award, Landmark, MapPin, FileCheck, Banknote, Plane } from 'lucide-react';
import { Service, Testimonial, NavItem, Country, BlogPost } from './types';

export const GOOGLE_MAPS_REVIEW_LINK = "https://maps.app.goo.gl/J3dB5QMszC1CZWUh6";

export const COMPANY_INFO = {
  name: "Light & Might Education",
  tagline: "Mentoring Tomorrow's Leaders, Today",
  email: "info@lightandmight.in",
  phone: ["7708084333", "7708084833"],
  address: "209/7, AKP Complex, Thilagar nagar, Avinashi road, Tirupur",
  social: {
    facebook: "https://www.facebook.com/lightandmight",
    instagram: "https://www.instagram.com/lightandmight",
    linkedin: "https://www.linkedin.com/company/lightandmight",
    youtube: "https://www.youtube.com/@lightandmight",
    twitter: "https://twitter.com/lightandmight"
  },
  // Using an SVG Data URI to ensure the logo is always visible and high quality without external dependencies
  logo: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 110'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3C!-- Lighthouse Icon --%3E%3Cpath d='M40 80L30 80L35 20L45 20L50 80Z' fill='%231E3A8A'/%3E%3Crect x='32' y='15' width='16' height='5' fill='%231E3A8A'/%3E%3Cpath d='M40 15L32 5L48 5Z' fill='%231E3A8A'/%3E%3Ccircle cx='40' cy='12' r='3' fill='%23F97316'/%3E%3Cpath d='M10 85Q40 75 70 85L70 95L10 95Z' fill='%231E3A8A'/%3E%3C!-- Text --%3E%3Ctext font-family='serif' font-size='24' font-weight='bold' fill='%233B82F6'%3E%3Ctspan x='80' y='35'%3ELIGHT %26 MIGHT%3C/tspan%3E%3C/text%3E%3Ctext font-family='serif' font-size='34' font-weight='900' fill='%231E3A8A' letter-spacing='1'%3E%3Ctspan x='80' y='68'%3EEDUCATION%3C/tspan%3E%3C/text%3E%3Ctext font-family='sans-serif' font-size='12' font-weight='600' fill='%23EA580C'%3E%3Ctspan x='12' y='95'%3EMentoring Tomorrow%27s Leaders, Today%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Study Abroad', href: '/study-abroad' },
  { label: 'MBBS Abroad', href: '/mbbs-abroad' },
  { label: 'Test Prep', href: '/test-prep' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact', isButton: true },
];

export const STUDY_ABROAD_COUNTRIES: Country[] = [
  {
    id: 'usa',
    name: 'USA',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    description: 'The USA offers a diverse range of top-ranked universities and cutting-edge research opportunities. It is the preferred destination for STEM courses and management studies.',
    universities: [
      { name: 'Harvard University', location: 'Cambridge, MA' },
      { name: 'Stanford University', location: 'Stanford, CA' },
      { name: 'MIT', location: 'Cambridge, MA' },
      { name: 'Caltech', location: 'Pasadena, CA' },
      { name: 'University of Chicago', location: 'Chicago, IL' },
      { name: 'Princeton University', location: 'Princeton, NJ' },
      { name: 'Yale University', location: 'New Haven, CT' },
      { name: 'Columbia University', location: 'New York, NY' }
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop',
    description: 'Home to some of the oldest and most prestigious universities in the world. The UK offers intensive 1-year master’s programs and 3-year bachelor’s degrees.',
    universities: [
      { name: 'University of Oxford', location: 'Oxford' },
      { name: 'University of Cambridge', location: 'Cambridge' },
      { name: 'Imperial College London', location: 'London' },
      { name: 'UCL', location: 'London' },
      { name: 'University of Edinburgh', location: 'Edinburgh' },
      { name: 'King\'s College London', location: 'London' },
      { name: 'LSE', location: 'London' }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop',
    description: 'Known for its high quality of life, welcoming environment, and post-study work opportunities. Canada is ideal for students looking for long-term settlement.',
    universities: [
      { name: 'University of Toronto', location: 'Toronto' },
      { name: 'McGill University', location: 'Montreal' },
      { name: 'University of British Columbia', location: 'Vancouver' },
      { name: 'University of Alberta', location: 'Edmonton' },
      { name: 'McMaster University', location: 'Hamilton' },
      { name: 'University of Waterloo', location: 'Waterloo' }
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop',
    description: 'With world-class infrastructure and a relaxed lifestyle, Australia is a top choice for research, engineering, and marine biology studies.',
    universities: [
      { name: 'Australian National University', location: 'Canberra' },
      { name: 'University of Melbourne', location: 'Melbourne' },
      { name: 'University of Sydney', location: 'Sydney' },
      { name: 'University of Queensland', location: 'Brisbane' },
      { name: 'UNSW Sydney', location: 'Sydney' },
      { name: 'Monash University', location: 'Melbourne' }
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop',
    description: 'Germany is the hub of engineering and technology. Public universities offer low to zero tuition fees, making it an affordable high-quality option.',
    universities: [
      { name: 'Technical University of Munich', location: 'Munich' },
      { name: 'LMU Munich', location: 'Munich' },
      { name: 'Heidelberg University', location: 'Heidelberg' },
      { name: 'Humboldt University', location: 'Berlin' },
      { name: 'RWTH Aachen University', location: 'Aachen' }
    ]
  },
  {
    id: 'france',
    name: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    description: 'Famous for its fashion, art, and business schools. France offers a culturally rich experience and top-ranked management institutions (Grandes Écoles).',
    universities: [
      { name: 'Sorbonne University', location: 'Paris' },
      { name: 'HEC Paris', location: 'Jouy-en-Josas' },
      { name: 'École Polytechnique', location: 'Palaiseau' },
      { name: 'INSEAD', location: 'Fontainebleau' },
      { name: 'ENS Paris', location: 'Paris' }
    ]
  },
  {
    id: 'europe',
    name: 'Other European Countries',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2072&auto=format&fit=crop',
    description: 'Explore opportunities in Netherlands, Sweden, Switzerland, and Ireland. These countries offer English-taught programs and innovative research centers.',
    universities: [
      { name: 'ETH Zurich', location: 'Switzerland' },
      { name: 'University of Amsterdam', location: 'Netherlands' },
      { name: 'Trinity College Dublin', location: 'Ireland' },
      { name: 'Karolinska Institute', location: 'Sweden' },
      { name: 'KU Leuven', location: 'Belgium' }
    ]
  }
];

export const MBBS_COUNTRIES: Country[] = [
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    image: 'https://images.unsplash.com/photo-1528659856754-523f46258908?q=80&w=2070&auto=format&fit=crop',
    description: 'Uzbekistan has emerged as a popular destination for MBBS with its affordable fee structure, modern infrastructure, and English-medium curriculum tailored for international students.',
    universities: [
      { name: 'Tashkent Medical Academy', location: 'Tashkent' },
      { name: 'Samarkand State Medical Institute', location: 'Samarkand' },
      { name: 'Andijan State Medical Institute', location: 'Andijan' },
      { name: 'Bukhara State Medical Institute', location: 'Bukhara' }
    ]
  },
  {
    id: 'russia',
    name: 'Russia',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1949&auto=format&fit=crop',
    description: 'Russia has a long history of medical education excellence. Russian medical degrees are recognized globally by WHO and NMC (India). High-quality clinical exposure is a hallmark.',
    universities: [
      { name: 'Lomonosov Moscow State University', location: 'Moscow' },
      { name: 'Kazan Federal University', location: 'Kazan' },
      { name: 'Bashkir State Medical University', location: 'Ufa' },
      { name: 'Crimean Federal University', location: 'Simferopol' },
      { name: 'First Moscow State Medical University', location: 'Moscow' }
    ]
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    image: 'https://images.unsplash.com/photo-1558588942-930faae5a389?q=80&w=2070&auto=format&fit=crop',
    description: 'Kazakhstan offers a 5-year MBBS program which is highly attractive. The universities focus on practical skills and have state-of-the-art laboratories.',
    universities: [
      { name: 'Kazakh National Medical University', location: 'Almaty' },
      { name: 'Astana Medical University', location: 'Nur-Sultan' },
      { name: 'Semey State Medical University', location: 'Semey' },
      { name: 'Karaganda Medical University', location: 'Karaganda' }
    ]
  },
  {
    id: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    image: 'https://images.unsplash.com/photo-1569531940187-575239e24808?q=80&w=2070&auto=format&fit=crop',
    description: 'Known for its extremely low cost of living and education. Kyrgyzstan universities provide a comfortable environment for Indian students with good hostel facilities.',
    universities: [
      { name: 'Osh State Medical University', location: 'Osh' },
      { name: 'Jalal-Abad State University', location: 'Jalal-Abad' },
      { name: 'International School of Medicine', location: 'Bishkek' },
      { name: 'Asian Medical Institute', location: 'Kant' }
    ]
  },
  {
    id: 'georgia',
    name: 'Georgia',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop',
    description: 'Georgia is bridging Europe and Asia, offering European standard education at affordable rates. The weather is pleasant, and the country is very safe for students.',
    universities: [
      { name: 'Tbilisi State Medical University', location: 'Tbilisi' },
      { name: 'Batumi Shota Rustaveli State University', location: 'Batumi' },
      { name: 'Akaki Tsereteli State University', location: 'Kutaisi' },
      { name: 'New Vision University', location: 'Tbilisi' }
    ]
  },
  {
    id: 'serbia',
    name: 'Serbia',
    image: 'https://images.unsplash.com/photo-1606132049222-026858c70724?q=80&w=1974&auto=format&fit=crop',
    description: 'An upcoming destination for MBBS in Europe. Serbia offers high standards of education and degrees recognized throughout the European Union.',
    universities: [
      { name: 'University of Belgrade', location: 'Belgrade' },
      { name: 'University of Novi Sad', location: 'Novi Sad' },
      { name: 'University of Nis', location: 'Nis' },
      { name: 'University of Kragujevac', location: 'Kragujevac' }
    ]
  },
  {
    id: 'bosnia',
    name: 'Bosnia',
    image: 'https://images.unsplash.com/photo-1565619623630-671e72db4343?q=80&w=1974&auto=format&fit=crop',
    description: 'Bosnia and Herzegovina offers quality medical education in English. It is a culturally diverse and welcoming country for international students.',
    universities: [
      { name: 'University of Sarajevo', location: 'Sarajevo' },
      { name: 'University of East Sarajevo', location: 'East Sarajevo' },
      { name: 'University of Banja Luka', location: 'Banja Luka' },
      { name: 'University of Tuzla', location: 'Tuzla' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'career-counseling',
    title: 'Career Counseling',
    description: 'Expert guidance to help you choose the right career path based on your profile and interests.',
    icon: <Users className="w-10 h-10 text-orange-600" />,
    longDescription: 'Our Career Counseling service is designed to bridge the gap between your passion and professional reality. Using psychometric testing and in-depth one-on-one sessions, we analyze your strengths, weaknesses, and interests to recommend the most suitable career paths.',
    features: [
      'Psychometric Personality Assessment',
      'One-on-One Counseling Sessions',
      'Industry Trend Analysis',
      'Course & University Recommendations'
    ],
    process: [
      { step: 1, title: 'Profile Assessment', description: 'We evaluate your academic background and interests.' },
      { step: 2, title: 'Psychometric Test', description: 'A standardized test to understand your aptitude.' },
      { step: 3, title: 'Counseling Session', description: 'Discussing reports and exploring career options.' },
      { step: 4, title: 'Roadmap Creation', description: 'Finalizing the path and next steps.' }
    ]
  },
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    description: 'End-to-end support for university selection, application processes in USA, UK, Canada, Australia & Europe.',
    icon: <Globe className="w-10 h-10 text-orange-600" />,
    longDescription: 'Studying abroad opens doors to global opportunities. We provide comprehensive support for students aspiring to study in top destinations like the USA, UK, Canada, Australia, and Europe.',
    features: [
      'University Shortlisting',
      'SOP & LOR Editing',
      'Application Filing',
      'Pre-departure Briefing'
    ],
    process: [
      { step: 1, title: 'Free Consultation', description: 'Understanding your goals and budget.' },
      { step: 2, title: 'University Selection', description: 'Shortlisting universities based on your profile.' },
      { step: 3, title: 'Application Process', description: 'Documentation and applying to universities.' },
      { step: 4, title: 'Visa & Departure', description: 'Visa interview prep and travel arrangements.' }
    ]
  },
  {
    id: 'mbbs-abroad',
    title: 'Study MBBS Abroad',
    description: 'Secure seats in top medical universities in Russia, Uzbekistan, Kazakhstan, Georgia and more.',
    icon: <Stethoscope className="w-10 h-10 text-orange-600" />,
    longDescription: 'Pursue your dream of becoming a doctor with our specialized MBBS Abroad program. We partner with MCI/WHO recognized medical universities. We ensure transparent admission processes, zero donation, and complete assistance.',
    features: [
      'MCI/WHO Recognized Universities',
      'Direct Admission Support',
      'Low Tuition Fees Options',
      'Post-Arrival Assistance'
    ],
    process: [
      { step: 1, title: 'Eligibility Check', description: 'Checking NEET score and academic eligibility.' },
      { step: 2, title: 'Country Selection', description: 'Choosing the best country and university.' },
      { step: 3, title: 'Admission Letter', description: 'Securing the provisional admission letter.' },
      { step: 4, title: 'Visa & Travel', description: 'Visa processing and group travel arrangements.' }
    ]
  },
  {
    id: 'test-prep',
    title: 'Test Preparation',
    description: 'Comprehensive coaching for IELTS, TOEFL, GRE, and GMAT with proven strategies for high scores.',
    icon: <BookOpen className="w-10 h-10 text-orange-600" />,
    longDescription: 'Ace your standardized tests with Light & Might. Our certified trainers provide intensive coaching for IELTS, TOEFL, GRE, and GMAT. We offer small batch sizes and personalized attention.',
    features: [
      'Certified Trainers',
      'Comprehensive Study Material',
      'Regular Mock Tests',
      'Flexible Timings'
    ],
    process: [
      { step: 1, title: 'Diagnostic Test', description: 'Assessing your current level.' },
      { step: 2, title: 'Classroom Training', description: 'Concept building and strategy sessions.' },
      { step: 3, title: 'Mock Tests', description: 'Full-length practice tests with analysis.' },
      { step: 4, title: 'Final Exam', description: 'Exam registration and last-minute tips.' }
    ]
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    description: 'End-to-end support for your student visa application with mock interviews and document checklists.',
    icon: <FileCheck className="w-10 h-10 text-orange-600" />,
    longDescription: 'Navigating the visa process can be daunting. Our Visa Assistance service ensures your application is flawless. We keep up with the latest immigration policies of major countries to provide accurate advice.',
    features: [
      'Document Checklist Verification',
      'Application Form Filling',
      'Mock Visa Interviews',
      'Financial Document Guidance'
    ],
    process: [
      { step: 1, title: 'Document Collection', description: 'Gathering all necessary financial and academic documents.' },
      { step: 2, title: 'Application Review', description: 'Thorough review of your visa application forms.' },
      { step: 3, title: 'Mock Interview', description: 'Simulated interviews to boost your confidence.' },
      { step: 4, title: 'Submission', description: 'Booking slot and submitting the application.' }
    ]
  },
  {
    id: 'loan-support',
    title: 'Education Loan Support',
    description: 'Hassle-free education loan assistance through our tie-ups with leading national banks and NBFCs.',
    icon: <Banknote className="w-10 h-10 text-orange-600" />,
    longDescription: 'Don\'t let finances hold you back. We assist students in securing education loans with favorable terms. Our partnerships with major financial institutions ensure a quicker processing time.',
    features: [
      'Profile Evaluation for Loan Eligibility',
      'List of Required Documents',
      'Direct Bank Connect',
      'Negotiation for Best Interest Rates'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluating loan requirement and eligibility.' },
      { step: 2, title: 'Bank Selection', description: 'Choosing the right lender (Public/Private/NBFC).' },
      { step: 3, title: 'Documentation', description: 'Assisting with collateral or non-collateral paperwork.' },
      { step: 4, title: 'Disbursement', description: 'Tracking status until the loan is sanctioned.' }
    ]
  },
  {
    id: 'forex-travel',
    title: 'Forex & Flight Tickets',
    description: 'Best exchange rates for currency and exclusive student discounts on flight bookings.',
    icon: <Plane className="w-10 h-10 text-orange-600" />,
    longDescription: 'We ensure your journey starts on the right note. From getting the best foreign exchange rates to booking the most convenient flight connections with extra baggage allowance for students.',
    features: [
      'Competitive Forex Rates',
      'Forex Cards & Wire Transfers',
      'Student Discounted Airfares',
      'Travel Insurance Assistance'
    ],
    process: [
      { step: 1, title: 'Requirement Analysis', description: 'Determining currency needs and travel dates.' },
      { step: 2, title: 'Quote Comparison', description: 'Getting the best quotes from vendors.' },
      { step: 3, title: 'Booking', description: 'Locking the exchange rate and flight tickets.' },
      { step: 4, title: 'Delivery', description: 'Doorstep delivery of Forex card and tickets.' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 1, 
    name: "Priya Ramesh", 
    role: "MBBS Student", 
    university: "Tbilisi State Medical University",
    content: "Light & Might Education helped me fulfill my dream of studying MBBS in Georgia. The entire process from admission to visa was smooth and transparent. Highly recommended!", 
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVGXqC_1y3Kz2X8x2X4_9X7_6X5_3X1",
    rating: 5,
    date: "2 months ago"
  },
  { 
    id: 2, 
    name: "Karthik Sundaram", 
    role: "Study Abroad", 
    university: "University of Hertfordshire",
    content: "Excellent consultancy service in Tirupur. They guided me perfectly for my UK student visa. The mock interviews were a game changer. Thanks to the entire team!", 
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX5_4X7_6X5_3X1_2X4_9X7_6X5_3X1",
    rating: 5,
    date: "1 month ago"
  },
  { 
    id: 3, 
    name: "Divya Bharathi", 
    role: "IELTS Student", 
    university: "",
    content: "I took IELTS coaching here and scored an overall band of 7.5. The trainers are very knowledgeable and supportive. The study materials provided were very helpful.", 
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX_9X7_6X5_3X1_2X4_9X7_6X5_3X1",
    rating: 5,
    date: "3 weeks ago"
  },
  { 
    id: 4, 
    name: "Sanjay Krishnan", 
    role: "Visa Assistance", 
    university: "Lambton College",
    content: "Best place for Canada visa processing. They checked my documents thoroughly and filed the visa on time. I got my approval in just 15 days. Very happy with their service.", 
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX_2X4_9X7_6X5_3X1_2X4_9X7_6X5",
    rating: 5,
    date: "4 months ago"
  },
  { 
    id: 5, 
    name: "Meera Nair", 
    role: "Counseling", 
    university: "",
    content: "I was confused about which country to choose for my Masters. The counseling session at Light & Might cleared all my doubts. They gave me a personalized roadmap.", 
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX_6X5_3X1_2X4_9X7_6X5_3X1_2X4",
    rating: 5,
    date: "5 months ago"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'study-in-usa-guide',
    title: 'The Complete Guide to Studying in the USA',
    excerpt: 'Everything you need to know about the admission process, F1 visa, and advantages of the American education system.',
    date: 'March 15, 2024',
    author: 'Dr. Sarah Mitchell',
    category: 'Study Abroad',
    image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2031&auto=format&fit=crop',
    content: (
      <div className="space-y-6">
        <p>The United States remains the top destination for international students, hosting over a million students annually. Its world-renowned universities, flexible curriculum, and research opportunities make it a dream destination.</p>
        
        <h3 className="text-xl font-bold text-gray-900">The Admission Process</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Research:</strong> Start 12-18 months before your intended intake. Identify universities that match your profile.</li>
          <li><strong>Standardized Tests:</strong> Take the SAT/ACT for undergraduate or GRE/GMAT for graduate programs. English proficiency (TOEFL/IELTS) is mandatory.</li>
          <li><strong>Application:</strong> Most universities use the Common App. You will need a Statement of Purpose (SOP), Letters of Recommendation (LOR), and transcripts.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">Advantages</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Academic Flexibility:</strong> The 'Major/Minor' system allows you to combine diverse interests.</li>
          <li><strong>OPT (Optional Practical Training):</strong> STEM graduates can work in the US for up to 3 years after graduation.</li>
          <li><strong>Global Recognition:</strong> A US degree is valued by employers worldwide.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'mbbs-in-russia',
    title: 'MBBS in Russia: High Quality at Low Cost',
    excerpt: 'Why Russia is becoming the preferred choice for Indian medical aspirants. Detailed look at the process and benefits.',
    date: 'March 10, 2024',
    author: 'Dr. Rajesh Kumar',
    category: 'MBBS Abroad',
    image: 'https://images.unsplash.com/photo-1516574187841-693083f05b1e?q=80&w=2070&auto=format&fit=crop',
    content: (
      <div className="space-y-6">
        <p>For decades, Russia has been a beacon for medical students offering high-quality education at a fraction of the cost compared to private colleges in India or the West.</p>
        
        <h3 className="text-xl font-bold text-gray-900">The Process</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Eligibility:</strong> 50% in PCB in 12th Grade and qualifying NEET score.</li>
          <li><strong>Application:</strong> Apply directly through authorized consultancies like Light & Might. No entrance exam in Russia for most universities.</li>
          <li><strong>Visa:</strong> The student visa process is straightforward with university invitation letters.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">Key Advantages</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Affordability:</strong> Tuition fees range from $3,000 to $6,000 per year.</li>
          <li><strong>Recognition:</strong> Degrees are recognized by WHO, NMC (India), FAIMER, and more.</li>
          <li><strong>English Medium:</strong> Top universities offer the full 6-year course in English.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'study-in-uk-guide',
    title: 'Study in the UK: Fast-Track Your Career',
    excerpt: 'Discover the benefits of 1-year Master’s programs and the Graduate Route Visa in the United Kingdom.',
    date: 'March 05, 2024',
    author: 'Emily Watson',
    category: 'Study Abroad',
    image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop',
    content: (
      <div className="space-y-6">
        <p>The UK offers a rich heritage of education combined with modern research facilities. It is particularly famous for its intensive duration courses.</p>
        
        <h3 className="text-xl font-bold text-gray-900">The Process</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>UCAS:</strong> Used for undergraduate applications. Direct applications for most Masters programs.</li>
          <li><strong>Documents:</strong> SOP, LORs, and IELTS/PTE scores.</li>
          <li><strong>CAS:</strong> Confirmation of Acceptance for Studies is required for the Tier 4 Student Visa.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">Advantages</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Duration:</strong> Master's degrees are typically 1 year, saving time and living costs.</li>
          <li><strong>Graduate Route Visa:</strong> Allows international students to stay and work for 2 years (3 years for PhD) after graduation.</li>
          <li><strong>Healthcare:</strong> Access to the NHS (National Health Service).</li>
        </ul>
      </div>
    )
  },
  {
    id: 'study-in-canada',
    title: 'Canada: The Pathway to Permanent Residency',
    excerpt: 'Understand the SDS program, PGWP, and why Canada is the most welcoming country for students.',
    date: 'February 28, 2024',
    author: 'Anita Desai',
    category: 'Study Abroad',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1965&auto=format&fit=crop',
    content: (
      <div className="space-y-6">
        <p>Canada is synonymous with quality of life. Its transparent immigration policies make it an attractive destination for students looking for long-term settlement.</p>
        
        <h3 className="text-xl font-bold text-gray-900">The Process (SDS)</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Student Direct Stream (SDS):</strong> A streamlined visa processing for select countries including India. requires IELTS 6.0 and GIC payment.</li>
          <li><strong>GIC:</strong> Guaranteed Investment Certificate of CAD 20,635 to prove financial stability.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">Advantages</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>PGWP:</strong> Post-Graduation Work Permit allows you to work for up to 3 years.</li>
          <li><strong>PR Pathway:</strong> Canadian education and work experience award high points for Express Entry (PR).</li>
          <li><strong>Co-op Programs:</strong> Earn while you learn through paid internships.</li>
        </ul>
      </div>
    )
  }
];
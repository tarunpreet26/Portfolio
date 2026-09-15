export const projects = [
  {
    id: 'atmosphera',
    name: 'Atmosphera',
    tagline: 'Full-Stack Weather Intelligence Platform',
    date: 'May 2026',
    featured: true,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Machine Learning', 'Chart.js', 'OpenWeatherMap API'],
    description:
      'Engineered a full-stack weather intelligence platform integrating real-time weather, 5-day forecasting, and AQI data through the OpenWeatherMap API — enhanced with an ensemble ML prediction pipeline for accurate temperature forecasting.',
    highlights: [
      'Real-time weather + 5-day forecast + AQI data via OpenWeatherMap API',
      'Ensemble ML pipeline: Random Forest, Gradient Boosting & Linear Regression',
      '22 engineered atmospheric features for temperature forecasting',
      'Multilingual i18n support across 6 languages with RTL layout',
      'Interactive Chart.js visualizations for weather data trends',
      'Export functionality: CSV, PDF, and Excel formats',
    ],
    mlApproach: {
      models: ['Random Forest', 'Gradient Boosting', 'Linear Regression'],
      features: 22,
      task: 'Temperature forecasting',
    },
    githubUrl: 'https://github.com/tarunpreet26', // Replace with exact repo URL
    liveUrl: null,
    accentColor: 'cyan',
    icon: '🌤️',
  },
  {
    id: 'finova-advisor',
    name: 'Finova Advisor',
    tagline: 'AI-Powered Investment Intelligence Platform',
    date: 'May 2026',
    featured: true,
    technologies: ['Python', 'Gemini 2.5 Flash', 'Decision Tree', 'Machine Learning', 'AI'],
    description:
      'Designed a 3-module AI-powered investment platform integrating Google Gemini 2.5 Flash for risk prediction, personalized investment planning, and intelligent financial advisory with 100% API error-handling coverage.',
    highlights: [
      'Gemini 2.5 Flash integration for AI-driven risk prediction & planning',
      'Decision Tree classifier with 6 financial features → 3 risk levels',
      'Personalized portfolio allocation and investment recommendations',
      '3-tier AI architecture for optimized performance',
      'Chatbot responses within 1–3 seconds',
      'Investment plan generation under 2 seconds',
      '100% API error-handling coverage across all modules',
    ],
    mlApproach: {
      models: ['Decision Tree', 'Gemini 2.5 Flash'],
      features: 6,
      task: 'Investment risk prediction (3 levels)',
    },
    githubUrl: 'https://github.com/tarunpreet26', // Replace with exact repo URL
    liveUrl: null,
    accentColor: 'purple',
    icon: '💹',
  },
  {
    id: 'real-estate-frontend',
    name: 'Real Estate Platform UI',
    tagline: 'Responsive Frontend for House Rental Platform',
    date: 'November 2024',
    featured: false,
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    description:
      'Developed a responsive and user-friendly frontend for a house rental platform with dynamic JavaScript interactions, backend API integration, and a consistent cross-device visual experience.',
    highlights: [
      'Fully responsive layout for desktop, tablet, and mobile',
      'Dynamic JavaScript interactions and UI state management',
      'Backend API integration for real-time data',
      'Consistent and visually appealing cross-device experience',
    ],
    githubUrl: 'https://github.com/tarunpreet26', // Replace with exact repo URL
    liveUrl: null,
    accentColor: 'blue',
    icon: '🏠',
  },
];

import { StudentProfile } from '../types';

export const demoStudent: StudentProfile = {
  id: 'stu-001',
  name: 'Arjun Mehta',
  education: 'B.Tech',
  branch: 'Computer Science and Engineering',
  year: 3,
  skills: [
    {
      name: 'Python',
      level: 'advanced',
      evidence: 'Built multiple ML projects and completed CS50 AI',
      confidence: 0.9,
    },
    {
      name: 'JavaScript',
      level: 'intermediate',
      evidence: 'Developed a personal portfolio and a to-do app using React',
      confidence: 0.75,
    },
    {
      name: 'React',
      level: 'intermediate',
      evidence: 'Built two single-page applications with React and Redux',
      confidence: 0.7,
    },
    {
      name: 'Node.js',
      level: 'beginner',
      evidence: 'Completed an Express REST API tutorial project',
      confidence: 0.5,
    },
    {
      name: 'Machine Learning',
      level: 'intermediate',
      evidence: 'Coursework in ML, built a sentiment classifier using Scikit-learn',
      confidence: 0.7,
    },
    {
      name: 'SQL',
      level: 'intermediate',
      evidence: 'Database course + built queries for a library management project',
      confidence: 0.65,
    },
    {
      name: 'Git',
      level: 'intermediate',
      evidence: 'Used Git/GitHub across all academic and personal projects',
      confidence: 0.8,
    },
  ],
  interests: [
    'Artificial Intelligence',
    'Web Development',
    'Open Source',
    'Data Science',
  ],
  projects: [
    'Sentiment Analysis on Movie Reviews using Scikit-learn',
    'Personal Portfolio Website (React + Tailwind)',
    'Library Management System (Python + SQLite)',
  ],
  experience: [
    'Teaching Assistant – Data Structures course (1 semester)',
    'Google Developer Student Club – Tech Team Member',
  ],
};

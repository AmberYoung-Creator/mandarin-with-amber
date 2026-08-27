export type NavigationItem = { label: string; to: string }

export const navigation: NavigationItem[] = [
  { label: 'About', to: '#about' },
  { label: 'Courses', to: '#courses' },
  { label: 'Learning Experience', to: '#experience' },
  { label: 'Book a Trial', to: '#contact' },
]

export const courses = [
  {
    title: 'Daily Chinese',
    summary: 'Practical Mandarin for everyday life and conversations in China.',
    audience: [
      'Learners who want to handle familiar daily situations with confidence',
      'People living in, moving to, or travelling in China',
      'Anyone who wants a clear path from beginner foundations to fluency',
    ],
  },
  {
    title: 'Business Chinese',
    summary: 'A tailored program for professionals who need Chinese at work.',
    audience: [
      'Professionals working in tech, trade, finance, or international teams',
      'Learners preparing for meetings, networking, and workplace communication',
      'People who need industry-specific topics and real-life business scenarios',
    ],
  },
  {
    title: 'HSK Preparation',
    summary: 'Structured, goal-oriented preparation with clear milestones.',
    audience: [
      'Learners working toward HSK 3-6 for study, work, or personal goals',
      'Students who want a focused plan for listening, reading, writing, and speaking',
      'Anyone preparing for university applications or job requirements',
    ],
  },
]

export const courseSteps = [
  { number: '01', title: 'Set your direction', description: 'Choose the situations, skills, and outcomes that matter most to you.' },
  { number: '02', title: 'Receive your course plan', description: 'Get a personalized learning path, lesson focus, and schedule.' },
  { number: '03', title: 'Learn, practise, and review', description: 'Build confidence through structured lessons, feedback, and real use.' },
]

export const experiencePoints = [
  { title: 'Online or in person', description: 'Learn online from anywhere, or meet in Shenzhen for face-to-face sessions.' },
  { title: 'Structured lessons', description: 'Clear lesson materials, useful homework, and personalized feedback.' },
  { title: 'Learning that stays connected', description: 'Google Classroom keeps your materials, assignments, and progress in one place.' },
  { title: 'Interactive and culture-rich', description: 'Learn Chinese through communication, cultural context, and situations you recognise.' },
]

export type NavigationItem = {
  label: string
  to: string
}

export type CaseStudy = {
  slug: string
  title: string
  goal: string
  journey: string
  tag: string
  body: string[]
  stagesIntro?: string
  stages?: string
  bodyAfterStages?: string[]
  takeaway: string
  media: CaseMedia[]
}

export type CaseMedia = {
  src?: string
  alt: string
  label: string
}

export const navigation: NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Beginner Course', to: '/beginner-course' },
  { label: 'One-on-One', to: '/one-on-one' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
]

export const primaryLearningOptions = [
  {
    title: 'Beginner Course',
    description: 'A clear starting point for building everyday Mandarin.',
    to: '/beginner-course',
  },
  {
    title: 'One-on-One',
    description: 'Personalized learning connected to your real situations.',
    to: '/one-on-one',
  },
]

export const secondaryLearningLinks = [
  {
    title: 'Resources',
    description: 'Learning materials and future updates to explore at your pace.',
    to: '/resources',
  },
  {
    title: 'About Amber',
    description: 'More about Amber’s teaching approach and life in Shenzhen.',
    to: '/about',
  },
]

export const credibilityPoints = [
  'Teaching Mandarin since 2012',
  '10+ years of experience',
  'Hundreds of learners',
  'Based in Shenzhen',
  'Personalized learning design',
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'alex',
    title: 'Alex · Reading Culture Through Stories',
    goal: 'Understand Chinese culture through reading.',
    journey:
      'From flashcards to stories to his own storybook, Alex built a more meaningful path into characters and culture.',
    tag: 'Story-based character learning',
    body: [
      'Alex wanted to understand Chinese culture through stories, but reading Chinese characters initially felt difficult and demanding.',
      'We began with flashcards to build a basic character foundation. Gradually, those characters moved into short stories, where they appeared in meaningful situations rather than as isolated symbols. Reading became not only a language exercise, but also a way to encounter people, values, history, and everyday life in China.',
      'As Alex became more comfortable reading, he began exploring longer stories and eventually creating his own Chinese storybook.',
    ],
    stagesIntro: 'His learning journey developed through three stages:',
    stages: 'Characters → Stories → Personal Creation',
    bodyAfterStages: [
      'By giving characters a narrative context and a creative destination, reading became less intimidating, more enjoyable, and more motivating.',
    ],
    takeaway:
      'Characters become easier to remember when they are connected to stories, culture, and something the learner wants to create.',
    media: [
      {
        alt: 'Placeholder for Alex’s Chinese storybook or reading project.',
        label: 'Alex case image — storybook or reading project',
      },
      {
        alt: 'Placeholder for an additional Alex learning image.',
        label: 'Additional Alex learning image',
      },
    ],
  },
  {
    slug: 'nik',
    title: 'Nik · Building a Personal Voice',
    goal: 'Express his own experiences, opinions, and identity in Chinese.',
    journey:
      'Through personalized stories based on his work, values, relationships, and life in China, Nik built a long-term Chinese communication system.',
    tag: 'Identity-based expression',
    body: [
      'Nik is a technology entrepreneur who had already lived in Shenzhen for many years. He did not simply need more textbook vocabulary. He wanted to communicate more personally and confidently in Chinese.',
      'Our lessons began with the subjects that genuinely belonged to his life: entrepreneurship, family, travel, relationships, work projects, values, and the reasons Shenzhen feels like home.',
      'His classroom conversations gradually became structured personal materials, including stories, question-and-answer practice, vocabulary collections, and review activities. These materials were later organized into a personal Chinese dashboard that he could continue using outside class.',
      'Instead of learning only what a textbook expected him to say, Nik began developing the Chinese he needed to express who he actually was.',
    ],
    takeaway:
      'A learner’s own life can become a powerful and sustainable Chinese curriculum.',
    media: [
      {
        alt: 'Placeholder for Nik’s personal Chinese learning dashboard or project.',
        label: 'Nik case image — personal learning dashboard or project',
      },
      {
        alt: 'Placeholder for an additional Nik learning image.',
        label: 'Additional Nik learning image',
      },
    ],
  },
  {
    slug: 'rachael',
    title: 'Rachael · Learning Through Experience',
    goal: 'Remember and reconnect with her Shenzhen experience through Chinese.',
    journey:
      'From food, neighborhoods, art, museums, and conversations, Rachael’s trip became an interactive Chinese memory book for lasting language learning.',
    tag: 'Experience-based learning',
    body: [
      'During Rachael’s visit to Shenzhen, Chinese learning happened naturally through the city: ordering food, visiting neighborhoods and museums, noticing local culture, taking photos, and sharing conversations.',
      'After the trip, we turned those experiences into an interactive Chinese memory book.',
      'The book follows her journey through a visual timeline and combines personal photos, illustrations, useful vocabulary, Chinese phrases, pinyin, English translations, and recorded audio. Each scene preserves both a memory and a small piece of language connected to it.',
      'Instead of using generic travel dialogues, the learning material grew directly from places she had visited and moments she wanted to remember.',
      'The result is both a personal keepsake and a resource she can return to whenever she wants to revisit Shenzhen through Chinese.',
    ],
    takeaway:
      'When language is attached to a real experience, it becomes easier to remember and more meaningful to keep.',
    media: [
      {
        alt: 'Placeholder for Rachael’s Shenzhen memory book or travel project.',
        label: 'Rachael case image — Shenzhen memory book or travel project',
      },
      {
        alt: 'Placeholder for an additional Rachael learning image.',
        label: 'Additional Rachael learning image',
      },
    ],
  },
]

export const humanAmberImages = [
  {
    src: '/assets/Human Amber 02.jpeg',
    alt: 'Amber during an evening out in Shenzhen.',
  },
  {
    src: '/assets/Kids & Robotics 01.jpg',
    alt: 'Amber helping children take part in a community robotics activity in Shenzhen.',
  },
  {
    src: '/assets/World On My Plate 02.jpeg',
    alt: 'Amber with children and families after a culture and cooking activity.',
  },
  {
    src: '/assets/World On My Plate 02.JPG',
    alt: 'World On My Plate culture and language project booklets.',
  },
  {
    src: '/assets/Human Amber 01.jpeg',
    alt: 'Amber traveling by train during a local journey.',
  },
]

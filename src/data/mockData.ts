// Mock data for SaaS landing page

export const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const useCases = [
  {
    id: 1,
    title: 'Automate repetitive tasks',
    description: 'Save hours every week by automating manual workflows that slow your team down.',
    badge: 'Popular',
    size: 'large',
    hasImage: true,
  },
  {
    id: 2,
    title: 'Centralize team knowledge',
    description: 'Keep all docs, processes, and decisions in one searchable place.',
    badge: null,
    size: 'medium',
    hasImage: false,
  },
  {
    id: 3,
    title: 'Real-time collaboration',
    description: 'Work together seamlessly, no matter where your team is located.',
    badge: 'New',
    size: 'medium',
    hasImage: true,
  },
  {
    id: 4,
    title: 'Smart notifications',
    description: 'Get alerted only when it matters. No noise, just signal.',
    badge: null,
    size: 'small',
    hasImage: false,
  },
  {
    id: 5,
    title: 'Custom workflows',
    description: 'Build workflows that match how your team actually works.',
    badge: null,
    size: 'small',
    hasImage: false,
  },
  {
    id: 6,
    title: 'Analytics & insights',
    description: "Understand what's working and where to improve with built-in analytics.",
    badge: null,
    size: 'small',
    hasImage: false,
  },
];

export const integrations = [
  { id: 1, name: 'Slack', icon: '💬' },
  { id: 2, name: 'Google Drive', icon: '📁' },
  { id: 3, name: 'Notion', icon: '📝' },
  { id: 4, name: 'Figma', icon: '🎨' },
  { id: 5, name: 'GitHub', icon: '🐙' },
  { id: 6, name: 'Jira', icon: '📊' },
  { id: 7, name: 'Zapier', icon: '⚡' },
  { id: 8, name: 'Salesforce', icon: '☁️' },
  { id: 9, name: 'HubSpot', icon: '🧡' },
  { id: 10, name: 'Stripe', icon: '💳' },
  { id: 11, name: 'Intercom', icon: '💁' },
  { id: 12, name: 'Airtable', icon: '📋' },
];

export const faqs = [
  {
    id: 1,
    question: 'How long does setup take?',
    answer: 'Most teams are up and running in under 10 minutes. Our onboarding wizard guides you through connecting your tools and inviting teammates.',
  },
  {
    id: 2,
    question: 'Do I need a credit card to start?',
    answer: 'No credit card required for the free trial. You can explore all features for 14 days before deciding on a plan.',
  },
  {
    id: 3,
    question: 'Can I invite my whole team?',
    answer: 'Yes! The free plan includes up to 5 team members. Paid plans offer unlimited seats with volume discounts.',
  },
  {
    id: 4,
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption, SOC 2 compliance, and never share your data with third parties.',
  },
  {
    id: 5,
    question: 'What integrations do you support?',
    answer: 'We integrate with 50+ popular tools including Slack, Google Workspace, Notion, GitHub, and more. Custom integrations available on Enterprise.',
  },
  {
    id: 6,
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. No long-term contracts, no cancellation fees.',
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'For individuals and small projects',
    features: [
      'Up to 5 team members',
      '10 workflows',
      'Basic integrations',
      'Email support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams who need more',
    features: [
      'Unlimited team members',
      'Unlimited workflows',
      'All integrations',
      'Priority support',
      'Advanced analytics',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    id: 3,
    name: 'Team',
    price: '$79',
    period: '/month',
    description: 'For organizations at scale',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'Custom integrations',
      'Dedicated success manager',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export const personas = [
  {
    id: 1,
    title: 'Founders',
    icon: '🚀',
    description: 'Move faster without adding headcount',
    benefits: [
      'Automate ops from day one',
      'Focus on product, not busywork',
      'Scale without growing pains',
    ],
  },
  {
    id: 2,
    title: 'Operations',
    icon: '⚙️',
    description: 'Run a tight ship with less effort',
    benefits: [
      'Eliminate manual processes',
      'Reduce errors by 80%',
      'Get hours back every week',
    ],
  },
  {
    id: 3,
    title: 'Marketing',
    icon: '📣',
    description: 'Launch campaigns faster',
    benefits: [
      'Streamline content workflows',
      'Track performance in real-time',
      'Collaborate across teams',
    ],
  },
];













export const beforeAfterData = {
  before: {
    title: 'Before',
    items: [
      'Not mentioned in ChatGPT / Gemini answers',
      'Competitors show up instead of you',
      'Wrong or outdated information about your brand',
      'No idea why AI doesn’t recommend you',
    ],
  },
  after: {
    title: 'After',
    items: [
      'Your brand appears in high-intent AI prompts',
      'You become the default recommendation (vs competitors)',
      'AI answers are accurate and consistent about your business',
      'Clear action plan: what to publish + where to publish it',
    ],
    metrics: [
      { value: '+30–60%', label: 'More AI mentions' },
      { value: '2x', label: 'More “brand-ready” sources' },
      { value: '48hrs', label: 'Audit delivery time' },
    ],
  },
};

export const logoCloud = [
  'Acme Corp',
  'Globex',
  'Initech',
  'Umbrella',
  'Stark Industries',
  'Wayne Enterprises',
  'Cyberdyne',
  'Aperture',
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Templates', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
  ],
};

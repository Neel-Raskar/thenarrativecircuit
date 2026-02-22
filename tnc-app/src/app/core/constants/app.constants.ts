import { Service } from '../models';

export const HERO_CONTENT = {
  brandName: 'The Narrative Circuit',
  brandNameFirst: 'The Narrative ',
  brandNameSecond: 'Circuit',
  tagline: 'Connect. Create. Circulate.',
  subtitle: 'Premier nightlife events curator • Artist management • Sound production • PR & Marketing',
  badgeText: 'Nightlife Events & More',
  ctas: [
    { text: 'Explore Our Work', primary: true, action: 'services' },
    { text: 'Get in Touch', primary: false, action: 'contact' }
  ],
  stats: [
    { number: '150+', label: 'Events' },
    { number: '50+', label: 'Artists' },
    { number: '10+', label: 'Years' }
  ]
};

export const SERVICES_CONTENT: Service[] = [
  {
    icon: 'calendar',
    title: 'Event Curation',
    tagline: 'We Craft Unforgettable Nights',
    description: 'From concept to countdown, we orchestrate nightlife experiences that transcend the ordinary. Our team designs immersive events that blend music, art, and atmosphere—creating moments that live on in memory long after the last beat drops.'
  },
  {
    icon: 'users',
    title: 'Artist Management',
    tagline: 'Connecting Talent with Opportunity',
    description: 'We bridge visionary artists with stages that match their ambition. Our curated roster of performers receives strategic guidance, booking support, and brand development—ensuring their artistry reaches the audiences it deserves.'
  },
  {
    icon: 'headphones',
    title: 'Sound Production',
    tagline: 'Where Audio Becomes Experience',
    description: 'Crystal-clear sound transforms a good night into a legendary one. We deliver premium audio engineering, state-of-the-art equipment, and sonic landscapes that move crowds—every frequency, perfectly calibrated.'
  },
  {
    icon: 'megaphone',
    title: 'PR & Marketing',
    tagline: 'Amplifying Your Visibility',
    description: 'In a world saturated with noise, we cut through with strategic storytelling. Our PR and marketing solutions build buzz, cultivate brand authority, and turn events into must-attend experiences that dominate the conversation.'
  },
  {
    icon: 'star',
    title: 'Influencer Collaborations',
    tagline: 'Where Influence Meets Impact',
    description: 'We connect your brand with the voices that shape culture. Leveraging strategic influencer partnerships, we amplify reach, spark engagement, and create authentic connections between your events and the audiences that matter most.'
  }
];

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  CONTACT: '/contact'
};

export const NAV_LINKS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.SERVICES, label: 'Services' },
  { path: ROUTES.PORTFOLIO, label: 'Gallery' },
];

export const BASE_HREF = '/thenarrativecircuit/';

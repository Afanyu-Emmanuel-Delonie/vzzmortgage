// the nav bar items 
export const navItems = [
  {
    id: 1,
    label: "Buy",
    href: "/",
  },
  {
    id:4,
    label: 'Refinance',
    href: '/',
  },
  {
    id: 4,
    label: "Rates",
    href: "/",
  },
    {
    id: 5,
    label: "Loan Options",
    href: "/",
  },
];

export const customerAvatars = [
    '/public/assets/img/profiles/p-1.png',
    '/public/assets/img/profiles/p-2.png',
    '/public/assets/img/profiles/p-3.png',
    '/public/assets/img/profiles/p-4.png',
  ];

  export const paths = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Home Buying",
    badge: "Popular"
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Refinancing",
    badge: "Save Money"
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Home Equity",
    badge: "Flexible"
  },
  {
    id: 4,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Rate & Payment",
    badge: "Calculate"
  }
];

export const FirstTimeHomeList = [
  {
    id: 1,
    title: 'Clear Guidance:',
    description: 'Simple explanations and no confusing mortgage jargon.'
  },
  {
    id: 2,
    title: 'Smart Tools:',
    description: 'Calculate payments, explore options, and check eligibility fast.'
  },
  {
    id: 3,
    title: 'Expert Support:',
    description: 'Real mortgage specialists with you at every step.'
  }
];
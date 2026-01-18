import p1 from "/assets/img/profiles/p-1.png";
import p2 from "/assets/img/profiles/p-2.png";
import p3 from "/assets/img/profiles/p-3.png";
import p4 from "/assets/img/profiles/p-4.png";

import {
  Tag,
  Home,
  TrendingUp,
  Users,
  ArrowRight,
  Zap,
  Check,
  X,
  DollarSign,
  Clock,
  PiggyBank,
  RefreshCw,
  TrendingDown,
  Building2,
  Filter,
  CheckCircle,
  Calculator,
  FileText,
} from "lucide-react";

export const customerAvatars = [p1, p2, p3, p4];

// the nav bar items
export const navItems = [
  {
    id: 1,
    label: "Buy",
    href: "/buyers",
    columns: [
      {
        title: "Buy A Home",
        links: [
          { label: "Get Started", href: "/" },
          { label: "Purchase loan options", href: "/buyers" },
          { label: "First-time home buyer", href: "/first-time-buyer" },
          { label: "VA & military resources", href: "/VA-Loan-Options" },
        ],
      },
      {
        title: "Calculators & Tools",
        links: [
          { label: "Mortgage calculator", href: "/calc/mortgage" },
          { label: "Affordability calculator", href: "/calc/affordability" },
          { label: "Refinance calculator", href: "/calc/refinance" },
          { label: "Debt-to-income calculator", href: "/calc/dti" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Buying guides", href: "/guides/buying" },
          { label: "Market trends", href: "/market-trends" },
          { label: "Chat with us", href: "/chat" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      title: "Make your dream home a reality in 2026",
      description: "Explore our comprehensive buying guides and tools",
      cta: { text: "Start Your Journey", href: "/learn-buying" },
    },
  },
  {
    id: 2,
    label: "Refinance",
    href: "/refinance",
    columns: [
      {
        title: "Refinance Options",
        links: [
           { label: "Get Started", href: "/" },
          { label: "Refinance loan options", href: "/buyers" },
          { label: "Cash-out refinance", href: "/cash-out" },
          { label: "Rate and term refinance", href: "/rate-term" },
          { label: "VA & military refi", href: "/VA-Loan-Options" },
        ],
      },
      {
        title: "Debt Solutions",
        links: [
          { label: "Debt consolidation", href: "/debt-consolidation" },
          { label: "How it works", href: "/debt/how-it-works" },
          { label: "Benefits & savings", href: "/debt/benefits" },
          { label: "Check eligibility", href: "/debt/eligibility" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Refinance calculator", href: "/calc/refinance" },
          { label: "Break-even calculator", href: "/calc/break-even" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=300&fit=crop",
      title: "Consolidate debt and get a fresh start",
      description: "Lower your monthly payments and simplify your finances",
      cta: { text: "Explore Options", href: "/learn-consolidation" },
    },
  },
  {
    id: 3,
    label: "Rates",
    href: "/rates",
  },
  {
    id: 4,
    label: "Loan Options",
    href: "/loan-options",
    columns: [
      {
        title: "Conventional Loans",
        links: [
          { label: "Fixed-rate mortgages", href: "/conventional/fixed" },
          { label: "Adjustable-rate mortgages", href: "/conventional/arm" },
          { label: "Conforming loans", href: "/conventional/conforming" },
        ],
      },
      {
        title: "Government Loans",
        links: [
          { label: "VA loans", href: "/va-loans" },
          { label: "FHA loans", href: "/fha" },
          { label: "USDA loans", href: "/usda" },
        ],
      },
      {
        title: "Specialty Loans",
        links: [
          { label: "Jumbo loans", href: "/jumbo" },
          { label: "Construction loans", href: "/construction" },
          { label: "Investment property", href: "/investment" },
        ],
      },
    ],
    featured: {
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=300&fit=crop",
      title: "Consolidate debt and get a fresh start",
      description: "Lower your monthly payments and simplify your finances",
      cta: { text: "Explore Options", href: "/learn-consolidation" },
    },
  },
];

export const paths = [
  {
    id: 1,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Home Buying",
    badge: "Popular",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Refinancing",
    badge: "Save Money",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Home Equity",
    badge: "Flexible",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Rate & Payment",
    badge: "Calculate",
  },
];

export const FirstTimeHomeList = [
  {
    id: 1,
    title: "Clear Guidance:",
    description: "Simple explanations and no confusing mortgage jargon.",
  },
  {
    id: 2,
    title: "Smart Tools:",
    description:
      "Calculate payments, explore options, and check eligibility fast.",
  },
  {
    id: 3,
    title: "Expert Support:",
    description: "Real mortgage specialists with you at every step.",
  },
];

// loan options pages

export const loanOptions = [
  {
    id: 1,
    title: "FHA Home Loan",
    description:
      "Buy or refinance with more flexible credit and debt requirements. FHA loans allow down payments as low as 3.5%.",
    tag: "Lower credit profiles",
    tagColor: "yellow",
    icon: Home,
    category: "purchase",
    benefits: ["3.5% down payment", "Flexible credit", "First-time buyers"],
  },
  {
    id: 2,
    title: "Conventional Loan",
    description:
      "Traditional mortgage with competitive rates for qualified borrowers. Flexible terms and lower costs when you have good credit and stable income.",
    tag: "Most popular",
    tagColor: "blue",
    icon: Building2,
    category: "purchase",
    benefits: ["Low rates", "3-20% down", "No PMI at 20%"],
  },
  {
    id: 3,
    title: "30-Year Fixed Loan",
    description:
      "Enjoy stable monthly payments with a fixed interest rate over 30 years, making budgeting predictable and manageable.",
    tag: "Long-term stability",
    tagColor: "blue",
    icon: Clock,
    category: "fixed",
    benefits: ["Fixed rate", "Lower payments", "Predictable budget"],
  },
  {
    id: 4,
    title: "15-Year Fixed Loan",
    description:
      "Pay off your home faster with a shorter loan term and typically lower interest rates compared to longer-term loans.",
    tag: "Faster payoff",
    tagColor: "green",
    icon: TrendingUp,
    category: "fixed",
    benefits: ["Lower interest", "Build equity fast", "Save on interest"],
  },
  {
    id: 5,
    title: "Home Equity Loan",
    description:
      "Borrow against the equity in your home to cover major expenses like renovations, education, or medical costs.",
    tag: "Access your equity",
    tagColor: "purple",
    icon: PiggyBank,
    category: "refinance",
    benefits: ["Fixed rates", "Large amounts", "Tax benefits"],
  },
  {
    id: 6,
    title: "First-Time Homebuyer",
    description:
      "Designed for new buyers, these loans offer flexible options, lower down payments, and extra guidance through the process.",
    tag: "New buyers",
    tagColor: "yellow",
    icon: Home,
    category: "purchase",
    benefits: ["Low down payment", "Expert guidance", "Special programs"],
  },
  {
    id: 7,
    title: "Cash-Out Refinance",
    description:
      "Replace your current mortgage and take cash from your home's equity to fund renovations, consolidate debt, or invest.",
    tag: "Turn equity into cash",
    tagColor: "purple",
    icon: RefreshCw,
    category: "refinance",
    benefits: ["Access equity", "Consolidate debt", "Fund projects"],
  },
  {
    id: 8,
    title: "VA Home Loan",
    description:
      "Exclusive loan options for eligible veterans and service members, often with no down payment and no private mortgage insurance.",
    tag: "Military benefits",
    tagColor: "green",
    icon: Users,
    category: "purchase",
    benefits: ["0% down payment", "No PMI", "Competitive rates"],
  },
  {
    id: 9,
    title: "Adjustable-Rate Mortgage",
    description:
      "Start with a lower initial interest rate that may change over time, ideal if you plan to move or refinance later.",
    tag: "Lower starting rates",
    tagColor: "blue",
    icon: TrendingDown,
    category: "adjustable",
    benefits: ["Lower initial rate", "Flexible terms", "Short-term savings"],
  },
];

export const filters = [
  { id: "all", label: "All Loans", count: loanOptions.length },
  {
    id: "purchase",
    label: "Home Purchase",
    count: loanOptions.filter((l) => l.category === "purchase").length,
  },
  {
    id: "refinance",
    label: "Refinance",
    count: loanOptions.filter((l) => l.category === "refinance").length,
  },
  {
    id: "fixed",
    label: "Fixed Rate",
    count: loanOptions.filter((l) => l.category === "fixed").length,
  },
  {
    id: "adjustable",
    label: "Adjustable Rate",
    count: loanOptions.filter((l) => l.category === "adjustable").length,
  },
];

export const tagStyles = {
  yellow: "bg-yellow-400/10 text-yellow-700 border-yellow-200",
  blue: "bg-blue-400/10 text-blue-700 border-blue-200",
  green: "bg-green-400/10 text-green-700 border-green-200",
  purple: "bg-purple-400/10 text-purple-700 border-purple-200",
};

export const stepsToGettingApproved = [
  {
    id: 1,
    stepNo: "01",
    title: "Share your goals",
    description:
      "Answer a few quick questions about your home and financing needs.",
  },
  {
    id: 2,
    stepNo: "02",
    title: "Explore your options",
    description: "We match you with loan options that fit your situation.",
  },
  {
    id: 3,
    stepNo: "03",
    title: "Apply with confidence",
    description:
      "Complete your application online with guidance at every step.",
  },
  {
    id: 4,
    stepNo: "04",
    title: "Close and move forward",
    description:
      "Finalize your loan and take the next step toward your home goals.",
  },
];

export const vaLoanSteps = [
  {
    stepNo: "01",
    title: "Verify Your Eligibility",
    description:
      "Confirm your VA loan eligibility and obtain your Certificate of Eligibility (COE) to get started.",
  },
  {
    stepNo: "02",
    title: "Get Pre-Approved",
    description:
      "Work with a VA-approved lender to get pre-approved and understand your buying power with your VA benefits.",
  },
  {
    stepNo: "03",
    title: "Find Your Home",
    description:
      "Search for a home that meets VA property requirements and fits your needs and budget.",
  },
  {
    stepNo: "04",
    title: "VA Appraisal & Closing",
    description:
      "Complete the VA appraisal process and close on your home with zero down payment.",
  },
];

// this section will be covering the news letters
export const newsArticles = [
  {
    category: "Market Update",
    title: "Mortgage Rates Drop to 6-Month Low",
    excerpt:
      "Great news for home buyers as rates become more favorable heading into spring.",
    date: "Jan 10, 2026",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    category: "First-Time Buyers",
    title: "5 Tips for First-Time Home buyers",
    excerpt:
      "Essential advice to navigate your first home purchase with confidence.",
    date: "Jan 8, 2026",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
  },
  {
    category: "Refinancing",
    title: "Is Now the Time to Refinance?",
    excerpt:
      "Calculate if refinancing could save you thousands over the life of your loan.",
    date: "Jan 5, 2026",
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
  },
];

export const tips = [
  {
    tag: "Credit basics",
    title: "Understanding Your Credit",
    description:
      "Your credit affects which loans you qualify for, but you don't need perfect credit to buy your first home. Learn how to check and improve your score.",
    cta: "Learn More",
    link: "/blog/credit-guide",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    tag: "Budget smarter",
    title: "Know Your Costs",
    description:
      "Buying a home involves more than the loan — estimate down payments, closing costs, and monthly payments to plan your budget.",
    cta: "Calculate Payments",
    link: "/calculator",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    tag: "Process explained",
    title: "How the Loan Works",
    description:
      "From prequalification to closing, understanding the steps makes buying your first home simple and stress-free.",
    cta: "Get Started",
    link: "/apply",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
];

// first time home buyers tips
export const firstTimeHomeBuyerSteps = [
  {
    icon: DollarSign,
    title: "Understand your budget",
    description:
      "Get a clear picture of what you can afford and estimate monthly payments with easy-to-use tools.",
  },
  {
    icon: FileText,
    title: "Get ready to shop",
    description:
      "Prequalify in minutes to understand your buying power with no impact on your credit.",
  },
  {
    icon: Home,
    title: "Find the right home",
    description:
      "Explore homes that fit your needs and take the next step toward owning your first place.",
  },
];

export const loans = [
  {
    id: 1,
    name: "15-Year Fixed",
    rate: "5.875%",
    apr: "6.102%",
    monthlyPayment: 2847,
    totalInterest: 152460,
    loanAmount: 360000,
    bestFor: "Fast equity building",
    pros: [
      "Pay off your home faster",
      "Lower total interest paid",
      "Build equity quickly",
    ],
    cons: ["Higher monthly payments", "Less cash flow flexibility"],
    color: "blue",
    Icon: Zap,
  },
  {
    id: 2,
    name: "30-Year Fixed",
    rate: "6.375%",
    apr: "6.527%",
    monthlyPayment: 2248,
    totalInterest: 449280,
    loanAmount: 360000,
    bestFor: "Lower monthly payments",
    pros: [
      "More affordable monthly payments",
      "Greater cash flow flexibility",
      "Most popular option",
    ],
    cons: ["More interest over loan life", "Slower equity building"],
    color: "yellow",
    Icon: Home,
    popular: true,
  },
  {
    id: 3,
    name: "5/1 ARM",
    rate: "5.625%",
    apr: "6.891%",
    monthlyPayment: 2074,
    totalInterest: 386640,
    loanAmount: 360000,
    bestFor: "Short-term ownership",
    pros: [
      "Lowest initial rate",
      "Lower starting payments",
      "Good for short-term plans",
    ],
    cons: [
      "Rate adjusts after 5 years",
      "Payment uncertainty",
      "Potential for higher payments",
    ],
    color: "green",
    Icon: TrendingUp,
  },
];

export const vaCards = [
  {
    icon: CheckCircle,
    title: "Check VA Eligibility",
    description:
      "See if you qualify for a VA home loan and understand your available benefits in just a few steps.",
    cta: "Check Eligibility",
    link: "#",
  },
  {
    icon: Calculator,
    title: "Calculate My VA Payment",
    description:
      "Estimate monthly payments and explore what fits your budget using VA-specific assumptions.",
    cta: "Calculate Payment",
    link: "#",
  },
  {
    icon: FileText,
    title: "Explore VA Loan Options",
    description:
      "Learn how VA loans can be used to buy, refinance, or access equity all with flexible terms.",
    cta: "View Loan Options",
    link: "#",
  },
];

export const VASteps = [
  {
    icon: CheckCircle,
    title: "Verify Your VA Benefits",
    description:
      "Confirm your eligibility through your Certificate of Eligibility (COE) and discover the full range of benefits available to you as a veteran or active service member.",
  },
  {
    icon: Calculator,
    title: "Calculate What You Can Afford",
    description:
      "Use our VA loan calculator to estimate monthly payments with no down payment required, competitive rates, and no PMI to factor in.",
  },
  {
    icon: Home,
    title: "Start Your Home Search",
    description:
      "Work with a VA-experienced agent to find properties that meet VA standards and fit your lifestyle, knowing you have the backing of your earned benefits.",
  },
];

export const MilitaryFocusedCTA = [
  {
    title: "Zero Down Payment",
    description:
      "No down payment required on your home purchase 100% financing available for eligible veterans",
  },
  {
    title: "No PMI Required",
    description:
      "Save hundreds per month with no private mortgage insurance, a benefit exclusive to VA loans",
  },
  {
    title: "Dedicated Support",
    description:
      "Work with VA loan specialists who understand your service and are committed to your success",
  },
];

// faq section
export const vaLoanFaqs = [
  {
    question: "What is a VA loan?",
    answer:
      "A VA loan is a mortgage loan guaranteed by the U.S. Department of Veterans Affairs. It's designed to help active-duty service members, veterans, and eligible surviving spouses purchase homes with favorable terms, including no down payment and no private mortgage insurance (PMI).",
  },
  {
    question: "Who is eligible for a VA loan?",
    answer:
      "Veterans, active-duty service members with at least 90 consecutive days of service, National Guard and Reserve members with at least 6 years of service, and certain surviving spouses may be eligible. You'll need a Certificate of Eligibility (COE) to verify your eligibility status.",
  },
  {
    question: "Do I need a down payment for a VA loan?",
    answer:
      "No, one of the biggest benefits of a VA loan is that you can purchase a home with 0% down payment. However, making a down payment can lower your funding fee and reduce your monthly payments.",
  },
  {
    question: "What is the VA funding fee?",
    answer:
      "The VA funding fee is a one-time payment that helps offset the cost of the VA loan program. The fee varies based on your down payment amount, whether it's your first VA loan, and your military category. Some veterans with service-connected disabilities are exempt from this fee.",
  },
  {
    question: "Can I use my VA loan benefit more than once?",
    answer:
      "Yes! Your VA loan benefit is reusable. Once you've paid off your VA loan, your entitlement is restored and you can use it again. In some cases, you may even be able to have more than one VA loan at a time.",
  },
  {
    question: "What types of properties can I buy with a VA loan?",
    answer:
      "VA loans can be used to purchase single-family homes, condominiums (that are VA-approved), townhouses, manufactured homes, and multi-unit properties (up to 4 units) as long as you occupy one of the units as your primary residence.",
  },
];

// this covers testimonials
export const testimonials = [
  {
    id: 1,
    quote:
      "I've been working with these guys for a long time and I can say that my house is in the perfect hands.",
    name: "Allan Collins",
    job: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    quote:
      "Working with VZZ Mortgage is just great, every problem in my house is solved in a matter of days.",
    name: "Clay Washington",
    job: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    quote:
      "Once a pipe burst in my kitchen and an hour later it was already repaired, thanks to VZZ Mortgage.",
    name: "Tanya Grant",
    job: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    quote:
      "The team was professional, efficient, and went above and beyond. Highly recommend their services!",
    name: "Michael Roberts",
    job: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    quote:
      "Best decision we made for our home renovation. The attention to detail was remarkable.",
    name: "Sarah Martinez",
    job: "Architect",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

# 🎯 Deal Hunter

A modern web application that helps users discover and track the best deals across multiple marketplaces. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **🔍 Smart Deal Discovery**: Browse trending deals across multiple categories
- **👤 User Authentication**: Secure authentication powered by Clerk
- **🎨 Personalized Experience**: First-time user onboarding with category selection
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🛍️ Product Details**: Detailed product pages with pricing and descriptions
- **📋 Wishlist Management**: Save and track your favorite deals
- **🏷️ Category Filtering**: Browse deals by specific categories
- **💰 Price Tracking**: Compare original prices vs. deal prices
- **🔔 Price Alerts**: Get notified when prices drop (Premium feature)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Authentication**: Clerk
- **Database**: (Integration ready)
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- Clerk account for authentication

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Yigit4416/deal-hunter.git
cd deal-hunter
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
You can see in `env.example`

4. **Run the development server**
```bash
pnpm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
deal-hunter/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── first-time-login/         # User onboarding flow
│   │   ├── home-page/                # Main dashboard and category pages
│   │   ├── pricing/                  # Subscription plans
│   │   ├── product/[id]/             # Individual product details
│   │   ├── watch-list/               # User's saved deals
│   │   ├── layout.tsx                # Root layout with Clerk provider
│   │   └── page.tsx                  # Landing page
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                       # shadcn/ui components
│   │   └── header.tsx                # Navigation header
│   ├── server/                       # Server-side logic
│   │   └── queries.ts                # Database queries
│   └── styles/
│       └── globals.css               # Global styles
├── public/                           # Static assets
└── package.json                      # Dependencies and scripts
```

## 🎨 Key Pages

- **Landing Page (`/`)**: Marketing page with features, testimonials, and pricing
- **Home Page (`/home-page`)**: Main dashboard showing trending deals
- **Category Pages (`/home-page/[category]`)**: Filtered deals by category
- **Product Details (`/product/[id]`)**: Individual product information
- **First-time Login (`/first-time-login`)**: User interest selection onboarding
- **Watchlist (`/watch-list`)**: User's saved deals and price alerts
- **Pricing (`/pricing`)**: Subscription plans and features

## 🔧 Available Scripts

```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run start        # Start production server
pnpm run lint         # Run ESLint
pnpm run type-check   # Run TypeScript compiler
```

## 🎯 Features in Detail

### Authentication Flow
- **Signed Out**: Landing page with sign-in/sign-up options
- **First-time Users**: Onboarding flow to select interests (3-10 categories)
- **Returning Users**: Direct access to personalized deal dashboard

### Deal Categories
- Electronics 📱
- Computers 💻
- Audio 🎧
- Gaming 🎮
- Fashion 👕
- Home 🏠
- Sports ⚽
- Books 📚
- Cars 🚗

### Pricing Tiers
- **Basic Plan ($5)**: Up to 5 categories, 100 watchlist items, email notifications
- **Premium Plan ($15)**: Unlimited categories, unlimited watchlist, multi-channel notifications

## 🚧 Development Notes

### Key Components
- **Header**: Navigation with authentication state management
- **Product Cards**: Reusable deal display components
- **Category Selection**: Interactive category picker with selection limits
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### State Management
- React hooks for local state
- Clerk for authentication state
- Server actions for form submissions

### Styling Approach
- Tailwind utility classes
- Custom color palette with orange primary color
- Gradient backgrounds and card-based layouts
- Responsive grid systems

## 🔮 Future Enhancements

- [ ] Real-time price tracking integration
- [ ] Push notifications
- [ ] Social sharing features
- [ ] Advanced filtering and sorting
- [ ] Deal comparison tools
- [ ] Mobile app development
- [ ] Third-party marketplace integrations

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Clerk](https://clerk.com/) for authentication
- [Radix UI](https://radix-ui.com/) for accessible components
- [Lucide](https://lucide.dev/) for beautiful icons

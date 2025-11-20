# Digital Giving Tree Website

A dynamic digital donation platform connecting B2B donors with verified grassroots charities. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Beautiful UI**: Stunning homepage with a large tree image representing growth and giving
- **Two Pages**: Homepage and comprehensive FAQ section
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Interactive FAQ**: Expandable accordion-style questions and answers
- **Modern Stack**: Built with React 19, TypeScript, Vite, and Tailwind CSS v4
- **Fast & Scalable**: Optimized for performance and easy to extend

## About

The Digital Giving Tree is designed to connect donors and verified grassroots charities through:
- **Transparency**: See exactly where donations go
- **Scalability**: Built to grow with your charitable giving
- **Storytelling**: Every charity has a story, every donation makes a difference

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/lloydgapton/Giving-Tree-Website.git
cd Giving-Tree-Website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 19**: Latest version of React
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS framework
- **React Router**: Client-side routing

## Project Structure

```
├── public/
│   └── images/
│       └── tree.svg          # Beautiful tree illustration
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation component
│   │   └── Footer.tsx        # Footer component
│   ├── pages/
│   │   ├── Home.tsx          # Homepage with tree and features
│   │   └── FAQ.tsx           # FAQ page with accordion
│   ├── App.tsx               # Main app component with routing
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles with Tailwind
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## License

All rights reserved © 2024 Digital Giving Tree

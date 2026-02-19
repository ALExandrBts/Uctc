# Overview

This repository contains a full-stack web application for UCTS (Upcycled Ceramic Thermal Storage), a presentation website showcasing an innovative energy storage solution that converts industrial waste into affordable thermal storage systems. The application serves as a pitch deck website with multiple slides covering the business opportunity, technology, market analysis, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Built with React 18 and TypeScript for type safety
- **Routing**: Client-side routing using Wouter for lightweight navigation
- **State Management**: TanStack Query for server state management and caching
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Charts**: Chart.js integration for data visualization (market charts, budget breakdowns, revenue projections)
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submissions
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement via Vite middleware in development

## Data Storage
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Fallback Storage**: In-memory storage implementation for development/testing

## Project Structure
- **Monorepo Layout**: Shared schema between client and server
- **Client Directory**: React frontend with component-based architecture
- **Server Directory**: Express backend with route handlers
- **Shared Directory**: Common types and database schema definitions

## Key Features
- **Slide-based Presentation**: Multi-section presentation format with smooth scrolling navigation
- **Interactive Charts**: Dynamic data visualizations for market data, competitive analysis, and financial projections
- **Contact System**: Form submission with validation and persistence
- **Responsive Design**: Mobile-first responsive layout with Tailwind breakpoints
- **Asset Management**: Static asset handling for presentation images

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: Web application framework for Node.js
- **react**: Frontend UI library
- **@tanstack/react-query**: Server state management and caching

## UI and Styling Dependencies
- **@radix-ui/***: Comprehensive set of UI primitives for accessible components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library for React

## Development and Build Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific error handling
- **esbuild**: JavaScript bundler for server-side code

## Data Visualization
- **chart.js**: Canvas-based charting library for interactive data visualizations

## Form and Validation
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolver adapters
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

## Database and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-kit**: CLI tool for database migrations and introspection
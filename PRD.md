# Product Requirements Document (PRD)
**Project Name:** CampaignPro - Marketing Campaign Analytics Dashboard
**Date:** February 2026

## 1. Overview & Objective
**CampaignPro** is a modern, responsive, and high-performance Marketing Campaign Analytics Dashboard. 
The objective is to provide marketing teams with a centralized, visually stunning interface to monitor and analyze the performance of their marketing campaigns across various channels (Email, Social, Paid, Organic). 

The application is built strictly adhering to the highly-curated UI/UX design tokens and constraints defined in `GEMINI.md`, ensuring a production-grade, aesthetically cohesive experience out of the box.

## 2. Target Audience
- **Marketing Managers:** For high-level overview of revenue, overall conversions, and campaign ROI.
- **Campaign Specialists / Data Analysts:** For deep dives into specific channel performance, CTR (Click-Through Rates), and individual campaign metrics.
- **Executives:** For quick glancability of top-level KPIs and delta metrics.

## 3. Technology Stack & Design System
- **Frontend Framework:** React (Functional components, Hooks) via Vite.
- **Styling:** Custom CSS based purely on strict design tokens mapping (color palettes, typography scales, spacing tokens). Tailwind CSS is utilized exclusively for layout properties (Flexbox, Grid, Spacing) and maps directly to the custom CSS properties. 
- **Data Visualization:** Recharts for dynamic, responsive, animated SVG charts.
- **Iconography:** Lucide-React.
- **Design System Rules:** Enforced by `GEMINI.md`. Includes strict Dark/Light mode theme switching, reduced motion handling, standard radius/blur tokens, and strict typographic hierarchies.

## 4. Core Features & Interface
### Navigation & Layout
- **Collapsible Sidebar:** Navigation menus covering Overview, Campaigns, Audience, Revenue, Conversions, Reports, and Settings. Accommodates mobile layouts via bottom-nav fallback.
- **Contextual Topbar:** Includes global Date Range and Channel filters, global search, notifications, user profile, and a Dark/Light Theme toggle.

### Main Dashboard (Overview Page)
1. **Hero KPI Row:** 
   - 4-card grid displaying Total Revenue, Total Conversions, New Users, and Avg. CTR. 
   - Includes percentage deltas against previous periods.
2. **Revenue & Conversions Area/Line Chart:**
   - Dual-axis time-series chart showing aggregated revenue bounds and conversion trends.
3. **Channel Performance (Two-Column Section):**
   - **Traffic by Channel (Bar Chart):** Horizontal breakdown of visitors by acquisition channel.
   - **Conversion by Campaign Type (Donut Chart):** Distribution of conversion sources with center-label total.
4. **Campaign Performance Data Table:**
   - Detailed, sortable tabular view of active/paused/ended campaigns.
   - Columns include impressions, clicks, CTR, conversions, and revenue.
5. **Activity Feed:**
   - Vertical timeline capturing real-time events, milestones, and system alerts.

## 5. Non-Functional Requirements
- **Performance:** Implements skeleton loading states. Chart animations are optimized and staggered to prevent layout thrashing on mount.
- **Responsiveness:** Fluid grid layouts scale from large 1440px desktop displays down to 320px mobile viewports smoothly.
- **Accessibility:** Meets contrast ratios required by the design system, limits over-reliance on color-only indicators, respects user motion preferences (`prefers-reduced-motion`).

## 6. Future Capabilities (Roadmap)
- **Data Integration:** Connecting the frontend mock data to real REST/GraphQL APIs (e.g., Google Analytics, Meta Ads API, HubSpot).
- **Date Filtering Logic:** Implement actual state-filtering logic when the "Last 30 days" or channel dropdowns are toggled.
- **Export Functionality:** Hook up the "Export CSV" button in the Campaign Table to generate downloadable reports.
- **Deep Routing:** Expand nested pages for "Audience", "Reports", and "Settings" using React Router.

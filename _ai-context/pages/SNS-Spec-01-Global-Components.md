SMART NATION SUPPLY LLC
Global Components — Header & Footer
AI Build Document · Version 1.0 · March 2026
File: organisms/topbar.html + organisms/footer.html
These two files are copy-pasted unchanged into every page. Build once, reuse everywhere.

Topbar — organisms/topbar.html
COMPONENT TYPE
Organism · Global · Sticky
LAYOUT
Max-width 1200px centred. Flex row: logo left, nav centre-right, CTA button far right. Height 64px desktop. Background white with 0.5px bottom border.
LOGO
Text	TecShipCorp
Style	Lato 700, brand blue (#1A4FA0), 18px
Link	href='/' — always links to homepage
NAVIGATION LINKS — DESKTOP
Order	Solutions · Keris Strike 25 · Projects · About · Contact
Style	Lato 400, 15px, gray-700. Hover: brand blue. Active page: brand blue, underline.
Source	Header.txt — nav structure confirmed
CTA BUTTON
Label	Request Capability Statement
Style	Button atom, primary variant, compact size
Action	href='/contact.html' or smooth scroll to contact section
MOBILE BEHAVIOUR — 768PX AND BELOW
Trigger	Hamburger icon, far right, replaces nav links
Menu	Full-width dropdown, same links stacked vertically
JS	nav.js handles toggle — 20 lines max, vanilla JS only
AI NOTES
Topbar is a global include. Build it once. Never duplicate markup across pages.
Do not add any banner or announcement bar above the topbar.
Active state: compare current page URL to nav href and apply active class.


Footer — organisms/footer.html
COMPONENT TYPE
Organism · Global · Dark background
LAYOUT
Dark navy background (#0d1b2a or --color-brand-dark). Max-width 1200px centred. 4-column grid desktop: Company | Corporate | Portfolio | Capabilities. 2-column tablet. 1-column portrait. Copyright bar below full-width divider.
COLUMN 1 — COMPANY
Logo/Name	TecShipCorp — white, Lato 700
Description	TecShipCorp provides base life support, logistics coordination, and operational infrastructure services for U.S. military exercises and operations in the Indo-Pacific region.
Email 1	contracts@tecshipcorp.com
Email 2	info@tecshipcorp.com
COLUMN 2 — CORPORATE
Heading	Corporate
Links	Solutions · Projects · Contact · Policy
COLUMN 3 — PORTFOLIO
Heading	Portfolio
Links	Keris Strike 2025 · U.S. Federal Government Contracts · Trans-Pacific Procurement
COLUMN 4 — CAPABILITIES
Heading	Capabilities
Items	Base Life Support · Field Infrastructure · Power & Utilities · Hygiene & Sanitation · Catering & Food Service · Transport & Mobility · Precision Handling & MHE · Cross-Border Sourcing · Federal Procurement Consulting
COPYRIGHT BAR
Text	© 2026 TecShipCorp. All rights reserved.
Style	Centred or left aligned. Lato 400, 13px, muted white. Full-width top border above.
AI NOTES
Fix typo if present anywhere: 'Smarts Nation Supply' → 'TecShipCorp'.
Remove: UX Design, Event Management, Software, Institutional Software, humanitarian relief.
Remove: multi-million-dollar contracts claim.
All links in footer are white/muted, underline on hover.
Footer is a global include. Build once. Copy-paste into every page unchanged.


AI Handoff Prompt — Global Components
You are building two global organism components for a U.S. government contractor website.

Context files attached: SYSTEM.md, TOKENS.md, COMPONENTS.md, DO-NOT.md

Task: Build organisms/topbar.html + organisms/topbar.css and organisms/footer.html + organisms/footer.css.
Follow the Global Components spec exactly. These files will be included in every page.
Output four files only: topbar.html, topbar.css, footer.html, footer.css.
TecShipCorp — Internal Build Documentation · Global Components · v1.0

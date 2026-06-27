# Frontend Developer Practical Test: Lead Listing Page

**Candidate Name:** Kunj Bihari Yadav
**Position:** Frontend Developer

**Live Demo:** [Insert your Vercel/Netlify link here]
**GitHub Repository:** [Insert your GitHub repository link here]

---

A responsive lead-listing dashboard built for the Frontend Developer practical test. Shows mock business leads with search, status filtering, sorting, and a summary overview — table layout on desktop, card layout on mobile.

## How to run the project

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
http://localhost:5173

```

To create a production build:

```bash
npm run build
npm run preview

```

No backend setup is required — all lead data is local mock data in `src/data/mockData.js`.

## Technologies used

- **Vite** + **React 19**

- **JavaScript**

- **Tailwind CSS v4**

- No backend, no external API calls — everything runs from local mock data

## Features completed

- **Lead List:** Sample leads (8 total) with name, email, phone, company, service interested in, and status.

- **Search:** Search box that filters by name, email, or company (case-insensitive, live as you type).

- **Status Filter:** Dropdown to filter leads by status (New, Contacted, Follow-up, Converted, Lost).

- **Responsive Layout:** Data table on desktop (`md:` breakpoint and up), card list on mobile.

- **UI/UX Polish:**
- Clean, professional design with proper spacing and clear headings.

- Status badges with a matching color-coded left border on each row/card for quick scanning.

- Empty message shown when the search + filter combination returns no results.

- **Bonus Features Implemented:**
- Sort dropdown: by name (A–Z) or by status (pipeline order).

- Summary cards showing total leads and a per-status count.

- Highly modular and reusable components (`StatusBadge`, `SummaryCards`, `SelectDropdown`, `DesktopLeadTable`, `MobileLeadCard`, `EmptyState`).

## Project structure

```text
src/
  components/
    StatusBadge.jsx       Status pill + shared accent-color helper
    SummaryCards.jsx      Total + per-status count cards
    SearchInput.jsx       Search box
    SelectDropdown.jsx    Status filter, sort dropdown
    DesktopLeadTable.jsx  Desktop table view
    MobileLeadCard.jsx    Mobile card view
    EmptyState.jsx        No-results message
  data/
    mockData.js           Local mock lead data
  App.jsx                 Main page: state, filtering/sorting logic
  main.jsx                React entrypoint
  index.css               Tailwind entrypoint + base styles

```

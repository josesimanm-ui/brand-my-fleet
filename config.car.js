/* =============================================================
   BRAND MY 911 — everything editable lives here.
   Change values, reload the page. Don't touch HTML/CSS/JS.

   MODEL: one 911 per city. Each city has its own car,
   its own goal and its own pricing.
   ============================================================= */

window.SITE = {

  site: {
    id: "car",
    name: "Brand My 911",
    owner: "Jose Siman",
    contactEmail: "josesimanm@gmail.com",
    instagram: "",
    sisters: [{ label: "The Fleet", href: "index.html" }, { label: "Machines", href: "machines.html" }],
  },

  hero: {
    title: "Your brand,<br class='only-mobile'> on my Porsche.",
    sub: "One 911 per city. Your logo rides for a full year.",
    unit: "city",                    // wording used across the page
  },

  /* ---------- THE VEHICLE ARTWORK ----------
     ⚠️ REAL PHOTO: the 911 on the page is a hand-drawn vector placeholder.
     To use the real car:
       1. Save a side-profile shot, facing right, transparent background,
          as assets/car.png  (a 2000px-wide PNG is plenty)
       2. Set  photo: "assets/car.png"  below
       3. Nudge the x/y in `zones` so the markers land where they should
     Porsche press photos are copyrighted — use your own shot, a licensed
     stock image, or written permission from Porsche/the dealer.          */
  photo: null,

  /* ---------- THE 8 ZONES ----------
     Defined ONCE. x/y = marker position in % over the vehicle.
     Pricing and brands are set per city, below.                          */
  zones: [
    { id: "roof",     name: "Roof Line",      x: 52, y: 27 },
    { id: "fquarter", name: "Front Quarter",  x: 76, y: 47 },
    { id: "door",     name: "Door Panel",     x: 56, y: 56 },
    { id: "rquarter", name: "Rear Quarter",   x: 26, y: 46 },
    { id: "skirt",    name: "Side Skirt",     x: 46, y: 75 },
    { id: "splitter", name: "Front Splitter", x: 93, y: 76 },
    { id: "ducktail", name: "Ducktail Wing",  x: 14, y: 47 },
    { id: "wheel",    name: "Wheel Centers",  x: 30, y: 71 },
  ],

  /* ---------- THE MARKETS ----------
     status: "live" | "soon"
     spot status: "sold" | "open"
     ⚠️ Brands below are PLACEHOLDERS. Clear them before going live.      */
  markets: [
    {
      id: "sv", city: "San Salvador", country: "El Salvador", flag: "🇸🇻", status: "live",
      vehicle: { model: "Porsche 911", trim: "Carrera T (992.2)", year: "2026", paint: "#009FC7" },
      goal: 225000, endsAt: "2026-09-30T23:59:00-06:00",
      baseWatchers: 96, baseVisitors: 18420,
      spots: [
        { id: "roof",     price:  34000, status: "open" },
        { id: "door",     price:  40000, status: "open" },
        { id: "fquarter", price:  29000, status: "open" },
        { id: "rquarter", price:  27000, status: "open" },
        { id: "skirt",    price:  21000, status: "open" },
        { id: "splitter", price:  22000, status: "open" },
        { id: "ducktail", price:  31000, status: "open" },
        { id: "wheel",    price:  21000, status: "open" },
      ],
    },
    {
      id: "pa", city: "Panama City", country: "Panama", flag: "🇵🇦", status: "live",
      vehicle: { model: "Porsche 911", trim: "Carrera GTS T-Hybrid (992.2)", year: "2026", paint: "#C8102E" },
      goal: 229000, endsAt: "2026-10-31T23:59:00-05:00",
      baseWatchers: 148, baseVisitors: 31284,
      spots: [
        { id: "roof",     price:  34000, status: "open" },
        { id: "door",     price:  41000, status: "open" },
        { id: "fquarter", price:  30000, status: "open" },
        { id: "rquarter", price:  27000, status: "open" },
        { id: "skirt",    price:  21000, status: "open" },
        { id: "splitter", price:  23000, status: "open" },
        { id: "ducktail", price:  32000, status: "open" },
        { id: "wheel",    price:  21000, status: "open" },
      ],
    },
    {
      id: "bog", city: "Bogotá", country: "Colombia", flag: "🇨🇴", status: "live",
      vehicle: { model: "Porsche 911", trim: "Carrera 4 GTS (992.2)", year: "2026", paint: "#1D3F8F" },
      goal: 319000, endsAt: "2026-11-15T23:59:00-05:00",
      baseWatchers: 173, baseVisitors: 27650,
      spots: [
        { id: "door",     price:  57000, status: "open" },
        { id: "roof",     price:  48000, status: "open" },
        { id: "fquarter", price:  41000, status: "open" },
        { id: "rquarter", price:  38000, status: "open" },
        { id: "skirt",    price:  29000, status: "open" },
        { id: "splitter", price:  32000, status: "open" },
        { id: "ducktail", price:  45000, status: "open" },
        { id: "wheel",    price:  29000, status: "open" },
      ],
    },
    {
      id: "gt", city: "Guatemala City", country: "Guatemala", flag: "🇬🇹", status: "soon",
      vehicle: { model: "Porsche 911", trim: "Carrera S (992.2)", year: "2026", paint: "#E8E8E8" },
      goal: 230000, endsAt: "2026-11-30T23:59:00-06:00",
      baseWatchers: 41, baseVisitors: 6120,
      spots: [
        { id: "roof",     price:  35000, status: "open" },
        { id: "door",     price:  41000, status: "open" },
        { id: "fquarter", price:  30000, status: "open" },
        { id: "rquarter", price:  27000, status: "open" },
        { id: "skirt",    price:  21000, status: "open" },
        { id: "splitter", price:  23000, status: "open" },
        { id: "ducktail", price:  32000, status: "open" },
        { id: "wheel",    price:  21000, status: "open" },
      ],
    },
    {
      id: "mia", city: "Miami", country: "United States", flag: "🇺🇸", status: "soon",
      vehicle: { model: "Porsche 911", trim: "Turbo S (992.2)", year: "2026", paint: "#1B1B1B" },
      goal: 292000, endsAt: "2027-01-31T23:59:00-05:00",
      baseWatchers: 212, baseVisitors: 44900,
      spots: [
        { id: "roof",     price:  44000, status: "open" },
        { id: "door",     price:  52000, status: "open" },
        { id: "fquarter", price:  38000, status: "open" },
        { id: "rquarter", price:  35000, status: "open" },
        { id: "skirt",    price:  27000, status: "open" },
        { id: "splitter", price:  29000, status: "open" },
        { id: "ducktail", price:  41000, status: "open" },
        { id: "wheel",    price:  26000, status: "open" },
      ],
    },
  ],

  /* ---------- WHERE THE MONEY GOES ----------
     THE RULE: the goal IS the price of the car. All eight spots added together
     equal the landed cost of that city's 911 — no more, no less. Sell them all
     and the car is bought outright, with no debt.

     PRICE SOURCES (Aug 2026):
       · US MSRP 2026 (992.2), before options, + $2,350 destination:
           Carrera $135,500 · Carrera T $148,000 · Carrera S $156,200
           Carrera GTS $181,000 · Carrera 4 GTS ~$189,300 · Turbo S $270,300
       · Bogotá is a REAL local quote, not an estimate: a 992 Carrera 4 GTS
         Coupe lists at COP 1,275,920,000 (~USD 319,000 at ~4,000 COP/USD)
         — about 1.7× US MSRP once Colombian duty and VAT land on it.
       · The other Latin American numbers apply an ESTIMATED import factor to
         US MSRP: El Salvador ~1.5× · Guatemala ~1.45× · Panama ~1.25× ·
         Miami ~1.07× (Florida sales tax).
     ⚠️ VERIFY every non-Bogotá number with the local Porsche dealer before
        publishing. A wrong goal means the auction closes short of the car.   */
  funding: {
    title: "The goal is the car.",
    lead: "Nothing here is a round number someone liked. Every goal is the landed price of that city's 911, and the eight spots add up to exactly that. Sell all eight and the car is paid for outright — no debt, no gap.",
    rows: [
      { k: "What the goal is",   d: "The full landed cost of the car in that city: manufacturer price, options, freight, import duty and local tax." },
      { k: "What the spots do",  d: "The eight prices are set so they sum to the goal. There's no margin hidden in the last spot — the maths is on the page." },
      { k: "Why cities differ",  d: "Same car, very different landed cost. Bogotá runs about 1.7× US price once Colombian duty and VAT hit. Miami is closest to sticker." },
      { k: "If it falls short",  d: "No car gets bought with a half-funded auction. Either the deadline extends, or every sponsor gets their money back. It doesn't get spent halfway." },
    ],
    note: "US prices are 2026 MSRP plus destination. Bogotá is a real local list price. The other local figures are estimates pending dealer confirmation.",
  },

  steps: [
    { n: "01", title: "Pick a city and a spot", text: "Every city has its own 911 and its own eight zones. See what's open, claim it." },
    { n: "02", title: "Upload your logo",       text: "Drop your file right on this page and watch it land on the car. Vector is best." },
    { n: "03", title: "We install it",          text: "Long-life automotive vinyl, applied by a certified shop. Zero damage to the paint." },
    { n: "04", title: "It runs 12 months",      text: "Your brand rides for a full year. Photos, video and an exposure report every month." },
  ],

  engine: {
    title: "Why it spreads on its own.",
    lead: "This isn't advertising you buy and forget. Every piece of the model pushes the next one.",
    items: [
      { k: "One brand per category",
        d: "A single brand per category, per car. The bank that takes it locks the other three out. That's not negotiable — and it's what makes people decide fast." },
      { k: "Your sponsors do the sharing",
        d: "Eight sponsors per car, each with their own audience. They all post that they're on the 911. Your reach is the sum of theirs, not yours." },
      { k: "Scarcity, out in the open",
        d: "The open-spot counter and the closing clock are public. The pressure comes from the board, not from a salesperson." },
      { k: "Cities compete",
        d: "San Salvador against Panama against Bogotá. The leaderboard between markets is free content every month." },
      { k: "The asset moves",
        d: "A billboard stays put. The car shows up at events, golf tournaments, openings and dinners. Every appearance is new content." },
      { k: "It copies without rebuilding",
        d: "Same format in every city: one car, eight zones, twelve months. What one market teaches, the next one applies in weeks." },
    ],
  },

  faq: [
    { q: "Is this real?",
      a: "Yes. One Porsche 911 per city, and the spots genuinely sell. Each one is installed in vinyl and runs for the contracted term." },
    { q: "Can two brands from the same industry share a car?",
      a: "No. One brand per category, per car: one bank, one telco, one brewery. That rule is what makes the space worth what it costs." },
    { q: "How long does my logo stay on?",
      a: "12 months from installation. When you renew you get first refusal on your same spot before it goes back to auction." },
    { q: "Can I take the same spot in several cities?",
      a: "Yes, and it's the most requested option. Take one zone in three or more markets and there's regional package pricing." },
    { q: "Does the vinyl damage the paint?",
      a: "No. Removable automotive vinyl applied by a certified shop. The paint is untouched when it comes off." },
    { q: "What do I actually get?",
      a: "Your logo on the car, a professional photo pack, video content, and a monthly report on where the car went and what exposure it got." },
    { q: "Which brands don't you take?",
      a: "No adult content, gambling, politics or speculative crypto. We reserve the right to turn down any brand." },
  ],
};

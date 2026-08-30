/* =============================================================
   BRAND MY MACHINE — same engine as the 911 and the jet pages.

   THE DIFFERENCE THAT MATTERS: a 911 costs money every month.
   A machine EARNS. Sponsors buy the asset, the asset goes to work,
   and the rental income buys the next one. That's the flywheel.
   ============================================================= */

window.SITE = {

  site: {
    id: "machines",
    name: "Brand My Machine",
    owner: "Jose Siman",
    contactEmail: "josesimanm@gmail.com",
    instagram: "",
    sisters: [{ label: "The Fleet", href: "index.html" }, { label: "By city", href: "cities.html" }],
  },

  hero: {
    title: "Your brand,<br class='only-mobile'> on the job site.",
    sub: "Five machines working across Panama — Bobcat and Komatsu. Your logo works with them, 2,000 hours a year.",
    unit: "machine",
  },

  /* ⚠️ REAL PHOTOS: each machine is a hand-drawn vector placeholder.
     Save side-profile shots (facing right, transparent background) as
     assets/skid.png, assets/mini.png, assets/backhoe.png, assets/exca.png
     and set `photo` on each machine below. Machines are the easiest of the
     three sites to shoot yourself — a dealer yard on a clear day is enough. */
  photo: null,

  /* default zones — each machine overrides them with its own */
  zones: [],

  /* ---------- THE MACHINES ----------
     goal = landed price of the machine in Panama.
     The spot prices add up to exactly the goal.
     ⚠️ Brands are PLACEHOLDERS. Clear them before going live.            */
  markets: [
    {
      /* Bobcat para el minicargador — Komatsu ya no fabrica skid steers.
         FOTO: Bobcat 743, Arlington MA, dominio público (CC0).
         ⚠️ Es una máquina VIEJA y se le nota el uso. Es un Bobcat real y se
         lee la marca, pero para vender un S76 nuevo conviene reemplazarla
         por una foto del S76 en el patio del dealer. Cambio de 1 línea.   */
      id: "s76", city: "Skid Steer", country: "Minicargador · Bobcat", flag: "🚜", status: "live",
      art: "skid", photo: "assets/bobcat-skidsteer.jpg",
      vehicle: { model: "Bobcat", trim: "S76 · 74 hp", year: "2026", paint: "#F26B21" },
      goal: 92000, endsAt: "2026-10-15T23:59:00-05:00",
      baseWatchers: 74, baseVisitors: 9840,
      rental: { monthly: 3000, utilization: 0.60 },
      zones: [
        { id: "cabroof", name: "Cab Roof",          x: 38, y: 11 },
        { id: "arm",     name: "Lift Arm",          x: 63, y: 40 },
        { id: "side",    name: "Side Panel",        x: 52, y: 49 },
        { id: "rear",    name: "Rear Panel",        x: 13, y: 50 },
        { id: "bucket",  name: "Bucket",            x: 82, y: 73 },
        { id: "rims",    name: "Wheel Rims",        x: 31, y: 77 },
      ],
      spots: [
        { id: "side",    price: 24000, status: "sold", brand: "ANTHROPIC", color: "#d97757" },
        { id: "arm",     price: 20000, status: "open" },
        { id: "cabroof", price: 16000, status: "open" },
        { id: "bucket",  price: 14000, status: "open" },
        { id: "rear",    price: 10000, status: "open" },
        { id: "rims",    price:  8000, status: "open" },
      ],
    },
    {
      id: "pc30", city: "Mini Excavator", country: "PC30MR-5 · 3 t", flag: "⛏️", status: "live",
      art: "mini", photo: null,
      vehicle: { model: "Komatsu", trim: "PC30MR-5 · 3 t", year: "2026", paint: "#F5B400" },
      goal: 78000, endsAt: "2026-10-31T23:59:00-05:00",
      baseWatchers: 61, baseVisitors: 7420,
      rental: { monthly: 2600, utilization: 0.60 },
      zones: [
        { id: "boom",    name: "Boom",          x: 68, y: 30 },
        { id: "cabroof", name: "Cab Roof",      x: 44, y: 26 },
        { id: "house",   name: "House Side",    x: 36, y: 55 },
        { id: "cwt",     name: "Counterweight", x: 20, y: 58 },
        { id: "bucket",  name: "Bucket",        x: 84, y: 74 },
        { id: "track",   name: "Track Frame",   x: 42, y: 84 },
      ],
      spots: [
        { id: "house",   price: 21000, status: "sold", brand: "OPENAI", color: "#10a37f" },
        { id: "boom",    price: 17000, status: "open" },
        { id: "cabroof", price: 14000, status: "open" },
        { id: "bucket",  price: 12000, status: "open" },
        { id: "cwt",     price:  8000, status: "open" },
        { id: "track",   price:  6000, status: "open" },
      ],
    },
    {
      id: "wb93", city: "Backhoe", country: "Retroexcavadora · WB93R-8", flag: "🏗️", status: "live",
      art: "backhoe", photo: null,
      vehicle: { model: "Komatsu", trim: "WB93R-8 · 4x4", year: "2026", paint: "#F5B400" },
      goal: 145000, endsAt: "2026-11-30T23:59:00-05:00",
      baseWatchers: 118, baseVisitors: 15630,
      rental: { monthly: 3400, utilization: 0.62 },
      zones: [
        { id: "loader",  name: "Loader Arm",   x: 78, y: 44 },
        { id: "cabroof", name: "Cab Roof",     x: 48, y: 18 },
        { id: "hood",    name: "Engine Hood",  x: 66, y: 52 },
        { id: "side",    name: "Cab Side",     x: 44, y: 44 },
        { id: "boom",    name: "Rear Boom",    x: 20, y: 40 },
        { id: "rims",    name: "Rear Rims",    x: 33, y: 76 },
      ],
      spots: [
        { id: "side",    price: 38000, status: "sold", brand: "NVIDIA", color: "#76b900" },
        { id: "hood",    price: 31000, status: "open" },
        { id: "loader",  price: 27000, status: "open" },
        { id: "boom",    price: 21000, status: "open" },
        { id: "cabroof", price: 16000, status: "open" },
        { id: "rims",    price: 12000, status: "open" },
      ],
    },
    {
      /* FOTO REAL — Komatsu PC138US LC, Arlington MA, dominio público (CC0) */
      id: "pc138", city: "Midi Excavator", country: "PC138US-11 · 13 t", flag: "🛠️", status: "live",
      art: null, photo: "assets/komatsu-pc138.jpg",
      vehicle: { model: "Komatsu", trim: "PC138US-11 · 13 t short-tail", year: "2026", paint: "#F5B400" },
      goal: 205000, endsAt: "2026-12-15T23:59:00-05:00",
      baseWatchers: 96, baseVisitors: 12480,
      rental: { monthly: 6200, utilization: 0.62 },
      zones: [
        { id: "cwt",     name: "Counterweight", x: 33, y: 60 },
        { id: "house",   name: "House Side",    x: 46, y: 60 },
        { id: "cabroof", name: "Cab Roof",      x: 41, y: 44 },
        { id: "boom",    name: "Boom",          x: 63, y: 47 },
        { id: "bucket",  name: "Bucket",        x: 74, y: 66 },
        { id: "track",   name: "Track Frame",   x: 44, y: 79 },
      ],
      spots: [
        { id: "house",   price: 55000, status: "sold", brand: "COINBASE", color: "#0052ff" },
        { id: "cwt",     price: 44000, status: "open" },
        { id: "boom",    price: 37000, status: "open" },
        { id: "cabroof", price: 30000, status: "open" },
        { id: "bucket",  price: 23000, status: "open" },
        { id: "track",   price: 16000, status: "open" },
      ],
    },
    {
      /* FOTO REAL — Komatsu excavator, Arlington MA, dominio público (CC0) */
      id: "pc210", city: "20 t Excavator", country: "PC210LC-11", flag: "⚙️", status: "soon",
      art: null, photo: "assets/komatsu-pc210.jpg",
      vehicle: { model: "Komatsu", trim: "PC210LC-11 · 20 t", year: "2026", paint: "#F5B400" },
      goal: 290000, endsAt: "2027-02-28T23:59:00-05:00",
      baseWatchers: 152, baseVisitors: 11240,
      rental: { monthly: 9500, utilization: 0.65 },
      zones: [
        { id: "boom",    name: "Boom",          x: 30, y: 27 },
        { id: "stick",   name: "Stick",         x: 17, y: 44 },
        { id: "bucket",  name: "Bucket",        x: 22, y: 80 },
        { id: "cabroof", name: "Cab Roof",      x: 68, y: 47 },
        { id: "house",   name: "House Side",    x: 83, y: 60 },
        { id: "track",   name: "Track Frame",   x: 68, y: 79 },
      ],
      spots: [
        { id: "house",   price: 78000, status: "open" },
        { id: "boom",    price: 62000, status: "open" },
        { id: "cabroof", price: 52000, status: "open" },
        { id: "stick",   price: 42000, status: "open" },
        { id: "bucket",  price: 33000, status: "open" },
        { id: "track",   price: 23000, status: "open" },
      ],
    },
  ],

  /* ---------- WHERE THE MONEY GOES ----------
     PRICE RESEARCH (Aug 2026) — machines are the easiest of the three
     assets to fund, because they are the cheapest AND they earn.

     New-machine reference (US, before options):
       · Skid steer, Bobcat S76 class ......... ~USD 75–90K
       · Mini excavator, 3.5 t, E35 class ..... ~USD 70–85K
       · Backhoe loader, CAT 416 class ........ ~USD 120–140K
       · Excavator, 20 t, CAT 320 class ....... ~USD 230–280K
     Cross-checked against used listings: S76 up to $86.4K, CAT 416 up to
     $139.4K, Bobcat E26 up to $60.8K.

     Panama landing factor ~1.12 — construction machinery carries far lower
     duty than cars, plus 7% ITBMS. That is why these goals sit close to US
     price while a 911 in Bogotá runs 1.7×.

     RENTAL INCOME (US market rates, Aug 2026):
       · Mini excavator ... USD 1,800–3,500/month
       · Skid steer ....... USD 200–400/day
       · Excavator 20 t ... USD 1,000–2,000/day
     ⚠️ Panama rates differ from US rates. Confirm locally before publishing
        any payback number — the payback claim is the strongest thing on this
        page and the easiest to get wrong.                                   */
  funding: {
    title: "The machine pays for itself. Twice.",
    lead: "This is where machines beat the Porsche. A sports car costs money every month it exists. A skid steer earns. The sponsors buy the machine outright, the machine goes to work, and the rental income funds the next one.",
    rows: [
      { k: "The goal is the machine",
        d: "Landed price in Panama: factory price, freight, duty and ITBMS. The spots add up to exactly that, so selling them all buys the machine outright — no financing, no lien." },
      { k: "Then it goes to work",
        d: "These aren't display pieces. They're on job sites 8–10 hours a day, which is also why a sponsor logo is worth more here than on a car parked in a garage." },
      { k: "The rent buys the next one",
        d: "Rental income doesn't go to the sponsors — it funds machine number two. Every completed auction shortens the wait for the next one." },
      { k: "Your sponsors sell to this exact audience",
        d: "Two audiences, not one. On the ground: cement, fuel, tyres, lubricants, equipment finance — the people watching a backhoe work are exactly who they sell to. Online: AI, chips, crypto and cloud brands buying the story, not the impressions." },
      { k: "Cheaper to enter than the car",
        d: "A Bobcat S76 is USD 92K and a 3-tonne Komatsu is USD 78K — a third of a Porsche 911. Six sponsors close either one. That is why this is the one that should launch first." },
      { k: "If it falls short",
        d: "Nothing is bought on a half-funded auction. The deadline extends, or every sponsor is refunded in full." },
    ],
    note: "Machine prices are August 2026 references plus an estimated ~1.12 Panama landing factor; a 2026 PC220LCI-12 was listed at USD 315,000. Rental figures are US market rates. Confirm both with your Komatsu and Bobcat dealers before publishing.",
  },

  steps: [
    { n: "01", title: "Pick a machine and a surface", text: "Five machines, each surface priced on its own. Every price is on the marker — no quote required." },
    { n: "02", title: "Upload your logo",             text: "Drop your file on this page and watch it land on the machine. Vector is best." },
    { n: "03", title: "We install it",                text: "Heavy-duty vinyl rated for sun, dust and washdowns, applied before the machine is delivered." },
    { n: "04", title: "It works 12 months",           text: "Roughly 2,000 operating hours a year, across job sites in Panama. Monthly report of where it worked." },
  ],

  engine: {
    title: "Why a Komatsu beats a Ferrari.",
    lead: "The original version of this idea puts logos on a supercar. A supercar is a cost. A Komatsu is a revenue asset that also happens to be a 20-tonne billboard nobody can scroll past.",
    items: [
      { k: "It earns while it advertises",
        d: "A Porsche costs money every month it exists. An excavator rents for USD 6–9K a month. That income isn't yours — it buys machine number two. The fleet compounds without raising again." },
      { k: "Nine hours of dwell time",
        d: "A car passes in three seconds. A backhoe holds the same corner for weeks, at eye level, next to a queue of stopped traffic that has nothing else to look at." },
      { k: "Built for the brands with the biggest budgets",
        d: "AI labs, chipmakers, exchanges and cloud platforms spend enormous sums on being talked about. A logo on a Komatsu in Panama is not a media buy — it's a story, and stories are what those brands are actually shopping for." },
      { k: "One brand per category",
        d: "One AI lab, one exchange, one chipmaker, one cement company, per machine. Whoever moves first locks out everyone they compete with. That's the whole product." },
      { k: "Priced per surface, in the open",
        d: "Every marker carries its own number. The boom isn't the bucket, and the counterweight isn't the cab. Nobody has to ask what anything costs." },
      { k: "Cheapest way to prove the model",
        d: "A 3-tonne mini excavator is USD 78K — six sponsors close it. Prove it once and the same playbook runs on the 20-tonne, the fleet, and every other country." },
    ],
  },

  faq: [
    { q: "Is this real?",
      a: "Yes. Real machines, bought outright with sponsor money and put to work on real job sites in Panama. Every logo is installed before delivery." },
    { q: "Who keeps the rental income?",
      a: "The operation does, and it's earmarked for the next machine. Sponsors buy exposure, not equity — but the income is what makes machine number two arrive faster." },
    { q: "Can two brands from the same industry share a machine?",
      a: "No. One cement company, one fuel brand, one insurer, per machine. That rule is what makes the surface worth what it costs." },
    { q: "How long does my logo stay on?",
      a: "12 months from delivery, with first refusal on renewal before the surface goes back to auction." },
    { q: "Does the vinyl survive a job site?",
      a: "It's heavy-duty vinyl rated for UV, dust and pressure washing — the same material fleets use on service trucks. It gets replaced free if it fails inside the term." },
    { q: "What do I actually get?",
      a: "Your logo on the machine, a professional photo pack from real job sites, video content, and a monthly report of hours worked and where." },
    { q: "Can I take the same surface on more than one machine?",
      a: "Yes, and it's the best value. Take a surface across all four machines and there's fleet pricing." },
    { q: "Why would an AI or crypto company sponsor an excavator in Panama?",
      a: "Not for the impressions — for the story. A logo on a 20-tonne Komatsu is the kind of thing people screenshot and send to each other, and that reach costs a fraction of a normal campaign. If you want reach in Panama, buy the cement audience. If you want to be talked about, buy the machine." },
    { q: "Why is the skid steer a Bobcat and everything else a Komatsu?",
      a: "Because Komatsu stopped making skid steers. Bobcat invented the category and still owns it, so the minicargador is a Bobcat S76 and the digging machines are Komatsu. Best machine for each job beats brand loyalty." },
    { q: "Which brands don't you take?",
      a: "No adult content, gambling or politics. Crypto is fine if the brand is a real operating business — exchanges and infrastructure, not tokens looking for exit liquidity." },
  ],
};

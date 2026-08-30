/* =============================================================
   BRAND MY JET — everything editable lives here.
   Same engine as the 911 page, different asset.
   ============================================================= */

window.SITE = {

  site: {
    id: "jet",
    name: "Brand My Jet",
    owner: "Jose Siman",
    contactEmail: "josesimanm@gmail.com",
    instagram: "",
    sisters: [{ label: "The Fleet", href: "index.html" }, { label: "Machines", href: "machines.html" }],
  },

  hero: {
    title: "Your brand,<br class='only-mobile'> at 45,000 feet.",
    sub: "A HondaJet that works the region. Your logo flies with it for a year.",
    unit: "aircraft",
  },

  /* ⚠️ REAL PHOTO: replace the vector with a real side-profile shot of the
     aircraft — transparent background, nose facing right — as assets/jet.png,
     then set photo: "assets/jet.png" and nudge the x/y in `zones`.
     Embraer press images are copyrighted: use your own photo of the actual
     tail number, licensed stock, or written permission.                    */
  photo: null,

  zones: [
    { id: "tail",     name: "Tail Fin",         x: 11, y: 20 },
    { id: "nacelle",  name: "Engine Nacelle",   x: 28, y: 43 },
    { id: "aft",      name: "Aft Fuselage",     x: 36, y: 56 },
    { id: "mid",      name: "Mid Fuselage",     x: 54, y: 56 },
    { id: "fwd",      name: "Forward Fuselage", x: 76, y: 54 },
    { id: "door",     name: "Entry Door",       x: 66, y: 62 },
    { id: "winglet",  name: "Winglet",          x: 45, y: 76 },
    { id: "headrest", name: "Cabin Headrests",  x: 60, y: 40 },
  ],

  /* ---------- WHERE THE MONEY GOES ----------
     ⚠️ READ THIS BEFORE CHANGING ANY NUMBER.

     Real prices (Aug 2026):
       · HondaJet Elite II .... USD 6,950,000 factory list
       · HondaJet HA-420 ...... USD 2.3–4.8M pre-owned (market avg ~3.7M)
       · Embraer Phenom 300E .. USD 13.75–14.75M pre-owned
       · Embraer Praetor 600 .. USD 25.8M new (600E) · 20–26M pre-owned

     JOSE WAS RIGHT to switch to the HondaJet. At 6.95M new — and 2.3–4.8M
     used — it is the cheapest jet worth putting a logo on, AND it is the
     most recognisable light jet in the world (over-the-wing engines, nothing
     else looks like it). For a viral play that matters more than cabin size:
     the aircraft has to be photogenic enough that people share it.

     A jet CANNOT be bought outright the way the 911 can. Eight sponsors at
     even 250K each is 2M — that doesn't touch a Praetor. So the jet uses a
     different structure than the car:

       goal = 20% down payment + a 12-month operating reserve
              on a PRE-OWNED HondaJet HA-420 Elite (~USD 3.5M)
            = 700,000 down + 250,000 reserve
            = 950,000

     The rest is financed against the aircraft, and charter revenue services
     the debt. If you want the aircraft owned outright from day one, the
     honest alternatives are: (a) wrap an operator's existing jet instead of
     buying — near-zero capex, same exposure; or (b) many more surfaces and
     multi-year terms. Pick one before selling anything.                     */
  funding: {
    title: "How the aircraft gets bought.",
    lead: "A jet doesn't work like the car. The 911 auctions pay for the car outright; here the eight surfaces cover the down payment and the first year in the air, and the balance is financed against the aircraft.",
    rows: [
      { k: "The aircraft",     d: "A pre-owned HondaJet HA-420 Elite, around USD 3.5M. The over-the-wing engines make it the most recognisable light jet in the sky — which is the entire point." },
      { k: "What you're funding", d: "USD 700,000 down payment plus a USD 250,000 first-year operating reserve. That's the 950,000 goal — the eight surfaces add up to exactly that." },
      { k: "The rest",         d: "Financed against the airframe and serviced by charter revenue between sponsor legs. The aircraft works for a living." },
      { k: "If it falls short", d: "Nothing gets signed on a half-funded auction. The deadline extends or every sponsor is refunded in full." },
    ],
    note: "HondaJet Elite II factory list is USD 6.95M; pre-owned HA-420 runs 2.3–4.8M. Final number depends on the specific tail, its hours and its inspection status.",
  },

  markets: [
    {
      id: "pty", city: "Panama City", country: "Hub · PTY", flag: "🇵🇦", status: "live",
      vehicle: { model: "HondaJet", trim: "HA-420 Elite (pre-owned)", year: "2026", paint: "#0B2C4D" },
      goal: 950000, endsAt: "2026-11-30T23:59:00-05:00",
      baseWatchers: 264, baseVisitors: 52140,
      spots: [
        { id: "tail",     price: 238000, status: "sold", brand: "ZENTRO", color: "#e11d48" },
        { id: "fwd",      price: 154000, status: "sold", brand: "VOLTA",  color: "#2563eb" },
        { id: "headrest", price:  71000, status: "sold", brand: "AURORA", color: "#1f2937" },
        { id: "mid",      price: 131000, status: "open" },
        { id: "aft",      price: 113000, status: "open" },
        { id: "nacelle",  price: 101000, status: "open" },
        { id: "winglet",  price:  83000, status: "open" },
        { id: "door",     price:  59000, status: "open" },
      ],
    },
    {
      id: "bog", city: "Bogotá", country: "Second aircraft · BOG", flag: "🇨🇴", status: "soon",
      vehicle: { model: "HondaJet", trim: "HA-420 Elite (pre-owned)", year: "2027", paint: "#3B4A5A" },
      goal: 900000, endsAt: "2027-03-31T23:59:00-05:00",
      baseWatchers: 88, baseVisitors: 9310,
      spots: [
        { id: "tail",     price: 225000, status: "open" },
        { id: "fwd",      price: 147000, status: "open" },
        { id: "mid",      price: 124000, status: "open" },
        { id: "aft",      price: 107000, status: "open" },
        { id: "nacelle",  price:  95000, status: "open" },
        { id: "winglet",  price:  80000, status: "open" },
        { id: "headrest", price:  68000, status: "open" },
        { id: "door",     price:  54000, status: "open" },
      ],
    },
  ],

  steps: [
    { n: "01", title: "Pick your surface",  text: "Tail fin, fuselage, winglet, nacelle — even the cabin headrests. Eight surfaces, one brand each." },
    { n: "02", title: "Upload your logo",   text: "Drop your file on this page and see it on the aircraft instantly. Vector is best." },
    { n: "03", title: "Certified application", text: "Aviation-grade decals applied by an approved shop, under the aircraft's maintenance program." },
    { n: "04", title: "It flies 12 months", text: "Every leg, every ramp, every FBO. Monthly report of routes flown and airports touched." },
  ],

  engine: {
    title: "Why a jet beats a billboard.",
    lead: "A private jet parks where your customers already are. Nobody scrolls past a ramp.",
    items: [
      { k: "It lands in front of the right people",
        d: "Private terminals, not highways. The audience on an FBO ramp is the one your sales team spends a year trying to reach." },
      { k: "One brand per category",
        d: "A single brand per industry, per aircraft. Exclusivity is the product — it's why the tail fin is worth what it's worth." },
      { k: "The route network is the reach",
        d: "Panama, Bogotá, San Salvador, Guatemala, Miami. One asset, five markets, no extra media buy." },
      { k: "Content writes itself",
        d: "Every departure is a photo. Aviation audiences track and share tail numbers on their own — that reach costs you nothing." },
      { k: "Scarcity is structural",
        d: "There are eight surfaces. There is no ninth. The counter and the clock are public, so the pressure is real." },
      { k: "It pairs with the cars",
        d: "Brands that take the jet get first refusal on the 911 in their city. One conversation, two assets, one invoice." },
    ],
  },

  faq: [
    { q: "Is this real?",
      a: "Yes. A real HondaJet with a real tail number, based in Panama and flying the region. Decals are installed under the aircraft's maintenance program." },
    { q: "Is putting decals on an aircraft even legal?",
      a: "Yes, when it's done right. Aviation-grade decals applied by an approved shop, within the limits of the aircraft's registration and maintenance manual. Nothing goes on that isn't signed off." },
    { q: "Where does the aircraft actually fly?",
      a: "Panama City is the base. Regular legs to Bogotá, San Salvador, Guatemala City and Miami. You get the route log every month." },
    { q: "What are cabin headrests?",
      a: "Embroidered headrest covers inside the cabin. Lower price, highest dwell time — the passengers look at them for hours." },
    { q: "Can I take the jet and a car?",
      a: "Yes, and it's the best value. Jet sponsors get first refusal on their category on the 911 in their city." },
    { q: "How long does it run?",
      a: "12 months from installation, with first refusal on renewal before the surface goes back to auction." },
    { q: "Which brands don't you take?",
      a: "No adult content, gambling, politics or speculative crypto. We reserve the right to turn down any brand." },
  ],
};

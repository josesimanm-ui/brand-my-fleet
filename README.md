# Brand My —

**Every asset now has its OWN page** — five shareable URLs, five OG cards, five chances
to go viral. `index.html` is the hub (Brand My Fleet): five assets, one auction,
34 surfaces, **USD 1,619,000** total, every asset with a **real photo**.

| Page | Headline |
|---|---|
| `s570.html` | Your brand, on a Bobcat. |
| `e35.html` | Your brand, on the digger. |
| `pc200.html` | Your brand, on 20 tonnes. |
| `hondajet.html` | Your brand, at 43,000 feet. |
| `911.html` | Your brand, on my Porsche. |

Clicking an asset card on the hub opens its page. All six pages share one engine and one
data file (`config.fleet.js`) — edit a price once, it updates everywhere.

| Asset | Goal | Surfaces | Photo |
|---|---|---|---|
| Bobcat S570 skid steer | $65,000 | 6 | ✅ CC0 |
| Bobcat E35 mini excavator | $85,000 | 6 | ✅ CC0 |
| Komatsu PC200 · 20 t | $290,000 | 6 | ✅ CC BY-SA |
| **HondaJet HA-420 Elite** | $950,000 | 8 | ✅ CC BY-SA |
| **Porsche 911 992 Carrera GTS** | $229,000 | 8 | ✅ CC BY-SA |

Nobody has auctioned brand space across a skid steer **and** a private jet **and** a
supercar at the same time, with every price public. That contrast is the story.

Four of the five are bought **outright** by their own surfaces. The jet is the stated
exception: its goal is a 20% down payment plus a 12-month reserve on a ~$3.5M airframe.

### The other pages (same codebase, kept for depth)
| Page | What it is |
|---|---|
| `cities.html` | The 911, one per city — San Salvador · Panama · Bogotá · Guatemala · Miami |
| `machines.html` | The equipment fleet on its own — Bobcat + Komatsu |
| `jet.html` | The aircraft on its own |

### Photo credits (required)
Machine photos: courtesy of **Grupo ConstruMarket** (own assets — confirm internal OK to
reuse manufacturer marketing images). HondaJet HA-420 and Porsche 911 (992): Wikimedia
Commons **CC BY-SA 4.0** — keep the credit line that renders in the footer.

Photos upgraded twice on 29 Aug — final versions come from **grupoconstrumarket.com**
(Jose's own company, authorized Bobcat & Komatsu dealer): official catalog shots of the
S570 and E35Z on white, and Komatsu's marketing scene of the PC200 at a quarry with a
skyline behind. Brand-new machines, correct badges, zero licence risk.
Also confirmed on the ConstruMarket catalog: **Komatsu DOES sell the SK820-5 skid steer
in the region** — the earlier "Komatsu makes no skid steer" note applies to the US only.

**Status:** working prototype. Shows the concept and collects interest.
It does **not** take payments or store bids yet (see *What's missing*).

---

## Open it

Double-click `index.html`. No server, no build, no dependencies.

## Edit it

Everything lives in `config.car.js` and `config.jet.js`.

| To change | Edit |
|---|---|
| Name, contact email, Instagram | `site` |
| Headline and subhead | `hero` |
| The 8 zones and where markers sit | `zones` (`x`/`y` in % over the image) |
| Cities, assets, colours, goals, deadlines, prices, brands | `markets` |
| The money maths shown on the page | `funding` |
| How it works / why it works / FAQ | `steps`, `engine`, `faq` |

---

## The pricing research (August 2026)

### Porsche 911 — 2026 US MSRP, before options, plus $2,350 destination
| Trim | US MSRP |
|---|---|
| Carrera | $135,500 |
| Carrera T | $148,000 |
| Carrera S | $156,200 |
| Carrera GTS | $181,000 |
| Carrera 4 GTS | ~$189,300 |
| Turbo S T-Hybrid (coupe) | $270,300 |

### Landed price by market — this is what the goals are built on
| City | Trim | Goal | Basis |
|---|---|---|---|
| San Salvador | Carrera T | $225,000 | US MSRP × ~1.5 — **estimate** |
| Panama City | Carrera GTS | $229,000 | US MSRP × ~1.25 — **estimate** |
| **Bogotá** | **Carrera 4 GTS** | **$319,000** | **Real local list price: COP 1,275,920,000** (~1.7× US) |
| Guatemala City | Carrera S | $230,000 | US MSRP × ~1.45 — **estimate** |
| Miami | Turbo S | $292,000 | MSRP + FL sales tax |

In every market the eight spot prices **add up to exactly the goal**. Change a goal
and you must re-split the eight prices, or the maths on the page stops being true.

⚠️ **Only Bogotá is a real quote.** Confirm the other four with the local Porsche
dealer before publishing. A wrong goal means the auction closes short of the car.

### The jet — HondaJet, not Embraer
| Aircraft | Market price |
|---|---|
| **HondaJet Elite II** | **$6,950,000 factory list** |
| **HondaJet HA-420 pre-owned** | **$2.3–4.8M** (market avg ~$3.7M) |
| Embraer Phenom 300E | $13.75–14.75M pre-owned |
| Embraer Praetor 600 | $25.8M new · $20–26M pre-owned |

Switching to the HondaJet was the right call: it is 3–8× cheaper than the Embraers **and**
it is the most recognisable light jet in the sky (over-the-wing engines — nothing else
looks like it). For a virality play, photogenic beats spacious.

**A jet cannot be bought outright with eight sponsors.** Eight at $250K is $2M — that
doesn't touch a Praetor. So `jet.html` uses a different structure, stated openly on the page:

```
goal = 20% down payment + 12-month operating reserve
       on a pre-owned HondaJet HA-420 Elite (~$3.5M)
     = $700,000 + $250,000
     = $950,000
```
The balance is financed against the airframe and serviced by charter revenue.

**The honest alternatives, if you don't want debt:**
1. **Wrap an operator's existing jet** instead of buying — near-zero capex, same exposure, no financing. Best risk-adjusted option.
2. More surfaces and multi-year terms.
3. Start with the cars, prove the model, then use that track record to raise for the aircraft.

Pick one before selling anything.

---

## The logo upload

Sponsors drop a PNG/SVG/JPG in the bid form and it appears **on the vehicle instantly**,
in their chosen spot. That's the shareable moment — it's the whole viral hook.

The preview is browser-side only (kept in `localStorage`, max 2 MB). `mailto:` can't carry
attachments, so the generated email asks them to attach the file. When there's a real
backend, this is the first thing to wire up properly.

---

## Using the real vehicle photos

Both vehicles are **hand-drawn vectors** — they repaint per city and work as placeholders,
but they aren't the real car. To swap in a real photo:

1. Save it as `assets/car.png` (or `assets/jet.png`) — side profile, facing right, transparent background.
2. In the config: `photo: "assets/car.png"`
3. Nudge the `x`/`y` in `zones` so markers land correctly.

**Licensing:** Porsche and Embraer press photos are copyrighted. There is no free
cut-out side profile of a 992 on Wikimedia Commons — that was checked. Use your own
photograph, a licensed stock image, or written permission from the manufacturer/dealer.

---

## Publish

Static site — any host works. With Vercel:

```bash
cd 13_BrandMy
npx vercel          # preview
npx vercel --prod   # production
```
`/` is the 911, `/jet.html` the aircraft, `/machines.html` the equipment. All three cross-link in the nav.

---

## What's missing to make it a real business

1. **The assets.** Owned, financed, or an agreement with a dealer/operator. Everything rests on this.
2. **Confirmed prices.** Four of the five car goals are estimates. One dealer call each.
3. **Payments.** Stripe Payment Links per spot; the form currently opens the visitor's email client.
4. **Real bids.** Data lives in the config files and is edited by hand. At volume, use a database (Supabase free tier is enough) so the counters move on their own.
5. **Legal.** Sponsorship contract: what's guaranteed, category exclusivity, term, what happens if the asset is sold or damaged. For the aircraft, decal approval under the maintenance program.
6. **Unit economics.** Cost per asset per year (vinyl, install, monthly content, management, insurance, storage) against the eight spots. The page assumes it closes — verify it.

---

## Structure

```
13_BrandMy/
├── index.html          the 911 page + car vector
├── jet.html            the Embraer page + jet vector
├── machines.html       the equipment page + 4 machine vectors
├── config.car.js       ← everything editable, cars
├── config.jet.js       ← everything editable, aircraft
├── config.machines.js  ← everything editable, machines
├── assets/
│   ├── styles.css    design, light/dark, responsive
│   └── app.js        markets, auction, hotspots, logo upload, modal
└── README.md
```

---

---

## Construction equipment — the strongest of the three

### Why it beats the car and the jet
1. **It earns.** A 911 costs money every month. A skid steer rents. Rental income funds machine number two — the fleet compounds without raising again.
2. **Nine hours of dwell time.** A car passes in three seconds. A backhoe holds the same corner for weeks, at eye level, beside stopped traffic.
3. **The sponsors are obvious and already budgeted:** cement, fuel, tyres, lubricants, insurance, equipment finance. They spend all year trying to reach contractors.
4. **Cheapest entry.** Six sponsors buy a skid steer. That's the fastest way to prove the model before touching a Porsche or an aircraft.
5. **It's Jose's actual industry** — ConstruMarket heavy machinery. Dealer relationships and the buyer audience already exist.

### Komatsu machines and goals
| Machine | Goal (Panama, ~1.12×) | Real photo? |
|---|---|---|
| **Bobcat S76 skid steer** | **$92,000** | ✅ **real CC0 photo** (older 743 — swap for an S76 shot) |
| PC30MR-5 mini excavator, 3 t | **$78,000** | vector — needs yours |
| WB93R-8 backhoe loader | **$145,000** | vector — needs yours |
| **PC138US-11 midi excavator, 13 t** | **$205,000** | ✅ **real CC0 photo** |
| **PC210LC-11 excavator, 20 t** | **$290,000** | ✅ **real CC0 photo** |

Real data point found: a **2026 Komatsu PC220LCI-12 listed at $315,000**; used PC210LC-11
runs $89.7K–225K.

**Mixed fleet, on purpose.** Komatsu stopped making skid steers, so the *minicargador* is
a **Bobcat S76** and the digging machines are Komatsu. Best machine for each job.

### The three real photos
All from the Arlington, MA collection on Wikimedia Commons, all **CC0 — public domain,
commercial use, no attribution required**, all clearly branded on real job sites:

- `assets/bobcat-skidsteer.jpg` — Bobcat 743
- `assets/komatsu-pc138.jpg` — Komatsu PC138US LC
- `assets/komatsu-pc210.jpg` — Komatsu PC210-class

⚠️ The Bobcat is a **743 — an old, visibly worn machine**. It's unmistakably a Bobcat, but
it's not the S76 the page is selling. Worth replacing with a shot of the real S76.

The mini excavator and the backhoe still use vectors. You work in heavy machinery — a
phone and a clear afternoon in a dealer yard closes that gap faster than any stock licence.

### Positioning markers on a photo
Each machine carries its own `zones` with `x`/`y` in **% over that photo**. Swap the image,
nudge the numbers, done. Every marker also shows **its own price** — that's the interaction
that removes the "how much is it?" email.

Construction machinery carries far lower import duty than cars — that's why these land
at ~1.12× US price while a 911 in Bogotá runs 1.7×.

### Rental income (US market rates, Aug 2026)
| Machine | Rate | Used on the page |
|---|---|---|
| Mini excavator | $1,800–3,500/month | $2,600/mo @ 60% utilisation |
| Skid steer | $200–400/day | $3,000/mo @ 60% |
| Backhoe | between the two | $3,400/mo @ 62% |
| Excavator 20 t | $1,000–2,000/day | $9,500/mo @ 65% |

The page shows **gross rental payback**, clearly labelled as *before operating costs* —
46 to 70 months depending on the machine. Do not quote it as net.

⚠️ **These are US rates.** Panama rates differ, and the payback claim is the strongest
thing on the page and the easiest to get wrong. Confirm locally before publishing.

---

*Created 29 Aug 2026 · JMSXOS · prices and rental rates researched 29 Aug 2026*

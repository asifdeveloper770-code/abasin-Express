import { Plane, Building2, Car, Package, ArrowLeftRight, Calendar, Users, Search } from "lucide-react";
import { useState } from "react";

const TABS = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Building2 },
  { id: "cars", label: "Cars", icon: Car },
  { id: "packages", label: "Packages", icon: Package },
] as const;

const ROUTES = [
  { from: "San Francisco (SFO)", to: "Kabul (KBL)" },
  { from: "San Francisco (SFO)", to: "Jeddah (JED)" },
  { from: "San Francisco (SFO)", to: "Dubai (DXB)" },
  { from: "San Francisco (SFO)", to: "Istanbul (IST)" },
  { from: "San Francisco (SFO)", to: "Frankfurt (FRA)" },
];

export function SearchWidget() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("flights");
  const [trip, setTrip] = useState("round");
  const [routeIdx, setRouteIdx] = useState(2);
  const route = ROUTES[routeIdx];

  return (
    <div className="relative -mt-44 md:-mt-48 mx-auto max-w-7xl px-4 sm:px-6 z-10">
      <div className="bg-white rounded-2xl shadow-elegant overflow-hidden animate-reveal" style={{ animationDelay: "250ms" }}>
        {/* Tabs */}
        <div className="flex border-b border-border/60 overflow-x-auto">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`relative flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                tab === id ? "text-navy" : "text-muted-foreground hover:text-navy"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
              {tab === id && <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-navy rounded-t" />}
            </button>
          ))}
        </div>

        <div className="p-5 md:p-7">
          {/* Trip type */}
          <div className="flex flex-wrap gap-6 mb-5 text-sm">
            {[
              { id: "oneway", label: "One Way" },
              { id: "round", label: "Round Trip" },
              { id: "multi", label: "Multi City" },
            ].map((t) => (
              <label key={t.id} className="flex items-center gap-2 cursor-pointer">
                <span className={`h-4 w-4 rounded-full border-2 grid place-items-center transition-colors ${trip === t.id ? "border-navy" : "border-muted-foreground/40"}`}>
                  {trip === t.id && <span className="h-2 w-2 rounded-full bg-navy" />}
                </span>
                <input type="radio" name="trip" className="sr-only" checked={trip === t.id} onChange={() => setTrip(t.id)} />
                <span className={trip === t.id ? "font-semibold text-navy" : "text-foreground"}>{t.label}</span>
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-3 items-end">
            <Field label="From" value={route.from} icon={<Plane className="h-4 w-4 text-navy" />} />
            <div className="relative">
              <Field label="To" value={route.to} icon={<Plane className="h-4 w-4 text-navy rotate-180" />} />
              <button
                onClick={() => setRouteIdx((i) => (i + 1) % ROUTES.length)}
                aria-label="Swap"
                className="hidden md:grid absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-navy text-white place-items-center hover:rotate-180 transition-transform duration-500 shadow-card"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </button>
            </div>
            <Field label="Depart" value="20 Jul 2026" icon={<Calendar className="h-4 w-4 text-navy" />} />
            <Field label="Return" value="27 Jul 2026" icon={<Calendar className="h-4 w-4 text-navy" />} />
            <button className="h-14 rounded-xl bg-navy hover:bg-navy-deep text-white px-6 font-semibold inline-flex items-center justify-center gap-2 transition-all hover:shadow-elegant hover:-translate-y-0.5">
              <Search className="h-4 w-4" /> Search Flights
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground mr-2">Popular routes:</span>
            {ROUTES.map((r, i) => (
              <button
                key={r.to}
                onClick={() => setRouteIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === routeIdx ? "bg-navy text-white border-navy" : "border-border text-muted-foreground hover:border-navy hover:text-navy"
                }`}
              >
                SFO → {r.to.match(/\(([^)]+)\)/)?.[1]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="border border-border rounded-xl px-4 py-2.5 hover:border-navy transition-colors">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="flex items-center justify-between gap-2 mt-0.5">
        <input defaultValue={value} className="w-full bg-transparent text-sm font-semibold text-foreground outline-none" />
        {icon}
      </div>
    </div>
  );
}

import { Plane, Building2, Headphones, BadgeCheck, ArrowRight } from "lucide-react";
import parisImg from "@/assets/dest-paris.jpg";
import baliImg from "@/assets/dest-bali.jpg";
import dubaiImg from "@/assets/dest-dubai.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import nyImg from "@/assets/dest-newyork.jpg";
import dealDubai from "@/assets/deal-dubai.jpg";
import dealMaldives from "@/assets/deal-maldives.jpg";
import dealEurope from "@/assets/deal-europe.jpg";
import dealBali from "@/assets/deal-bali.jpg";
import { useEffect, useRef, useState } from "react";

export function TrustBanner() {
  const items = [
    { icon: Plane, title: "1000+ Airlines", sub: "Trusted Partners" },
    { icon: Building2, title: "500K+ Hotels", sub: "Worldwide" },
    { icon: Headphones, title: "24/7 Support", sub: "We're Here to Help" },
    { icon: BadgeCheck, title: "Best Price", sub: "Guaranteed" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 mt-8">
      <div className="bg-white rounded-2xl shadow-card border border-border/60 grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {items.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-xl bg-navy/5 grid place-items-center group-hover:bg-navy group-hover:text-white transition-colors">
              <Icon className="h-6 w-6 text-navy group-hover:text-gold transition-colors" />
            </div>
            <div>
              <div className="font-bold text-navy text-sm md:text-base">{title}</div>
              <div className="text-xs text-muted-foreground">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

const DESTS = [
  { name: "Paris, France", price: "$499", img: parisImg },
  { name: "Bali, Indonesia", price: "$699", img: baliImg },
  { name: "Dubai, UAE", price: "$399", img: dubaiImg },
  { name: "Maldives", price: "$799", img: maldivesImg },
  { name: "New York, USA", price: "$299", img: nyImg },
];

export function Destinations() {
  const { ref, shown } = useReveal();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20" ref={ref}>
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-navy">Top Destinations</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-1">Popular Destinations</h2>
        </div>
        <button className="rounded-full border-2 border-navy text-navy px-5 py-2 text-sm font-semibold hover:bg-navy hover:text-white transition-colors">
          View All Destinations
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {DESTS.map((d, i) => (
          <article
            key={d.name}
            className={`group relative rounded-2xl overflow-hidden aspect-[3/4] card-hover cursor-pointer ${shown ? "animate-reveal" : "opacity-0"}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <img src={d.img} alt={d.name} loading="lazy" width={600} height={800} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between text-white">
              <div>
                <h3 className="font-bold text-base leading-tight">{d.name}</h3>
                <p className="text-xs text-white/85">Flights from {d.price}</p>
              </div>
              <button className="h-9 w-9 rounded-full bg-white/90 text-navy grid place-items-center hover:bg-gold transition-colors shrink-0" aria-label={`View ${d.name}`}>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const DEALS = [
  { title: "3 Nights in Dubai", tag: "Flight + Hotel", price: 799, old: 999, save: 20, img: dealDubai },
  { title: "Maldives Getaway", tag: "Flight + Hotel", price: 999, old: 1299, save: 23, img: dealMaldives },
  { title: "Europe Explorer", tag: "Flight + Hotel", price: 1299, old: 1699, save: 24, img: dealEurope },
  { title: "Bali Adventure", tag: "Flight + Hotel", price: 899, old: 1199, save: 25, img: dealBali },
];

export function Deals() {
  const { ref, shown } = useReveal();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24" ref={ref}>
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-navy">Exclusive Offers</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-1">Top Deals For You</h2>
        </div>
        <button className="rounded-full border-2 border-navy text-navy px-5 py-2 text-sm font-semibold hover:bg-navy hover:text-white transition-colors">
          View All Deals
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {DEALS.map((d, i) => (
          <article
            key={d.title}
            className={`group relative rounded-2xl overflow-hidden aspect-[4/3] card-hover cursor-pointer ${shown ? "animate-reveal" : "opacity-0"}`}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <img src={d.img} alt={d.title} loading="lazy" width={800} height={600} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent" />
            <span className="absolute top-3 right-3 bg-gold text-navy-deep text-[11px] font-bold px-2.5 py-1 rounded-full shadow-gold">
              Save {d.save}%
            </span>
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <p className="text-xs text-white/85">{d.tag}</p>
              <h3 className="font-bold text-lg leading-tight">{d.title}</h3>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-black">${d.price}</span>
                <span className="text-sm text-white/60 line-through">${d.old}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

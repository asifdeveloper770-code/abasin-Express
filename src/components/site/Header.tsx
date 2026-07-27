import logoAsset from "@/assets/basin-logo.png";
import { Facebook, Instagram, Twitter, Youtube, Phone, MapPin, Mail, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-navy-deep text-white text-xs">
      <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> +1 (713) 257 5038</span>
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" /> 2945 Fulton Ave, Sacramento, California</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /> support@abasinexpress.com</span>
          <div className="flex items-center gap-3 pl-4 border-l border-white/15">
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gold transition-colors"><Youtube className="h-3.5 w-3.5" /></a>
          </div>
          <button className="flex items-center gap-1 pl-4 border-l border-white/15 hover:text-gold transition-colors">
            USD <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

const NAV = ["Home", "Flights", "Hotels", "Cars", "Packages", "Deals", "Blog", "Pages", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-border/60 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="h-12 w-12 rounded-lg bg-navy grid place-items-center overflow-hidden">
            <img src={logoAsset} alt="Abasin Express logo" className="h-full w-full object-cover" width={48} height={48} />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-navy tracking-tight text-lg">ABASIN EXPRESS</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Tourist & Travel Agency</div>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground">
          {NAV.map((item, i) => (
            <li key={item}>
              <a href="#" className={`relative py-2 transition-colors hover:text-navy ${i === 0 ? "text-navy after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-gold after:rounded" : ""}`}>
                {item}{item === "Pages" && <ChevronDown className="inline h-3 w-3 ml-1" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center rounded-full bg-navy hover:bg-navy-deep text-white px-6 py-2.5 text-sm font-semibold transition-all hover:shadow-elegant hover:-translate-y-0.5">
            Login / Register
          </button>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu className="h-6 w-6 text-navy" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-white px-6 py-4 space-y-3">
          {NAV.map((item) => (
            <a key={item} href="#" className="block text-sm font-medium text-foreground hover:text-navy">{item}</a>
          ))}
          <button className="w-full rounded-full bg-navy text-white py-2.5 text-sm font-semibold">Login / Register</button>
        </div>
      )}
    </nav>
  );
}

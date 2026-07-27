import logoAsset from "@/assets/basin-logo.png.asset.json";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-11 w-11 rounded-lg overflow-hidden bg-navy">
              <img src={logoAsset.url} alt="Abasin Express" className="h-full w-full object-cover" width={44} height={44} />
            </div>
            <div>
              <div className="text-white font-extrabold tracking-tight">ABASIN EXPRESS</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Tourist & Travel Agency</div>
            </div>
          </div>
          <p className="text-sm">Your trusted partner for flights, hotels, cars, and holiday packages worldwide.</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep grid place-items-center transition-colors" aria-label="social">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {[
          { title: "Company", links: ["About Us", "Careers", "Press", "Blog", "Contact"] },
          { title: "Services", links: ["Flights", "Hotels", "Cars", "Packages", "Deals"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-bold mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-white font-bold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 2945 Fulton Ave, Sacramento, California</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +1 (713) 257 5038</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> support@abasinexpress.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/60 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Abasin Express. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

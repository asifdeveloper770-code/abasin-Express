import heroBg from "@/assets/hero-bg.jpg";
import { ShieldCheck, Headphones, Lock, RotateCcw, Plane, Globe2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroBg})`, transform: "translateZ(0) scale(1.05)" }}
        aria-hidden
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-white/95" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-56 md:pt-24 md:pb-64">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 items-center">
          <div className="animate-reveal">
            <p className="text-script text-3xl md:text-5xl text-gold mb-3">Your Journey, Our Priority</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-[1.05] tracking-tight drop-shadow-lg">
              Explore the world<br />with Basin Express
            </h1>
            <p className="mt-5 max-w-lg text-white/90 text-base md:text-lg">
              Book flights, hotels, cars and holiday packages with the best prices and exclusive deals.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-white">
              {[
                { icon: ShieldCheck, label: "Best Price\nGuarantee" },
                { icon: Headphones, label: "24/7\nSupport" },
                { icon: Lock, label: "Secure\nBooking" },
                { icon: RotateCcw, label: "Easy\nCancellation" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-full border border-white/30 grid place-items-center backdrop-blur-sm bg-white/5">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-xs font-semibold whitespace-pre-line leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating promo card */}
          <div className="hidden lg:block animate-reveal" style={{ animationDelay: "150ms" }}>
            <div className="relative rounded-3xl p-8 text-white shadow-elegant overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
              <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" aria-hidden />
              <div className="relative">
                <p className="text-lg font-medium">Let's Start Your</p>
                <p className="text-script text-5xl text-gold leading-none -mt-1">Journey</p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white/70">Up to</p>
                    <p className="text-5xl font-black text-white leading-none">40% OFF</p>
                    <p className="text-xs uppercase tracking-widest text-white/80 mt-1">On First Booking</p>
                    <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold text-navy-deep px-5 py-2.5 text-sm font-bold hover:shadow-gold hover:-translate-y-0.5 transition-all">
                      Explore Deals
                    </button>
                  </div>
                  <div className="relative shrink-0">
                    <Globe2 className="h-28 w-28 text-gold/90 animate-spin-slow" strokeWidth={1.2} />
                    <Plane className="absolute -top-2 -right-4 h-8 w-8 text-white animate-plane-fly" fill="currentColor" />
                  </div>
                </div>
                <div className="mt-4 border-t border-dashed border-white/25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

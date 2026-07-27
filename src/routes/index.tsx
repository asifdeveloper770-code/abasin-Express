import { createFileRoute } from "@tanstack/react-router";
import { TopBar, Navbar } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { SearchWidget } from "@/components/site/SearchWidget";
import { TrustBanner, Destinations, Deals } from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abasin Express — Explore the World | Flights, Hotels, Cars & Packages" },
      { name: "description", content: "Book flights, hotels, cars and holiday packages with Abasin Express Tourist & Travel Agency. Best prices, 24/7 support, secure booking, and up to 40% off your first booking." },
      { property: "og:title", content: "Abasin Express — Explore the World" },
      { property: "og:description", content: "Flights, hotels, cars, and holiday packages at the best prices. Your journey, our priority." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <SearchWidget />
        <TrustBanner />
        <Destinations />
        <Deals />
      </main>
      <Footer />
    </div>
  );
}

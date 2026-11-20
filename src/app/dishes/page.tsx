import type { Metadata } from "next";
import DishesCarousel from "@/components/DishesCarousel";

export const metadata: Metadata = {
  title: "Dishes | SmartServe",
  description: "Explore delicious Cambodian dishes at SmartServe.",

  // Open Graph Metadata
  openGraph: {
    title: "Dishes | SmartServe",
    description: "Explore delicious Cambodian dishes at SmartServe.",
    url: "https://romdoul.smartserve.asia/dishes",
    siteName: "SmartServe",
    images: [
      {
        url: "/images/dishes.jpg",
        width: 1200,
        height: 630,
        alt: "SmartServe Dishes",
      },
    ],
    type: "website",
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Dishes",
    description: "Explore delicious Cambodian dishes",
    images: ["/images/dishes.jpg"],
  },
};

export default function DishesPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto mb-8 max-w-6xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
          SmartServe collection
        </p>
        <h1 className="text-4xl font-black text-stone-900 sm:text-6xl">Our Dishes</h1>
      </div>
      <DishesCarousel />
    </main>
  );
}
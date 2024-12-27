import { PricingCards } from "../components/pricing/pricing-cards";
import { PricingFAQ } from "../components/pricing/pricing-faq";

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your hiring needs. All plans include core features.
          </p>
        </div>
        
        <PricingCards />
        <PricingFAQ />
      </div>
    </main>
  );
}
"use client";

import { JobList } from "../components/careers/job-list";
import { JobFilters } from "../components/careers/job-filters"
import { useState } from "react";
import type { JobCategory } from "../types/careers";

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | "all">("all");

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Join Our Team
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Help us transform the future of hiring. We're looking for talented individuals 
            who are passionate about creating impact.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          <JobFilters 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
          <div className="lg:col-span-3">
            <JobList selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </main>
  );
}
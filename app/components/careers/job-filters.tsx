"use client";

import { Button } from "../ui/button";
import type { JobCategory } from "../../types/careers";

interface JobFiltersProps {
  selectedCategory: JobCategory | "all";
  onCategoryChange: (category: JobCategory | "all") => void;
}

export function JobFilters({ selectedCategory, onCategoryChange }: JobFiltersProps) {
  const categories = [
    { id: "all", label: "All Departments" },
    { id: "engineering", label: "Engineering" },
    { id: "product", label: "Product" },
    { id: "customer-success", label: "Customer Success" },
    { id: "sales", label: "Sales" },
    { id: "marketing", label: "Marketing" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-lg">Filter by Department</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className="justify-start"
            onClick={() => onCategoryChange(category.id as JobCategory | "all")}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
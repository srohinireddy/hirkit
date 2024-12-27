"use client";

import { JobCard } from "./job-card";
import type { JobCategory } from "../../types/careers";

interface JobListProps {
  selectedCategory: JobCategory | "all";
}

export function JobList({ selectedCategory }: JobListProps) {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      category: "engineering",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "product",
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "New York, NY",
      type: "Full-time",
      category: "customer-success",
    },
  ];

  const filteredJobs = selectedCategory === "all" 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);

  return (
    <div className="space-y-4">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
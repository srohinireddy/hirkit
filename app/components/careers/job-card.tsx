import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
  };
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{job.department}</p>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {job.type}
            </div>
          </div>
        </div>
        
        <Link href={`/careers/${job.id}`}>
          <Button>Apply Now</Button>
        </Link>
      </div>
    </Card>
  );
}
export type JobCategory = 
  | "engineering"
  | "product"
  | "customer-success"
  | "sales"
  | "marketing";

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  category: JobCategory;
}
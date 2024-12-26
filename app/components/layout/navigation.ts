interface NavItem {
  label: string;
  link: string;
  submenu?: {label: string; link: string}[];
}

export const menuItems: NavItem[] = [
  { 
    label: 'Products', 
    link: '/products',
    submenu: [
			{
				label: "Candidate Management",
				link: "/"
			},
			{
				label: "Job Templates",
				link: "/"
			},
			{
				label: "Customizable Hiring Workflows",
				link: "/services/team-extension/",
			},
		]
   },
  { label: 'Careers', link: '' },
  { label: 'Pricing', link: '' },
];
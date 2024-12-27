export interface SubMenuItem {
  label: string;
  link: string;
}

export interface NavItem {
  label: string;
  link: string;
  submenu?: SubMenuItem[];
}
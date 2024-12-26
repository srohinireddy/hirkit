//import Button from '../ui/Button';
import { menuItems } from "./navigation";
interface NavLinksProps {
  mobile?: boolean;
  onLoginClick: () => void;
}

interface NavItem {
  label: string;
  link: string;
  submenu?: {label: string; link: string}[];
}

export default function NavLinks({ mobile = false, onLoginClick }: NavLinksProps) {
  const linkClass = mobile 
    ? "block px-3 py-2 text-gray-700 hover:text-primary-500" 
    : "text-gray-700 hover:text-primary-500";

  return (
    <>
      {menuItems.map((item) => (
        <a key={item.link} href={item.link} className={linkClass}>
          {item.label}
        </a>
      ))}
      {/* <Button variant={mobile ? "full" : "default"} onClick={onLoginClick}>
        Login
      </Button> */}
    </>
  );
}
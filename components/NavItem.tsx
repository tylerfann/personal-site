import Link from "next/link";

interface NavItemProps {
  href: string;
  title: string;
  className: string;
}

const NavItem = (props: NavItemProps) => {
  return (
    <Link href={props.href}>
      <a className={props.className}>{props.title}</a>
    </Link>
  );
};

export default NavItem;

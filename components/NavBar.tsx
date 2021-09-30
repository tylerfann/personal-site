import styles from "../styles/NavBar.module.css";
import NavItem from "./NavItem";
import { navItems, NavItemType } from "../lib/navItems";

const NavBar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.width}>
        {navItems.map((item: NavItemType, index: number) => {
          return (
            <NavItem
              key={`${item.title} ${index}`}
              title={item.title}
              href={item.href}
              className={styles.link}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;

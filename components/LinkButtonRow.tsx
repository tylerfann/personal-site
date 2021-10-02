import styles from "../styles/LinkButtonRow.module.css";
import LinkButton from "./LinkButton";
import { LinkType } from '../lib/linkButtons';

interface LinkButtonRowProps {
  links: LinkType[];
}

const LinkButtonRow = (props: LinkButtonRowProps) => {
  return (
    <div className={styles.linkWrapper}>
      {props.links.map((link: LinkType, index: number) => {
        return (
          <LinkButton
            key={`${link.text} ${index}`}
            text={link.text}
            href={link.href}
          />
        );
      })}
    </div>
  );
};

export default LinkButtonRow;

// import Image from 'next/image';
import styles from "../styles/LinkButton.module.css";
import { LinkType } from '../lib/linkButtons';

export interface LinkButtonProps extends LinkType {}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <a href={props.href} className={styles.link}>
      {/* <Image width={20} height={20} src={icons.resume} /> */}
      <p className={styles.linkText}>{props.text}</p>
    </a>
  );
};

export default LinkButton;

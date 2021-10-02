import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
// import Image from 'next/image';
import LinkButtonRow from "../components/LinkButtonRow";
import { linkData } from "../lib/linkButtons";

// const icons = {
//   github: require("../public/images/github-logo.png"),
//   linkedIn: require("../public/images/linkedin-logo.jpeg"),
//   resume: require("../public/images/resume-logo.png"),
// };

const Home: NextPage = () => {
  return (
    <section className={styles.background}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.header}>
          My name is Tyler Fann and I'm a web developer
        </h1>
        <LinkButtonRow links={linkData} />
      </div>
    </section>
  );
};

export default Home;

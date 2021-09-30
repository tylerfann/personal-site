import Head from "next/head";
import NavBar from "./NavBar";

interface LayoutProps {
  children: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <main>
      <Head>
        <title>Tyler Fann</title>
        <meta name="description" content="Tyler Fann personal website" />
      </Head>
      <NavBar />
      {props.children}
    </main>
  );
};

export default Layout;

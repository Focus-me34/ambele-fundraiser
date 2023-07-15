import Image from "next/image";
import Link from "next/link";
import ButtonCTA from "../UI/ButtonCTA";

import classes from "./Footer.module.scss";

const Footer = () => {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className={classes["footer"]}>
      <Image src="/logo-white.svg" alt="Logo white" width={100} height={50} />

      <div className={classes["footer-content"]}>
        <h2>
          Tous ensemble,&nbsp;
          <br />
          {/* <div className={classes["content-dynamic-separator"]}></div> */}
          soutenons Ambélé
        </h2>

        <ButtonCTA size="small" />
      </div>

      <div className={classes["footer-copyright"]}>
        <p className={classes["copyrights"]}>©{getDate()} Ambélé</p>
        <p className={classes["author"]}>
          Made by{" "}
          <Link href="https://github.com/Focus-me34" target="_blank" rel="noopener noreferrer">
            Sunamin
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer

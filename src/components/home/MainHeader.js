import ButtonCTA from "../UI/ButtonCTA";

import Image from "next/image";
import classes from "@/styles/header-images.module.css"

const MainHeader = () => {
  return (
    <div className={classes["header-image-container"]}>
      <Image // ? Position absolute by default
        src="/testv.jpg"
        alt="Picture of the author"
        fill
        style={{
          objectFit: "cover",
        }}
      />

      <div className={classes["main-header-content"]}>
        <h1>Association Ambélé</h1>
        <h2>On est ensemble</h2>

        <ButtonCTA />
      </div>
    </div>
  );
}

export default MainHeader;

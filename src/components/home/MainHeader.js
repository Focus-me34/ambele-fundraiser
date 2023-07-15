import ButtonCTA from "../UI/ButtonCTA";
import Image from "next/image";
import classes from "@/styles/header-images.module.scss";

const MainHeader = () => {

  return (
    <div className={classes["header-image-container"]}>
      <Image // ? Position absolute by default
        key={"Home page image"}
        src="/student-working.jpg"
        alt="Picture of the author"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "50% 30%",
        }}
      />

      <div className={classes["main-header-content"]}>
        <h1>
          Association Ambélé
          <span>On est ensemble</span>
        </h1>

        <h2>Solidarité France-Guinée par l'éducation populaire</h2>

        <ButtonCTA size={"small"} />
      </div>
    </div>
  );
};

export default MainHeader;

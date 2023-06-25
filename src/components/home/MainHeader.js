import ButtonCTA from "../UI/ButtonCTA";
import Image from "next/image";
<<<<<<< HEAD
<<<<<<< HEAD
import classes from "@/styles/header-images.module.scss";
=======
import classes from "@/styles/header-images.module.css";
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
=======
import classes from "@/styles/header-images.module.scss";
>>>>>>> 6a24fbbd3e56c79df1e75644d09cf17d33c0a521

const MainHeader = () => {

  return (
    <div className={classes["header-image-container"]}>
      <Image // ? Position absolute by default
        key={"Home page image"}
        src="/student-working.jpg"
        alt="Picture of the author"
        fill
        style={{
          objectFit: "cover",
        }}
      />

      <div className={classes["main-header-content"]}>
        <h1>
          Association Ambélé
          <span>On est ensemble</span>
        </h1>

        <h2>Solidarité France-Guinée par l'éducation populaire</h2>

        <ButtonCTA />
      </div>
    </div>
  );
};

export default MainHeader;

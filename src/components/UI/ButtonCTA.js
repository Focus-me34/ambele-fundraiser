import Link from "next/link";
import classes from "./ButtonCTA.module.scss";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";


const ButtonCTA = ({ size }) => {
  return (
    <>
      {size === "small" && (
        <Link
          href="https://www.helloasso.com/associations/ambele/formulaires/1"
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes["btn-cta-fill"]} ${classes["small"]}`}
        >
          <VolunteerActivismRoundedIcon />
          Soutenez le project
        </Link>
      )}

      {size === "floating" && (
        <Link
          href="https://www.helloasso.com/associations/ambele/formulaires/1"
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes["btn-cta-fill"]} ${classes["floating"]}`}
        >
          <VolunteerActivismRoundedIcon />
        </Link>
      )}
    </>
  );
}

export default ButtonCTA;

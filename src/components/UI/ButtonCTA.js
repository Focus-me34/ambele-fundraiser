import Link from "next/link";
import classes from "@/styles/buttons.module.scss";

const ButtonCTA = () => {
  return (
    <Link
      href="https://www.helloasso.com/associations/ambele/formulaires/1"
      target="_blank"
      rel="noopener noreferrer"
      className={classes["btn-cta-fill"]}
    >
      Soutenir le project
    </Link>
  );
}

export default ButtonCTA;

import { motion } from "framer-motion";

<<<<<<< HEAD
import classes from "@/styles/buttons.module.scss";
=======
import classes from "@/styles/buttons.module.css";
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db

const ButtonCTA = () => {
  return (
    <motion.button
      className={classes["btn-cta-fill"]}
      whileTap={{ scale: 0.95 }}
    >
      Soutenir le project
    </motion.button>
  );
}

export default ButtonCTA;

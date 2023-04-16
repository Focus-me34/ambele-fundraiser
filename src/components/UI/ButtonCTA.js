import { motion } from "framer-motion";

import classes from "@/styles/buttons.module.css";

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

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";



import classes from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const [isNotreActionHovered, setIsNotreActionHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsNotreActionHovered(true);
  };

  const handleMouseLeave = () => {
    setIsNotreActionHovered(false);
  };

  return (
    <nav className={classes["navbar"]}>
      <div>
        <Link
          href={"/"}
          // className={router.pathname == "/" ? classes["active"] : ""}
        >
          Acceuil
          {router.pathname == "/" ? (
            <motion.div className={classes["underline"]} layoutId="underline" />
          ) : null}
        </Link>

        <Link
          href={"/qui-sommes-nous"}
          // className={
          //   router.pathname == "/qui-sommes-nous" ? classes["active"] : ""
          // }
        >
          Qui sommes-nous?
          {router.pathname == "/qui-sommes-nous" ? (
            <motion.div className={classes["underline"]} layoutId="underline" />
          ) : null}
        </Link>

        <Link
          href={"/notre-action"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // className={`${
          //   router.pathname == "/notre-action" ? classes["active"] : ""
          // } ${classes["discover"]}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isNotreActionHovered ? "Decouvrez" : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span style={{ display: "inline-block", width: "110px", textAlign: "center" }}>
                {isNotreActionHovered ? (
                  <span style={{color: "#45a3d9" }}>Decouvrez</span>
                ) : (
                  <span>Notre action</span>
                )}
              </span>
            </motion.div>
          </AnimatePresence>

          {router.pathname == "/notre-action" ? (
            <motion.div className={classes["underline"]} layoutId="underline" />
          ) : null}
        </Link>

        <Link
          href={"/nous-soutenir"}
          // className={
          //   router.pathname == "/nous-soutenir" ? classes["active"] : ""
          // }
        >
          Nous soutenir
          {router.pathname == "/nous-soutenir" ? (
            <motion.div className={classes["underline"]} layoutId="underline" />
          ) : null}
        </Link>

        <Link
          href={"/contact"}
          // className={router.pathname == "/contact" ? classes["active"] : ""}
        >
          Contact
          {router.pathname == "/contact" ? (
            <motion.div className={classes["underline"]} layoutId="underline" />
          ) : null}
        </Link>
      </div>

      <div></div>
    </nav>
  );
}

export default Navbar;

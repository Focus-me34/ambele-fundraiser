import ReactDOM from "react-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Navbar.module.scss"


const SideNavContent = () => {
  const router = useRouter();

  const [isNotreActionHovered, setIsNotreActionHovered] = useState(false);
  const handleMouseEnter = () => setIsNotreActionHovered(true);
  const handleMouseLeave = () => setIsNotreActionHovered(false);

  console.log(router.pathname);

  return (
    <motion.nav
      className={classes["side-nav"]}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={"/"}>
        Acceuil
        {router.pathname == "/" ? (
          <motion.div className={classes["underline"]} layoutId="underline" />
        ) : null}
      </Link>

      <Link href={"/qui-sommes-nous"}>
        Qui sommes-nous?
        {router.pathname == "/qui-sommes-nous" ? (
          <motion.div className={classes["underline"]} layoutId="underline" />
        ) : null}
      </Link>

      <Link
        href={"/notre-action"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isNotreActionHovered ? "Decouvrez" : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span
              style={{
                display: "inline-block",
                width: "115px",
                textAlign: "center",
              }}
            >
              {isNotreActionHovered ? (
                <span style={{ color: "#fea82f" }}>Decouvrez</span>
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

      <Link href={"/nous-soutenir"}>
        Nous soutenir
        {router.pathname == "/nous-soutenir" ? (
          <motion.div className={classes["underline"]} layoutId="underline" />
        ) : null}
      </Link>

      <Link href={"/contact"}>
        Nous contacter
        {router.pathname == "/contact" ? (
          <motion.div className={classes["underline"]} layoutId="underline" />
        ) : null}
      </Link>
    </motion.nav>
  );
};

const SideNavModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <SideNavContent  />,
        document.body
      )}
    </>
  );
};

export default SideNavModal;
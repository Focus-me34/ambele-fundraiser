import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

import MenuToggle from "./MenuToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useCycle } from "framer-motion";
<<<<<<< HEAD
import SideNav from "./SideNav";

import classes from "./Navbar.module.scss";
=======

import classes from "./Navbar.module.css";
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db


const Navbar = () => {
  const router = useRouter();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const [isNotreActionHovered, setIsNotreActionHovered] = useState(false);
  const handleMouseEnter = () => setIsNotreActionHovered(true);
  const handleMouseLeave = () => setIsNotreActionHovered(false);

  const [isNavbarShrinked, setIsNavbarShrinked] = useState(false);
  useEffect(() => {
    // * Check if the window width is less than or equal to 1300 pixels
    function handleResize() {
      // ? Set the isNavbarShrinked state variable based on the window width
      setIsNavbarShrinked(window.innerWidth <= 1060);
      if (window.innerWidth > 1060) {
        isOpen ? toggleOpen() : null;
      }
    }

    // * Add a resize event listener and call handleResize
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    // * Remove the resize event listener when the component is unmounted
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []); // * Use an empty dependency array to run the effect only once on mount

  return (
    <>
      {!isNavbarShrinked && (
        <nav className={classes["navbar"]}>
          <Image // ? Position absolute by default
            key={"Logo black"}
            src="/logo-black.svg"
            alt="Logo"
            width={100}
            height={50}
<<<<<<< HEAD
=======
            // style={{
            //   objectFit: "cover",
            // }}
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
          />

          <div>
            <Link
              href={"/"}
<<<<<<< HEAD
=======
              // className={router.pathname == "/" ? classes["active"] : ""}
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
            >
              Acceuil
              {router.pathname == "/" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

<<<<<<< HEAD
            <Link href={"/qui-sommes-nous"}>
=======
            <Link
              href={"/qui-sommes-nous"}
              // className={
              //   router.pathname == "/qui-sommes-nous" ? classes["active"] : ""
              // }
            >
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
              Qui sommes-nous?
              {router.pathname == "/qui-sommes-nous" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

            <Link
              href={"/notre-action"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
<<<<<<< HEAD
=======
              // className={`${
              //   router.pathname == "/notre-action" ? classes["active"] : ""
              // } ${classes["discover"]}`}
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
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
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

<<<<<<< HEAD
            <Link href={"/nous-soutenir"}>
=======
            <Link
              href={"/nous-soutenir"}
              // className={
              //   router.pathname == "/nous-soutenir" ? classes["active"] : ""
              // }
            >
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
              Nous soutenir
              {router.pathname == "/nous-soutenir" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

<<<<<<< HEAD
            <Link href={"/contact"}>
=======
            <Link
              href={"/contact"}
              // className={router.pathname == "/contact" ? classes["active"] : ""}
            >
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
              Nous contacter
              {router.pathname == "/contact" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>
          </div>
<<<<<<< HEAD
=======

          {/* <div></div> */}
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
        </nav>
      )}

      {/* // ! SMARTPHONE */}
      {isNavbarShrinked && (
        <nav
          className={classes["navbar"]}
          initial={"false"}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
<<<<<<< HEAD
=======
          // custom={height}
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
        >
          <Image // ? Position absolute by default
            key={"Logo black"}
            src="/logo-black.svg"
            alt="Logo"
            width={100}
            height={50}
<<<<<<< HEAD
=======
            // style={{
            //   objectFit: "cover",
            // }}
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
          />

          <MenuToggle isOpen={isOpen} toggle={toggleOpen} />
        </nav>
      )}
<<<<<<< HEAD

      <AnimatePresence>
        {isNavbarShrinked && isOpen && <SideNav />}
      </AnimatePresence>
=======
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db
    </>
  );
}

export default Navbar;

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

import MenuToggle from "./MenuToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useCycle } from "framer-motion";

import classes from "./Navbar.module.scss";


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
            // style={{
            //   objectFit: "cover",
            // }}
          />

          <div>
            <Link
              href={"/"}
              // className={router.pathname == "/" ? classes["active"] : ""}
            >
              Acceuil
              {router.pathname == "/" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
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

            <Link
              href={"/nous-soutenir"}
              // className={
              //   router.pathname == "/nous-soutenir" ? classes["active"] : ""
              // }
            >
              Nous soutenir
              {router.pathname == "/nous-soutenir" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

            <Link
              href={"/contact"}
              // className={router.pathname == "/contact" ? classes["active"] : ""}
            >
              Nous contacter
              {router.pathname == "/contact" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>
          </div>

          {/* <div></div> */}
        </nav>
      )}

      {/* // ! SMARTPHONE */}
      {isNavbarShrinked && (
        <nav
          className={classes["navbar"]}
          initial={"false"}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
          // custom={height}
        >
          <Image // ? Position absolute by default
            key={"Logo black"}
            src="/logo-black.svg"
            alt="Logo"
            width={100}
            height={50}
            // style={{
            //   objectFit: "cover",
            // }}
          />

          <MenuToggle isOpen={isOpen} toggle={toggleOpen} />
        </nav>
      )}
    </>
  );
}

export default Navbar;
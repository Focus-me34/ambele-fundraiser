import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

import MenuToggle from "./MenuToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useCycle } from "framer-motion";
import SideNav from "./SideNav";

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

  useEffect(() => {
    isOpen && toggleOpen(false);
  },[router.pathname])

  // Scroll to top of page when the route changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    console.log("route changed");
  }, [router.pathname]);

  console.log(router.pathname);

  return (
    <>
      {!isNavbarShrinked && (
        <nav className={classes["navbar"]}>
          <Image // ? Position absolute by default
            key={"Logo black"}
            src="/logo-black.svg"
            alt="Logo black"
            width={200}
            height={100}
          />

          <div>
            <Link href={"/"}>
              Accueil
              {router.pathname == "/" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

            <Link href={"/qui-sommes-nous"}>
              Qui sommes-nous ?
              {router.pathname == "/qui-sommes-nous" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

            <Link href={"/notre-action"}>
              <AnimatePresence mode="wait">
                {!isNotreActionHovered && (
                  <motion.div
                    onMouseEnter={handleMouseEnter}
                    key={"NotreAction"}
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
                      Notre action
                    </span>
                  </motion.div>
                )}

                {isNotreActionHovered && (
                  <motion.div
                    onMouseLeave={handleMouseLeave}
                    key={"Decouvrez"}
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
                        color: "#fea82f",
                      }}
                    >
                      Decouvrez
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {router.pathname == "/notre-action" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

            <Link href={"/nous-soutenir"}>
              Nous soutenir
              {router.pathname == "/nous-soutenir" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>

            <Link href={"/contact"}>
              Nous contacter
              {router.pathname == "/contact" ? (
                <motion.div
                  className={classes["underline"]}
                  layoutId="underline"
                />
              ) : null}
            </Link>
          </div>
        </nav>
      )}

      {/* // ! SMARTPHONE */}
      {isNavbarShrinked && (
        <nav
          className={classes["navbar"]}
          initial={"false"}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          <Image // ? Position absolute by default
            key={"Logo black"}
            src="/logo-black.svg"
            alt="Logo"
            width={100}
            height={50}
          />

          <MenuToggle isOpen={isOpen} toggle={toggleOpen} />
        </nav>
      )}

      <AnimatePresence>
        {isNavbarShrinked && isOpen && <SideNav toggleOpen={toggleOpen} />}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

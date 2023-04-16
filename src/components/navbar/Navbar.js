import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { frame, useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";


import classes from "./Navbar.module.css";


const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);



const Navbar = () => {
  const router = useRouter();

  const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);


  const [isNotreActionHovered, setIsNotreActionHovered] = useState(false);
  const handleMouseEnter = () => setIsNotreActionHovered(true);
  const handleMouseLeave = () => setIsNotreActionHovered(false);

  const [isNavbarShrinked, setIsNavbarShrinked] = useState(false);
  useEffect(() => {
    // * Check if the window width is less than or equal to 1300 pixels
    function handleResize() {
      // ? Set the isNavbarShrinked state variable based on the window width
      setIsNavbarShrinked(window.innerWidth <= 1300);
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
              Contact
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
          // initial={false}
          animate={isOpen ? "open" : "closed"}
          // ref={containerRef}
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

          <button onClick={() => toggleOpen()}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
            >
              <Path
                d="M 2 2.5 L 20 2.5"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                d="M 2 16.346 L 20 16.346"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </button>
        </nav>
      )}
    </>
  );
}

export default Navbar;

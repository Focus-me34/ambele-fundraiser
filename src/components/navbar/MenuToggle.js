import { motion } from "framer-motion";
<<<<<<< HEAD
import classes from "./Navbar.module.scss";
=======
import classes from "./Navbar.module.css";
>>>>>>> 3827b61ba5f19840a89540c93cc9472bc608d6db


const Path = ({isOpen, ...props }) => {
  console.log(props.variants);
    const defaultVariants = {
      closed: { d: "M 2 2.5 L 20 2.5" },
      open: { d: "M 3 16.5 L 17 2.5" },
    };
    const { variants, ...rest } = props;


  return (
    <motion.path
      animate={isOpen ? "open" : "closed"}
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      variants={{ ...defaultVariants, ...variants }}
      {...rest}
    />
  );
}

const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;

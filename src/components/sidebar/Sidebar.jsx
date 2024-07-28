import "./sidebar.scss";
import Links from "./Links";
import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const variants = {
        open: {
            clipPath: "circle(2400px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        close: {
            clipPath: "circle(25px at 50px 50px)",
            transition: {
                delay: 0.24,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };
    return (
        <motion.div className="sidebar" animate={isOpen ? "open" : "close"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
        </motion.div>
    );
};

export default Sidebar;

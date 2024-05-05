import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

    const bgStyle = {
        background:
            type === "about"
                ? "linear-gradient(180deg, #5e0046, #350028)"
                : "linear-gradient(180deg, #350028, #4f007c)",
    };

    return (
        <motion.div className="parallax" style={bgStyle} ref={ref}>
            <motion.h1 style={{ y: yText }}>
                {type === "about" ? "About Me" : "My Recent Projects"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div
                className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${type === 'about' ? '/planets.png' : '/sun.png'})`
                }}
            ></motion.div>
            <motion.div className="stars" style={{
                x: yBg
            }}></motion.div>
        </motion.div>
    );
};

export default Parallax;

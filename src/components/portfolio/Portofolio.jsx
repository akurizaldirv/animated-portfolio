import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

import ProjectData from '../../ProjectData'
const items = ProjectData.slice(0, 3)

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 160]);

    const onHoverA = {
        boxShadow: "0 0 15px 5px #ffae0060",
        backgroundColor: "#ffffff",
        color: "#350028",
    };

    const onHoverB = {
        boxShadow: "0 0 15px 5px #00ff0060",
        backgroundColor: "#ffffff",
        color: "#350028",
    };

    return (
        <section className="singleContainer">
            <div className="wrapper">
                <div className="imageContainer">
                    <img src={item.img} alt={item.title}  ref={ref}/>
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title}</h2>
                    <div>
                        {item.tech.map((t) => (
                            <span className="tech" key={t}>
                                {t}
                            </span>
                        ))}
                    </div>
                    <p>{item.body}</p>
                    <div className="buttons">
                        <motion.button whileHover={onHoverA}>
                            DEMO <BsArrowUpRight />
                        </motion.button>
                        <motion.button whileHover={onHoverB}>
                            DOCS <BsArrowUpRight />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Portofolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>My Recent Projects</h1>
                <motion.div
                    className="progressBar"
                    style={{ scaleX: scaleX }}
                ></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portofolio;

import { useEffect } from "react";
import "./projects.scss";
import ProjectData from "../../ProjectData";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    const variants = {
        initial: { opacity: 0, y: 100 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };

    const onHoverA = {
        boxShadow: "0 0 15px 5px #ffae0060",
        backgroundColor: "white",
        color: "#350028",
    };

    const onHoverB = {
        boxShadow: "0 0 15px 5px #00ff0060",
        backgroundColor: "white",
        color: "#350028",
    };

    return (
        <div className="projects">
            <motion.div
                className="wrapper"
                variants={variants}
                initial="initial"
                animate="animate"
            >
                <div className="title">
                    <h1>List of My Projects</h1>
                    <p>Here some projects i&apos;ve done.</p>
                </div>
                <div className="cards">
                    {ProjectData.map((item) => (
                        <motion.div
                            className="item"
                            href="#"
                            key={item.id}
                            whileHover={{ y: -5 }}
                        >
                            <div className="imageContainer">
                                <img src={item.img} />
                            </div>
                            <div className="textContainer">
                                <h2>{item.title}</h2>
                                <div className="tech">
                                    {item.tech.map((t) => (
                                        <span key={t}>{t}</span>
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;

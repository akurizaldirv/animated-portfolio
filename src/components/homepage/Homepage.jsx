import "./homepage.scss";
import { motion } from "framer-motion";

// icon
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Homepage = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
        hoverButton: {
            backgroundColor: "#fff",
            color: "#030038",
        },
    };

    const heroVariants = {
        initial: {
            y: 300,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
            },
        },
    };

    const slidingVariants = {
        intial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
            },
        },
    };

    return (
        <div className="homepage">
            <div className="sosmed">
                <motion.a
                    href="https://github.com/akurizaldirv"
                    whileHover={{ y: -5, scale: 1.1 }}
                    target="_blank"
                >
                    <FaGithub className="iconSosmed" />
                </motion.a>
                <motion.a
                    href="https://instagram.com/__zal.d"
                    whileHover={{ y: -5, scale: 1.1 }}
                    target="_blank"
                >
                    <FaInstagram className="iconSosmed" />
                </motion.a>
                <motion.a
                    href="https://twitter.com/__zald"
                    whileHover={{ y: -5, scale: 1.1 }}
                    target="_blank"
                >
                    <FaXTwitter className="iconSosmed" />
                </motion.a>
                <motion.a
                    href="https://tiktok.com/@__zal.d"
                    whileHover={{ y: -5, scale: 1.1 }}
                    target="_blank"
                >
                    <FaTiktok className="iconSosmed" />
                </motion.a>
            </div>
            <motion.div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>
                        Rizaldi Irvana
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Web Developer and Designer
                    </motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button
                            variants={textVariants}
                            whileHover="hoverButton"
                        >
                            My Projects
                        </motion.button>
                        <motion.button
                            variants={textVariants}
                            whileHover="hoverButton"
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                    <motion.img
                        src="/scroll.png"
                        alt="scroll"
                        variants={textVariants}
                        animate="scrollButton"
                    />
                </motion.div>
            </motion.div>
            <motion.div
                className="slidingText"
                variants={slidingVariants}
                initial="initial"
                animate="animate"
            >
                WEB - DESIGN -WEB
            </motion.div>
            <motion.div
                className="imageContainer"
                variants={heroVariants}
                initial="initial"
                animate="animate"
            >
                <img src="/profil.png" alt="hero" />
            </motion.div>
        </div>
    );
};

export default Homepage;

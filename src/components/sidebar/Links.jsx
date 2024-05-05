import { motion } from "framer-motion";

const Links = () => {
    const items = ["Homepage", "About", "Projects", "Contact"];

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        close: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemsVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        close: {
            y: 50,
            opacity: 0,
        },
    };

    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
                <motion.a href={`/#${item}`} key={item} variants={itemsVariants} whileHover={{scale: 1.1}} whileTap={{scale:0.95}}>
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;

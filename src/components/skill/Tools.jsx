import { motion } from "framer-motion";

const Tools = ({ title, url, level }) => {
    const myStyle =
        level === "Proficient"
            ? {
                  borderBottom: "4px solid limegreen",
              }
            : level === "Competent"
            ? {
                  borderBottom: "4px solid gold",
              }
            : {
                  borderBottom: "4px solid orangered",
              };

    return (
        <motion.div className="tools" style={myStyle} whileHover={{y: -5, boxShadow: "0 5px 10px purple"}}>
            <img src={url} alt={title} />
        </motion.div>
    );
};

export default Tools;

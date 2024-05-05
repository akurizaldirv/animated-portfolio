import DesignData from "../../DesignData";
import Tools from "./Tools";
import "./skill.scss";
import { motion } from "framer-motion";

const Design = () => {
    return (
        <div className="Design skill">
            <div className="wrapper">
                <div className="skillSection">
                    <h1>Design <span>Tools</span></h1>
                    <hr />
                    <motion.div
                        className="skillTools"
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {DesignData.map((skill) => (
                            <Tools title={skill.title} url={skill.url} level={skill.level} key={skill.title}/>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Design;

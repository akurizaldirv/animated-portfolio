import Tools from "./Tools";
import "./skill.scss";
import { motion } from "framer-motion";

import ProgrammingData from "../../ProgrammingData";

const Programming = () => {

    return (
        <div className="skill">
            <div className="wrapper">
                <div className="skillSection">
                    <h1>Programming <span>Skill</span></h1>
                    <hr />
                    <motion.div
                        className="skillTools"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {ProgrammingData.map((skill) => (
                            <Tools title={skill.title} url={skill.url} level={skill.level} key={skill.title}/>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Programming;

import { useNavigate } from "react-router-dom";
import "./cta.scss";
import { motion } from "framer-motion";

const Cta = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/projects");
    };
    return (
        <div className="cta">
            <div className="inner">
                <h2>Wanna see all my projects?</h2>
                <motion.button
                    whileHover={{
                        backgroundColor: "#ffffff",
                        color: "#350028",
                    }}
                    onClick={handleOnClick}
                >
                    Click Here
                </motion.button>
            </div>
        </div>
    );
};

export default Cta;

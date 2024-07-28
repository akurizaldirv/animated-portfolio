import "./about.scss";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="about">
			<div className="wrapper">
				<TypeAnimation
					sequence={[
						"",
						1500,
						"Hi, I'm Rizaldi. Nice to meet you.",
						1500,
						"Hi, I'm Rizaldi. Have a good day.",
						1500,
					]}
					speed={40}
					style={{
						fontSize: "32px",
						fontWeight: 600,
						color: "orange",
					}}
					repeat={Infinity}
				/>
				<div className="badges">
					<div>Back-End</div>
					<div>Front-End</div>
					<div>Graphic Designer</div>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 200 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: "1" }}
				>
					Bachelor&apos;s degree in Informatics Engineering from
					Trunojoyo University, Madura. Have skills in the fields of
					Web Development and Graphic Design. Participated in
					internships and organizations outside campus to increase
					relationships and knowledge. Having good interest into Web
					Development and Graphic Designer. Currently looking for new
					challenges to continue to grow and open to all
					opportunities.
				</motion.p>
			</div>
		</div>
	);
};

export default About;

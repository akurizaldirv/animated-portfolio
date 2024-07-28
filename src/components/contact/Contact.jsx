import "./contact.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// icon
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailOpenFill } from "react-icons/ri";

const Contact = () => {
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		console.log(
			import.meta.env.VITE_SERVICE_ID,
			import.meta.env.VITE_TEMPLATE_ID,
			form.current,
			import.meta.env.VITE_PUBLIC_KEY
		);

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(
				() => {
					setSuccess(true);
				},
				(error) => {
					setError(error.text);
				}
			);
	};

	const variants = {
		initial: {
			opacity: 0,
			x: -300,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.75,
				staggerChildren: 0.15,
			},
		},
	};

	return (
		<div className="footerSection">
			<motion.div className="contact">
				<motion.div
					className="textContainer"
					variants={variants}
					initial="initial"
					whileInView="animate"
				>
					<motion.h1 variants={variants}>
						Let&apos;s <span>Work</span> Together
					</motion.h1>
					<motion.div className="item" variants={variants}>
						<a href="mailto:akurizaldirv@gmail.com">
							<motion.div className="logo">
								<RiMailOpenFill className="iconContact" />
							</motion.div>
							<motion.div className="text">
								<h2>E-Mail</h2>
								<span>akurizaldirv@gmail.com</span>
							</motion.div>
						</a>
					</motion.div>
					<motion.div className="item" variants={variants}>
						<a href="https://www.linkedin.com/in/akhmad-rizaldi-irvana-903269228/">
							<div className="logo">
								<FaLinkedin className="iconContact" />
							</div>
							<div className="text">
								<h2>LinkedIn</h2>
								<span>akhmad-rizaldi-irvana-903269228</span>
							</div>
						</a>
					</motion.div>
					<motion.div className="sosmed" variants={variants}>
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
					</motion.div>
				</motion.div>

				<motion.div
					className="formContainer"
					variants={variants}
					initial="initial"
					whileInView="animate"
				>
					<motion.div
						className="contactSvg"
						initial={{
							opacity: 1,
						}}
						whileInView={{
							opacity: 0,
						}}
						transition={{
							duration: 1,
							delay: 3,
						}}
					>
						<img src="contact.png" alt="" />
					</motion.div>
					<motion.form
						onSubmit={sendEmail}
						ref={form}
						className="formItems"
						initial={{
							opacity: 0,
							pointerEvents: "none",
						}}
						whileInView={{
							opacity: 1,
							pointerEvents: "auto",
						}}
						transition={{
							duration: 1,
							delay: 4,
						}}
					>
						<input
							type="text"
							name="name"
							placeholder="Name"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							required
						/>
						<textarea placeholder="Message" name="message" />
						<motion.button
							type="submit"
							variants={variants}
							whileHover={{
								backgroundColor: "#4f007c",
								color: "#fff",
							}}
							transition={{ type: "spring", stiffness: 200 }}
						>
							Send Message
						</motion.button>
					</motion.form>
					{error && <div className="error">{error}</div>}
					{success && (
						<div className="success">
							Your Message sent successfully!
						</div>
					)}
				</motion.div>
			</motion.div>
			<div className="footer">2024 @Copyright by Zaldi.</div>
		</div>
	);
};

export default Contact;

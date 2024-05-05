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
                (result) => {
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
                        <svg
                            fill="#fff"
                            height="100%"
                            // width="800px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                        >
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M291.032,126.653c0,4.466,3.619,8.084,8.084,8.084c4.466,0,8.084-3.619,8.084-8.084c0-1.486,1.208-2.695,2.695-2.695
				h43.116c1.486,0,2.695,1.208,2.695,2.695v43.116c0,1.486-1.208,2.695-2.695,2.695h-43.116c-1.486,0-2.695-1.208-2.695-2.695
				v-10.779c0-4.466-3.618-8.084-8.084-8.084c-4.466,0-8.084,3.618-8.084,8.084v10.779c0,10.401,8.463,18.863,18.863,18.863h43.116
				c10.401,0,18.863-8.463,18.863-18.863v-43.116c0-10.401-8.463-18.863-18.863-18.863h-43.116
				C299.494,107.789,291.032,116.252,291.032,126.653z"
                                        />
                                        <path
                                            d="M105.095,145.516c28.231,0,51.2-22.969,51.2-51.2s-22.969-51.2-51.2-51.2s-51.2,22.969-51.2,51.2
				S76.864,145.516,105.095,145.516z M105.095,59.284c19.316,0,35.032,15.715,35.032,35.032s-15.716,35.032-35.032,35.032
				c-19.316,0-35.032-15.715-35.032-35.032S85.779,59.284,105.095,59.284z"
                                        />
                                        <path
                                            d="M428.463,113.179H460.8c10.401,0,18.863-8.463,18.863-18.863V61.979c0-10.401-8.463-18.863-18.863-18.863h-32.337
				c-10.401,0-18.863,8.463-18.863,18.863v32.337C409.6,104.716,418.063,113.179,428.463,113.179z M425.768,61.979
				c0-1.486,1.208-2.695,2.695-2.695H460.8c1.486,0,2.695,1.208,2.695,2.695v32.337c0,1.486-1.208,2.695-2.695,2.695h-32.337
				c-1.486,0-2.695-1.208-2.695-2.695V61.979z"
                                        />
                                        <path
                                            d="M266.779,59.284h21.558c10.401,0,18.863-8.463,18.863-18.863V18.863C307.2,8.463,298.737,0,288.337,0h-21.558
				c-10.401,0-18.863,8.463-18.863,18.863v21.558C247.916,50.822,256.378,59.284,266.779,59.284z M264.084,18.863
				c0-1.486,1.208-2.695,2.695-2.695h21.558c1.486,0,2.695,1.208,2.695,2.695v21.558c0,1.486-1.208,2.695-2.695,2.695h-21.558
				c-1.486,0-2.695-1.208-2.695-2.695V18.863z"
                                        />
                                        <path
                                            d="M503.916,355.705h-24.253V245.221c0-16.344-13.298-29.642-29.642-29.642H202.105c-16.345,0-29.642,13.298-29.642,29.642
				v110.484h-25.9c-3.419-3.57-7.612-6.433-12.36-8.314c-2.633-13.668-14.684-24.023-29.109-24.023h-45.81V256
				c0-4.466-3.62-8.084-8.084-8.084s-8.084,3.619-8.084,8.084v75.453c0,4.466,3.62,8.084,8.084,8.084h53.895
				c7.43,0,13.474,6.044,13.474,13.474s-6.044,13.474-13.474,13.474H29.642c-7.43,0-13.474-6.044-13.474-13.474V234.442
				c0-31.203,25.385-56.589,56.589-56.589h64.674c16.67,0,32.417,7.304,43.203,20.039c2.885,3.404,7.987,3.831,11.393,0.943
				c3.407-2.886,3.83-7.986,0.944-11.393c-13.864-16.369-34.108-25.757-55.541-25.757H72.758C32.639,161.684,0,194.323,0,234.442
				V353.01c0,16.344,13.297,29.642,29.642,29.642h35.134c1.381,18.062,16.519,32.337,34.929,32.337h21.558
				c19.316,0,35.032-15.715,35.032-35.032c0-2.77-0.323-5.479-0.939-8.084h17.107v67.368c0,16.344,13.297,29.642,29.642,29.642
				h74.004l-0.964,26.947h-35.314c-4.465,0-8.084,3.619-8.084,8.084c0,4.466,3.62,8.084,8.084,8.084h43.079c0.029,0,0.057,0,0.082,0
				h86.141c0.013,0,0.026,0,0.04,0c0.014,0,0.027,0,0.041,0h43.08c4.466,0,8.084-3.618,8.084-8.084c0-4.466-3.619-8.084-8.084-8.084
				H376.98l-0.964-26.947h74.005c16.344,0,29.642-13.298,29.642-29.642v-67.368h24.253c4.466,0,8.084-3.618,8.084-8.084
				C512,359.324,508.382,355.705,503.916,355.705z M121.263,398.821H99.705c-9.487,0-17.359-7.039-18.671-16.168h24.061
				c12.205,0,22.71-7.416,27.249-17.976c4.78,3.466,7.782,9.086,7.782,15.281C140.126,390.358,131.664,398.821,121.263,398.821z
				 M463.495,439.242c0,7.43-6.044,13.474-13.474,13.474H375.44l-2.829-79.205c-0.571-16.028-13.584-28.585-29.623-28.585
				c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084c7.291,0,13.205,5.707,13.465,12.993l4.348,121.744h-69.476
				l4.348-121.744c0.26-7.286,6.175-12.993,13.465-12.993c4.466,0,8.084-3.619,8.084-8.084s-3.618-8.084-8.084-8.084
				c-16.04,0-29.051,12.555-29.623,28.585l-2.831,79.205h-74.581c-7.43,0-13.474-6.044-13.474-13.474V245.221
				c0-7.43,6.044-13.474,13.474-13.474h247.916c7.43,0,13.474,6.044,13.474,13.474V439.242z"
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
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

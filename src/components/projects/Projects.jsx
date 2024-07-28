import { useEffect } from "react";
import "./projects.scss";
import ProjectData from "../../ProjectData";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";

const Projects = () => {
	const [selectedFilter, setSelectedFilter] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [filterAll, setFilterAll] = useState(true);

	let filters = ["Fullstack", "Backend", "Frontend", "Mobile", "Other"];

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		filterItems();
	}, [selectedFilter]);

	useEffect(() => {
		if (filterAll) {
			setSelectedFilter([]);
		}
	}, [filterAll]);

	const handleFilterButtonClick = (selectedCategory) => {
		if (selectedFilter.includes(selectedCategory)) {
			let filters = selectedFilter.filter(
				(el) => el !== selectedCategory
			);
			setSelectedFilter(filters);
		} else {
			setSelectedFilter([...selectedFilter, selectedCategory]);
		}
	};

	const filterItems = () => {
		if (
			selectedFilter.length > 0 &&
			selectedFilter.length !== filters.length
		) {
			let tempItems = selectedFilter.map((selectedCategory) => {
				let temp = ProjectData.filter(
					(item) => item.category === selectedCategory
				);
				return temp;
			});
			setFilteredItems(tempItems.flat());
			setFilterAll(false);
		} else {
			setFilterAll(true);
			setFilteredItems([...ProjectData]);
		}
	};

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
			<div className="inner">
				<motion.div
					className="wrapper"
					variants={variants}
					initial="initial"
					animate="animate"
				>
					<div className="title">
						<h1>List of My Projects</h1>
					</div>

					<div className="filter-container">
						<button
							onClick={() => {setFilterAll(true)}}
							className={`filter-button ${
								filterAll ? "filter-active" : ""
							}`}
						>
							All
						</button>
						{filters.map((category, idx) => {
							return (
								<button
									key={`filter-${idx}`}
									onClick={() =>
										handleFilterButtonClick(category)
									}
									className={`filter-button ${
										selectedFilter.includes(category)
											? "filter-active"
											: ""
									}`}
								>
									{category}
								</button>
							);
						})}
					</div>

					<div className="cards">
						{filteredItems.map((item) => (
							<motion.div
								className="item"
								href="#"
								key={item.id}
								whileHover={{ y: -5 }}
							>
								<div className="item-container">
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
									</div>
								</div>

								<div className="buttons">
									<motion.button whileHover={onHoverA}>
										DEMO <BsArrowUpRight />
									</motion.button>
									<motion.button whileHover={onHoverB}>
										DOCS <BsArrowUpRight />
									</motion.button>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Projects;

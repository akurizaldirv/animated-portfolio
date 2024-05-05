import { useState } from "react";
import "./certification.scss";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

import slides from "./data";

const Certification = () => {
    const [index, setIndex] = useState(-1);

    console.log(slides)
    return (
        <div className="certification">
            <h2> <span>Certificate</span> Obtained </h2>
            <hr />
            <motion.div className="album">
                <PhotoAlbum
                    layout="rows"
                    photos={slides}
                    targetRowHeight="100"
                    onClick={({ index: current }) => setIndex(current)}
                />
            </motion.div>

            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    );
};

export default Certification;

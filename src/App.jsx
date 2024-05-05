import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./components/sidebar/Sidebar";
import Projects from "./components/projects/Projects";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
        
    );
};

export default App;

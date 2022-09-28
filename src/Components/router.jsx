import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./navBar";
import Home from './home';
import EducationDetails from "./education";
import Skills from "./skills";
import ProjectDetails from "./project";
import Contact from "./contact";
import SkillBar from "./skilbar";
import Footer from "./footer";
import React from '../Components/skills/react'






const Approuter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<EducationDetails />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/project" element={<ProjectDetails />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/skillbar" element={<SkillBar  />} /> */}
                <Route path="/react" element={<React />} />

            </Routes>
            <Footer />
        </BrowserRouter>

    );
}

export default Approuter;
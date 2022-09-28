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
import Error from "./error"
import Html from '../Components/skills/html'
import Js from '../Components/skills/js'
import Css from '../Components/skills/css'
import Mongo from '../Components/skills/mongo'









const Approuter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<EducationDetails />} />
                <Route path="/skills" element={<Skills />} />
                    <Route path="/skills/react" element={<React />} />
                    <Route path="/skills/html" element={<Html />} />
                    <Route path="/skills/js" element={<Js />} />
                    <Route path="/skills/css" element={<Css />} />
                    <Route path="/skills/mongo" element={<Mongo />} />
            
                <Route path="/project" element={<ProjectDetails />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/skillbar" element={<SkillBar  />} /> */}
                {/* <Route path="/react" element={<React />} /> */}
                <Route path="*" element={<Error />} />

            </Routes>
            <Footer />
        </BrowserRouter>

    );
}

export default Approuter;
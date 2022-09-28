import Image1 from '../Images/Dhoni.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg"  >
                <div className="container " >
                    <ul className="navbar-nav">
                        <li className="nav-item active primary ">
                            <Link to="/" className="nav-link  " aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/education" className="nav-link " >Education details</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-link ">Skills</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/project" className="nav-link ">Project Details</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link ">Conatct</Link>
                        </li>
                    </ul>
                </div>

           
        </nav>
    );
}

export default Navbar;
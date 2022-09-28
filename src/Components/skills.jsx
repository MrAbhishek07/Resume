import { Link } from 'react-router-dom';
import ReactImage from '../Images/react.webp'
import HtmlImage from '../Images/html.png' 
import JavaScript from '../Images/js.png' 
import CSSImage from '../Images/css.jpg' 
import SQLImage from '../Images/sql.webp' 
import MangoDb from '../Images/mangodb.png' 






const Skills = () => {
    return (
        <div className="skills">
            <h2>My Skill Sets Information</h2>
            {/* <div className="skillcards"> */}
            <div className="skillcards123">
                <div class="cardReact" style={{ width: "18rem" }}>
                    <img src={ReactImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <Link to="/skills/react"><h4 class="card-text">React JS</h4></Link>
                    </div>
                </div>
                <div class="cardHtml" style={{ width: "18rem" }}>
                    <img src={HtmlImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <Link to="/skills/html"><h4 class="card-text">HTML</h4></Link>
                    
                       
                    </div>
                </div>
                <div class="cardJs" style={{ width: "18rem" }}>
                    <img src={JavaScript} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <Link to="/skills/js"><h4 class="card-text">Java Script</h4></Link>

                        
                    </div>
                </div>
            </div>
            <div className="skillcards456">
            <div class="cardCss" style={{ width: "18rem" }}>
                    <img src={CSSImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <Link to="/skills/css"><h4 class="card-text">CSS</h4></Link>
                   
                        
                    </div>
                </div>
                <div class="cardSql" style={{ width: "18rem" }}>
                    <img src={SQLImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <Link to="/skills/sql"><h4 class="card-text">SQL</h4></Link>

                       
                    </div>
                </div>
                <div class="cardDb" style={{ width: "18rem" }}>
                    <img src={MangoDb} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <Link to="/skills/mongo"><h4 class="card-text">MongoDB</h4></Link>

                        
                    </div>
                </div>
            {/* </div> */}
            </div>





        </div>
    );
}

export default Skills;
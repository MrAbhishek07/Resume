import { Link } from 'react-router-dom';
import Image3 from '../Images/Abhishek.jpg'
import Image4 from '../Images/dashboard.jpg'
import Image5 from '../Images/rendaring.jpg'
import Image10 from '../Images/todo.jpg'


const Home = () => {
    return (

        <div className='home' >
            <div className='component1'>
                <div className='hometext' >
                    <h2>Hi, I am Abhishek,</h2>
                    <h2>Software Developer</h2>
                    <p>
                        Junior Software Developer with 2+ years of experience in the Technology domain looking for a development position. Supportive and enthusiastic team player dedicated to efficiently resolving project issues. Ability and willingness to innovate and learn new technologies, quick learner passionate about development.
                    </p>
                    <a href="https://drive.google.com/drive/folders/1MvVJs5Qj0WjO3_EqpIW7ZhzKv4NCmQFG" target="_blank">
                        <button id='button1'>Ckick here to view my Resume</button>
                    </a>
                </div>
                <img id="image3" src={Image3} alt="" style={{ width: '10%', height: '5%' }} />
            </div>

            {/* *******************************************************Cards Components***************************** */}
            <div className='cardmain'>
                <div className="textbutton" style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 className='recentPost'>Recent Pojects</h3>
                    {/* <button id='viewall'>View All</button> */}
                    <Link to="/project"> View All</Link>
                </div>
                <div className="cards">
                    <div className="card2 bg-primary" style={{ width: "35rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Todo-List</h5><br />
                            {/* <h6 className="card-subtitle mb-2 text-muted">21 Sep 2022   |  Design, Patern</h6> */}
                            {/* <img src={Image10} alt="" style={{ width: '560px', height: '300px' }} /> */}
                            <p className="card-text">In this mini project we created TODO aplication using React</p>

                        </div>
                    </div>
                    <div className="card2  bg-primary" style={{ width: "35rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Wether App</h5><br />
                            {/* <h6 className="card-subtitle mb-2 text-muted">21 Sep 2022   | Figma, Icon Design</h6> */}
                            <p className="card-text">In this project we created Weather app using react which showcases the tempreture details of given places</p>

                        </div>
                    </div>
                    {/* <div className="card text-bg-dark">
                        <img src={Image10} className="card-img" alt="..."/>
                            <div class="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                    </div> */}

                </div>
            </div>

            {/* ************************************************************************************************************************************ */}

            {/* ****************************************************************************************Featured Works Component *************************************/}
            <div className="featuredworks">
                <h4 id='featuretext'>Future Learning Goals</h4>
                <div className="cards2">
                    <div className="card mb-5" style={{ width: "60rem" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={Image4} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Machine Learning</h5>
                                    <p className="card-text">Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-5" style={{ width: "60rem" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={Image5} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">AWS</h5>
                                    <p className="card-text">AWS enables you to select the operating system, programming language, web application platform, database, and other services you need. With AWS, you receive a virtual environment that lets you load the software and services your application requires</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="card mb-5" style={{ width: "60rem" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>






        </div>


    );
}

export default Home;
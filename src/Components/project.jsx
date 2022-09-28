
import { Link } from 'react-router-dom';


const ProjectDetails = () => {
    return (
        <div className="projectDetails">
            <div className='cardmain'>
                <div className="textbutton">
                    <h3 className='recentPost'>Pojects</h3>
                </div>
                <div className="cards">
                    <div className="card2 bg-primary" style={{ width: "35rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Todo-List</h5><br />
                            {/* <h6 className="card-subtitle mb-2 text-muted">21 Sep 2022   |  Design, Patern</h6> */}
                            {/* <img src={Image10} alt="" style={{ width: '560px', height: '300px' }} /> */}
                            <p className="card-text">In this mini project we created TODO aplication using React</p>
                            <button style={{ borderRadius: "5px" }}> <a href="https://github.com/MrAbhishek07/Todo-app.git" target="_blank" state={{ color: "black" }}> View All</a></button>



                        </div>
                    </div>
                    <div className="card2  bg-primary" style={{ width: "35rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Wether App</h5><br />
                            {/* <h6 className="card-subtitle mb-2 text-muted">21 Sep 2022   | Figma, Icon Design</h6> */}
                            <p className="card-text">In this project we created Weather app using react which showcases the tempreture details of given places</p>
                            <button style={{ borderRadius: "5px" }}> <a href="https://github.com/MrAbhishek07/Weather-APP.git" target="_blank" state={{ color: "black" }}> View All</a></button>


                        </div>
                    </div>


                </div>
            </div>
            <div className='cardmain'>
                <div className="cards">
                    <div className="card2 bg-primary" style={{ width: "35rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">React Form</h5><br />
                            {/* <h6 className="card-subtitle mb-2 text-muted">21 Sep 2022   |  Design, Patern</h6> */}
                            {/* <img src={Image10} alt="" style={{ width: '560px', height: '300px' }} /> */}
                            <p className="card-text">In this mini project we created form aplication using INDEXEDDB</p>
                            <button style={{ borderRadius: "5px" }}> <a href="https://github.com/MrAbhishek07/react-form.git" target="_blank" state={{ color: "black" }}> View All</a></button>


                        </div>
                    </div>
                    <div className="card2  bg-primary" style={{ width: "35rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Wether App</h5><br />
                            {/* <h6 className="card-subtitle mb-2 text-muted">21 Sep 2022   | Figma, Icon Design</h6> */}
                            <p className="card-text">In this project we created Weather app using react which showcases the tempreture details of given places</p>
                            <button style={{ borderRadius: "5px" }}> <a href='#' state={{ color: "black" }}> View All</a></button>


                        </div>
                    </div>


                </div>
            </div>


        </div>

    );
}

export default ProjectDetails;
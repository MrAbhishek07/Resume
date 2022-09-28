import Image6 from '../Images/Education.jpg'
import Image7 from '../Images/10th.jfif'
import Image8 from '../Images/12th.jpg'
import Image9 from '../Images/engineering.jfif'


const EducationDetails = () => {
    return (
        <div className="education-details">
            <div>
                <h2 id='education'>Education Information</h2>

                <table style={{width:"50%"}}>
                    <tr>
                        <th>Institution Name</th>
                        <th>Exmamination Board</th>
                        <th>Examination</th>
                        <th>Year</th>
                        <th>Class Obtained</th>
                        <th>Certificate</th>


                    </tr>
                    <tr>
                        <td>KRCES Kannada Medium high School Bailhongal</td>
                        <td>K E S S B</td>
                        <td>S S L C</td>
                        <td>2012</td>
                        <td>72%</td>
                        <td><a href="">Click here to download</a></td>


                    </tr>
                    <tr>
                        <td>Kalpavruksha PU college Bailhongal</td>
                        <td>Karnataka PU Board</td>
                        <td>P U C</td>
                        <td>2014</td>
                        <td>71%</td>
                        <td><a href="">Click here to download</a></td>
                    </tr>
                    <tr>
                        <td>Hirasugar Insitute of Technology Nidasoshi</td>
                        <td>V T U Belagavi</td>
                        <td>Engineering</td>
                        <td>2018</td>
                        <td>61%</td>
                        <td><a href="">Click here to download</a></td>
                    </tr>
                </table>
            </div>
            <a href=""></a>

        </div>
    );
}

export default EducationDetails;
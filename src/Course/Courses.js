import {Link} from "react-router-dom"
function Courses(props){
    return(<>
    <img style={{width:"200px",height:"200px"}} src={props.details.course_image} alt=""></img>
        <h4>{props.details.course_name}</h4>
        
        <div id="buttonsright">
                <button style={{width:'100px'}}><Link style={{color:'white',textDecoration:'none'}} to={`/coursedetails/${props.details.id}`}>View Details</Link></button>
        </div>
    </>)
}
export default Courses;
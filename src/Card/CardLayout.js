import './Card.css'
import {Link} from "react-router-dom"
function CardLayout(props) {
    return (
        <>
            <div className="card" >
                <img src={props.details.course_image} alt="Avatar" style={{width:"100px",height:"90px",marginTop:'10px'}}></img>
                <div className ="container">
                <h4><b>{props.details.course_name}</b></h4>
                <button style={{float:'left'}}><Link style={{textDecoration:'none',color:'white'}}to={`/coursedetails/${props.details.id}`}>More</Link></button>
                <button style={{float:'right'}}><Link style={{textDecoration:'none',color:'white'}} to={`/addce`}>Enroll</Link></button>
                </div>
            </div>

        </>
    )
}
export default CardLayout;
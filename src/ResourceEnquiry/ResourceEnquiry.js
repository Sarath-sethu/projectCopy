import {Link} from "react-router-dom"
function ResourceEnquiry(props){
    return(<>
   
        
        <h2>Name: {props.details.user_name}</h2>
        <h3>Resource Name: {props.details.resource_name}</h3>
        <h3>Availability: {props.details.availability}</h3>
        
        <div id="buttonsright">
                <button style={{width:'100px'}}><Link style={{color:'white',textDecoration:'none'}} to={`/redetails/${props.details.id}`}>View Details</Link></button>
        </div>
    </>)
}
export default ResourceEnquiry;
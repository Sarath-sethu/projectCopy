function Resource(props){
    return(<>
        
           
                <td>{props.details.batch_id}</td>
                <td>{props.details.resource_name}</td>
                <td>{props.details.availability}</td>
                <td>{props.details.previous_availability}</td>
                <td>{props.details.date}</td>
                <td>{props.details.time}</td>
            
       
    </>)
}
export default Resource;
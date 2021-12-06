import axios from "axios";
import { useState, useEffect} from "react";
import ResourceEnquiry from "./ResourceEnquiry";
import '../Staff.css'



function ResourceEnquiryList(){
    if(!localStorage.getItem('mytoken')){
         window.location = '/login'
    }
    //initialize the use case to empty
    const [resource,setresource] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:4500/crm/reenquiry')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setresource(response.data)
        })
        
    },[])

    return(<>
    <h1 style={{marginTop:'90px'}}>Resource Enquiry List</h1>
    <div id="unorder">
    <ul>
        {resource.map(resource =>
            
            <li key ={resource.id}>
                <ResourceEnquiry details ={resource}/>
            </li>
            
        )}
    </ul>
    </div>
    
    </>
    );
}
export default ResourceEnquiryList;
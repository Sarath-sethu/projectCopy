import axios from "axios";
import { useState, useEffect} from "react";
import Resource from "./Resource";
import './Resource.css'



function ResourceSalesPipeLine(){
    if(!localStorage.getItem('mytoken')){
        window.location = '/login'
    }
    //initialize the use case to empty
    const [resources,setResources] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:3500/resource')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setResources(response.data)
        })
        /*setTimeout(()=>{
            fetchresourceList();
        },5000)*/
        
    },[])

    return(<>
    <h1>Sales Pipe Line</h1>
    <div id="unorder">
        <center>
        <table cellSpacing = "0" cellPadding ="0">
            <tr>
                <th>Batch Name</th>
                <th>Resource Name</th>
                <th>Current Availability</th>
                <th>Previous Availability</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
            {resources.map(resource =>
            
            <tr key ={resource.id}>
                <Resource details ={resource}/>
            </tr>
            
             )}
        </table>
        
        </center>
    </div>
    
    </>
    );
}
export default ResourceSalesPipeLine;
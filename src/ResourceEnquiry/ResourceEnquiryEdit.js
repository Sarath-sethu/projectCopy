import { useState ,useEffect} from "react";
import '../Main.css'
import axios from 'axios'
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
function ResourceEnquiryEdit() {
    if(!localStorage.getItem('mytoken')){
        window.location = '/login'
    }
    const {id} =useParams()
    return (<div>

        <MyForm id={id}/>

    </div>);
}
function MyForm(props) {
    const[inputs,setInputs] = useState({})

    useEffect(()=>{
        axios
        .get(`http://localhost:3500/resource/${props.id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setInputs(response.data)
        })
        
    },[])
    const temp = inputs.availability
    
    function handleChange (event) {
        const name = event.target.name ;
        const value = event.target.value;
        
        setInputs(values =>({...values, [name]:value}))
        console.log(inputs);
        
    }
   
    const navigate = useNavigate();
    function handleSubmit(event){
        
        event.preventDefault();

        console.log(inputs);

        inputs.availability==="available" ? setInputs(inputs.previous_availability = "not_available"):setInputs(inputs.previous_availability = "available");
        

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = dd + '/' + mm + '/' + yyyy;
        inputs.date = date;
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        inputs.time=time;

       
        axios
        .put(`http://localhost:3500/resource/${props.id}`,inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            alert("Status has been updated");
        })
        window.location=`/redetails/${props.id}`
        
    }
    
    return (<div id ="main">
        <form onSubmit={handleSubmit}>
            <select style ={{padding:"7px",borderRadius:"7px",border:'1px solid grey',outline:"none"}} name="availability" onChange={handleChange} >
                <option   >select status</option>
                <option  value="available" >Available</option>
                <option  value="not_available" >Not Availabile</option>
            </select>
            <button type="submit">Save</button>
        </form>
    </div>);
    
}

export default ResourceEnquiryEdit;
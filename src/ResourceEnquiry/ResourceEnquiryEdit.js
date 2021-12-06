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
        .get(`http://localhost:4500/crm/reenquiry/${props.id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setInputs(response.data)
        })
        
    },[])
    const temp = inputs.enquiry_status
    
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

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = dd + '/' + mm + '/' + yyyy;
        inputs.date = date;
        
        inputs.time=time;

       
        axios
        .put(`http://localhost:4500/crm/reenquiry/${props.id}`,inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            alert("Status has been updated");
        })
        window.location=`/redetails/${props.id}`
        
    }
    
    return (<div style={{marginTop:'90px'}} id ="main">
        <form onSubmit={handleSubmit}>
            <select style ={{padding:"7px",borderRadius:"7px",border:'1px solid grey',outline:"none"}} name="enquiry_status" onChange={handleChange} >
                <option   >select status</option>
                <option  value="pending" >Pending</option>
                <option  value="resolved" >Resolved</option>
            </select>
            <button type="submit">Save</button>
        </form>
    </div>);
    
}

export default ResourceEnquiryEdit;
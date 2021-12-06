import { useState ,useEffect} from "react";
import '../Main.css'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ResourceEdit() {
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

    const notify = () =>
    toast.success("Resource Updated!!", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

    useEffect(()=>{
        axios
        .get(`http://localhost:4500/crm/resource/${props.id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setInputs(response.data)
        })
        
    },[])

    function handleChange(event){
        const name = event.target.name ;
        const value = event.target.value;

        setInputs(values =>({...values, [name]:value}))

    }
    function handleSubmit(event){
        event.preventDefault();

        console.log(inputs);

        axios
        .put(`http://localhost:4500/crm/resource/${props.id}`,inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setTimeout(()=>{window.location=`/ResourceDetails/${props.id}`},3000)
        })
    }
    return (<div style={{marginTop:'90px'}} id ="main">
        <h1>Edit Resource</h1>
        <form onSubmit={handleSubmit}>
        <div>
                <label>Resource Name :</label>
                <input type="text" name="resource_name" value={inputs.resource_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Resource Rent :</label>
                <input  style={{marginLeft:6}} type="number" name="resource_rent"  value={inputs.resource_rent || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Duration :</label>
                <input  style={{marginLeft:41}} type="text" name="duration"  value={inputs.duration || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Picture :</label>
                <input style={{marginLeft:51}} type="text" name="picture "  value={inputs.picture  || ""} onChange={handleChange}  required />
            </div>
            <div>
                <label>Description :</label>
                <textarea style={{marginLeft:23}} name="description"  value={inputs.description  || ""} onChange={handleChange}  required />
            </div>
            <button type="submit" onClick={notify}>Update</button>
            <ToastContainer/>
        </form>
    </div>);
}

export default ResourceEdit;
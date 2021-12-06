import { useState } from "react";
import '../Main.css'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

function AddResource() {
    return (<div>

        <MyForm />

    </div>);
}
function MyForm() {
    const[inputs,setInputs] = useState({})

    const notify = () =>
    toast.success("Resource Added!!", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

    function handleChange(event){
        const name = event.target.name ;
        const value = event.target.value;

        setInputs(values =>({...values, [name]:value}))

    }

    function handleSubmit(event){
        event.preventDefault();

        console.log(inputs);

        axios
        .post('http://localhost:4500/crm/resource',inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setTimeout(()=>{window.location='/ResourceList'},3000)
        })
    }
    return (<div style={{marginTop:'90px'}} id ="main">
        <h1>Add Resource</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Resource Name :</label>
                <input type="text" name="resource_name" value={inputs.resource_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Resource Rent :</label>
                <input  style={{marginLeft:7}} type="number" name="resource_rent"  value={inputs.resource_rent || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Duration :</label>
                <input  style={{marginLeft:51}} type="text" name="duration"  value={inputs.duration || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Picture :</label>
                <input style={{marginLeft:61}} type="text" name="picture"  value={inputs.picture  || ""} onChange={handleChange}  required />
            </div>
            <div>
                <label>Description :</label>
                <textarea style={{marginLeft:33}} name="description"  value={inputs.description  || ""} onChange={handleChange}  required />
            </div>
            
            
            
            <button type="submit" onClick={notify}>Add</button>
            <ToastContainer></ToastContainer>
        </form>
    </div>);
}

export default AddResource;
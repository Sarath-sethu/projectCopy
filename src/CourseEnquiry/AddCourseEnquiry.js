import { useState } from "react";
import '../Main.css'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

function AddCourseEnquiry() {
   
    return (<div>

        <MyForm />

    </div>);
}
function MyForm() {
    const[inputs,setInputs] = useState({})

    const notify = () =>
    toast.success("Enquiry Submitted!!", {
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
        .post('http://localhost:4500/crm/ceenquiry',inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setTimeout(()=>{window.location='/CourseList'},3000)
        })
    }
    return (<div style={{marginTop:'90px'}} id ="main">
        <h1>Enquire</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Course Name :</label>
                <input type="text" name="course_name" value={inputs.course_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>User Name :</label>
                <input  style={{marginLeft:18}} type="text" name="user_name"  value={inputs.user_name || ""} onChange={handleChange} required />
            </div>
            <button type="submit" onClick={notify}>Enquire</button>
            <ToastContainer/>
        </form>
    </div>);
}

export default AddCourseEnquiry;
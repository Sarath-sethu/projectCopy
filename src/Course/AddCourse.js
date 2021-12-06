import { useState } from "react";
import '../Main.css'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

function AddCourse() {
   
    return (<div>

        <MyForm />

    </div>);
}
function MyForm() {
    const[inputs,setInputs] = useState({})

    const notify = () =>
    toast.success("Course Added!!", {
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
        .post('http://localhost:4500/crm/course',inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setTimeout(()=>{window.location='/CourseList'},3000)
        })
    }
    return (<div style={{marginTop:"90px"}} id ="main">
        <h1 >Add Course</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Course Name :</label>
                <input type="text" name="course_name" value={inputs.course_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Course Fee :</label>
                <input  style={{marginLeft:16}} type="number" name="course_fee"  value={inputs.course_fee || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Duration :</label>
                <input  style={{marginLeft:41}} type="text" name="duration"  value={inputs.duration || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Criteria :</label>
                <input  style={{marginLeft:51}} type="text" name="criteria"  value={inputs.criteria || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Course Image :</label>
                <input  type="text" name="course_image"  value={inputs.course_image  || ""} onChange={handleChange}  required />
            </div>
            <button type="submit" onClick={notify}>Add</button>
            <ToastContainer/>
        </form>
    </div>);
}

export default AddCourse;
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import {Button} from 'react-bootstrap'

import './CourseToasterStyle.css'
import Popup from "reactjs-popup";


function CourseDetails(){

    if(!localStorage.getItem('mytoken')){
        window.location = '/login'
    }
    const [course,setcourse] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        console.log("use effect hook executed");
        
        axios
        .get(`http://localhost:4500/crm/course/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setcourse(response.data)
        })
        
    },[])

    return(<>
    <div > 
    <h1 style={{marginTop:'90px'}}>Course Details</h1>
    <div id="secondary">
    <h3>{course.course_name}</h3>
    <img style={{width:"200px",height:"200px"}} src={course.course_image} ></img>
    <h3>Course Fee: {course.course_fee}</h3>
    <h3>Duration: {course.duration}</h3>
    <h3>Criteria: {course.criteria}</h3>
    </div>
    </div>
    <button><a style={{textDecoration:"none",color:"white"}} href="/courselist">Go back </a></button>

    <button type="button" onClick={()=>navigate(`/courseedit/${course.id}`)}>Edit</button>      <div>
      <Popup
    trigger={<button className="button"> Delete </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Course Delete</div>
        <div className="content">
          <h2>Please Confirm!!</h2>
        </div>
        <div className="actions">
            <button className="button" onClick={()=>Deletecourse(course.id)}> Delete </button>                 
          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    )}
  </Popup>
      </div>

    </>
    );
}

function Deletecourse(id){

    axios
        .delete(`http://localhost:4500/crm/course/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            
        })
        window.location='/CourseList'
}
export default CourseDetails;
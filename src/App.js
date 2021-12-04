import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import 'reactjs-popup/dist/index.css';



import Login from './Login'
import CourseList from "./Course/CourseList";
import CourseEdit from "./Course/CourseEdit";
import CourseDetails from "./Course/CourseDetails";
import AddResource from "./Resource/AddResource"
import AddCourse from "./Course/AddCourse"
import NoMatch from "./NoMatch"
import ResourceList from "./Resource/ResourceList"
import './Main.css'
import ResourceDetails from "./Resource/ResourceDetails"
import ResourceDelete from "./Resource/ResourceDelete"
import ResourceEdit from "./Resource/ResourceEdit"
import Registeration from "./Registeration";
import Home from './Home'
import AddCourseEnquiry from "./CourseEnquiry/AddCourseEnquiry";
import CourseEnquiryDetails from "./CourseEnquiry/CourseEnquiryDetails";
import CourseEnquiryList from "./CourseEnquiry/CourseEnquiryList";
import CourseEnquiryEdit from "./CourseEnquiry/CourseEnquiryEdit";
import AddResourceEnquiry from "./ResourceEnquiry/AddResourceEnquiry";
import ResourceEnquiryDetails from "./ResourceEnquiry/ResourceEnquiryDetails";
import ResourceEnquiryList from "./ResourceEnquiry/ResourceEnquiryList";
import ResourceEnquiryEdit from "./ResourceEnquiry/ResourceEnquiryEdit";
import ResourceSalesPipeLine from "./SalesPipeLine/ResourceSalesPipeLine";
import CourseSalesPipeLine from "./SalesPipeLine/CourseSalesPipeLine";



function App(){
  return(<div id="ui">
    <h1>CRM</h1>
    <MyRouter/>
    <br/><br/><br/><br/>
    <p>Copyright 2021 - All rights Reserved</p>
  </div>

  )
}

function MyRouter(){
  var div={
    display:"inline",
    padding:'10px',
    marginleft:'30px'
  }
  return(
    <Router>
      <div id="nav">
      <div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/">Home</Link></div>
      {!localStorage.getItem('mytoken') && <div id="link" style={div}><Link  style={{ textDecoration: "none", color: 'black' }} to="/login">Login</Link></div>}
      <div id="link" style={div}><Link  style={{ textDecoration: "none", color: 'black' }} to="/addce">Add Course Enquiry</Link></div>
      <div id="link" style={div}><Link  style={{ textDecoration: "none", color: 'black' }} to="/addre">Add Resource Enquiry</Link></div>
      {localStorage.getItem('mytoken') && <div id="link" style={div}><Link  style={{ textDecoration: "none", color: 'black' }}onClick={()=>window.location = '/login'} to="/login">Logout</Link></div>}
      {localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/addcourse">Add Course</Link></div>}
      {localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/courselist">Course List</Link></div>}
      {localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/addresource">Add Resource</Link></div>}
      {localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/resourcelist">Resource List</Link></div>}
      {localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/celist">Course Enquiry List</Link></div>}
      {localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/relist">Resource Enquiry List</Link></div>}
      {!localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/registeration">Registration</Link></div>}
      {localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/salesresource">Resource Sales PipeLine</Link></div>}
      {localStorage.getItem('mytoken') &&<div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/salescourse">Course Sales PipeLine</Link></div>}
      </div>
      <Routes>
       
        
        
        <Route path="/addresource" element={<AddResource/>}/>
        <Route path="/addcourse" element={<AddCourse/>}/>
        <Route path="*" element={<NoMatch/>}/>
        <Route path="resourcedetails/:id" element={<ResourceDetails/>}/>
        <Route path="resourcedelete/:id" element={<ResourceDelete/>}/>
        <Route path="/resourceedit/:id" element={<ResourceEdit/>}/>
        <Route path="/resourcelist" element={<ResourceList/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Registeration />} />

        <Route path="/courselist" element={<CourseList/>}/>
        <Route path="/coursedetails/:id" element={<CourseDetails/>}/>
        <Route path="/courseedit/:id" element={<CourseEdit/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/cedetails/:id" element={<CourseEnquiryDetails/>}/>
        <Route path="/celist" element={<CourseEnquiryList/>}/>
        <Route path="/editstatus/:id" element={<CourseEnquiryEdit/>}/>
        <Route path="/addce" element={<AddCourseEnquiry/>}/>

        <Route path="/redetails/:id" element={<ResourceEnquiryDetails/>}/>
        <Route path="/relist" element={<ResourceEnquiryList/>}/>
        <Route path="/resourceedit/:id" element={<ResourceEnquiryEdit/>}/>
        <Route path="/addre" element={<AddResourceEnquiry/>}/>
        <Route path="/salesresource" element={<ResourceSalesPipeLine/>}/>
        <Route path="/salescourse" element={<CourseSalesPipeLine/>}/>


      </Routes>
      
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import 'reactjs-popup/dist/index.css';



//import 'bootstrap/dist/css/bootstrap.min.css'
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
import ResourceEdit from "./Resource/ResourceEdit"
import Registeration from "./Registeration";
import Home from './Home'
import UserCourseEnquiry from "./UserCourseEnquiry";
import AddCourseEnquiry from "./CourseEnquiry/AddCourseEnquiry";
import CourseEnquiryDetails from "./CourseEnquiry/CourseEnquiryDetails";
import CourseEnquiryList from "./CourseEnquiry/CourseEnquiryList";
import CourseEnquiryEdit from "./CourseEnquiry/CourseEnquiryEdit";
import ResourceEnquiryDetails from "./ResourceEnquiry/ResourceEnquiryDetails";
import ResourceEnquiryList from "./ResourceEnquiry/ResourceEnquiryList";
import ResourceEnquiryEdit from "./ResourceEnquiry/ResourceEnquiryEdit";
import ResourceSalesPipeLine from "./SalesPipeLine/ResourceSalesPipeLine";
import CourseSalesPipeLine from "./SalesPipeLine/CourseSalesPipeLine";
import AddResourceEnquiry from "./ResourceEnquiry/AddResourceEnquiry";
import './SideBar/side.css';
import SideBar from './SideBar/sideBar'


function App() {
  return (<div id="ui">
     <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      
        
        <MyRouter />
        <br /><br /><br /><br />
        
      
    </div>
    <footer style={{bottom:'0',textAlign:'center'}}><p>Copyright 2021 - Team 3</p></footer>
  </div>

  )
}

function MyRouter() {
  var div = {
     
    display: "inline",
    padding: '10px',
    marginRight:'20px',
    top:0,
    float:'right'
  }
  return (
    <Router>
      
      
      <div id="nav" style={{position:"fixed",top:0,width:"100%",zIndex:1}}>
        <div style={{float:'left',display: "inline",padding: '10px',marginLeft:'60px',fontFamily: 'cursive',fontSize:'1.5em'}}>Customer Relationship Management</div>
        {!localStorage.getItem('mytoken') && <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} to="/login">Login</Link></div>}
        {localStorage.getItem('mytoken') && <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} onClick={() => window.location = '/login'} to="/login">Logout</Link></div>}
        {!localStorage.getItem('mytoken') && <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} to="/registeration">Registration</Link></div>}
        <div id="link" style={div}><Link style={{ textDecoration: "none", color: 'black' }} to="/">Home</Link></div>

      </div>
      <Routes>



        <Route path="/addresource" element={<AddResource />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="resourcedetails/:id" element={<ResourceDetails />} />
        <Route path="/resourceedit/:id" element={<ResourceEdit />} />
        <Route path="/resourcelist" element={<ResourceList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Registeration />} />

        <Route path="/courselist" element={<CourseList />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/coursedetails/:id" element={<CourseDetails />} />
        <Route path="/courseedit/:id" element={<CourseEdit />} />
        <Route path="/" element={<Home />} />
        <Route path="/userce/:id" element={<UserCourseEnquiry />} />
        <Route path="/cedetails/:id" element={<CourseEnquiryDetails />} />
        <Route path="/celist" element={<CourseEnquiryList />} />
        <Route path="/addce" element={<AddCourseEnquiry />} />
        <Route path="/editstatus/:id" element={<CourseEnquiryEdit />} />

        <Route path="/redetails/:id" element={<ResourceEnquiryDetails />} />
        <Route path="/addre" element={<AddResourceEnquiry />} />
        <Route path="/relist" element={<ResourceEnquiryList />} />
        <Route path="/resourceedit/:id" element={<ResourceEnquiryEdit />} />
        <Route path="/salesresource" element={<ResourceSalesPipeLine />} />
        <Route path="/salescourse" element={<CourseSalesPipeLine />} />


      </Routes>

    </Router>
  );
}

export default App;
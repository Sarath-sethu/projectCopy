import axios from "axios";
import { useState, useEffect} from "react";
import Courses from "./Courses";
import Search from '../Search/SearchBar';
import '../Staff.css'



function CourseList(){
    if(!localStorage.getItem('mytoken')){
         window.location = '/login'
    }
    //initialize the use case to empty
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:4500/crm/course')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setCourses(response.data)
        })
        /*setTimeout(()=>{
            fetchStaffList();
        },5000)*/
        
    },[])

    const filterPosts = (courses, query) => {
        if (!query) {
            return courses;
        }

        return courses.filter((course) => {
            const courseName = course.course_name.toLowerCase();
            return courseName.includes(query);
        });
    };

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(courses, searchQuery);

    return (<>
        <h1 style={{marginTop:'90px'}}>Course List</h1>
        <div id="unorder">
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            
            <ul>
                {filteredPosts.map(course =>

                    <li key={course.id}>
                        <Courses details={course} />
                    </li>

                )}
            </ul>
        </div>

    </>
    );
}
export default CourseList;
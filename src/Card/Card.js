import axios from "axios";
import { useState, useEffect} from "react";
import CardLayout from "./CardLayout";
import Search from '../Search/SearchBar';




function Card(){
    
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
        
        <div>
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            
            <span style={{display:"inline"}}>
                {filteredPosts.map(course =>

                    <span style={{float:'left',margin:'30px 50px'}}>
                        <CardLayout details={course} />
                    </span>

                )}
            </span>
            
        </div>

    </>
    );
}
export default Card;
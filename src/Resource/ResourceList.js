import axios from "axios";
import { useState, useEffect } from "react";
import Resource from "./Resource";
import Search from '../Search/SearchBar';
import './Resource.css'



function ResourceList() {
    if (!localStorage.getItem('mytoken')) {
        window.location = '/login'
    }
    //initialize the use case to empty
    const [resources, setResouces] = useState([])
    useEffect(() => {
        console.log("use effect hook executed");
        axios
            .get('http://localhost:4500/crm/resource')
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                setResouces(response.data)
            })
        /*setTimeout(()=>{
            fetchresourceList();
        },5000)*/

    }, [])
    const filterPosts = (resources, query) => {
        if (!query) {
            return resources;
        }

        return resources.filter((resource) => {
            const resourceName = resource.resource_name.toLowerCase();
            return resourceName.includes(query);
        });
    };

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(resources, searchQuery);

    return (<>
        <h1 style ={{marginTop:"90px"}}>Resource List</h1>
        <div id="unorder">
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            
            <ul>
                {filteredPosts.map(resource =>

                    <li key={resource.id}>
                        <Resource details={resource} />
                    </li>

                )}
            </ul>
        </div>

    </>
    );
}
export default ResourceList;
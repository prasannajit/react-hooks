import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);
    useEffect(() => {
        (
            async (resource) => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
                setResources(response.data);
            }
        )(resource)
    }, [resource]);
    return <ul>
        {resources.map((resource) => {
            return <li key={resource.id}>{resource.title}</li>
        })}
    </ul>

}
export default ResourceList;
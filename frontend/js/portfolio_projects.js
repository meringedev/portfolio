import {useState} from 'react';
import 'axios';

function loadProjects() {
    axios.get('url')
    .then((res) => {
        data = res.data;
        return (
            <>
                <h3>Projects</h3>
                {data.map((item) => {
                    let url = 'example'
                    return (
                        <>
                            <a href={url}>
                                <div className='projectItem'>
                                    <h5>{item.project_name}</h5>
                                    <p>{item.project_techs}</p>
                                    <p>{item.description}</p>
                                </div>
                            </a>
                        </>
                    )
                })}
            </>   
        )
    })
    .catch((err) => {
        console.log(err);
    })
}

export default loadProjects;
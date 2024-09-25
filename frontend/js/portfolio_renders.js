import * as React from 'react';
import axios from 'axios';
import {global} from './config.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import get_prop from './functs.js';

function AboutContent() {
    return (
        <>
            <h3 className='default'>About</h3>
            <p className='altPara'>Growing up, I was always modifying computers. These days, I'm a backend developer that's either creating APIs in Python or experimenting with Linux servers.</p>
            <p className='defaultListTitle'>Technical Skills:</p>
            <ul>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Python</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Django / Django Rest Framework</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Celery</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>MySQL</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Redis</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Docker/Kubernetes</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Git</li>
            </ul>
            <p className='defaultListTitle'>Currently Learning:</p>
            <ul>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Machine Learning / TensorFlow</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Game Development</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>C++</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>C#</li>
                <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Java</li>
            </ul>
        </>
    )
}

function ExperienceContent() {
    return (
        <>
            <h3 className='default'>Experience</h3>
            <h4 className='default'>Professional Experience:</h4>
            <div className='container'>
                <p className='expHeader'>Frontend Developer <FontAwesomeIcon icon={faCaretRight} className='caretIcon'></FontAwesomeIcon> weBambu Eco Education</p>
                <p className='defaultPara'>Oct 2018 - May 2022</p>
                <p className='defaultPara'>weBambu was a non-profit organization that facilitated Eco Education in rural communities. As the Frontend Developer, my core activites included:</p>
                <ul>
                    <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Planning site designs and functionality</li>
                    <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Developing a user interface using HTML, CSS and JavaScript</li>
                    <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Implementing responsive design on mobile websites</li>
                </ul>
            </div>
            <div className='container'>
                <p className='expHeader'>Backend Developer <FontAwesomeIcon icon={faCaretRight} className='caretIcon'></FontAwesomeIcon> Autolectronix</p>
                <p className='defaultPara'>Sept 2022 - July 2024</p>
                <p className='defaultPara'>Autolectronix is a pioneering company in the automotive electronics industry, specializing in the repairs of electronic truck modules.<br/>
                As a Backend Developer, my responsibilites included:</p>
                <ul>
                    <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Developing and managing a project related to Backend API Design</li>
                    <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Implementing and managing RESTful APIs</li>
                    <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Designing and optimizing database schemas</li>
                    <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Integrate third-party services and APIs</li>
                    <li><img src={'/public/minus-solid.svg'} className='defaultListIcon'/>Administering and deploying server systems</li>
                </ul>
            </div>
            <h4 className='default'>Education:</h4>
            <div className='container'>
                <p className='expHeader'>Junior Programmer IT Systems Development <FontAwesomeIcon icon={faCaretRight} className='caretIcon'></FontAwesomeIcon> AIE</p>
                <p className='defaultPara'>2023 - 2024</p>
            </div>
            <h4 className='default'>References:</h4>
            <div className='container'>
                <p className='defaultPara'>On Request</p>
            </div>
        </>
    )
}

function ProjectComponent({data}) {
    const has_site_url = data.has_site_url;
    let site_btn;
    if (has_site_url) {
        const project_site_url = data.project_site_url;
        site_btn = (
            <>
                <a href={project_site_url} className='projectBtn' id='projectSiteBtn' target='_blank'>Site</a>
            </>
        )
    } else {
        site_btn = null;
    }
    const project_github_url = get_prop(data, 'project_github_url');
    let github_btn;
    if (project_github_url !== '') {
        github_btn = (
            <>
                <a href={project_github_url} className='projectBtn' id='projectGithubBtn' target='_blank'>Source Code</a>
            </>
        )
    } else {
        github_btn = null;
    }
    return (
        <>
            <div className='projectItem'>
                <div className='projectMainCont'>
                    <h4 className='default'>{data.project_name}</h4>
                    <p className='expHeader'>{data.project_techs}</p>
                    <p className='defaultPara'>{data.description}</p>
                </div>
                <div className='projectBtnCont'>
                    {site_btn !== null ? site_btn: null}{github_btn !== null ? github_btn: null}
                </div>
            </div>
        </>
    )
}

function ProjectContent() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${global.api_url}/projects/`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <h3>Projects</h3>
            {data.map((item) => {
                return (
                    <ProjectComponent data={item} key={item.id}></ProjectComponent>
                )
            })}
        </>
    )
}

export {AboutContent, ExperienceContent, ProjectContent}
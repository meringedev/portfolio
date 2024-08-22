import {loadProjects} from './portfolio_projects';
import {App} from './portfolio_assets';

const contentNavList = [
    {
        contentId: 'homeNav',
        contentClasses: 'example',
        contentInner: 'home',
        contentHrefId: 'home'
    },
    {
        contentId: 'aboutNav',
        contentClasses: 'example',
        contentInner: 'about',
        contentHrefId: 'about'
    },
    {
        contentId: 'experienceNav',
        contentClasses: 'example',
        contentInner: 'experiences',
        contentHrefId: 'experiences'
    },
    {
        contentId: 'projectsNav',
        contentClasses: 'example',
        contentInner: 'projects',
        contentHrefId: 'projects'
    }
];

const contentNavListMain = contentNavList.shift();

const mainContentInner = (
    <>
        <h1>Welcome to my portfolio.</h1>
        <h2>My name's Alex.</h2>
        <h2>I'm a backend developer.</h2>
        <ul>
            {contentNavListMain.map((contentNav) => {
                <li className={contentNav.contentClasses} href={`#${contentNav.contentId}`}>{contentNav.contentInner}</li>
            })}
        </ul>
    </>
);

const mainContent = {
    contentId: 'home',
    contentClasses: 'home',
    contentInner: mainContentInner
};

const aboutContentInner = (
    <>
        <h3>About</h3>
        <p>Growing up, I was always modifying computers. These days, I'm a backend developer thats's either creating APIs in Python or experimenting with Linux servers</p>
        <p className='globalListTitle'>Technical Skills:</p>
        <ul>
            <li>Python</li>
            <li>Django / Django Rest Framework</li>
            <li>Celery</li>
            <li>MySQL</li>
            <li>Redis</li>
            <li>Docker/Kubernetes</li>
            <li>Git</li>
        </ul>
        <p className='globalListTitle'>Currently Learning:</p>
        <ul>
            <li>Machine Learning / TensorFlow</li>
            <li>C++</li>
        </ul>
    </>
);

const aboutContent = {
    contendId: 'about',
    contentClasses: 'example',
    contentInner: aboutContentInner
};

const experienceContentInner = (
    <>
        <h3>Experience</h3>
        <h4>Professional Experience:</h4>
        <div className='container'>
            <p>Frontend Developer - weBambu Eco Education</p>
            <p>Oct 2018 - May 2022</p>
            <p>weBambu was a non-profit organization that facilitated Eco Education in rural communities. As the Frontend Developer, my core activites included:</p>
            <ul>
                <li>Planning site designs and functionality</li>
                <li>Developing a user interface using HTML, CSS and JavaScript</li>
                <li>Implementing responsive design on mobile websites</li>
            </ul>
        </div>
        <div className='container'>
            <p>Backend Developer - Autolectronix</p>
            <p>Sept 2022 - July 2024</p>
            <p>Autolectronix is a pioneering company in the automotive electronics industry, specializing in the repairs of electronic truck modules.<br/>
            As a Backend Developer, my responsibilites included:</p>
            <ul>
                <li>Developing and managing a project related to Backend API Design</li>
                <li>Implementing and managing RESTful APIs</li>
                <li>Designing and optimizing database schemas</li>
                <li>Integrate third-party services and APIs</li>
                <li>Administering and deploying server systems</li>
            </ul>
        </div>
        <h4>Education:</h4>
        <div className='container'>
            <p>Junior Programmer IT Systems Development - AIE</p>
            <p>2023 - 2024</p>
        </div>
        <h4>References:</h4>
        <div className='container'>
            <p>On Request</p>
        </div>
    </>
);

const experienceContent = {
    contendId: 'experience',
    contentClasses: 'example',
    contentInner: experienceContentInner
};

const projectsContent = {
    contentId: 'projects',
    contentClasses: 'example',
    contentInner: loadProjects()
};

const contentArray = [aboutContent, experienceContent, projectsContent];

const Main = App(mainContent, contentArray, contentNavList);

export default Main;
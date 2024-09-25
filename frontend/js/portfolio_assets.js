import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRightLong, faBars} from '@fortawesome/free-solid-svg-icons';
import { useInView, InView } from 'react-intersection-observer';
import get_prop from './functs.js';
import sectionContentObject from './portfolio_sections.js';

const sections = ['about', 'experience', 'projects'];

function NavComponent({visibleSection, section}) {
    return (
        <>
            <div className='sideNavLink'>
                <a href={`#${section}`} className={`defaultLinkOverride ${visibleSection === section ? 'active': null}`}>
                    <FontAwesomeIcon icon={faArrowRightLong} className='sideNavIcon'></FontAwesomeIcon>{section}
                </a>
            </div>
        </>
    )
}

function ContentRender({section, visibleSection, parentRef}) {
    const sectionContent = get_prop(sectionContentObject, section);
    return (
        <>
            <div id={section} ref={parentRef} className='sectionContainer'>
                {sectionContent}
            </div>
        </>
    )
}

export default function App() {
    // const {ref, inView} = useInView({
    //     threshold: 0,
    // });

    // const cont = React.useRef(null);

    // const {ref, inView} = useInView({
    //     threshold: 0.2
    // });

    const cont = React.useRef();
    const ref = React.useRef();
    const inView = useInView({
        threshold: 0.2,
        root: cont
    });

    const [visibleSection, setVisibleSection] = React.useState();

    const setInView = (inView, entry) => {
        if (inView) {
            console.log(entry);
            setVisibleSection(entry.target.getAttribute('id'));
        }
    }

    const [isMobNavOpen, setIsMobNavOpen] = React.useState(false);

    const toggleMobNav = () => {
        setIsMobNavOpen(!isMobNavOpen);
    }

    return (
        <>
            <div id='global'>
                <div className='mainCont' id='home'>
                    <h1>Welcome <span id='h1Br1'></span>to <span id='h1Br2'></span>my <span id='h1Br3'></span>portfolio.</h1>
                    <h2 className='homeSubtitle1'>My Name's Alex.</h2>
                    <h2 className='homeSubtitle2'>I'm a backend developer.</h2>
                    <div className='homeNavCont'>
                        <div className='homeNavLink'>
                            <a href={`#about`} className='defaultLinkOverride'>
                                <FontAwesomeIcon icon={faArrowRightLong} className='homeNavIcon'></FontAwesomeIcon>about
                            </a>
                        </div>
                        <div className='homeNavLink'>
                            <a href={`#experience`} className='defaultLinkOverride'>
                                <FontAwesomeIcon icon={faArrowRightLong} className='homeNavIcon'></FontAwesomeIcon>experience
                            </a>
                        </div>
                        <div className='homeNavLink'>
                            <a href={`#projects`} className='defaultLinkOverride'>
                                <FontAwesomeIcon icon={faArrowRightLong} className='homeNavIcon'></FontAwesomeIcon>projects
                            </a>
                        </div>
                    </div>
                </div>
                <div className='nonMainCont' ref={cont}>
                    <div className='sideNav'>
                        <div className='sideNavSubtitleCont'>
                            <p className='sideNavSubtitle1'>Alexander Zagrebin</p>
                            <p className='sideNavSubtitle2'>Backend Developer</p>
                        </div>
                        <div className='mobNavCont'>
                            <div className='mobNavToggle' onClick={toggleMobNav}>
                                <FontAwesomeIcon icon={faBars} className='mobNavIcon'></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={`sideNavCont ${isMobNavOpen ? 'show': 'hidden'}`}>
                            <div className='sideNavLink'>
                                <a href={`#home`} className='defaultLinkOverride'>
                                    <FontAwesomeIcon icon={faArrowRightLong} className='sideNavIcon'></FontAwesomeIcon>home
                                </a>
                            </div>
                            {sections.map((section) => (
                                <NavComponent visibleSection={visibleSection} section={section} key={`${section}_1`}></NavComponent>
                            ))}
                        </div>
                    </div>
                    <div id='sectionWrapper'>
                        {sections.map((section) => (
                            <InView onChange={setInView} threshold={0.2} key={section}>
                                {({ref}) => {
                                    return (
                                        <>
                                            <ContentRender section={section} parentRef={ref}></ContentRender>
                                        </>
                                    )
                                }}
                            </InView>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
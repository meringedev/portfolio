import {useState, useRef, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function showNav(isIntersecting, contentId, mainContentId, contentNavList) {
    const [isVisible, setIsVisible] = useState(false);
    const [isActiveId, setActiveId] = useState();

    if (isIntersecting && contentId !== mainContentId) {
        setIsVisible(!isVisible);
        setActiveId(contentId);
    }

    return (
        contentNavList.map((contentNav) => {
            <li className={`${contentNav.contentId === isActiveId ? 'active': null} ${contentNav.contentClasses}`} href={`#${contentNav.contentHrefId}`}><FontAwesomeIcon icon={faArrowRightLong} />{contentNav.contentInner}</li>
        })
    );
}

function scrollCont(contentArray, mainContentId, contentNavList) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {rootMargin: '-300px'}
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll('div').forEach((element) => {
                element.classList.add('slide-in');
            })
        } else {
            ref.current.querySelectorAll('div').forEach((element) => {
                element.classList.remove('slide-in');
            })
        }
    }, [isIntersecting]);

    const showNav = showNav(isIntersecting, contentArray.contentId, mainContentId, contentNavList)

    return (
        <>
            <nav>
                <h4>Alexander Zagrebina</h4>
                <p>Backend Developer</p>
                {showNav.map((nav) => {
                    return nav
                })}
            </nav>
            <div className={contentArray.contentClasses} ref={ref} id={contentArray.contentId}>
                {contentArray.contentInner}
            </div>
        </>
    )
}

function App(mainContent, contentArray, contentNavList) {
    return (
        <>
            <div className={mainContent.contentClasses} id={mainContent.contentId}>
                {mainContent.contentInner}
            </div>
            {contentArray.map((content) => {
                return scrollCont(content, mainContent.contentId, contentNavList)
            })}
        </>
    )
}

export default App;

// function isIntersecting() {
//     const [isIntersecting, setIsIntersecting] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsIntersecting(entry.isIntersecting);
//             },
//             {rootMargin: '-300px'}
//         );
//         observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, [isIntersecting]);

//     return [ref, isIntersecting]
// }

// function setActive(currentContentId) {
//     const [isActiveId, setActiveId] = useState();
//     setActiveId(currentContentId);
    
//     return isActiveId
// }

// function App(mainContent, contentArray) {
//     const mainInnerContent = mainContent[0];
//     const mainContentClasses = mainContent[1];
//     const mainContentId = mainContent[2];
//     let contentList = [];
//     contentArray.forEach((content) => {
//         content.forEach((innerContent, contentClasses, contentId) => {
//             contentList.push(ScrollCont(innerContent, contentClasses, contentId));
//         })
//     });
//     return (
//         <div className='container'>
//             <div className={mainContentClasses} id={mainContentId}>
//                 {mainInnerContent}
//             </div>
//             {contentList.map(function(content) {
//                 return content
//             })}
//         </div>
//     )
// }

// function ScrollCont(innerContent, contentClasses, contentId) {
//     const [isIntersecting, setIsIntersecting] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsIntersecting(entry.isIntersecting);
//             },
//             {rootMargin: '-300px'}
//         );
//         observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, [isIntersecting]);

//     useEffect(() => {
//         if (isIntersecting) {
//             ref.current.querySelectorAll('div').forEach((el) => {
//                 el.classList.add('slide-in');
//             });
//         } else {
//             ref.current.querySelectorAll('div').forEach((el) => {
//                 el.classList.remove('slide-in');
//             });
//         }
//     }, [isIntersecting]);

//     return (
//         <div ref={ref} className={contentClasses} id={contentId} key={contentId}>
//             {innerContent}
//         </div>
//     );
// }
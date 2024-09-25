import * as React from 'react';
import {AboutContent, ExperienceContent, ProjectContent} from './portfolio_renders.js';

const sectionContentObject = {
    about: <AboutContent></AboutContent>,
    experience: <ExperienceContent></ExperienceContent>,
    projects: <ProjectContent></ProjectContent>
}

export default sectionContentObject;
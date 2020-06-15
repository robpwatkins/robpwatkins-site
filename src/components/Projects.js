import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import './Projects.css';
import ProjectModal from './ProjectModal';
import ProjectImg1 from '../img/ReactSolitaire.png';
import ProjectImg2 from '../img/SmallBusiness.png';
import ProjectImg3 from '../img/Tequila512.png';

const Projects = () => {

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-nav">
        </div>
          <Grid 
            container 
            justify="center"
            spacing={2}
            // wrap
            style={{width: '75%', height: 'auto'}}
            className="projects-grid"
            >
            <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal 
                projectImg={ProjectImg1} 
                projectName="Solitaire w/ Hooks" 
                blurb="Classic solitaire game built completely from scratch using hooks."
                website="https://robpwatkins.github.io/solitaire-final/"
                gitHub="https://github.com/robpwatkins/solitaire-final"  
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal 
                projectImg={ProjectImg2} 
                projectName="Redux Small Business App" 
                blurb="Example of a small business app with global state management using Redux and cookies to maintain logged-in state."
                website="https://robpwatkins.github.io/small-business"
                gitHub="https://github.com/robpwatkins/small-business"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal 
                projectImg={ProjectImg3} 
                projectName="Website Rebuild"
                blurb="An exercise in recreating a live website visually to resemble it as precisely as possible (original: www.tequila512.com)."
                website="https://robpwatkins.github.io/ACA_web101_Rob_Watkins/src/checkpoint-2/landing.checkpoint-2-2.html"
                gitHub="https://github.com/robpwatkins/ACA_web101_Rob_Watkins/tree/master/src/checkpoint-2"
            />
            </Grid>
          </Grid>
      </div>
    </div>
  )
}

export default Projects;
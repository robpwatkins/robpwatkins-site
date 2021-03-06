import React from 'react';
import { Card, CardMedia, Button } from '@material-ui/core';
import '../components/Project.css';

const Project = (props) => {
  return (
    <Card className="project-card">
      <div className="card-content">
        <div className="project-overlay">
          <div className="overlay-content">
            <h2>{props.name}</h2>
            <Button 
              variant="contained" 
              onClick={props.handleOpen}
              className="button"
              >
                SEE MORE
            </Button>
          </div>
        </div>
        <CardMedia 
          component="img"
          image={props.projectImg}
          style={{padding: "0"}}
          blurb={props.blurb}
          website={props.website}
          gitHub={props.gitHub}
        >
        </CardMedia>
      </div>
    </Card>
  )
}

export default Project;
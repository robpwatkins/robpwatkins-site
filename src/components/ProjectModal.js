import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import '../components/ProjectModal.css';
import Project from '../components/Project';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '75vw',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover',
    outline: 'none'
    // boxShadow: theme.shadows[7],
  }
}))

const ProjectModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Project 
        projectImg={props.projectImg} 
        name={props.projectName} 
        handleOpen={handleOpen}
        />
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        >
        <div className={classes.paper}>
          <div className="modal-content">
            <img src={props.projectImg} alt=""/>
            <div className="project-info">
              <h2>{props.projectName}</h2>
              <p>{props.blurb}</p>
              <a href={props.website} target="_blank">View live site on GitHub Pages</a>
              {props.gitHub &&
                <a href={props.gitHub} target="_blank">Go to code in the repo</a>
              }
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ProjectModal;
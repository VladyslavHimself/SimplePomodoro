import React from 'react';

import classes from './Controller.module.scss';

const Controller = props => {
  return (
    <div className={classes.Controller}>
      {/* <div className={classes.Controller__pause}>Pause</div>
      <div className={classes.Controller__resume}>Resume</div> */}
      <div className={classes.Controller__start} 
          onClick={ props.onChange }>
            Let's Work
      </div>
    </div>
  )
}

export default Controller;
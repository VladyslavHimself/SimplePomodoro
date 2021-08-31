import React from 'react';

import classes from './Timer.module.scss';

import Controller from './Controller/Controller';

const Timer = props => {

  return (
    <div className={classes.Timer}>
      <div className={classes.Timer__display}>
        <span>
          00:00
        </span>
      </div>
      <Controller />
    </div>
  )
}

export default Timer;
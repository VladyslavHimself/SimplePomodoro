import React from 'react';

import classes from './Timer.module.scss';

import Controller from './Controller/Controller';

const Timer = props => {

  const { seconds, minutes } = props.time;

  const nullizeData = (count, minNumber) => {
    if (count <= minNumber) {
      return (`0${count}`)
    } else {
      return (count);
    }
  }
  
  return (
    <div className={classes.Timer}>
      <div className={classes.Timer__display}>
        <span>
          {nullizeData(minutes, 9)}:{nullizeData(seconds, 9)}
        </span>
      </div>
      <Controller 
        onChange={ props.onChange }
        onRenewTime={ props.renewTime }
        pauseTime = { props.pauseTime }
      />
    </div>
  )
}

export default Timer;
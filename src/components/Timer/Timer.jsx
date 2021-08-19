import React from 'react';

import classes from './Timer.module.scss';

import Controller from './Controller/Controller';

const Timer = props => {

  const { seconds, minutes } = props.time;

  console.log(seconds);

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
        <span>{nullizeData(minutes, 9)}:
        {
           
        }{nullizeData(seconds, 9)}</span>
      </div>
      <Controller onChange={ props.onChange } />
    </div>
  )
}

export default Timer;
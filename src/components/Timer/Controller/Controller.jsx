import React from 'react';

import classes from './Controller.module.scss';

import Button from '../../Ui/Button/Button';

const Controller = props => {

  console.log()

  const buttonChanger = () => {


    if (!props.time.isTimerStarted) {
      return (
        <>
        <Button type='general' onClick={props.onChange}>
          Start work!
        </Button>
        </>
      )
    } 
    if (props.time.isTimerStarted) {
      return (
        <>
          <Button type="additional" onClick={props.onPause}> Pause/Continue </Button>
          <Button type="additional" onClick={props.onRenew}> Clear </Button>
        </>
      )
    }
  }

  return (
    <div className={classes.Controller}>
          {
            buttonChanger()
          }
          
    </div>
  )
}

export default Controller;
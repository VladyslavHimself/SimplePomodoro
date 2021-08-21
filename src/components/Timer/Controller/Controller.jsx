import React from 'react';

import classes from './Controller.module.scss';

import Button from '../../Ui/Button/Button';

const Controller = props => {

  const changeButtons = () => {
    return (
      <h1>hello</h1>
    )
  }

  return (
    <div className={classes.Controller}>
      <Button type="additional" onClick={ props.pauseTime }> Pause </Button>
      <Button type="additional" onClick={ props.onRenewTime }> Clear </Button>
      <Button type='general' onClick={props.onChange}>
        Start work!
      </Button>
    </div>
  )
}

export default Controller;
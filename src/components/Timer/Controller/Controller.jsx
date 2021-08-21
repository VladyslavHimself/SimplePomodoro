import React from 'react';

import classes from './Controller.module.scss';

import Button from '../../Ui/Button/Button';

const Controller = props => {
  return (
    <div className={classes.Controller}>
      {/* <Button type="additional"> Pause </Button>
      <Button type="additional"> Resume </Button> */}
      <Button type='general' onClick={props.onChange}>
        Start work!
      </Button>
    </div>
  )
}

export default Controller;
import React from 'react';

import classes from './Form.module.scss';
import Button from '../Ui/Button/Button';

export default function Form(props) {
  return (
    <div className={classes.Form}>
      <div className={classes.Form__title}>
        Focus time:
      </div>
      <div className={classes.Form__field}>
        <input type="text" placeholder='Focus. default:20'/>
        <input type="text" placeholder='Pause. default:5'/>
        <Button type='general'>Accept</Button>
      </div>
    </div>
  )
}
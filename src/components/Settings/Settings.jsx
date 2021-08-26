import React from 'react';

import classes from './Settings.module.scss';
import Button from '../Ui/Button/Button'

  /**
   * 
   * @param {*} props 
   * @returns 
   * 
   * @Must_Consists
   * 
   * @Configurations 
   * TODO: Focus time / Pause Time (short / long) changer, 
   *
   * 
   */

export default function Settings(props) {
  return (
    <div className={classes.Settings}>
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

    </div>
  )
}
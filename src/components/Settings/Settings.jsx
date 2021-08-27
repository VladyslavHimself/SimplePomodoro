import React from 'react';

import classes from './Settings.module.scss';
import Form from '../Form/Form';

  /**
   * 
   * @param {*} props 
   * @returns 
   * 
   * @Must_Consists
   * 
   * @Configurations 
   * TODO: discompose render to components
   *
   * 
   */

export default function Settings(props) {
  return (
    <div className={classes.Settings}>
        <Form />
    </div>
  )
}
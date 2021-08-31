import React from 'react';

import classes from './Settings.module.scss';
import Form from '../Form/Form';

export default function Settings(props) {
  return (
    <div className={classes.Settings}>
        <Form />
    </div>
  )
}
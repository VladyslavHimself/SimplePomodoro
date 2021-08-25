import React from 'react';

import classes from './NotFound.module.scss';

import Button from '../Ui/Button/Button';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className={classes.NotFound}>
      <div className={classes.NotFound__title}>
        <h2>404</h2>
      </div>
      <hr />
      <div className={classes.NotFound__desc}>
        <h4>Oops...It seems, this page doesn't found!</h4>
      </div>

      <div className={classes.NotFound__button}>
        <NavLink to='/'>
          <Button type='general'>
            Back to safe
          </Button>
        </NavLink>
        
      </div>
      
    </div>
  )
}
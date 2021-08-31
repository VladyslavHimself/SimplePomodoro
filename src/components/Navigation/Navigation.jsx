import React from 'react';

import classes from './Navigation.module.scss';

import { NavLink } from 'react-router-dom';

    // TODO: Make switch burger style 

export default function Navigation(props) {
  
  return (
    <div className={classes.Nav}>
    <div className={classes.Nav__wrapper}>
      <div className="nav__title">Welcome, TokyoShuffle</div>
      <NavLink to={'/settings'}>
        <div className={classes.Burger}>
            <NavLink to='/'>
              <div className={classes.lines}>
                <span />
              </div>
            </NavLink>
            

            {// Alt}
            <NavLink to='/settings'>
              <div className={classes.lines}>
                <span />  
                <span />
                <span />
              </div>
            </NavLink>
          }
        </div>
      </NavLink>
    </div>
  </div>
  )

}
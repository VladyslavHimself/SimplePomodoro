import React from 'react';

import classes from './Navigation.module.scss';

import { NavLink } from 'react-router-dom';

    // TODO: Make switch burger style 

export default function Navigation(props) {
  
  const { isNavOpen } = props


  const changeBurger = () => {
    if (isNavOpen) {
      console.log('Open');
      return (
        <span />
      )
    } else {
      console.log('closed');
      return (
        <React.Fragment>
          <span />
          <span />
          <span />
        </React.Fragment>
      )
    }
  }

  return (
    <div className={classes.Nav}>
    <div className={classes.Nav__wrapper}>
      <div className="nav__title">Welcome, TokyoShuffle</div>
      <NavLink to={'/settings'}>
        <div className={classes.Burger}>
          {changeBurger()}
        </div>
      </NavLink>
    </div>
  </div>
  )

}
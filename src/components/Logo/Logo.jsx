import React from 'react';

import classes from './Logo.module.scss';

const Logo = props => {

  return (
    <div className={classes.Logo}>
      <div className={classes.Logo__heading}>{ props.name }</div>
      <hr className={classes.Logo__line} />
    </div>
  )
}

export default Logo;
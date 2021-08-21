import React from 'react';
import classes from './Button.module.scss';

const Button = props => {
  const cls = [classes.Button];
  props.type === 'general' ? cls.push(classes.general) : cls.push(classes.additional);

  return (
    <div 
      className={cls.join(' ')}
      onClick={ props.onClick }>
        {props.children}
    </div>
    )
}

export default Button;
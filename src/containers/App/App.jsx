import React from 'react';

import classes from './App.module.scss';
import Layout from '../../hoc/Layout';

export default class App extends React.Component {
  
  render() {
    return (
      <Layout>

        <div className={classes.App}>
          <div className={classes.Logo}>
            <div className={classes.Logo__heading}>Pomodoro</div>
            <hr className={classes.Logo__line} />
          </div>

          <div className={classes.Timer}>
            <div className={classes.Timer__display}>
              <span>20:00</span>
            </div>
            <div className={classes.Controller}>
              {/* <div className={classes.Controller__pause}>Pause</div>
              <div className={classes.Controller__resume}>Resume</div> */}
              <div className={classes.Controller__start}>Let's Work</div>
            </div>
          </div>
        </div>
 
      </Layout>
    )
  }
}
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// NOTE components
import classes from './App.module.scss';
import Layout from '../../hoc/Layout';
import Logo from '../../components/Logo/Logo';
import Timer from '../../components/Timer/Timer';
import Settings from '../../components/Settings/Settings';
import Navigation from '../../components/Navigation/Navigation';
import NotFound from '../../components/NotFound/NotFound';

// logic modules
import ServerController from '../../services/ServerController/ServerController';
import Timerr from '../../services/Timer/Timer';

class App extends React.Component {
  
  DATABASE_URL = 'https://pomodoro-11618-default-rtdb.firebaseio.com/quest.json';
    
    // * Statements to convert
    // ! seconds: 1,
    // ! minutes: 0,
    // ! isPaused: false, // true/false if clicked on pause button
    // ! isFocusEnd: false,
    // ! isTimerStarted: false, // true, when click on 'Start timer' button
    // ! isTimerRenewed: false,
    // ! isNavigationToggle: false,

  // * pauseTime()
  // * (async) renewTime()
  // * (async) startBreak()
  // * startTimer()

  // * buttonSwitcher()
  
  render() {
    return (
      <Layout>
        <div className={classes.App}>
          <Navigation />
          <Switch>
            <Route path='/' exact render={
              () => (
                <>
                  <Logo name='Pomodoro' />
                  <Timer />
                </>
              )
            }/>
            <Route path='/settings' exact component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Layout>
    )
  }
}

export default App;
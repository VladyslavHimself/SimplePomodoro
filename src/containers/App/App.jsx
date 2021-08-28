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

import axios from 'axios';

import ServerController from '../../services/ServerController/ServerController';

class App extends React.Component {
  
  server = new ServerController('https://pomodoro-11618-default-rtdb.firebaseio.com/quest.json');

  state = {
      seconds: 0,
      minutes: 30,
      isPaused: false, // true/false if clicked on pause button
      isTimerStarted: false, // true, when click on 'Start timer' button
      isTimerRenewed: false,
      isNavigationToggle: false,
  }

  async componentDidMount() {
    let serverResponse = await this.server.getFocusTime();
    serverResponse ? this.setState({ minutes: serverResponse}) : this.setState({ minutes: 25});
  }

  isTimerFinished = (minutes, seconds) => {
    if (minutes === 0 && seconds === 0) return true;
  }
  // updates seconds & minutes
  timerTicking = (minutes, seconds) => {
    if (seconds <= 0) {
      this.setState({
        seconds: 59,
        minutes: minutes - 1,
      });
    } else {
      this.setState({
          seconds: seconds - 1,
          minutes: minutes,
      });
    }
  }

  pauseTime = () => {
    this.setState({
      isPaused: !this.state.isPaused,
    })
  }

  renewTime = async () => {

    let serverResponse = await this.server.getFocusTime();
    serverResponse 
    ? this.setState({
      seconds: 0,
      minutes: serverResponse,
      isPaused: false,
      isTimerStarted: false,
      isTimerRenewed: true,
    })
    : this.setState({
      seconds: 0,
      minutes: 25,
      isPaused: false,
      isTimerStarted: false,
      isTimerRenewed: true,
    })
  }

  buttonSwitcher = () => {
    if (this.state.isNavigationToggle) {

      this.setState({
        isNavigationToggle: false
      })
    } else {

      this.setState({
        isNavigationToggle: true
      })
    }
  }

  startTimer = () => {
    this.setState({
      isTimerStarted: true,
    });

      let timer = setInterval(() => {
        const { seconds, minutes } = this.state;

         if (this.state.isTimerRenewed) {

           this.setState({
             isTimerRenewed: false,
           })
           clearInterval(timer);
           return;
          //  return;
         }
        
        // NOTE if timer paused - don't tick!
        if (this.state.isPaused) return;

        // NOTE Check if timer is not End;
        if (this.isTimerFinished(minutes, seconds)) {
          this.pauseTime();
          window.alert('Timer is done, you\'re great!');
          this.renewTime();
          return;
        }

        // NOTE start timer ticking
        this.timerTicking(minutes, seconds);
  
      }, 1000);
      
  }

  // TODO: Unstack html to components

  render() {
    return (
          <Layout>
            <div className={classes.App}>
                <Navigation 
                  buttonSwitcher = { this.buttonSwitcher }
                  isNavOpen={this.state.isNavigationToggle}
                  />

                <Switch>
                <Route path='/' exact render={
                () => (
                  <>
                    <Logo name='Pomodoro' />
                    
                    <Timer 
                      onChange   = { this.startTimer }
                      renewTime  = { this.renewTime  }
                      pauseTime  = { this.pauseTime  }
                      timerState = { this.state      }
                    />
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
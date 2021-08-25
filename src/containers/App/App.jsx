import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

// NOTE components
import classes from './App.module.scss';
import Layout from '../../hoc/Layout';
import Logo from '../../components/Logo/Logo';
import Timer from '../../components/Timer/Timer';
import Settings from '../../components/Settings/Settings';
import Navigation from '../../components/Navigation/Navigation';
import NotFound from '../../components/NotFound/NotFound';

class App extends React.Component {
  
  state = {
      seconds: 0,
      minutes: 20,
      isPaused: false, // true/false if clicked on pause button
      isTimerStarted: false, // true, when click on 'Start timer' button
      isTimerRenewed: false,
      isNavigationToggle: false,
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

  renewTime = () => {
    this.setState({
      seconds: 0,
      minutes: 20,
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

    console.log('timer started')
    this.setState({
      isTimerStarted: true,
    });

      let timer = setInterval(() => {
        const { seconds, minutes } = this.state;

         if (this.state.isTimerRenewed) {
            console.log('renewed');
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
    console.log(this.state.isNavigationToggle)
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
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


// !!! DETACHED HEAD GIT COMMIT FOR SAFE BACKUP
class App extends React.Component {
  
  DATABASE_URL = 'https://pomodoro-11618-default-rtdb.firebaseio.com/quest.json';

  state = {
    seconds: 1,
    minutes: 0,
    isPaused: false, // true/false if clicked on pause button
    isFocusEnd: false,
    isTimerStarted: false, // true, when click on 'Start timer' button
    isTimerRenewed: false,
    isNavigationToggle: false,
};

  Server = new ServerController(this.DATABASE_URL);
  Timer = new Timerr(this.state.minutes, this.state.seconds);

  async componentDidMount() {
    let serverResponse = await this.Server.getFocusTime();
    serverResponse ? this.setState({ minutes: serverResponse }) : this.setState({ minutes: this.state.minutes });
  }

  // TODO: Compose methods to abstract Time class
  pauseTime = () => {
    this.setState({
      isPaused: !this.state.isPaused,
    });
  }

  // make function more valiability
  renewTime = async () => {

    let focusTimeFromServer = await this.Server.getFocusTime();

    focusTimeFromServer 
    ? this.setState({
      seconds: 0,
      minutes: focusTimeFromServer,
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

  startBreak = async () => {
    let breakTimeFromServer = await this.Server.getBreakTime();
    
    // * 1. Change time to break; +
    // * 2. change UI to break;

    if (breakTimeFromServer) {
      this.setState({
        isFocusEnd: true,
        minutes: breakTimeFromServer,
      });  
    } else {
      this.setState({
        isFocusEnd: true,
        minutes: 1,
        isPaused: false,
        isTimerStarted: false,
        isTimerRenewed: true,
        
      });


    }
  }

  startTimer = () => {

    // ? Check if timer is already running
    this.setState({
      isTimerStarted: true,
    });

    // TODO: 1.Fix bug with break time button;
    // * 2. Make this function more easier;
    
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
        
        // ? if timer paused - don't tick!
        if (this.state.isPaused) return;

        // ? Check if timer is not End;
        if (this.Timer.isFinished(this.state.minutes, this.state.seconds)) {
          this.pauseTime();
          
          if (!this.state.isFocusEnd) {
            this.startBreak();
            this.setState({
              isFocusEnd: false,
            });
          } else {
            this.renewTime();
          }
          window.alert('Timer is done, you\'re great!');

          return;
        }

        // @tick 
        const timeData = this.Timer.tick(this.state.minutes, this.state.seconds);
      
        this.setState({
          minutes: timeData.minutes,
          seconds: timeData.seconds,
        });

      }, 1000);
      
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
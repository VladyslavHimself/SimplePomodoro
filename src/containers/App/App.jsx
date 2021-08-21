import React from 'react';

import classes from './App.module.scss';
import Layout from '../../hoc/Layout';

import Logo from '../../components/Logo/Logo';
import Timer from '../../components/Timer/Timer'

export default class App extends React.Component {
  
  state = {
    timer: {
      seconds: 0,
      minutes: 20,
      isDone: false,
    }
  }


  
  isTimerFinished = (minutes, seconds) => {
    if (minutes === 0 && seconds === 0) return true;
  }

  timerTicking = (minutes, seconds) => {
    if (seconds <= 0) {
      let newMinutes = minutes - 1;
      let newSeconds = 59;

      this.setState({
        timer: {
          seconds: newSeconds,
          minutes: newMinutes,
        }
      })
    } else {
      let newMinutes = minutes;
      let newSeconds = seconds - 1;
      
      this.setState({
        timer: {
          seconds: newSeconds,
          minutes: newMinutes,
        }
      })
    }
  }

  renewTime = () => {
    this.setState({
      isDone: true,
      timer: {
        minutes: 20,
        seconds: 0,
      }
    })
  }

  pauseTime = () => {
    console.log('I\'m done!');
    this.setState({
      isDone: true,
    })
  }

  startTimer = () => {
    this.setState({
      isDone: false,
    })

    let timer = setInterval(() => {
      const { seconds, minutes } = this.state.timer;
      let isTimerDone = this.isTimerFinished(minutes, seconds);
  
      if (isTimerDone) {
        this.setState({
          isDone: true,
        });
      }

      if (this.state.isDone) {
        clearInterval(timer);
        return;
      }

      this.timerTicking(minutes, seconds);

    }, 1000);
    
  }

  

  render() {
    return (
      <Layout>
        <div className={classes.App}>
          <Logo name='Pomodoro' />
          <Timer 
            time={ this.state.timer }
            onChange = { this.startTimer }
            renewTime = { this.renewTime }
            pauseTime = { this.pauseTime }
          />
        </div>
      </Layout>
    )
  }
}
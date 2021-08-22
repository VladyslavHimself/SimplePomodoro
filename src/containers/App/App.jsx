import React from 'react';

import classes from './App.module.scss';
import Layout from '../../hoc/Layout';

import Logo from '../../components/Logo/Logo';
import Timer from '../../components/Timer/Timer'

export default class App extends React.Component {
  
  state = {
    timer: {
      seconds: 4,
      minutes: 0,
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

  testFunc = () => {
    console.log('22');
    this.setState({
      timer: {
        seconds: 0,
        minutes: 20,
      }
    })
  }

  startTimer = () => {
    
    this.setState({
      isDone: false,
    })

    let timer = setInterval(() => {
      // destructure const
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
          />
        </div>
      </Layout>
    )
  }
}
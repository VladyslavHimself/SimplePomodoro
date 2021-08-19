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
    }
  }

  changeTime = () => {
    
    
    setInterval(() => {

      let { seconds, minutes } = this.state.timer;

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

    }, 1000);

    clearInterval();    
  }



  render() {
    return (
      <Layout>

        <div className={classes.App}>
          <Logo name='Pomodoro' />
          <Timer 
            time={ this.state.timer }
            onChange = { this.changeTime }
          />
        </div>
 
      </Layout>
    )
  }
}
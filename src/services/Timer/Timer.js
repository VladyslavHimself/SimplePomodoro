
class Timer {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  tick = (minutes, seconds) => {
    if (seconds <= 0) {
      return {
        seconds: 59,
        minutes: minutes - 1
      }
    } else {
      return {
        seconds: seconds - 1,
        minutes: minutes,
      }
    }
  }

  isFinished = (minutes, seconds) => {
    console.log(minutes, seconds)
    if (minutes === 0 && seconds === 0) return true;
  }


}

export default Timer;
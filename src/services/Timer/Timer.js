
class Timer {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  tick = (minutes, seconds) => {
  }
}

export default Timer;


// timerTicking = (minutes, seconds) => {
//   if (seconds <= 0) {
//     this.setState({
//       seconds: 59,
//       minutes: minutes - 1,
//     });
//   } else {
//     this.setState({
//         seconds: seconds - 1,
//         minutes: minutes,
//     });
//   }
// }
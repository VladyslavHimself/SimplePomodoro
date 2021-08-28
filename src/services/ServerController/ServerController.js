import axios from 'axios';

class ServerController {
  constructor(url, action) {
    this.url = url;
    this.action = action;
  }

  getFocusTime = async (url) => {

    try {
      const response = await axios.get(this.url);
      return response.data.focusTime;
    } catch (error) {
      console.error('Data cannot be received from the server...');
      return false;
    }
    }

  getBreakTime = async (url) => {
    try {
      const response = await axios.get(this.url);
      return response.data.breakTime;
    } catch (err) {
      console.error('Data cannot be received from the server...');
      return false;
    }
  }
};

export default ServerController;
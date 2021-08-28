import axios from 'axios';

class ServerController {
  constructor(url, action) {
    this.url = url;
    this.action = action;
  }

  getFocusTime = async (url) => {
    try {
      const response = await axios.get(url);

      return response.data.focusTime;
    } catch (err) {
      return false;
    }
  }

  getBreakTime = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.breakTime;
    } catch (err) {
      throw new Error(err);
    }
  }
};

export default ServerController;
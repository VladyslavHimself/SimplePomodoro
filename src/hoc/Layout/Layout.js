import React, { Component } from 'react';
import './Layout.scss';

export default class App extends Component {

  render() {
    return (
      <div className="wrapper"> 
        {this.props.children}
      </div>
    )
  }
}
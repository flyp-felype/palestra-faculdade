import React, { Component } from 'react';
import './App.css';
import MundinhoComponent from './MundinhoComponent';
import Like from './Like';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props)
  }

  state = { Notification: 0 }
  
  LikeNotification = () => {
    this.setState({ Notification: this.state.Notification + 1 })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <MundinhoComponent Notification={this.state.Notification} />
        
        </div>
        
        <div class="Foto">
          <img src={require('./react-js.png')} />
        </div>
        <Footer Notification={this.state.Notification} />
        
        <Like LikeNotification={this.LikeNotification} />
        <div className="Footer">
          <Footer Notification={this.state.Notification} />
        </div>
      </div>
    );
  }
}

export default App;

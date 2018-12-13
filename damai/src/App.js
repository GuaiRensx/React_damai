import React, { Component } from 'react';
import './styles/less/App.less'
import { Home } from './components/pages/Home';
import './icon-font/iconfont.css';
import Axios from 'axios';
//配置baseUrl
Axios.defaults.baseURL='http://localhost:2333'
class App extends Component {
  render() {
    return (
      <div className="App">
     <Home></Home>
      </div>
    );
  }
}

export default App;

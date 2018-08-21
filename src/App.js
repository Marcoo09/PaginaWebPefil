import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './header/header';
import Introduction from './containterIntroduction/introduction/introduction';
import SpotLightContainer from './spotlight/spotlightContainer'
import FinalContainer from './finalContainer/finalContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header name = "Marco Fiorito" title = {"Systems engineering student - ORT University"}/>
        <Introduction/>
        <SpotLightContainer/>
        <FinalContainer/>
      </div>
    );
  }
}

export default App;

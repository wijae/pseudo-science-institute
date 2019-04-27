import React, { Component } from 'react';
import GameUI from './components/GameUI.js';
import GameCore from './components/GameCore.js';

class App extends Component {
  //one-star
    render () {
      return (
        <div>
            <GameCore />
        </div>
      )
    }
}
export default App;
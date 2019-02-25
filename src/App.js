import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import UserBox from './components/UserBox';
import GameTable from './components/GameTable';
import ButtonBox from './components/ButtonBox';

class App extends Component {

  state = {
    gameTable: Array(24).fill('placeholder'),
    user1: 'user1',
    user2: 'user2',
    currentTurn: 'user1'
  }

  handleUsername = (event) => {
    const someId = event.target.id;
    const someVal = event.target.value;
    this.setState((prevState) => {            
      let newState = {
        [someId]: someVal,
        currentTurn: someId==='user1'? someVal : prevState.user1
      }
      return newState;
    }
  );
  }

  //TODO write onUpdate thing to calc winner
  
  handleMove = (event) => {
    const moveID =event.target.id;
        
    this.setState(prevState => {
      const output =  {
        gameTable: [...prevState.gameTable]          
       };
      output.gameTable[moveID]= prevState.currentTurn;
      output.currentTurn =prevState.currentTurn === prevState.user1?prevState.user2:prevState.user1
      return  output;
    });
    

  }

  render() {
    const {gameTable, user1, user2} = this.state;

    return (
      <div className="App">
        <Title/>
        <UserBox handleUsername={this.handleUsername} user1={user1} user2={user2}/>
        <GameTable handleMove={this.handleMove} gameTable={gameTable}/>
        <ButtonBox />
      </div>
    );
  }

}

export default App;

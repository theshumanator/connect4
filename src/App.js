import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import UserBox from './components/UserBox';
import GameTable from './components/GameTable';
import ButtonBox from './components/ButtonBox';

import checkConnect from './utils/index';
import Winner from './components/Winner';

class App extends Component {

  state = {
    gameTable: Array(24).fill('placeholder'),
    user1: 'user1',    
    user2: 'user2',
    currentTurn: 'user1',
    winner: null
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

  handleReset = () => {
    this.setState({
      gameTable: Array(24).fill('placeholder'),
      user1: 'user1',
      user2: 'user2',      
      currentTurn: 'user1',
      winner: null     
    })
  }

  componentDidMount () {
    const localState = JSON.parse(localStorage.getItem('state'));
    this.setState(localState);
  }

  componentDidUpdate () {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  //TODO write onUpdate thing to calc winner
  
  handleMove = (event) => {
    const moveID =event.target.id;
        
    this.setState(prevState => {
      const output =  {
        gameTable: [...prevState.gameTable]          
       };

       //output.gameTable[moveID]= prevState.currentTurn;      
      
       const bool = checkConnect(output.gameTable, prevState.currentTurn, moveID);
       console.log(bool)
       if (bool) {
         console.log('WINNNNNER' + prevState.currentTurn);
         output.winner = prevState.currentTurn;
       }
      
       output.currentTurn =prevState.currentTurn === prevState.user1 ? prevState.user2 : prevState.user1
    

      return  output;
    });
    

  }

  render() {
    const {gameTable, user1, user2, winner} = this.state;

    return (
      <div className="App">
        <Title/>
        <UserBox handleUsername={this.handleUsername} user1={user1} user2={user2}/>
        <GameTable handleMove={this.handleMove} gameTable={gameTable}/>
        <ButtonBox handleReset={this.handleReset} />
        <Winner winner={winner}/>
      </div>
    );
  }

}

export default App;

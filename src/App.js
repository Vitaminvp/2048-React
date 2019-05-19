import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from './Components/Layout';
import Field from './Components/Field';
import ControlPanel from './Components/ControlPanel';
import Button from './Components/Button';
import Score from './Components/Score';
import {
  moveCells,
  directions,
  initCells,
  removeAndIncreaseCells,
  populateField
} from './helpers';

class App extends Component {
  state = this.getNewState();

  mapKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
    KeyW: directions.UP
  };

  newGame = () => {
    this.setState(this.getNewState());
  };

  getNewState() {
    return {
      cells: initCells(),
      score: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress = async event => {
    if (['KeyA', 'KeyS', 'KeyD', 'KeyW'].includes(event.code))
      this.setState(state => ({
        ...state,
        cells: moveCells(state.cells, this.mapKeyCodeToDirection[event.code])
      }));

    await delay(100);
    this.setState(state => ({
      ...state,
      cells: removeAndIncreaseCells(state.cells)
    }));
    this.setState(state => ({
      ...state,
      cells: populateField(state.cells)
    }));
  };

  render() {
    const { cells, score } = this.state;

    return (
      <Layout>
        <H1>2048</H1>
        <ControlPanel>
          <COLLEFT>
            <Button onClick={this.newGame}>New Game</Button>
          </COLLEFT>
          <COLRIGHT>
            <Score title="Score">{score}</Score>
            <Score title="Best">{score}</Score>
          </COLRIGHT>
        </ControlPanel>

        <Field cells={cells} />
      </Layout>
    );
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const H1 = styled.h1`
  position: relative;
  font-size: 80px;
  line-height: 90px;
  color: #776e65;
  font-weight: bold;
  margin: 0;
  display: block;
  float: left;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  ::before {
    content: '';
    position: absolute;
    font-size: 20px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: #bbada0;
    left: 50%;
    white-space: nowrap;
    transform: translateX(-50%);
    opacity: 0.5;
  }
  :hover{
    ::before{
      content: 'Join the numbers and get to the 2048 tile!';
    }
  }
`;

const COLLEFT = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const COLRIGHT = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default App;

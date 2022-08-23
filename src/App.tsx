import React, { useContext } from 'react';
import './App.scss';
import Game from './components/Game';
import Result from './components/Result';
import { StoreContext } from './store.context';
import {observer} from 'mobx-react-lite';
function App() {
  const {quizStore} = useContext (StoreContext);
  return (
    <div className="App">
      {quizStore.step !== quizStore.questions.length
      ? <Game/>
      : <Result/>
      }
    </div>
  );
}

export default observer (App);

import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useState } from 'react'
import {observer} from 'mobx-react-lite'
import { StoreContext } from '../store.context';

interface ResultProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Result = ({...props}:ResultProps) => {
    const {quizStore} = useContext (StoreContext);
  return (
    <div className="result">
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'/>
      <h2>Вы отгадали {quizStore.correct} ответа из {quizStore.questions.length}</h2>
       <a href='/'>
        <button>Попробовать снова</button>
       </a>
    </div>
  )
}

export default observer (Result); 
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useState } from 'react'
import {observer} from 'mobx-react-lite';
import { StoreContext } from '../store.context';
import { v4 as uuidv4 } from 'uuid';
interface GameProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Game = ({...props}:GameProps) => {
  const {quizStore} = useContext (StoreContext);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${quizStore.progress}%` }} className="progress__inner"></div>
      </div>
      <h1>{quizStore.question.title}</h1>
      <ul>
        {quizStore.question.variants.map ((item, num) => (
            <li key={uuidv4()} onClick={() => quizStore.onClickVariant (Number(num))}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default observer (Game); 
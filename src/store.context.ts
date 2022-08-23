import React from "react";
import { QuizStore } from "./store/quiz.store";

interface IStoreContext {
    quizStore: QuizStore;
}

const quizStore = new QuizStore ();


export const StoreContext = React.createContext<IStoreContext> ({
    quizStore,
})
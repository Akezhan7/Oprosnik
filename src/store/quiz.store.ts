import {makeAutoObservable} from 'mobx'
interface QuestionsProps {
    title: string;
    variants: string[];
    correct: number;
}
export class QuizStore {

    questions:QuestionsProps[] = [
        {
          title: 'React - это ... ?',
          variants: ['библиотека', 'фреймворк', 'приложение'],
          correct: 0,
        },
        {
          title: 'Компонент - это ... ',
          variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
          correct: 1,
        },
        {
          title: 'Что такое JSX?',
          variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
          ],
          correct: 2,
        },
    ];

    step = 0;
    question = this.questions[this.step];
    correct = 0;
    progress = Math.round (this.step / this.questions.length * 100);

    constructor () {
        makeAutoObservable (this);
    }

    onClickVariant (index: number) {
        if (index === this.question.correct) {
            this.correct = this.correct + 1;
        }
        this.step = this.step + 1;
        this.question = this.questions[this.step];
        this.progress = Math.round (this.step / this.questions.length * 100);
        
    }

}
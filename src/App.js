import React, { useState } from "react"
import "./styles/index.css"

const questions = [
    {
        title: "Что значит амогус?",
        variants: ['Это значит "среди нас"', 'Что-то из игры, не помню..', 'Красный космонавт r34'],
        correct: 2
    },
    {
        title: "Как зовут розового хаги-ваги?",
        variants: ['Хаги-Ваги', 'Мисисипи', 'Киси-Миси', 'Писи-Киси'],
        correct: 2
    },
    {
        title: "Продолжи песню: 'Хаги-Ваги на запястье, ...'",
        variants: ['Нужны дети в бравл старсе', 'Нужна ***** пощекастей', 'Мишка Фреди без подвала'],
        correct: 0
    },
]

function Result(){
    return(
        <div className="result">
            <img src="https://placepic.ru/wp-content/uploads/2018/12/SHmXxpEHE4Q.jpg" width={'70%'}></img>
            <h2>Вы отгадали 2 ответа из 5</h2>
            <button>Играть снова</button>
        </div>
    )

}

function Game({question, onClickVariant, step}){
    const percent = Math.round((step / questions.length * 100)); 

    return(
        <div> 
            <div className="progress">
                <div style={{ width: `${percent}%`}} className="progress_bar"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => (
                        <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
                    ))
                }
            </ul>
        </div>
    )

}

function App(){
    const[step, setStep] = useState(0)
    const question = questions[step]

    const onClickVariant = (index) => {
        console.log(step, index);
        setStep(step + 1)
    }

    return (
        <div className="App">
            <Game step={step} question={question} onClickVariant={onClickVariant}/>
        </div>
    )

}

export default App;


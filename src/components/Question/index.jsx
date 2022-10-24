import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import React from 'react'

import './styles.css'

export const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

  return (
    <div id='question'>
        <p>Pergunt {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id='options-container'>
            <p>Opções</p>
        </div>
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Question
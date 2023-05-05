import './style.css';
import React from "react";
import Game from "./Game";

export default function App() {
    const [change, setChange] = React.useState(true)

    function changer() {
        setChange(false)
    }

    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=7&type=multiple')
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    }, [])

    const a = questions.length
    
    const qdata = questions.map(item => {
        return (
            <Game
                question = {item.question}
                answer = {item.correct_answer}
                wrongAns = {item.incorrect_answers}
                length = {a}
            />
        )
    })

    function reload(){
        window.location.reload()
    }
    
    return (
        <div className="container">
            {change && <div id = 'intro'>
                <h1 id = 'heading'>Quizical</h1>
                <p id = 'tagline'>work your brains out</p>
                <button onClick = {changer} id = 'start'>Start quiz</button>
            </div>}
            {!change && qdata}
            {!change && <div id = 'rediv'>
                <button onClick = {reload} id = 'newgame'>New Game</button>
            </div>}
        </div>
        
    )
}
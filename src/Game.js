import React from 'react'

export default function Game(props) {
    const [count, setCount] = React.useState(0)
    
    const [active1, setActive1] = React.useState(false);
    const [active2, setActive2] = React.useState(false);
    const [active3, setActive3] = React.useState(false);
    const [active4, setActive4] = React.useState(false);
    
    const randNum = Math.floor(Math.random() * 4)
    let newArr = props.wrongAns
    newArr.push(randNum)

    (!active1 && !active2 && !active3 && !active4) && newArr.splice(randNum, 0, props.answer)

    function refactorString(string){ //to resolve problem in the question 
        const result = string.replaceAll('&#039;',"'")
        const resultNew = result.replaceAll('&quot;', "'")
        const resultnew = resultNew.replaceAll('&rsquo;', "'")
        return(resultnew)
    }
    
    function o1(){
        setActive1(true);
        if(newArr[4] === 0){
            setCount(prevalue => prevalue + 1)
        }else{
            setCount(prevalue => prevalue - 1)
        }
    }

    function o2(){
        setActive2(true);
        if(newArr[4] === 1){
            setCount(prevalue => prevalue + 1)
        }else{
            setCount(prevalue => prevalue - 1)
        }
    }

    function o3(){
        setActive3(true);
        if(newArr[4] === 2){
            setCount(prevalue => prevalue + 1)
        }else{
            setCount(prevalue => prevalue - 1)
        }
    }

    function o4(){
        setActive4(true);
        if(newArr[4] === 3){
            setCount(prevalue => prevalue + 1)
        }else{
            setCount(prevalue => prevalue - 1)
        }
    }

// doubly nested ternary    

    const style1 = {
        backgroundColor: active1 && newArr[4] === 0 ? '#7afa78' : active1 && newArr[4] !== 0 ? 'red' : count === -1 && newArr[4] === 0 ? '#7afa78' : 'white',
        color: active1 && newArr[4] === 0 ? 'white' : active1 && newArr[4] !== 0 ? 'white' : count === -1 && newArr[4] === 0 ? 'white' : 'rgb(98, 98, 98)'
    }

    const style2 = {
        backgroundColor: active2 && newArr[4] === 1 ? '#7afa78' : active2 && newArr[4] !== 1 ? 'red' : count === -1 && newArr[4] === 1 ? '#7afa78' : 'white',
        color: active2 && newArr[4] === 1 ? 'white' : active2 && newArr[4] !== 1 ? 'white' : count === -1 && newArr[4] === 1 ? 'white' : 'rgb(98, 98, 98)' 
    }
    
    const style3 = {
        backgroundColor: active3 && newArr[4] === 2 ? '#7afa78' : active3 && newArr[4] !== 2 ? 'red' : count === -1 && newArr[4] === 2 ? '#7afa78' : 'white',
        color: active3 && newArr[4] === 2 ? 'white' : active3 && newArr[4] !== 2 ? 'white' : count === -1 && newArr[4] === 2 ? 'white' : 'rgb(98, 98, 98)' 
    }

    const style4 = {
        backgroundColor: active4 && newArr[4] === 3 ? '#7afa78' : active4 && newArr[4] !== 3 ? 'red' : count === -1 && newArr[4] === 3 ? '#7afa78' : 'white',
        color: active4 && newArr[4] === 3 ? 'white' : active4 && newArr[4] !== 3 ? 'white' : count === -1 && newArr[4] === 3 ? 'white' : 'rgb(98, 98, 98)' 
    }

    return(
        <div id = 'mainGame'>
            <p id = 'question'>{refactorString(props.question)}</p>
            <div id = 'optionDiv'>
                <button onClick = {o1} style = {style1} id = 'bt1' className = 'options'>{refactorString(newArr[0])}</button>
                <button onClick = {o2} style = {style2} id = 'bt2' className = 'options'>{refactorString(newArr[1])}</button>
                <button onClick = {o3} style = {style3} id = 'bt3' className = 'options'>{refactorString(newArr[2])}</button>
                <button onClick = {o4} style = {style4} id = 'bt4' className = 'options'>{refactorString(newArr[3])}</button>
            </div>
            <hr id = 'line'/>
            {count === 1 && <p id = 'correct'>CORRECT ANSWER</p>}
            {count === -1 && <p id = 'wrong'>INCORRECT ANSWER</p>}
        </div>
    )
}


import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const QuizView = (props) => {
    const questions = props.data;
    console.log(questions);
    let [qu, setq] = useState({});
    let [counter, setCounter] = useState(0);
    let [score, setScore] = useState(0);

    useEffect(()=>{
        setq(questions[counter]);
    },[counter])

    function checkIfCorrect(optionId){
        let selectedItem = {};
        qu.options.forEach((item, index) => {
            if(item.id === optionId){
                selectedItem = item;
            }
        });
        let isCorrect = selectedItem.correct;
        if(isCorrect){
            let i = counter;
            setCounter(i+1);
            setScore(prev=>prev+1);
        }else{
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong answer. Please Try again or share your score on Facebook 😊!'
            })
        }
    };

    function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }
      

    return (
        <>
        <h1>Score - {score}</h1>  
        {
            qu&& 
                <div className="question">
                    <h1>{htmlDecode(qu.title)}</h1>
                    <div className="list">
                        {qu.options && qu.options.map((item,index)=> <div className="item" key={index} onClick={()=>{checkIfCorrect(item.id)}}>{htmlDecode(item.text)}</div>)}
                    </div>
                </div>
            }
        </>    
    );
}

export default QuizView;
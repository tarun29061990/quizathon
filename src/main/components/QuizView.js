import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const QuizView = (props) => {
    const questions = props.data;
    console.log(questions);
    let [qu, setq] = useState({});
    let [counter, setCounter] = useState(0);
    let [score, setScore] = useState(0);
    let [rewardText, setRewardText] = useState("");

    useEffect(()=>{
        
        setRewardText("");
        setq(prev=>questions[counter]);
    },[counter])

    const sleep = m => new Promise(r => setTimeout(r, m))

    async function checkIfCorrect(optionId, domId){
        let ele  = document.getElementById(domId);
        let selectedItem = {};
        qu.options.forEach((item, index) => {
            if(item.id === optionId){
                selectedItem = item;
            }
        });
        let isCorrect = selectedItem.correct;
        
        if(isCorrect){
            ele.style.backgroundColor = 'green';
            setScore(prev=>prev+1);
            setRewardText("Awesome!! Correct Answer 😃")
        }else{
            
            ele.style.backgroundColor = 'red';
            setScore(prev=>prev-1);
            setRewardText("Aww!! Wrong Answer... No worrie Keep going 😊");
        }

        await sleep(1000)

        setCounter(prev=>prev+1);
    };

    function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    return (
        <>
        <h1>Score: {score}</h1>  
        <p className="reward-text">{rewardText}</p>
        {
            qu&& 
                <div key={qu.id} className="question" id={qu.id}>
                    <h1>{htmlDecode(qu.title)}</h1>
                    
                    <div className="list">
                        {qu.options && qu.options.map((item,index)=> <div id={qu.id+"-"+item.id} className="item" key={index} onClick={()=>{checkIfCorrect(item.id, qu.id+"-"+item.id)}}>{htmlDecode(item.text)}</div>)}
                    </div>
                </div>
            }
        </>    
    );
}

export default QuizView;
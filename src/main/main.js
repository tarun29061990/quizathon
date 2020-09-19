import React, { PureComponent, useEffect, useState } from "react";

import {ADD_QUESTIONS, GET_QUESTIONS} from "./service/queries";
import { gql, useMutation, useQuery } from '@apollo/client';
import axios from "axios";
import QuizView from "./components/QuizView";

const Main = ()=>{

    const [
        addQuestions,
        { loading: mutationLoading, error: mutationError },
    ] = useMutation(ADD_QUESTIONS);
    const {loading, error, data: questionbank} = useQuery(GET_QUESTIONS);


    // useEffect(()=>{
    //     const quizQuesURL = "https://opentdb.com/api.php?amount=50&category&type=multiple";
    //     axios.get(quizQuesURL).then((res)=>{
    //         if(res.data && res.data.results.length){
    //             let questions = [];
    //             const results = res.data.results;
    //             for(let i=0;i<results.length; i++){
    //                 let data = results[i];
    //                 let obj = {};
    //                 obj.title = data.question;
    //                 obj.options = data.incorrect_answers.map(item => {return {text:item, "correct": false}});
    //                 obj.options.push({"text":data.correct_answer,"correct":true});
    //                 obj.category = data.category;
    //                 obj.type = data.type;

    //                 questions.push(obj);
    //             }
    //             // setQuestions(questions);
    //             console.log(questions);
    //             addQuestions({variables: {input: questions}})
    //         }
            
    //     });
    // },[]);

    // useMutation({variables: {input: questions}});
    
    if(loading){
        return <div>Loading. ... </div>
    }else{
        
        return(
            <div className="container">
                {questionbank && <QuizView data={questionbank.queryQuestion}></QuizView>}
                
            </div>
        );
    }
    
}

export default Main;
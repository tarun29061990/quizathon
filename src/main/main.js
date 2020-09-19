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
            <div class="container">
                {questionbank && <QuizView data={questionbank.queryQuestion}></QuizView>}
                <div class="fb-share-button" data-href="http://curioustechie.in" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcurioustechie.in%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
            </div>
        );
    }
    
}

export default Main;
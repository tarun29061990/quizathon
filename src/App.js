import React from 'react';

import './App.css';
import Main from "./main/main";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import fb from "./main/assets/facebook-square.svg";
import insta from "./main/assets/instagram-square.svg";


const client = new ApolloClient({
  uri: 'https://callous-holiday.us-west-2.aws.cloud.dgraph.io/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <ApolloProvider client={client}>
          <Main></Main>
          
        </ApolloProvider>
        
      </header>

      <footer>
        <p>Brought to you by <a href="https://www.facebook.com/quizkhazana">Quiz Khazana</a></p>

        <p>Please Follow Quiz Khazana on <a target="_blank" href="https://www.instagram.com/quiz_khazana/"><img src={insta} /></a> and 
          <a target="_blank" href="https://www.facebook.com/quizkhazana"><img src={fb} /></a>
        </p>
       
      </footer>
    </div>
  );
}

export default App;

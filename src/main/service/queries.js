
import { gql } from '@apollo/client';

export const ADD_QUESTIONS = gql`
mutation MyMutation($input:[AddQuestionInput!]!) {
addQuestion(input: $input) {
    question {
    id
    title
    options {
        id
        text
    }
    }
}
}
`;

export const GET_QUESTIONS = gql`
query MyQuery {
    queryQuestion {
      id
      title
      type
      options {
        id
        text
        correct
      }
    }
  }
`;  
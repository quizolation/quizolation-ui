import {getRequest, postRequest} from "../helpers/apiHelpers";

const createQuiz = quiz => (
  postRequest('quizzes', {
    body: JSON.stringify(quiz)
  })
);

const getQuiz = quizId => (
  getRequest(`/quizzes/${quizId}`)
);

const getQuizzes = () => (
  getRequest('/quizzes')
);

const updateQuiz = (quizId, quiz) => (
  postRequest(`/quizzes/${quizId}`, {
    body: JSON.stringify(quiz)
  })
);

const deleteQuiz = quizId => (
  getRequest(`/quizzes/${quizId}`)
);

export {createQuiz, getQuiz, getQuizzes, updateQuiz, deleteQuiz};

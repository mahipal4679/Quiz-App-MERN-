
const Quiz =require('./models/quiz')
const db =require('./db');

const quizData = [
  {
    question: "Javascript is an _______ language?",
    options: ["Object-Oriented", "object-Based", "Procedural", "None Of the above"],
    answer: "Object-Oriented",
  },
  {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    options: ["Var", "Let", "Const", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: ["Throw an error", "Ignores the statement", "Gives the warning", "None of the above"],
    answer: "Ignores the statement",
  },
  { question: "Which of the following are examples of node modules?",
    options: ["Express", "Body-Parser", "Socket.io", "All of the above"],
    answer: "All of the above",

  },
  {
    question: "Node.js is written in which language?",
     options: ["C++", "Java", "Javascript", "C"],
      answer: "Javascript",
  },
  { question: "To include the HTTP server in the node module, what function do we use?",
     options: ["get()", "require()", "createServer()", "All of the above"],
      answer: "require()",

}
];

Quiz.insertMany(quizData)
  .then(() => console.log("Quiz questions added to MongoDB"))
  .catch((err) => console.log(err));

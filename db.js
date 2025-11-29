export const questions = [
  {
    title: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", isCorrect: true },
      { text: "Data Object Manager", isCorrect: false },
      { text: "Document Oriented Module", isCorrect: false },
      { text: "Dynamic Object Map", isCorrect: false },
    ],
    explanation:
      "DOM stands for Document Object Model — a tree-like representation of the HTML document.",
  },
  {
    title:
      "Which keyword is used to declare a constant variable in JavaScript?",
    answers: [
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: false },
      { text: "const", isCorrect: true },
      { text: "static", isCorrect: false },
    ],
    explanation:
      "Use 'const' to declare a variable whose binding cannot be reassigned.",
  },
  {
    title: "What is the result of typeof null in JavaScript?",
    answers: [
      { text: '"null"', isCorrect: false },
      { text: '"object"', isCorrect: true },
      { text: '"undefined"', isCorrect: false },
      { text: '"number"', isCorrect: false },
    ],
    explanation:
      "typeof null returns 'object' — this is a long-standing quirk of JavaScript.",
  },
  {
    title: "Which array method adds a new element to the end of an array?",
    answers: [
      { text: "unshift()", isCorrect: false },
      { text: "push()", isCorrect: true },
      { text: "pop()", isCorrect: false },
      { text: "shift()", isCorrect: false },
    ],
    explanation:
      "push() adds one or more elements to the end of an array and returns the new length.",
  },
  {
    title: "Which operator checks both value and type for equality?",
    answers: [
      { text: "==", isCorrect: false },
      { text: "=", isCorrect: false },
      { text: "===", isCorrect: true },
      { text: "!=", isCorrect: false },
    ],
    explanation:
      "The '===' operator is strict equality: it compares both value and type.",
  },
  {
    title:
      "Where is it usually best to place a <script> tag for performance in a simple HTML page?",
    answers: [
      { text: "At the very top of the <head>", isCorrect: false },
      { text: "Right after the opening <body> tag", isCorrect: false },
      { text: "Before the closing </body> tag", isCorrect: true },
      { text: "It does not matter at all", isCorrect: false },
    ],
    explanation:
      "Placing scripts before </body> lets the browser load and render HTML first, then run JavaScript.",
  },
  {
    title: "What does event.preventDefault() do in an event handler?",
    answers: [
      {
        text: "Stops the page from reloading forever",
        isCorrect: false,
      },
      {
        text: "Stops the event from triggering on other elements",
        isCorrect: false,
      },
      {
        text: "Prevents the browser's default action for that event",
        isCorrect: true,
      },
      {
        text: "Closes the current browser tab",
        isCorrect: false,
      },
    ],
    explanation:
      "event.preventDefault() cancels the browser's default behavior, e.g. form submit or link navigation.",
  },
  {
    title:
      "Which method selects the first element that matches a CSS selector?",
    answers: [
      { text: "document.getElementById()", isCorrect: false },
      { text: "document.querySelector()", isCorrect: true },
      { text: "document.getElementsByClassName()", isCorrect: false },
      { text: "document.queryAll()", isCorrect: false },
    ],
    explanation:
      "document.querySelector() returns the first element that matches the given CSS selector string.",
  },
  {
    title:
      "What is the default value of a variable declared with let but not initialized?",
    answers: [
      { text: "null", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "undefined", isCorrect: true },
      { text: '"empty"', isCorrect: false },
    ],
    explanation:
      "A declared but uninitialized variable (let or var) has the value undefined.",
  },
  {
    title: "What does JSON stand for?",
    answers: [
      { text: "Java Source Object Notation", isCorrect: false },
      { text: "JavaScript Object Notation", isCorrect: true },
      { text: "Java Serialized Object Network", isCorrect: false },
      { text: "Joined Script Object Node", isCorrect: false },
    ],
    explanation:
      "JSON stands for JavaScript Object Notation — a lightweight data format based on JS object syntax.",
  },
];

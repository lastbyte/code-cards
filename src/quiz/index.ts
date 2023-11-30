import { TQuestion } from 'app/src';

const questions: TQuestion[] = [{
  name: 'question_1',
  index: 1,
  question: "What's the output?",
  options: {
    A: 'Lydia and undefined',
    B: 'Lydia and ReferenceError',
    C: 'ReferenceError and 21',
    D: 'undefined and ReferenceError',
  },
  snippets: [
    {
      code: "\nfunction sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();",
    },
  ],
  answer: {
    value: 'D',
    explanation: "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.\n\nVariables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.",
  },
}, {
  name: 'question_2',
  index: 2,
  question: "What's the output?",
  options: {
    A: '0 1 2 and 0 1 2',
    B: '0 1 2 and 3 3 3',
    C: '3 3 3 and 0 1 2',
  },
  snippets: [
    {
      code: '\nfor (var i = 0; i < 3; i++) {\n'
        + '  setTimeout(() => console.log(i), 1);\n'
        + '}\n'
        + '\n'
        + 'for (let i = 0; i < 3; i++) {\n'
        + '  setTimeout(() => console.log(i), 1);\n'
        + '}',
    },
  ],
  answer: {
    value: 'C',
    explanation: 'Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.\n'
      + '\n'
      + 'In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.',
  },
}, {
  name: 'question_3',
  index: 3,
  question: "What's the output?",
  options: {
    A: '20 and 62.83185307179586',
    B: '20 and NaN',
    C: '20 and 63',
    D: 'NaN and 63',
  },
  snippets: [
    {
      code: '\nconst shape = {\n'
        + '  radius: 10,\n'
        + '  diameter() {\n'
        + '    return this.radius * 2;\n'
        + '  },\n'
        + '  perimeter: () => 2 * Math.PI * this.radius,\n'
        + '};\n'
        + '\n'
        + 'console.log(shape.diameter());\n'
        + 'console.log(shape.perimeter());',
    },
  ],
  answer: {
    value: 'B',
    explanation: 'Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.\n'
      + '\n'
      + "With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n"
      + '\n'
      + 'There is no value radius on that object, which returns NaN.',
  },
}, {
  name: 'question_4',
  index: 4,
  question: "What's the output?",
  options: {
    A: 'Lydia and undefined',
    B: 'Lydia and ReferenceError',
    C: 'ReferenceError and 21',
    D: 'undefined and ReferenceError',
  },
  snippets: [
    {
      code: "\nfunction sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();",
    },
  ],
  answer: {
    value: 'D',
    explanation: "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.\n\nVariables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.",
  },
}, {
  name: 'question_5',
  index: 5,
  question: "What's the output?",
  options: {
    A: '`mouse.bird.size` is not valid',
    B: '`mouse[bird.size]` is not valid',
    C: '`mouse[bird["size"]]` is not valid',
    D: 'All of them are valid',
  },
  snippets: [
    {
      code: '\nconst bird = {\n'
        + "  size: 'small',\n"
        + '};\n'
        + '\n'
        + 'const mouse = {\n'
        + "  name: 'Mickey',\n"
        + '  small: true,\n'
        + '};',
    },
  ],
  answer: {
    value: 'A',
    explanation: "In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.\n"
      + '\n'
      + 'JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.\n'
      + '\n'
      + '`mouse[bird.size]`: First it evaluates `bird.size`, which is `"small"`. `mouse["small"]` returns `true`\n'
      + '\n'
      + "However, with dot notation, this doesn't happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we're actually asking `undefined.size`. This isn't valid, and will throw an error similar to `Cannot read property \"size\" of undefined`.\n",
  },
}];

export default questions;

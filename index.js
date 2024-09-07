import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "Which command is used to compile a TypeScript file?",
        choices: ["tsc", "ts", "compile"]
    },
    {
        name: "Question_2",
        type: "list",
        message: "Which keyword is used to define an interface in TypeScript?",
        choices: ["interface", "type", "class"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "Which access modifier makes a class member accessible only within the class itself?",
        choices: ["public", "protected", "private"]
    },
    {
        name: "Question_4",
        type: "list",
        message: "Which keyword is used to access a superclass's properties and methods in TypeScript?",
        choices: ["base", "super", "parents"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "Which of the following keywords is used to define a module in TypeScript?",
        choices: ["module", "namespace", "package"]
    },
]);
let score = 0;
switch (quiz.Question_1) {
    case "tsc":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.Question_2) {
    case "interface":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.Question_3) {
    case "private":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.Question_4) {
    case "super":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.Question_5) {
    case "namespace":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Your score is ${score}`);

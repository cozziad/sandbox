//process.stdout.write("hello ");
//process.stdout.write("world \n\n ");

const questions = [
    "What is your name?",
    "What would you prefer to be doing?",
    "Fave programming lang?"
]

const ask = (i = 0) => {
    process.stdout.write(`${questions[i]}`);
    process.stdout.write(` > `);
}

ask(0);

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    }
    else {
        console.log(answers);
        process.exit();
    }
})



//console.log(process.pid);
//console.log(process.versions.node);
//console.log(process.argv);

//const [, , FN, LN] = process.argv;

//console.log(`Your first name is ${FN} and your last name is ${LN}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`User: ${user}, greeting: ${greeting}`);

console.log("Hello From VS Code!")

const userName = 'Antonije';
const isStudent = true;
let city;
const selectedCourse = null;

let score = 20;

console.log(userName)
console.log(score)

console.log(typeof userName)
console.log(typeof isStudent)
console.log(typeof city)
console.log(typeof selectedCourse)
console.log(typeof score)

console.log(score + 5)
console.log(score - 5)
console.log(score * 2)
console.log(score / 2)

console.log(score > 10)
console.log(score < 10)
console.log(score >= 20)
console.log(score <= 20)

console.log(score === 20)
console.log(score === "20")

console.log(score >= 18 && isStudent);
console.log(score >= 18 || isStudent);
console.log(!isStudent)

let age = 16;
if(age < 18){
    console.log("You are an child.");
}else if(age < 18){
    console.log("You are a teenager.");
}else{
    console.log("You are an adult.");
}


function greet(name){
return `Hello, ${name}!`;
}

const message = greet('Vojin');
console.log(message);


function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

const total = add(3, 5);
console.log(total);


const add2 = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
}

const total2 = add2(5, 10);
console.log(total2);


const languages = ['HTML', 'CSS', 'JavaScript'];

console.log(languages[0]);
console.log(languages[2]);

languages[1] = 'CSS3';
console.log(languages);

console.log(languages.length);

languages.push('React');
console.log(languages);

const removedLanguage = languages.pop();
console.log(removedLanguage);
console.log(languages);

console.log("For");
for(let i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

console.log("ForEach");
languages.forEach(function (language){
    console.log(language);
});


const user = {
    name: 'John',
    age: 25,
    greet(){
        console.log(`Hello, my name is ${this.name}. `);
    },
};

console.log(user.name);
console.log(user['age']);

user.age = 26;
console.log(user.age);

user.greet();

console.log(user);

const heading = document.querySelector('h1');
const poruka = document.getElementById('message');
heading.textContent = 'JavaScript is working!';
poruka.textContent = 'The DOM has been updated.';

heading.style.color = 'royalblue';
poruka.style.backgroundColor = '#f0f0f0';


const button = document.getElementById('action-button');

button.addEventListener('click', function (){
    console.log('The button was clicked and Git makes changes easy to track.');
    poruka.textContent = 'The button was clicked';
});

const countDisplay = document.getElementById('count');

const increaseButton = document.getElementById('increase');

const decreaseButton = document.getElementById('decrease');

const resetButton = document.getElementById('reset');

increaseButton.addEventListener('click', increaseCount);

decreaseButton.addEventListener('click', decreaseCount);

resetButton.addEventListener('click', resetCount);

let count = 0;

function updateDispay(){
    countDisplay.textContent = count;
}

function increaseCount(){
    count++;
    updateDispay();
}

function decreaseCount(){
    count--;
    updateDispay();
}

function resetCount(){
    count = 0;
    updateDispay();
}

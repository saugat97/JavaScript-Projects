/***************function constructor  ***/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){    ///constructor prototype method
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';  // prototype property but this property will be added to all the objects 
 
var john = new Person('John', 1990, 'teacher');       //instanciation 

var saugat = new Person('Saugat', 1996, 'Student');

var mark = new Person('Mark', 1960, 'Retired');

john.calculateAge();
saugat.calculateAge();
mark.calculateAge();

console.log(john.lastName);


/*****    Object.create method     */
 
var personProto = {
    calculateAge: function(){
        console.log(2016- this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


//Object.create also acceptrs second argument

var saugat = Object.create(personProto, {
    name:{ value: 'Saugat'},
    yearOfBirth:{value: '1996'},
    job: {value:'student'}
})




/************* Primitives Vs Object *********/

//Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);     //a=46
console.log(b);   //b = 23


//Objects
var obj1= {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);                   //age = 30
console.log(obj2.age);                  //age = 30


//Function
var age = 22;
var obj = {
    name: 'Saugat',
    city: 'hammond'
};

function change(a,b){
    a = 30;
    b.city = 'New Orleans';
}

change(age, obj);

console.log(age);                       //age = 22
console.log(obj.city);                  //New Orleans




/**** Passing Function as an arguments  *********/

var years = [1996, 1996, 1998, 1997, 1995];


function arrayCalc(arr, fn){                    //  ---> passed a callback function "fn"
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2019 - el;
}

function isFullAge(element){
    return element >= 22;
}

function maxHeartRate(element){
    if (element >= 18 && element <= 81){
        return Math.round(206.9 - (0.67 * element));
    }
    else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge)
var heartRates = arrayCalc(ages, maxHeartRate)   //call back function

console.log(ages);
console.log(fullAges);
console.log(heartRates)



/****** functions returning functions */

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what is UX design?');
        }
    }
    else if (job === 'teacher'){
        return function(name){
            console.log(name + ', what subject do you teach?');
        }
    }
    else {
        return function(name){
            console.log(name + ', Hello! what do you do?');
        }
    }
    
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mike');
designerQuestion('Harry');

interviewQuestion('teacher')('Mark');  //works COOL STUFF

interviewQuestion('Scientist')('Albert');





/*       Immediately Invoked Function Expressions (IIFE)      ******/

//lets say

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


//IIFE style    (function(){})();

(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (luck){
    var score = Math.random() * 10;
    console.log(score >= 5 - luck);
})(5);                                           //pass argument into the function


/*********** Closures ************/

function retirement(retirementAge){
    
    var a = ' years left until retirement';

    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1996);                                   //retirement(66)(1996);  //same
      
var retirementGermany = retirement(65);

var retirementIceland = retirement(67);

retirementUS(1996); 
retirementGermany(1996);
retirementIceland(1996);




// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what is UX design?');
//         }
//     }
//     else if (job === 'teacher'){
//         return function(name){
//             console.log(name + ', what subject do you teach?');
//         }
//     }
//     else {
//         return function(name){
//             console.log(name + ', Hello! what do you do?');
//         }
//     }
    
// }

//using the power of closures

function interviewQuestion(job){
   return function(name){
       if (job === 'designer') {

           console.log(name + ', can you please explain what is UX design?');

       }
       else if (job === 'teacher') {

           console.log(name + ', what subject do you teach?');

       }
       else {

           console.log(name + ', Hello! what do you do?');

       }
   }
}



interviewQuestion('teacher')('Saugat');


/********* Bind Call and apply ***/

var john = {
    name: 'John',
    age: 22,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good '+ timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a '+ this.job + ' and I\'m ' + this.age + ' years old.');
        }
        else if (style === 'friendly'){
            console.log('Whats up peeps! I\'m ' + this.name + ', I\'m a '+ this.job + ' and I\'m ' + this.age + ' years old. Have a good ' + timeOfDay + '.');
        }
    }
}

john.presentation('friendly', 'morning');


var emily = {
    name: 'Emily',
    age: 25,
    job: 'designer'
}

//call method
john.presentation.call(emily, 'friendly', 'afternoon');   //method borrowing 

//apply method  ---> accepts arguemnt as an array

// john.presentation.apply(saugat, 
//     ['friendly', 'afternoon'])                   //doesnot work for this example though as the method called is not in an array


//bind method   //allows us to preset parameters the arguments
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


var years = [1996, 1996, 1998, 1997, 1995];


function arrayCalc(arr, fn){                      
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2019 - el;
}

function isFullAge(limit, element){
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, 
    isFullAge.bind(this, 22));

console.log(ages);  

console.log(fullJapan);


///////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers 
    (each question should have a number)
     (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. 
   The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
   So make sure that all your code is private and doesn't interfere with the other programmers code 
   (Hint: we learned a special technique to do exactly that).
*/



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends 
    (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. 
    In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = 
        function(){
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
        function (ans, callback) {
            
            var sc;

            if (ans === this.correct) {
                console.log('Correct answer!');
                sc = callback(true);
            }
            else {
                console.log('try again!');
                sc = callback(false);
            }
            this.displayScore(sc);
        }
    
    Question.prototype.displayScore =
        function(score){
            console.log('Your Current Score is: '+ score);
            console.log('----------------------------');
        }
        
    var q1 = new Question('Is Javascript the coolest programming language?', ['yes', 'no'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('How do you best describe coding?', ['hard', 'fun', 'boring'], 1);
    
    var questions = [q1, q2, q3];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
    
    var keepScore = score();

    function nextQuestion(){
         
        var random = Math.floor(Math.random() * questions.length);
        questions[random].displayQuestion();
        
        var answer = prompt('Please select the correct answer or "exit" to quit the game.');
        
        if(answer !== 'exit'){
            questions[random]
                .checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();


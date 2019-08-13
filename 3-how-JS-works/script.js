///////////////////////////////////////
// Lecture: Hoisting


// //functions
calculateAge(1997);

function calculateAge (year){
    console.log(2019 - year);
}

var retirement = function(year){
    console.log(65 - (2019 - year));
}
retirement(1996);

//variables

var age = 23;         //declared in global exectuin context
//console.log(age);

function foo() {
    var age = 65;       //declared in exectuin context
    console.log(age);
}
foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second(); 

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
  //  console.log(c);
   console.log(a + d);
  //console.log(a + b + c + d);

}

///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1996);

function calculateAge(year){
    console.log(2019 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1996,
    calculateAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
    
        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.calculateAge();  // calling a function


var Mike = {
    name: 'Mike',
    yearOfBirth: 1997
};


Mike.calculateAge = john.calculateAge;  //method borrowing
Mike.calculateAge();
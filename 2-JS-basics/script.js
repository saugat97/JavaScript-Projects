var MarkMass, MarkHeight, JohnMass, JohnHeight;

MarkMass = 78;      //kg
MarkHeight = 1.69;     //m

JohnMass = 92;      //kg
JohnHeight = 1.95;   //m 

var MarkBMI = MarkMass / (MarkHeight * MarkHeight);
var JohnBMI = JohnMass / (JohnHeight * JohnHeight);

var CompareBMI = MarkBMI > JohnBMI;

console.log('Is Mark\'s BMI higher than John\'s BMI? ' + CompareBMI);


//IF else statements

var Mary1st, Mary2nd, Mary3rd, John1st, John2nd, John3rd, Mike1st, Mike2nd, Mike3rd, AvgJohn, AvgMike, AvgMary;

John1st = 189;
John2nd = 120;
John3rd = 103;
Mike1st = 129;
Mike2nd = 94;
Mike3rd = 123;

Mary1st = 97;
Mary2nd = 134;
Mary3rd = 105;

AvgMary = (Mary1st+Mary2nd+Mary3rd)/3;

AvgJohn = (John1st+John2nd+John3rd)/3;

AvgMike = (Mike1st+Mike2nd+Mike3rd)/3;



if(AvgMike > AvgJohn && AvgMike > AvgMary ){
    console.log('Mike\'s team won by '+AvgMike +' points');
}
else if(AvgJohn > AvgMike && AvgJohn > AvgMary){
    console.log('John\'s team won by '+AvgJohn+' points');
}
else if(AvgMary > AvgMike && AvgMary > AvgJohn){
    console.log('Mary\'s team won by '+AvgMary+' points');
}

else{
     console.log('Its a draw.');
}



// Function

function calculateAge(birthyear){
    return 2019 - birthyear;
}

var ageSaugat = calculateAge(1996);
var ageNish = calculateAge(1997);

console.log(ageSaugat, ageNish);

function yearsuntilRetirement(year, firstName){
   
    var age = calculateAge(year);
    var retirement = 60 - age;
    
    if(retirement > 0){
        console.log(firstName + ' will retire in '+ retirement +' years');
    }
    else {
        console.log(firstName + ' already retired.')
    }
}

yearsuntilRetirement(1996, 'Saugat');
yearsuntilRetirement(1950, 'Yorgan');


//FUNCTION EXPRESSION
// VAR WHATISYOURPROFESSION = FUNCTION(JOB, FIRSTNAME){
//     SWITCH(JOB){
//         CASE 'TEACHER':
//             RETURN FIRSTNAME + ' TEACHES KIDS.';
//         CASE 'DRIVER':
//             RETURN FIRSTNAME + ' DRIVES UBER.';
//         CASE 'DESIGNER':
//             RETURN FIRSTNAME + ' DESIGN HOUSES.';
//         DEFAULT:
//             RETURN FIRSTNAME + ' DOES SOMETHING ELSE.';
//     }
// }

// CONSOLE.LOG(WHATISYOURPROFESSION('TEACHER', 'PAUL'));



//Tip Calculator

function tipCalculator(bill){
    var percent;
    if (bill < 50){
        percent = 20/100;
    }
    else if (bill >= 50 && bill < 200){
        percent = 15/100;
    }
    else{
        percent = 10/100;
    }
    return percent * bill;
}

console.log(tipCalculator(10));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalPrice = [bills[0]+tips[0],
                 bills[1]+tips[1],
                 bills[2]+tips[2]];

console.log(tips, finalPrice);*/

//object and methods


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();

console.log(john);





var Mark = {
    fullName: 'Mark Piper',
    MarkMass: 78,          //kg
    MarkHeight: 1.69,       //m
    calcMarkBMI: function(){
        return this.MarkBMI = this.MarkMass / (this.MarkHeight*this.MarkHeight);
        
    }
};

var John = {
    fullName: 'John Smith',
    JohnMass: 80,
    JohnHeight: 1.95,
    calcJohnBMI: function(){
        return this.JohnBMI = this.JohnMass / (this.JohnHeight*this.JohnHeight);
        
    }
};

if (John.calcJohnBMI() < Mark.calcMarkBMI()){
    console.log(Mark.fullName+' has highest BMI of '+ Mark.MarkBMI);
}

else if (John.JohnBMI > Mark.MarkBMI){
    console.log(John.fullName+ ' has highest BMI of '+ John.JohnBMI);
}
else{
    console.log('Both of them have equal BMI');
}




/*********
*Loops and iteration
**********
*/

//console.log(typeof(false), 'type of false');  


//for loop

for (var i = 1; i < 10 ; i += 2){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false, 9];

for(var i = 0; i < john.length; i++){
    console.log(john[i]);   
}

//while loop
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/


//continue and break statement


var john = ['John', 'Smith', 1990, 'teacher', false, 9];
for(var i = 0; i < john.length; i++){
    
    if (typeof john[i] !== 'string') {
        continue;
    }
    
    if (typeof john[i] !== 'string') continue;
    
    console.log(john[i]);   
}


var john = ['John', 'Smith', 1990, 'teacher', false, 9];
for(var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);   
}


// var john = ['John', 'Smith', 1990, 'teacher', false, 9];
// for(var i = john.length; i >= 0; i--){
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);   
// }


//Challenge

var John = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tips = [];
        this.finalValues = [];
    
        for (var i = 0; i < this.bills.length - 1; i++){
            var percentage;
            var bill = this.bills[i];

            if (bill < 50){
                percentage = (20/100);
            }
            else if (bill >= 50 && bill <= 200){
                percentage = (15/100);
            }
            else {
                percentage = (10/100);
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];
        }
    }
}


//Challenge 2

var Mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTip: function(){
        this.tips = [];
        this.finalValues = [];
    
        for (var i = 0; i < this.bills.length - 1; i++){
            var percentage;
            var bill = this.bills[i];

            if (bill < 100){
                percentage = (20/100);
            }
            else if (bill >= 100 && bill <= 300){
                percentage = (10/100);
            }
            else {
                percentage = (25/100);
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}


John.calcTip();
Mark.calcTip();


John.average = calcAverage(John.tips);
Mark.average = calcAverage(Mark.tips);
console.log(John, Mark);

if (John.average > Mark.average) {
    console.log(John.fullName + '\'s family pays higher tips with average of ' + John.average +' tips');
}
else if (John.average === Mark.average) {
    console.loh('Both family pay equal tips on average');
}
else{
    console.log(Mark.fullName + '\'s family pays higher tips with average of ' + Mark.average +' tips'); 
}



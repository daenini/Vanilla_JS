const a = 10;
const b = 2;
let myName = "daeni";

/* 
const는 constant(상수) 값을 바뀔 수 없음
let은 값을 바꿀 때 씀
var은 옛날에 사용하던 것 이유는 값을 바꾸면 안되는데 선언을 var로 다 해버리면 모르기 때문
*/

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "daeHyeon";
console.log("your new name is "+ myName);

// Boolean --> ture,false

const amIFat = null; // null값을 넣은 상태
let something; // 값을 넣지 않은 상태 undifined
console.log(amIFat , something);

//array 배열
// JS에서는 JAVA처럼 Array arr = new Array() 를 안하고 그냥 const에 []을 넣어주면 됨

const daysOfWeek = ["mon","the","wed","thu","fri","sat"];

// Get Item from Array
console.log(daysOfWeek[2]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

/* Object */
const player = {
    name : "daeni",
    points: 10,
    fat: true
};
console.log(player);
// object에 접근하는 방법
console.log(player.name);

console.log(player);
// const는 값을 변경할 수 없지만 이 경우에는 player값을 바꾼것이 아니라 object값을 바꾸는것이라 가능
player.fat = false;
player.points - player.points + 15;
// object에 추가하는법
player.lastName = "potato";
console.log(player);

/* function */
 function sayHello(nameOfPerson, age){
     console.log("Hello! my name "+ nameOfPerson +"and I'm " + age);
 }

 sayHello("daeni",25);

 function plus(firstNumber,secondNumber){
     console.log(firstNumber + secondNumber);
 }

 plus(10, 12)

 const player2 = {
     name : "daeni",
     sayHello : function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you");
     },
 };
 console.log(player.name);
 player2.sayHello("lynn");

 /* return */
const age = 96;
function calculateKrAge(ageofForeigner){
 return  ageofForeigner + 2;
}

const krAge = calculateKrAge(age);

const calculater = {
    plus : function (a , b) {
        return a + b;
    },
    minus : function (a , b) {
        return a - b;
    },
    times : function (a , b) {
        return a * b;
    },
    divide : function (a , b) {
        return a / b;
    },
    power : function (a , b) {
        return a ** b;
    },
};

const  plusResult = calculater.plus(2,3); //5
const minusResult = calculater.minus(plusResult, 10); //-5
const timesResult = calculater.times(10, minusResult); // -50
const divideResult = calculater.divide(timesResult,plusResult); // -10
const powerResult = calculater.power(divideResult,minusResult); // 0.00009999999



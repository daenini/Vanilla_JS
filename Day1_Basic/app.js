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



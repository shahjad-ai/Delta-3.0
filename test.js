// const max = prompt("Enter The Maximum Number");
// console.log(max);
// const random = Math.ceil(Math.random()*max);
// console.log(random);
// let guess = prompt("Guess the number");
// while(true){
//     if(guess=="quit"){
//         console.log("User Quit");
//         break;
//     }
//     if(guess==random){
//         console.log("You are right! congrats! random number was ",random );
//         break;
//     }
//     else if(guess<random){
//         guess= prompt("your guess was too small. Please try again")
//     }
//     else{
//         guess = prompt("your guess was too large. Please try again");
//     }
// }
// console.log("The dice roll game");
// let a=Math.ceil(Math.random()*6);
// console.log("Your Number is ",a);
// const person={
//     name: "shahjad",
//     age: 19,
//     city: "Luknow"
// }
// let str=["hii", "hello", "by","!"];
// function fun(str){
//     let result="";
//     for(let i=0; i<str.length;i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(fun(str));
// let odd=function(n){
//     console.log(!(n%2 == 0));
// }
// let odd = n => !(n%2==0);

// let even= n => n%2==0;
//  let str="abcdabcdefgggh";
// //    ans="abcdefgh"
//  let ans="";
// function unique(str){
//     for(let i=0; i<str.length; i++){

//     }
// }
// let str="shahjad";
// let ans="";
// for(let i=0; i<str.length; i++){
// let currChar = str[i];
// if(ans.indexOf(currChar)==-1){
//  console.log(ans+=currChar);
// }
// }
// ans="shajd";
// console.log(str.length);
// console.log(ans.indexOf(str[0])==-1);
// console.log(ans.indexOf(str[1])==-1);
// console.log(ans.indexOf(str[2])==-1);
// console.log(ans.indexOf(str[3])==-1);
// console.log(ans.indexOf(str[4])==-1);
// console.log(ans.indexOf(str[5])==-1);
// console.log(ans.indexOf(str[6])==-1);

//Part 7
// const student ={
//     name:"Sharadha",
//     age:23,
//     eng:95,
//     math: 93,
//     phy:97,
//     getAvg(){
//         let avg =(this.eng+this.math+this.phy)/3;
//         console.log(avg);
//     }
// }
// var expect = function(val) {
//     return{
//         toBe: (val2) => {
//             if (val !== val2) throw new Error("Shahjad Ansari");
//         else return true;
//     },
//     notToBe: (val2) =>{
//         if(val === val2) throw new Error("Savej Ali");
//         else return true;       
//     }
//     } 
//Write an arrow function that returns the square of a number 'n';
// let id =setInterval(()=>{
//     console.log("Hello World")
// }, 2000);

// setTimeout(()=>{
//     clearInterval(id);
// console.log("Clear Interval run");
// },10000);



// const arrayAverage=(arr) =>{
//     let total =0;
//     for(number of arr){
//         total+=number;
//     }
//     return total/arr.length;
// };

// let arr=[1,3,4,2,4,2,5];
// console.log(arrayAverage(arr));

//  const isEven =(n)=>{
//     if(n%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }
//  };

 let arr=[10,20,30,40,90,40];
//  let print = function(el){
//     console.log(el);
//  };
// arr.forEach(print);

//   let val=arr.reduce((res,el)=>{
//    console.log(res);
//    return res+el;
// });
//    console.log(val);

// let result = arr.reduce((max,el)=>{
//    if(el>max){
//       return el;
//    }
//    else{
//       return max;
//    }

// });
// console.log(result);

// min=Math.min(...arr);
// console.log(min);
// arr.push(-5);
// console.log(Math.min(...arr));
// some program
// let btn =document.querySelector("button");
// let inp =document.querySelector("input");
// let list =document.querySelector("list");

// btn.addEventListener("click",() => {
//     let item=document.createElement("li");
//     let btn=document.createElement("button");
//     btn.innerText="Delete"; 
//     console.log(inp.value);
//     item.innerText=inp.value;
//     ul.appendChild(item);
//     item.appendChild(btn);
//     inp.value="";
// })
// let ul=document.querySelector("ul");
// ul.addEventListener("click",
//     (event) => {
//         let item=event.target.parentElement;
//         item.remove();
//         // console.log(item);
//         console.log("delete");
//     }
// );


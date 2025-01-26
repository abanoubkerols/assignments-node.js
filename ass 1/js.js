// // ** Create function that return if the number is odd or even 

// function oddOrEven(digit){

//     if(digit%2==0){
//         return 1;
//     }else{
//         return 0;
//     }
// } 
// let x =oddOrEven(1);
// console.log(x);
// __________________________________________________________________________________________


// ** Create function that returns the multiplication table for sepcific number 

// function multiplication (input){
//      for (let i=1; i <= input; i++) {
//             console.log(input + " * "+ i +" = ",input*i)
// }
// }
// multiplication(10);

// __________________________________________________________________________________________

// **Create a function that returns the indeices of the two number in array which their summation equal to the total_number variable 
//  Ex:
// Array =[1,2,3,4,5,6]
// Total_number = 10 
// Output = [3,5] because 4+6 = 10 

// function array(){
//     let arr =[1,2,3,4,5,6];

//     for(let i=0;i<5;i++){
//         for(let j=i;j<5;j++){
//          if(arr[i]+ arr[j+1] == 10){
//             console.log("[", i ,"]" ,"[",j+1,"]")
//          }
//         }
// }
// }
// array();




// __________________________________________________________________________________________


// **Create a function that returns true if the first array can be nested inside the second array 

// Arr1 can be nested in Arr2 if:
// 1- arr1’s min is greater than arr2’s min
// 2- arr1’s max is less than arr2’s max 



// function canNest(arr1, arr2) {
//     return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
// }

// let arr1=[1,2];
// let arr2=[0,4]
//     let x =canNest(arr1, arr2);
//     console.log(x)

// __________________________________________________________________________________________


// ** what is the output of And explian your answer
// console.log("A" - "B" + 3 );

//  output is   NaN     because javascript have  implicity conversion  for numbers "A" and "B" not a number


// console.log("A" - "B" + "3");

// //  output is    NaN3    as string   because javascript have  implicity conversion  for numbers
//  "A" and "B" not a number but "3" string so javascript concatinat with 3  


// __________________________________________________________________________________________


// ** what is the output of 
// Console.log( [ ]  == [ ] )
// Console.log( { } == { } )
// And explain your answer

//  undefined   ==> because the array and object not declared  and  
//   false      ==> different address .


// __________________________________________________________________________________________

// ** what is the output of this code with explaination

// function main() {
//   console.log("A");
//   setTimeout(function print() {
//     console.log("B");
//   }, 0);
//   console.log("C");
// }
// main();


// output is 

//       A
//       C
//       B
// because  serTimeout is Asynchronous function   .     




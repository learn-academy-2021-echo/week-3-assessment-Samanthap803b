// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//Psuedo code: what im going to do first is that i have to "describe" and add my function.
//After is the "it" or test and here I write what i want in return and what i want is an array withthe lengthof the given variable in Fibonacci sequence.

 describe("fibonacciArr", () => {
  it("return an array with the length of the given variable in Fibonacci sequence", () =>{
   expect(fibSeq(6)).toEqual([1,1,2,3,5,8]);
   expect(fibSeq(10)).toEqual([1,1,2,3,5,8,13,21,34,55]);
   })
 })
// // My test fail because my input is not defined so now i have to make tos test pass, what im going to do first is that i have to declare a variable named input.
// //What i have to do next is create a for loop to make it go arounf the Fibonacci sequence to loop around the lengthof the array. I want the first length at 1 and 1.
// // I want to add the number to the next 2 numbers.
//Firts im going to declare my variable input
// // b) Create the function that makes the test pass.
 const fibSeq = (array) => {
   let first = [1,1]
   for(let i=2; i<array; i++){
     first.push((first[(first.length -1)]) + (first[(first.length -2)]))
   }
   return first
 }
// Its green yay!!!

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// First im going to start with describe and what im goin to do there is that im going to write a string with the functiothat i want.
 var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
 var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

   describe(`justOddNum`, () => {
    it("filter the odd numbers from array into a new one and put them from smalles to greatest", () =>{
      expect(justOddNum(fullArr1)).toEqual([-9,7,9,199])
      expect(justOddNum(fullArr2)).toEqual([-823,7,23])
    })
   })
  // Fail :( now i have to create a function to make the test pass
// b) Create the function that makes the test pass.
   // const justOddNum = (array) => {
   //  let newArr =[]
   //  for (let i=0; i<array.length; i++){
   //   if(array[i] % 2 !== 0){
   //     newArr.push(array[i])
   //   } else if(array[i] !== typeof(string)){
   //
   //   }
   //  }
// return newArr...
//
//   }
// I try to do a for loop and i cant make it work.
// After asking for help I try something else I am going to start declaring my variable justOddNum so its define.
// after that I need another variable and here im going to filter through the values in my array.
//I only want to return odd numbers so i want anything but a number divided in 0 to get my odd numbers.
//in my return im going to use .sort and i want to tell my function to sort the numb in ascending order.

 const justOddNum = (array) => {

     let oddNumbOnly = array.filter(value =>
     typeof value === "number" && value % 2 !==0)
     return oddNumbOnly.sort((a,b)=>a-b)
 }
// My test pass

// console.log(justOddNum(fullArr1))
// console.log(justOddNum(fullArr2))

// Expected output: [-9, 7, 9, 199]
// Expected output: [-823, 7, 23]

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
 // Psuedo code: Im going to start with "describe" one more i want to write my function addNumArr.
//In my "it" i want to write what i want in return  i want my function to do is to add the first value to the next and so on.
//After I will write my expect.
 var numbersToAdd1 = [2, 4, 45, 9]
 // Excpected output: [2, 6, 51, 60]
 var numbersToAdd2 = [0, 7, -8, 12]
 // Expected output: [0, 7, -1, 11]
 var numbersToAdd3 = []
 // Expected output: []

 describe(`addNumArr`, () => {
  it("return an array  with the addition of the values from the padt value i a sequence", () => {
    expect(addNumArr(numbersToAdd1)).toEqual([2,6,51,60])
    expect(addNumArr(numbersToAdd2)).toEqual([0,7,-1,11])
  })
 })
// RED my test fail.
// My next step is make it pass, i goint to declare my variable.
//Im going to use .map() because i want to create a new array.
//I want to use the addition assigment operator to add the value of my last value to the next one.
// b) Create the function that makes the test pass.

 const addNumArr = (array) => {
   let start = 0
   return array.map(value => {
     return(start += value)
   })
 }
 //Green yayy!!!
 //console.log(addNumArr(numbersToAdd1));
 //console.log(addNumArr(numbersToAdd2));
 //console.log(addNumArr(numbersToAdd3));

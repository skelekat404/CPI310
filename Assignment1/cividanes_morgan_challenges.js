/*
Author: Morgan Cividanes    
Date: 10/02/2020
Description: This assignment will put you through the paces of solving some problems with
JavaScript. There will be several small challenges that you can solve.
*/

//PART ONE
//CHALLENGE 1 - TOGGLE STRING CASE
function ToggleString(s)
{
    var temp ='';
    var str = "";
    for(var i = 0; i <= s.length; i++)
    {
        //this will set temp to the char at the for loops value
        temp = s.charAt(i);
        //checking if temp now is equal to it set to upper case
        if(temp == temp.toUpperCase())
        {
            //changing temp to lowercase and adding it to the new string
            str = str + temp.toLowerCase();
        }
        else
        {
            //changing temp to uppercase and adding it to the new string
            str = str + temp.toUpperCase();
        }
        
    }
    return str;
}
//TEST CASES
console.log("Toggle String");
var result = ToggleString("HeLoL")
console.log("HeLoL ==> " + result);
var result = ToggleString("This is A Test");
console.log("This is A Test ==> " + result);
console.log("--------------------------------------------");
//CHALLENGE 2 - FIBONACCI
function FibonacciMaker(n)
{
    var a = [];
    //made an array of a good number of fibonacci numbers
    var fib = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
    //any value below or 0 will just be empty
    if(n <= 0)
    {
        a = [];
        return "[]";
    }
    else
    {
        for(var i = 0; i < n; i++)
        {
            //these if's are used for proper formatting
            if( i == (n - 1))
            { 
                //add the ith number in the fib sequence (this will also be the last one so no comme)
                a += fib[i];
            }
            else{
                a += fib[i] + ",";
            }
           
        }
        //returning the stored a array filled with the input amount of fib numbers
        return "[" + a + "]";
    }
}
//TEST CASES
console.log("Fibonacci");
var result = FibonacciMaker(0);
console.log("0 " + result);
var result = FibonacciMaker(1);
console.log("1 " + result);
var result = FibonacciMaker(2);
console.log("2 " + result);
var result = FibonacciMaker(5);
console.log("5 " + result);
var result = FibonacciMaker(10);
console.log("10 " + result);
console.log("--------------------------------------------");
//PART 2
//CHALLENGE 1 - 2D ARRAY MAKER
function Make2D(rows, cols)
{
    //rows
    for(var i = 0; i < rows; i++)
    {
        var a = new Array(rows);
        
        for(var i = 0; i < rows; i++)
        {
            a[i] = new Array(cols);
            //columns
            for(var j = 0; j < cols; j++)
            {
                //setting a at the value of i + j
                a[i][j];
            }
        }          
    }
    return a;
}
//TEST CASES
console.log("Make2D 10x10");
var testArray = Make2D(10,10);
console.log(testArray);
console.log("--------------------------------------------");
//CHALLENGE 2 - FILL 2D ARRAY
// function Fill2D(testArray, value)
// {
//     testArray.fill(value,0);
    
// }
function Fill2D(testArray,val)
{
    //return testArray[0].length;
    //same logic as before
    for(var i = 0; i < testArray.length; i++)
      {
          var a = new Array(testArray.length);
          for(var i = 0; i < testArray.length; i++)
          {
              a[i] = new Array(testArray[0].length);
              for(var j = 0; j < testArray[0].length; j++)
              {
                  //setting a at the value of i + j equal to val which is our fill value
                  a[i][j] = val;
              }
          }          
      }
      return a;
}
//TEST CASES
console.log("Fill2D testArray with 'bob'");
var testArray2 = Fill2D(testArray,'bob');
console.log(testArray2);
console.log("--------------------------------------------");
//CHALLENGE 3 - MAKE 2D ARRAY
function Init2D(w,h,val)
{
    //calling Make2D to create an array with width and height
    var testArray = Make2D(w,h);
    //using Fill2D to use testArray and fill it with value
    return Fill2D(testArray,val);
}
//TEST CASES
var testArray3 = Init2D(3,6,2);
console.log("init2D 6 x 3 with 2")
console.log(testArray3);
console.log("--------------------------------------------");
//CHALLENGE 4 - RANDOM INTEGER IN RANGE
function IntRandRange(min,max)
{
    //using Math.random to call a random value from min and max, then using Math.floor in order to floor it down to the nearest whole integer
    //I use this in CPI101 and i realized it would work here
    return Math.floor(Math.random(min) * max);
}
//TEST CASES USING A FOR LOOP LIKE IN ASSIGNMENT DOC
console.log("Random numbers: 10 loops");
for(var i = 0; i < 10; i++)
{
        var ival = IntRandRange(1,100);
        console.log("Range 1 - 100: " + ival);
}
console.log("--------------------------------------------");
//CHALLENGE 5 - RANDOM INT 2D ARRAY
//ATTEMPT 1 DID WRONG THIGN
// function Rand2D(x,y,min,max){
//     var z = IntRandRange(min,max)
//     return twoD = Init2D(x,y,z);
//   }
//ATTEMPT 2 WORKED
function Rand2D(w,h,min,max)
{
    //making a new array with width and height using Make2D
    var a = Make2D(w,h);
    for(var i = 0; i < w; i++)
    {
        for(var j = 0; j < h; j++)
        {
            //setting a at the value of i + j equal to IntRandRange(min,max) which uses our random function to create random values at each location
            a[i][j] = IntRandRange(min,max);
        }
    }
    return a;
  }
  //TEST CASES
  console.log("Range2D -- 10x7 range: 1 - 50");
  var rand2D = Rand2D(7,10,50,150);
  console.log( rand2D);

//   module.exports = { ToggleString, FibonacciMaker, Make2D, Fill2D, Rand2D, IntRandRange, Init2D };

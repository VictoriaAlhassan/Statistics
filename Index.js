let arr = [2, 4, 8, 8,9,8, 4, 9];
let sum = 0;
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(`The sum of all element in this array is ${result}`);

let meanValue = result / 2;
console.log(`The mean value of this array is ${meanValue}`);

const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
console.log(`The median value in this array is ${median(arr)} `);

function getMode(arr){
    const obj = {};
    arr.forEach(number => {
     if(!obj[number]){
        obj[number] = 1;
     } else{
        obj[number] +=1;
     }   
    })

let highestValue = 0;
let highestValueKey = -Infinity;

  for(let key in obj){
    const value = obj[key];
    if(value > highestValue){
        highestValue = value;
        highestValueKey = key;
    }
  }
  return Number(highestValueKey);
} console.log(`The mode value in this array is ${getMode(arr)}`)

function getRootMeanSquare(arr){
    let Squares = arr.map((val) => (val*val));
    let Sum = Squares.reduce((acum, val) => (acum + val));
    let meanSquare = Sum/arr.length;
    let rootMeanSquare = Math.sqrt(meanSquare);

    return rootMeanSquare;
 }
    console.log(`The Root Mean Square in this array is ${getRootMeanSquare(arr)}`);

    function getProduct(arr){
        let total = 1
        for(i = 0; i < arr.length;i++){
            total *= arr[i];
         }
         return total;
    }console.log(`The product of all elements in this array is ${getProduct(arr)}`);

    function getProductDividedByFactorial(arr){
        let total = 1
        for(i = 0; i < arr.length;i++){
            total *= arr[i];
         }
        //  console.log(total);

        let num = arr.length;
          var result = num;
          if (num === 0 || num === 1) 
                return 1; 
          while(num > 1){
            result = result * num;
            num--
         }
  
        let = productDividedByFactorial = total / result ;
         return productDividedByFactorial; 

          
         
    }console.log(`The result of dividing the product of all elements by the
factorial of the number of elements is ${getProductDividedByFactorial(arr)}`);
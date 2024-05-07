
let a;
let b;
let x;

const divide = function(a, b){
    return (a / b);
}
  
const square = (x) => x * x;
square(x, x);


const add = (a, b) => {
    return (a + b);
}


//--- example console logging function results ---/
const result = divide(6, 2);
console.log('divide:', result);


const result2 = square(5);
console.log('square:', result2);

const result3 = add(8, 10);
console.log('add:', result3);
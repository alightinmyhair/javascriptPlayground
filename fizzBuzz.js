//Create a program that will print all numbers from 1 to 100

//For numbers divisible by 3, print "Fizz" instead of the number
//For number divisible by 5, print "Buzz"

//Once that is working, print "FizzBuzz" is the number is divisible by 3 & 5

for (let i = 0; i < 101; i++) {
    if ( i % 3 == 0) {
        console.log('Fizz', i);
    } else if ( i % 5 ==0 ) {
        console.log('Buzz', i);
    } else {
        console.log('FizzBuzz', i);
    }
}

//alternatively, via Eloquent JavaScript

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
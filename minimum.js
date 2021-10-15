//Write a function min that takes two arguments and returns their minimum

const min = (x, y) => {
    return Math.min(x, y);
}

//alternatively, this is the solution from the book:

function min (a, b) {
    if (a < b ) return a;
    else return b;
}

console.log(min(11, 0));
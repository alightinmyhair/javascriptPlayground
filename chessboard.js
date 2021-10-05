//Write a program that creates a string that represents an 8x8 grid
//At each position of the grid there is either a space or a # character

// # # # #
//# # # #
//etc. for 6 more lines

//once I have the above complete, refactor so it works for any size
//define a binding size = 8
//a grid of the given width and height

//command line 

const size = process.argv[2];
// const height = process.argv[3];

// const hashtagString = '# # # # \n';
// const spaceString = ' # # # #\n';

const hashtagString = '# ';
const spaceString = ' #';
let _hashtagString = '';
let _spaceString = '';
let newLine = '\n';

for (let i = 0; i < size / 2; i++){
    _hashtagString += hashtagString;
    _spaceString += spaceString;
}

_hashtagString += newLine;
_spaceString += newLine;

let finalString = '';


for (let i = 0; i < size; i++) {
    if ( i % 2 === 0) {
        finalString += _spaceString;
    } else {
        finalString += _hashtagString;
    }
}


// for (let i = 0; i < size; i++) {
//     if ( i % 2 == 0) {
//         finalString += spaceString;
//     } else {
//         finalString += hashtagString;
//     }    
// }

console.log(finalString);
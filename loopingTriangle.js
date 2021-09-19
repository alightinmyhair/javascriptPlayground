//Write a loop that makes seven calls to console.log

/* THE ATTEMPT BELOW DID NOT WORK
// let hashtag = '#';
// let counter = 0;

// for (let i = 0; i < 7; i++) {
//     hashtag += counter;
//     console.log('#' + counter);
// };
*/

for (let line = '#'; line.length < 8; line += '#') {
    console.log(line);
}
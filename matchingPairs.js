//challenge from hackerrank
//sockMerchant has the following parameter(s):
//int n: the number of socks in the pile
//int ar[n]: the colors of each sock

//NOTE: the sort method appears to cause a lot of time for the function to run
//will need to refactor

function sockMerchant(n, ar) {
    // Write your code here
    
    let sumOfMatches = 0;

    console.log('This is an array before sorting: ' + ar);

    ar.sort();
    
    console.log('This is an array after sorting: ' + ar);

    for (let i = 0; i < n; i++) {
        if (ar[i] === ar[i+1]) {
            i++;
            sumOfMatches++;
        } 
    }
    return sumOfMatches;

}

let n = 7;
let ar = [10, 10, 3, 3, 4, 1, 10];
console.log(sockMerchant(n, ar));
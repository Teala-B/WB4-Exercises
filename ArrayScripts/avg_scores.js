let myScores = [
    92,
    98,
    84,
    76,
    89,
    99,
    100,
]
let yourScores = [
    82,
    98,
    94,
    88,
    92,
    100,
    100,
]

function getAverage(testScores) {
    let sum = 0

    for(let i = 0; i < testScores.length; i++) {
        sum += testScores[i]
    }
    let average = sum / testScores.length
   
    return average.toFixed(2);

}
let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);

console.log("My Total : " + myAverage);
console.log("Your Average : " + yourAverage);

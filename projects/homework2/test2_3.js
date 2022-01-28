
//var a= [5, 10, 17];
//let b = a.reduce((accumulaytor, all) => accumulaytor + all);
//console.log(b);

var apple = [55, 14, 78];
function appleSum (apple) {
    let sum = 0;
    for (let i = 0; i < apple.length; i++) {
        sum += apple[i];
    }
    console.log(sum);
}
let result = appleSum (apple);
console.log (result);

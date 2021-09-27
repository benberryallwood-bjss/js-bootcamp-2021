console.log("Fibonacci challenge");

let fibArr = [0, 1];
let i = 2;
while (fibArr[i - 1] + fibArr[i - 2] < 50) {
  fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  i++;
}

console.log(fibArr);

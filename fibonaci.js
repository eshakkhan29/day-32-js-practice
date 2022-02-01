// fibonachi  jinish ta holo 
// 0+1+1+2+3+5+8+............... eivabe colte thakbe 
// eta nth pod hobe tar ader 2 ta maner jog fol 
// jemon : nth = (n-1)th + (n-2)th;

// fibnac ekta array toiri korte 
let fibo = [0, 1];
for (let i = 2; i < 13; i++) {
    fibo [i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

// fibinaci in function 
function fibMan(number) {
    if (typeof number != "number") {
        return "plz give me a number";
    }
    if (number <= 2) {
        return "plz give me a number getterthen 2";
    }
    let fibo = [0, 1];
    for (let i = 2; i < number; i++) {
        fibo [i] = fibo [i-1] + fibo [i-2];
    }
    return fibo;
}
let thFibo = 15;
let fibiDekho = fibMan(thFibo);
console.log(fibiDekho);
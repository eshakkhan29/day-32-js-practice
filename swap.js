// variable swap ektar nam onnotate nite

let first = "eshak";
let secend = "khan"

let temp = first;

first = secend;
secend = temp;
console.log(first, secend);

// ________________________________________________

let firstName = 'Eshak';
let lastName = 'Khan';
let tempo = firstName;

firstName = lastName;
lastName = tempo;
console.log(firstName, lastName);

// sohoj vabe man swap korte 
let number = 20;
let number2 = 10;
[number, number2] = [number2, number];
console.log(number, number2);

// boro man ber kora 
let num1 = 600;
let num2 = 500;
let num3 = 400;

if (num1 > num2 && num1 > num3) {
    console.log('boro hocchi num1 :',num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log('boro hocche num2:', num2);
}
else{
    console.log('boro hocche num3:', num3);
}

// function diye boro man ber kora 

function boroMan(man1, man2, man3) {
    if (man1 > man2 && man1 > man3) {
        return man1;
    }
    else if (man2 > man1 && man2 > man3) {
        return man2;
    }
    return man3;
}

let dekho = boroMan(54, 45, 60);
console.log(dekho);

// function choto man 

function chotoMan(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    return c;
}
let cotoDekho = chotoMan(53, 30, 48);
console.log(cotoDekho);

// max min kore boro choto man ber kora 
// max 

let baba = 500;
let dada = 400;
let ami = 300;
let boro = Math.max(baba, dada, ami);
console.log(boro);

// min 
let nana = 700;
let mama = 800;
let khalu = 600;
let coto = Math.min(nana, mama, khalu);
console.log(coto);

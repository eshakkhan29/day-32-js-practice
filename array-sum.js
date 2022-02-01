// jog fol in all element of array 

let arr = [23, 22, 32, 23, 32, 32 , 32, 32, 32, 53];
    let all = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    all = element + all;
}
console.log(all);

// sob gular gun 

let arr1 = [2, 8, 3, 2, 3, 6 , 3, 2, 4, 6];
let gun = 1;
for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    gun = gun * element;
}
console.log(gun);

// boro in the array with function 

function kontaBoro(arrayName) {
    let boroMan = arrayName[0];
    for (let i = 0; i < arrayName.length; i++) {
        const element = arrayName[i];
        if (element > boroMan) {
            boroMan = element;
        }
        
    }
    return boroMan;
}
const a = [212, 13, 54, 723, 65, 57, 87, 123, 647]
const b = kontaBoro(a);
console.log(b);

// choto in the array with function 

function kontaChoto(arrayName) {
    let choto = arrayName[0];
    for (let i = 0; i < arrayName.length; i++) {
        const element = arrayName[i];
        if (choto > element) {
            choto = element;
        }
        
    }
    return choto;
}
let as = [60, 20, 30, 40, 50]
const ad = kontaChoto(as);
console.log(ad);
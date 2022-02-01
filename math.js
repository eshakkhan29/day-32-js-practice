
// অনেক গুলা মেথ এর নিয়িম আছে তার ভিতরে 

// কোন মাইনাস নাম্বার কে প্লাস এ নিতে 
let songkha = -27;
songkha = Math.abs(songkha);
console.log(songkha);

// ভগ্নাংশ কে উপরে নিতে 

let man = 15.32545;
man = Math.ceil(man);
console.log(man);

// vognagso ke nice namate 

let man1 = 15.32545;
man1 = Math.floor(man1);
console.log(man1);

// kono vognagso songkha ke upore othoba nice namate 
// . er por je dike beshi thakbe kache ta hobe 

let man11 = 15.92545;
man11 = Math.round(man11);
console.log(man11);

// random songkha er jonno 
const man2 = Math.random();
console.log(man2);

// random math er loop 

for (let i = 0; i < 33; i++) {
    const sokka = Math.round(Math.random()*6);
    console.log(sokka);
    
}
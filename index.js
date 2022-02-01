const lol = Math.round(Math.random() * 10);
console.log(lol);
var a = 5; var b = 8; var c = 4; var d = 6; 
var highest =Math.max(a, b, c, d);
console.log(highest);
const number = -78;
 const answer = Math.abs(number); 
 console.log(answer);
 function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))
  var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count)


// প্রাকটিস প্রব্লেম- ৫ খানা 

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

let sonkha = [60, 20, 25, 30, 36, 63, 32, 223, 50];

function chotoSongkha(sonkha) {
  let small = sonkha[0];
  for (let i = 0; i < sonkha.length; i++) {
      let man = sonkha[i]
        if (small > man) {
          small = man;
        }
  }
  return small;
}
const dekhao = chotoSongkha(sonkha);
console.log(dekhao);

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

let dada = 500;
let baba = 600;
let pola = 800;
let goribKeda = Math.min(dada, baba, pola);
console.log(goribKeda);

// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

let gorArr = [25, 30, 36, 63, 32, 223, 50];

function gorBerkoro(gor) {
  let gorJog = 0;
  let gorgun = 0;
  for (let i = 0; i < gor.length; i++) {
    const element = gor[i];
    gorJog = gorJog + element;
    gorgun = gorJog / gor.length;
    gorgun = Math.round(gorgun);
  }
  return gorgun;
}
const gorberkoro = gorBerkoro(gorArr);
console.log(gorberkoro);

// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function ayoton(width, height) {
  let motAyoton = width * height;
  return motAyoton;
}
let width = 8;
let height = 5;
const ayotonDekhao = ayoton(width, height);
console.log(ayotonDekhao);

// ৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 
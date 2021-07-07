// let arr =[34,65,123,656,12344,65656,233,]
// let arr1= arr[4] ;
// console.log(arr1)
// let arr2 =['Finktion','uchinchi', 'arrey.js']
// console.log(arr2[0])
// console.log(arr2[1])
// let arr3 = arr2.length;
// console.log(arr3)

// function make(){
// let word1=['24/7 ','every day ','today ','go to schoole ']
// let word2=['I am workaholic','hello yopya ','blablablaaa','I`am studiy ']
// let word3=['every 5 hours','our work','nu naxer','С этим бесплатным']
// let random1 = Math.floor(Math.random()* word1.length)
// let random2 = Math.floor(Math.random()* word2.length)
// let random3 = Math.floor(Math.random()* word3.length)

// let phrase = word1[random1] + ' ' +word2[random2] + ' ' + word3[random3];
// console.log(phrase)
// }
// make()

// console.log('=============================')

// let arra = ['Kolya', 'Vadim', 'OLya']
// arra[0]='Galin'
// arra[3]='Bob'
// arra[4]='Power'

// arra.push('Dima ','Igor','jony')
// console.log(arra)
// arra.shift();
// arra.pop();

// console.log(arra)

// arra.unshift('Kolay')
// delete arra[6]

// console.log(arra)
// console.log('=============================')
// let arrOne =['Vanya', 'ishtvan', 'Olya'];
// arrOne.splice(1,1);
// console.log(arrOne)

// let arrTwo =['Vanya', 'ishtvan', 'Olya'];
// let removed = arrTwo.splice(1,1);
// console.log(removed);

// let arrThree = ['Vanya', 'Ishtvan', 'Ola'];
// arrThree.splice(1,1,13213)
// console.log(arrThree,'j')

// let arrFour=['Vanya', 'Ishtvan', 'Ola']
// arrFour.splice(1,0 ,'KOlya','Ruslan')
// console.log(arrFour)

// let arrFive=['Vanya', 'Ishtvan', 'Ola'];
// arrFive.splice(1,0,345435)
// console.log(arrFive)

//  let arrOne =['Vanya', 'ishtvan','KOlaya', 'Olya'];

//  let arrTwo = arrOne.slice(1, 2,555);
// console.log(arrTwo);

// let arrThree=arrOne.slice(-4, -1);
//  console.log(arrThree)

//  let arrFour = arrOne.slice();
// console.log(arrFour)

// let arrOne = ['Vanya', 'ishtvan','KOlaya', 'Olya'];
// let arrTwo = arrOne.concat('Petya')
// console.log(arrTwo)

//                indexOf
//   let arr = ['Vanya', 'ishtvan','Kolya', 'Olya'];

//   console.log(arr.indexOf('ishtvan'))
//   console.log(arr.indexOf('Kolya',2))
//   console.log(arr.indexOf('ishtvan',2))

//             includes
//  console.log(arr.includes('ishtvan'))
//  console.log(arr.includes('Olya'))
//  console.log(arr.includes('Vanya',2))

//                          FIND
// let arr = [
//   {name: 'Vasya', age: 36},
//   {name: 'Kplya', age: 18},
//   {name: 'Olya', age: 45},
// ]

// let resultOne = arr.find(function(item, index, array){
//   return item.name === 'Olya'
// });

//=============         Filter
// let resultOne = arr.filter(item => item.age == 18);
// console.log(resultOne)

//  let result = arr.filter(function(item, index, array){
//   return item.age >= 36;
//  });
//  console.log(result)

/*
.............SORT()
   let arr = ['Vanya', 'ishtvan','Kolya', 'Olya'];
   console.log(arr.sort())

   let arrTwo = [8, 22, 1];
   console.log(arrTwo.sort())
   console.log(arrTwo.sort((a,b)=> a-b))
   console.log(arr.reverse());
   */

/*
   ................MAP
   let arr =['Vanya', 'ishtvan','Kolya', 'Olya'];

   let result = arr .map(function (item, index='azim', array){
     return item[0,4] 
   })
   console.log(arr);
   console.log(result)
   */

/*...........SPLIT
   let str = 'Vanya, Ishtven ,Olya';
   let arr = str.split(' ');
   console.log(arr)

   let arrTwo = str.split(',',1)
   console.log(arrTwo)
   */

/* 
   .....................JOIN
   let arr = ['Vanya', 'ishtvan','Kolya', 'Olya'];
   let str = arr.join(',')
   console.log(str)
   let arrTwo =  ['Vanya', 'ishtvan','Kolya', 'Olya'];
   console.log(String(arrTwo))
   */

/*
   ..................typeof
   let arr = [];
   let obj = {};

    console.log(typeof arr)
    console.log(typeof obj)

   if(Array.isArray(obj)){
     console.log('this is an arry')
   }else {
     console.log('it is not an arry')
   }
   */

/*
.........FOR.......FOR of
   let arr =['Vanya', 'ishtvan','Kolya', 'Olya'];
   console.log(arr.length)

   for(let i=0; i<arr.length; i++){
     console.log(arr[i])
   }
console.log('==========================')
   for( let arr1 of arr){
     console.log(arr1)
   }
   */

/*
.............ForEach
   let arr =['Vanya', 'ishtvan','Kolya', 'Olya'];
 
    arr.forEach(function(item,index,array){
      console.log(`${item}: is locate ${index}: position in ${array}`)
    });

another way 

   arr.forEach((item,index,array)=>{
console.log(`name ${item}: is locate ${index}: position in ${array}`)
   })

   arr.forEach(show);
   function show(item){
     console.log(item)
   }
   */

/*
   .........Metod reduce
   let arr1 =[13,243,32,44,-52,11];
   let arr2=arr1.reduce(function(p,item){
     return p+item;
   })
   console.log(arr2)
   */

/*
   .........Reduce
let arr = ["Vanya", "ishtvan", "Kolya", "Olya"];
let arr2 = arr.reduce(function(previus, item){
  console.log(previus)
  console.log(item)
  return `${item}, ${previus}`
});
console.log(`name ${arr2}`)
*/

/*
let arr = ["Vanya", "ishtvan", "Kolya", "Olya"];
console.log(typeof arr);

arr.name='Kolya'
console.log(arr)
*/

/* 
.....................................UY UWI                            
let a='abcd';
let b='dcba';
if(a.length==b.length && a.split('').sort().join()==b.split('').sort().join()){
   console.log(true)
}else{
   console.log(false)
}




const array = [
  22, 4, 65, 3, 66,91, 5, 23, 57,43, 21,53,73,113,25 ,92, 14, 432, 234, 95,719, 959, 2, 7, 11, 13,
];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      // console.log('qogani juft va toq ', num);
      return false;
    }
  }
  
  return num;
}

console.log('Tub sonlar',array.filter(isPrime).sort((a, b) => a - b));

function toq(){
   return array.filter((item)=>item%2!==0)
}
console.log('Toq sonlar',toq().sort((a,b)=>a-b))

function juft(){
      console.log('Juft sonlar',array.filter((item)=>item%2===0).sort((a,b)=>a-b))
}
juft()
*/

// let a = [1,2,3,4]
// let b = [4,3,2,1]
// if(a===b && a.sort((a,b)=>a-b).join()==b.sort((a,b)=>a-b).join()){
//    console.log(true)
// }else{
//    console.log(false)
// }

//console.log(b)

let dum = [
  { name: "Jony", age: 17, budget: 3330 },
  { name: "Tom", age: 40, budget: 6210 },
  { name: "Jerry", age: 16 , budget: 2140 },
  { name: "Teylar", age: 31, budget: 4660 },
  { name: "Bop", age: 23, budget: 8440 },
];

//....................forEach
// for (let tup of dum) {
//   console.log(tup);
//}
//dum.forEach(name=>console.log(name),age=> console.log(age))
   

//.......................map
//  const tup= dum.map(dum=>`${dum.age *5 } ${dum.name+'asdasdasd' } ${dum.budget*20}` )
// console.log(tup)


//...............................filter
// let atut = dum.filter(num=>{
//    if(num.age<=18){
//       return true
//    }
// })
// console.log(atut)


//.............................Reduce
// let amout=0
// for(let i=0;i<dum.length;i++){
//    amout+=dum[i].budget
//    console.log(dum[i].budget);
// }

// let amout = dum.reduce((total,red)=>{
// return total+red.budget
// }, 0,9)
// console.log(amout);

// let amout = dum.reduce((a,b)=>a+b.budget,0)
// console.log(amout);


//.....................Find
// const tab = dum.find(d => d.age === 16)
// console.log(tab)


// const teb = dum.findIndex(d => d.age === 16)
// console.log(teb)

//..................newDum

let amout= dum
.filter(m=>m.budget>3000)
  .map(u=> {
return {
   info: `${u.name} ${u.age}`, 
   budget: u.budget
}

  })
  
 .reduce((total,d)=>total + d.budget, 0);

  console.log(amout);
  console.log(amout);
  console.log("\^reet\gi");
  console.log(amout);
  console.log(amout);
  console.log(amout);
  console.log(amout);
  console.log(amout);
  console.log(amout);
  

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

//  make()

//  function teak(){
//     let wor =[    ]
//  }

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

let arrTwo =['Vanya', 'ishtvan', 'Olya'];
let removed = arrTwo.splice(1,1);
console.log(removed);

let arrThree = ['Vanya', 'Ishtvan', 'Ola'];
arrThree.splice(1,1,13213)
console.log(arrThree,'j')

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


//    // .........Reduce
// let arr = ["Vanya", "ishtvan", "Kolya", "Olya"];
// let arr2 = arr.reduce(function(previus, item){
//   console.log(previus, 'previus')
//   console.log(item)
//   return `${item}, ${previus}`
// });
// console.log(`name ${arr2}`)


/*
let arr = ["Vanya", "ishtvan", "Kolya", "Olya"];
console.log(typeof arr);

arr.name='Kolya'
console.log(arr)
*/


// .....................................UY UWI                            
// let a='abcd';
// let b='dcba';
// if(a.length==b.length && a.split('').sort().join()==b.split('').sort().join()){
//    console.log(true)
// }else{
//    console.log(false)
// }




// const array = [
//   22, 4, 65, 3, 66,91, 5, 23, 57,43, 21,53,73,113,25 ,92, 14, 432, 234, 95,719, 959, 2, 7, 11, 13,
// ];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       // console.log('qogani juft va toq ', num);
//       return false;
//     }
//   }
  
//   return num;
// }

// console.log('Tub sonlar',array.filter(isPrime).sort((a, b) => a - b));

// function toq(){
//    return array.filter((item)=>item%2!==0)
// }
// console.log('Toq sonlar',toq().sort((a,b)=>a-b))

// function juft(){
//       console.log('Juft sonlar',array.filter((item)=>item%2===0).sort((a,b)=>a-b))
// }
// juft()


// let a = [1,2,3,4]
// let b = [4,3,2,1]
// if(a===b && a.sort((a,b)=>a-b).join()==b.sort((a,b)=>a-b).join()){
//    console.log(true)
// }else{
//    console.log(false)
// }

//console.log(b)

// let dum = [
//   { name: "Jony", age: 17, budget: 3330 },
//   { name: "Tom", age: 40, budget: 6210 },
//   { name: "Jerry", age: 16 , budget: 2140 },
//   { name: "Teylar", age: 31, budget: 4660 },
//   { name: "Bop", age: 23, budget: 8440 },
// ];
// let res = dum.reduce((total,item)=>{
//    if(item.age>17){
//       total+=item.budget
//    }
//    return total
// },0)
// console.log(res);

// const result = dum.reduce((total,temp,arr)=>{
//   if(temp.age>17){
//     total+=temp.budget
//   }
//   return total
// },0)
// console.log('result',result);
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

// let amout= dum
// .filter(m=>m.budget>3000)
//   .map(u=> {
// return {
//    info: `${u.name} ${u.age}`, 
//    budget: u.budget
// }

//   })
  
//  .reduce((total,d)=>total + d.budget, 0);

//   console.log(amout);
//   console.log(amout);
//   console.log("\^reet\gi");
//   console.log(amout);
//   console.log(amout);
//   console.log(amout);
//   console.log(amout);
//   console.log(amout);
//   console.log(amout);
  
// let myArray = [
//    {id: 0, name: "Jhon"},
//    {id: 1, name: "Sara"},
//    {id: 2, name: "Domnic"},
//    {id: 3, name: "Bravo"}
//  ],
     
//  //Find index of specific object using findIndex method.    
//  objIndex = myArray.findIndex((obj => obj.id == 1));
 
//  //Log object to Console.
//  console.log("Before update: ", myArray[objIndex])
 
//  //Update object's name property.
//  myArray[objIndex].name = "Laila"
 
//  //Log object to console again.
//  console.log("After update: ", myArray[objIndex])

// const addresses = [  ]; // Some array I got from async call

// const uniqueAddresses = Array.from(new Set(addresses.map(a => a.id)))
//  .map(id => {
//    return addresses.find(a => a.id === id)
//  })


//  var arrayWithDuplicates = [
//    {"type":"LICENSE", "licenseNum": "12345", state:"NV"},
//    {"type":"LICENSE", "licenseNum": "A7846", state:"CA"},
//    {"type":"LICENSE", "licenseNum": "12345", state:"OR"},
//    {"type":"LICENSE", "licenseNum": "10849", state:"CA"},
//    {"type":"LICENSE", "licenseNum": "B7037", state:"WA"},
//    {"type":"LICENSE", "licenseNum": "12345", state:"NM"}
// ];

// function removeDuplicates(originalArray, prop) {
//     var newArray = [];
//     var lookupObject  = {};

//     for(var i in originalArray) {
//        lookupObject[originalArray[i][prop]] = originalArray[i];
//     }

//     for(i in lookupObject) {
//         newArray.push(lookupObject[i]);
//     }
//      return newArray;
// }

// var uniqueArray = removeDuplicates(arrayWithDuplicates, "licenseNum");
// console.log("uniqueArray is: " + JSON.stringify(uniqueArray));

//========================Uy ishi

// const arr = [
//    { key: 1, name: "A", condition: true },
//    { key: 4, name: "B", condition: false },
//    { key: 7, name: "C", condition: true },
//    { key: 11, name: "D", condition: true },
//    { key: 12, name: "E", condition: false }
//  ]

//  const arrayToObject1 = (arr, key) => {
//      return arr.reduce((obj, item) => {
//          obj[item[key]] = item
//          return obj
//      }, {})}

//  const arrayToObject2 = (array, key) =>
//      array.reduce(
//      (obj, item) => ({
//        obj, [item[key]]: item
//      }),{});

//  const arrayToObject3 = (arr, key) => 
// Object.assign({}, arr.map(item => ({[item[key]]: item})))

//  const arrayToObject4 = (arr, key) => 
// arr.reduce((obj, item) => ((obj[[item[key]]] = item), obj), {});

//  const arrayToObject5 = (arr, key) => {
//      const res = {};
//      arr.forEach(obj => {
//          res[obj[key]] = obj;
//      })
//      return res
//  }

//  console.log("----------key------------")

//  console.log(arrayToObject5(data, 'key'))

// const arr = [
//    { key: 1, name: "A", condition: 'Array' },
//    { key: 4, name: "B", condition: 'Berry' },
//    { key: 7, name: "C", condition: 'Java' },
//    { key: 11, name: "D", condition: 'Kerry' },
//    { key: 12, name: "E", condition: 'Serrey' }
//  ]

 
//===============================================
// const getFilter =(key, value)=>{
//    const newArr=arr.filter((val)=>{
//       return val.name.includes(value)
//    })
//    console.log(newArr);
// }
// getFilter('name','A')
// && val.key ==key
//==================================================
// let obj = arr.find((val,obj)=>{
//    if(val.name==='E'){
//       arr[obj]={name:'new string',key:'ret',condition:'Js'};
//       return true;
//    }
// })
// console.log(arr);
//==============================================
// let arr = [ 
//    { name:"string 1", value:"this", other: "that" },
//  { name:"string 2", value:"this", other: "that" }
//  ];

//   let obj = arr.find(o => o.name === 'string 1'); 
//   console.log(obj)
//==============================================
// function findMatches(arr, searchString){
//    const matches = [];
 
//    arr.forEach((obj) => {
//      for (const key in obj) {
//        if (obj[key].includes(searchString)){
//          matches.push(obj[key]);
//        }
//      }
//    });
 
//    return matches;
//  }
 
//  const arr = [
//    {name: 'bent', town: 'kansas'},
//    {name:'abs', town:'vegas'},
//    {name:'def', town:'vegas'},
//    {name:'ght', town:'vegas'},
//    {name:'top', town:'vegas'},
//    // { key: 1, name: "A", condition: 'Array' },
//    // { key: 4, name: "B", condition: 'Berry' },
//    // { key: 7, name: "C", condition: 'Java' },
//    // { key: 11, name: "D", condition: 'Kerry' },
//    // { key: 12, name: "E", condition: 'Serrey' }
//  ];
 
//  console.log(findMatches(arr, "a"));
//  // => ["bent", "benny"]
 
//  console.log(findMatches(arr, "benn"));
//  // => ["benny"]

//=====================================================================
//  var __POSTS = [ 
// 	{ id: 1, title: 'Apple', description: 'Description of post 1' }, 
// 	{ id: 2, title: 'Orange', description: 'Description of post 2' }, 
// 	{ id: 3, title: 'Guava', description: 'Description of post 3' }, 
// 	{ id: 4, title: 'Banana', description: 'Description of post 4' }
// ];

// // Search for post with title == "Guava"
// var __FOUND = -1;
// for(var i=0; i<__POSTS.length; i++) {
// 	if(__POSTS[i].title == '1Apple') {
// 		// __FOUND is set to the index of the element
// 		__FOUND = i;
// 		break;
// 	}
// }

// // On success __FOUND will contain the index of the element
// // On failure it will contain -1  
// console.log(__FOUND); // 2
//===================================================================
// let cities = [
//   {name: 'Los Angeles', population: 3792621},
//   {name: 'New York', population: 8175133},
//   {name: 'Chicago', population: 2695598},
//   {name: 'Houston', population: 2099451},
//   {name: 'Philadelphia', population: 1526006}
// ];
// let bigCities = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i].population > 7000000) {
//         bigCities.push(cities[i]);
//     }
// }
// console.log(bigCities);
//=================================================================
// const myTodos=['Buy Bread','Go to gym','Record youtube videos','Hello World']

// const newTodos=[{
//     title:'Buy Bread', isDont:false
//   },{
//     title:'Go to gym', isDont:false
//   },{
//     title:'Record youtube videos', isDont:true
//   },{
//     title:'Hello World', isDont:false
//   }]

 // Metho 1 index

  // const index = newTodos.findIndex(function(todo,index){
  //   return todo.title === 'Go to gym'
  // })
  // console.log(index);

//Method 2
// const findTodo = function(myTodos,title){
//   const index = myTodos.findIndex(function(todo,index){
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return  myTodos[index]
// }
// let printMe =findTodo(newTodos, 'Go to gym')
// console.log(printMe);

//Method 3

// const findTodo = function(myTodo,title){
//   const titleReturned = myTodo.find(function(todo,index){
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return titleReturned
// }
// let printMe = findTodo(newTodos, 'Hello World')
// console.log(printMe);
// let str ='safdfggdaaaaasfa'
// let a=0
// for(let i =0;i<str.length; i++)
//    if(str.charAt(i)==='a'){
//       a++;
// }
   

// console.log('a:',a);
// let newArr=0
// function is(arra,number){
//    for(let i=0; i<arra.length; i++){
//       for(let j=0;j<i.length;j++){
//          if (arra[i]+arra[j]/2==number){
//             newArr+= arra[i] + arra[j]
//             return newArr++
//          }
//    }
//    }
//    return newArr
// }

// console.log(is(), 2);


// function pairwiseDifference(arr , n) {
//    var diff=0
//    for (i = 0; i < n - 1; i++) {

//        // absolute difference between
//        // consecutive numbers
//        diff =(arr[i] + arr[i + 1]);
//        console.log(diff + " ")
//    }
// }

// // Driver Code

//    var arr = [ 4, 10, 15, 5, 6 ];
//    var n = arr.length;

//    pairwiseDifference(arr, n);

// This code contributed by umadevi9616

// function is(value, index){
//    var dif =0;
//    for(let i=0 ;i<index-1;i++){
//       for(let j=1 ;j<i;j++){
//          dif=(value[i]+value[j])
//          console.log(dif++);
//       } 
//    }
// }
// var are=[1,3,5,7]
// var index =are.length
//  is(are,index)

// function larg(arr){
//    var largeNum =0;
//    var newArr =[];
//    for(var i=0; i <arr.lenght;i++){
//       for(var j=0;j<arr[i].lenght; j++){
//          if(arr[i][j]>largeNum){
//             largeNum=arr[i][j];
//          }
//          return largeNum
//       }
//    }
//    return newArr.push(largeNum)
// }
// larg([4,5,1,3])
// console.log(arr);



// function largestOfFour(arr) {
//   // You can do this!
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var largeNum = '';
//     for (var j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largeNum) {
//         largeNum = arr[i][j];
//         newArr.push(largeNum);
//       }
        
//     } 
//   }
//   return newArr;
// }


// // `indent preformatted text by 4 spaces`
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
//===================================Uy ishi

// let arr =[
//   {name: 'Jon', status:'Doctore'},
//   {name: 'Marshel', status:'Doctore'},
//   {name: 'JumanJi', status:'Doctore'},
//   {name: 'Mirshakar', status:'Doctore'},
//   {name: 'Komol', status:'Doctore'},
//   {name: 'Qaxor', status:'Doctore'},
//   {name: 'AAAAAAAAAAAAAAAbduraxm', status:'Chelovek'},
// ]
// let words=[];
// let words2 =[]
// arr.forEach((value)=>{
//   if(value && value.name){
//     for(let i=0;i<value.name.length; i++){
//       const e=value.name[i];
//       if(words.filter(f=>f.word==e).length==0){
//         words.push({word:e, count:1})
//       }else{
//         words =words.map(m =>{
//           if(m.word==e){
//             m.count=m.count+1
//           }
//           return m
//         })
//       }
//     }
//   }
// })
// console.log(words);





// let arr =[
//   {name: 'Jon', status:'Doctore'},
//   {name: 'Marshel', status:'Doctore'},
//   {name: 'JumanJi', status:'Doctore'},
//   {name: 'Mirshakar', status:'Doctore'},
//   {name: 'Komol', status:'Doctore'},
//   {name: 'Qaxor', status:'Doctore'},
//   {name: 'AAAAAAAAAAAAAAAbduraxm', status:'Chelovek'},
// ]
// let words=[];
// let words2 =[]
// arr.forEach((value)=>{
//   if(value&& value.status){
//     for(let i=0;i<value.status.length; i++){
//       const e=value.status[i];
//       if(words2.filter(f=>f.word==e).length==0){
//         words2.push({word:e, count:1})
//       }else{
//         words2 =words2.map(m =>{
//           if(m.word==e){
//             m.count=m.count+1
//           }
//           return m
//         })
//       }
//     }
//   }
//   if(value&&value.name){
//     for(let i=0;i<value.name.length; i++){
//       const e=value.name[i];
//       if(words.filter(f=>f.word==e).length==0){
//         words.push({word:e, count:1})
//       }else{
//         words =words.map(m =>{
//           if(m.word==e){
//             m.count=m.count+1
//           }
//           return m
//         })
//       }
//     }
//   }
// })
// console.log('Name',words);
// console.log( 'Status',words2);
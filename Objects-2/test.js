//Для объекта Object нет собственного map , но как насчет этого:
// var myObject ={'a':1,'b':2 ,'c':3};
// Object.keys(myObject).map(function(key,index){
//   myObject[key]*=2;
// });

// console.log(myObject)

//Но вы можете легко перебирать объект, используя for ... in :
// var myObject =Object.create({'a':1,'b':2 ,'c':3,},

// {'a':1,'b':2 ,'c':3,})
// for(let key in myObject){
//   if(myObject.hasOwnProperty(key))
//   myObject[key]*=2
// }
// console.log(myObject);

// .....................................................exsaple
// let obj = {
//   name:"blabla",age:"12",email:"emailsl",password:"1234h",
//   name:"blabl",age:"3",email:"emails;",password:"1234j",
//   name:"blablaki",age:"5",email:"emaijls",password:"1234s",
//   name:"blablal",age:"6",email:"emailsh",password:"1234s",
//   name:"blablal;",age:"9",email:"emailsfg",password:"1234f",
//   name:"1;",age:"23",email:"emailsghj",password:"1234fd"
// };

// Object.keys(obj).map(function(key, index) {
//   if(obj[key]==index){
//   }
//   console.log(key)
// });

// ...................................................exsaple
// You could get the entries and map the key and property value for a new object.
// let obj = {
//   a: { value: 5, mate: "sss" },
//   b: { value: 1, mate: "rrr" },
//   c: { value: 6, mate: "nnn" },
// };
// let output={};
// Object.keys(obj).map(function(item){
//   output[item]= obj[item]['value']
// });
// console.log(output);

//You could get the entries and map the key and property value for a new object.

// let object = {
//   a: { value: 5, meta: "sss" },
//   b: { value: 1, mata: "rrr" },
//   c: { value: 6, meta: "ttt" },
//
// result = Object.fromEntries(
//   Object.entries(object).map(([key, { value }]) => [key, value])
// );
// console.log(result);


////////////////////,.........................

// let object = {
//     a: { value: 5, meta: "sss" },
//     b: { value: 1, meta: "rrr" },
//     c: { value: 6, meta: "ttt" } ,
//   };

//   let output={};
//   Object.keys(object).map(function(item){
//     output[item]=object[item]['a']
//   })
//   console.log(output);
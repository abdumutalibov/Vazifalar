// const tel ={
//   name: 'Jony',
//   age: 23,
//   countr: 'China',
// }
//console.log(tel.name,tel.age, tel.countr, tel);

// function make(name,age,countr){
//   return {
//     name:name,
//     age:age,
//     countr:countr
//   }
// }
// let user =make('Vasya', 34,'dsa')
// console.log(user)

// let userInfo={
//   name:'Vasya',
// }
// console.log(userInfo);

// userInfo.age=23;
// console.log(userInfo);

// userInfo['Hello']=false;
// console.log(userInfo)

// userInfo.address={
//   city:'Tashken',
//   street:'Freedom'
// }
// console.log(userInfo)


//...............................Delete property

// let userInfo={
//   name:'Kolya',
//   age:32,
//   country:'Rus'
// }
// console.log(userInfo)
// delete userInfo.age
// console.log(userInfo)
// delete userInfo.name
// console.log(userInfo)

//.............................Property change

// let userInfo={
//   name:'Olya',
//   age:50,

// }
// console.log(userInfo)

// userInfo.age=18
// console.log(userInfo)


//.............................Object assign
// let userInfo={
//   name:'Kolya',
//   age:30,
// }
// let user=Object.assign({},userInfo)
// user.age=18
// console.log(userInfo)
// console.log(user)

//...........................Object assign another way 2

// let userInfo={
// name:'Olya',
// age:44,

// }
// Object.assign(userInfo,{['I like JS']:true,country:'Tashkent'})
// console.log(userInfo)

//......................Checking for property existence


// let userInfo={
//   //name:'Ishtvan',
//   age:34,
// }
// if(userInfo.name){
//   console.log(userInfo.name)
// }else
//   console.log(userInfo.age)


//.................Optional chain

// let userInfo={
//   name:'Olya',
//   age:45,
// //   address:{
// //     city:'Tashkent',
// //     street:'Yoshlik'
// //   }
//  }
// // console.log(userInfo.address.street)

// console.log(userInfo?.address?.street)


//.....................Operator in

// let userInfo={
//  // name:'Jony',
//   age:32
// }
// if('name'in userInfo){
//   console.log(userInfo.name)
// }else{
//   console.log('Hello yopya')
// }

//...........................For in loop

// let userInfo={
//   name:'Olya',
//   age:45,
//    address:{
//   city:'Tashkent', 
// street:'Yoshlik' 
//    }
//  }
//  for(let key in userInfo){
//    console.log(key)
//    console.log(userInfo[key])
//  }
//  for(let key in userInfo.address){
//    console.log(key)
//    console.log(userInfo.address[key])
//  }g


//......................Method obect

// let userInfo={
//   name:'Olya',
//   age:45,
//    address:{
//   city:'Tashkent', 
// street:'Yoshlik' 
//    },

//    show(){
//         console.log(`${userInfo.name},${userInfo.age} age,${userInfo.address.city},${userInfo.address.street}`)
//         } 
//   }
// userInfo.show();



//..................................Using this
// let userInfo={
//   name:'Olya',
//   age:45,
//    address:{
//   city:'Tashkent', 
// street:'Yoshlik' 
//    },

//    show(){
//         console.log(`${this.name},${this.age} age,${this.address.city},${this.address.street}`)
//         } 
//   }
// userInfo.show();



//.................................Using this arrow functions

// let userInfo={
//   name:'Olya',
//   age:45,
//    address:{
//   city:'Tashkent', 
// street:'Yoshlik' 
//    },

//    showInfo(){
//      let show = ()=> console.log(`${this.name},${this.age} age,${this.address.city},${this.address.street}`)
//        show()
//         } 
//   }
// userInfo.showInfo();


//..............................Benefits this


// let userInfo={
//   name:'Olya',
//   age:45,
//    address:{
//   city:'Tashkent', 
// street:'Yoshlik' 
//    },
// showInfo(){
//   console.log(`${this.name},${this.age}age,${this.address.city},${this.address.street} ulitsya`)
// }
// }
// userInfo.showInfo()
// let user =userInfo;
// userInfo =null;
// user.showInfo()

//..................................Function constructor

// function info(name,age,countr){
//   this.name=name;
//   this.age=age;
//   this.countr=countr
// }
// console.log(new info('Vasya',345,'Tashkent'))
// console.log(new info('Lena',33,'Green'))

// let user={
//   '58':'Znachenitya'
// }
// console.log(user[58])
// console.log(user[58])
// console.log(user[58])
// console.log(user[58])
// console.log(user[58])
// console.log(user[58])



// let obj=[{
//   name:'Jony',
//   age:24,
//   country:'Tashkent'
// },{
//   name:'Jony',
//   age:24,
//   country:'Tashkent'
// },{
//   name:'Jony',
//   age:24,
//   country:'Tashkent'
// },{
//   name:'Jony',
//   age:24,
//   country:'Tashkent'
// },{
//   name:'Jony',
//   age:24,
//   country:'Tashkent'
// },{
//   name:'Jony',
//   age:24,
//   country:'Tashkent'
// },{
//   name:'Jony',
//   age:24,
//   country:'Tashkent'
// }]


// obj.forEach((val)=>{
//   val.status='Apple'
// })
// console.log(obj);









let users = [
  {id:1, name : "John", age: 200, surname: "Johnson" },
  { name: "Pete", age: 182, surname: "Peterson" },
  { id:8,name: "Ann", age: 19, surname: "Hathaway" },
  { name: "John", age: 220, surname: "Johnson" },
  { name: "Pete", age: 118, surname: "Peterson" },
  { name: "Ann", age: 190, surname: "Hathaway" }, 
  {id:5, name: "John", age: 220, surname: "Johnson" },
  { name: "Pete", age: 118, surname: "Peterson" },
  { name: "Ann", age: 190, surname: "Hathaway" },
];

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => console.log(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => console.log(user.age)); // Pete, Ann,

 users.sort(byField('id'));
users.forEach(user => console.log(user.id)); // Pete, Ann, John


// users.sort((a,b)=> a.age-b.age)
// users.sort((a,b)=> a.id-b.id)
// console.log(users)

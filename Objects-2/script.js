// let user ={
//   name:'Crystal',
//   age:30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs:['why mac & cheese rules','10 things to make with marmite']
// };


// // console.log(user.name)
// // console.log(user['location'])
// // user['name']='chun-li'
// // console.log(user);

// console.log(Object.keys(user))
// console.log(Object.values(user))

// console.log(Object.entries(user))
// console.log()
// console.log(Math.E);
// console.log('hello');

const person = Object.create(
  {
    calculateAge(){
      console.log('Age:',new Date().getFullYear()-this.birthYear);
    }
  },
  {
name:{
  value:'Vladilen',
  enumerable:'sdsd',
  writable:'ds',
  configurable:'d'
},
birthYear:{
value:1998,
enumerable:true,
writable:'ww',
configurable:false

},
age:{
  get(){
    return new Date().getFullYear()-this.birthYear
  },
  set(value){
    document.body.style.background ='green'
    console.log('Set value,', value);
  }
}
  }
)
 //person.name='Maxim'
// person.birthYear=2000
// delete person.name
// delete person.birthYear
for (let key in person){
  if(person.hasOwnProperty(key)){
     console.log('Key ',key, person[key]);
  }
 
}
//console.log(person.calculateAge());
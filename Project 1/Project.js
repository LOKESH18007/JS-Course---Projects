/*console
console.log(100);
console.warn('Warning');
console.error('Alert');
console.table({name:'Lokesh', email:'lokesh@gmail.com',age:21,phone:1234567890});

console.group();
console.log(100);
console.warn('Warning');
console.error('Alert');
console.groupEnd();

const styles = 'color:blue;background-color:white;padding:20px;font-size:20px';
console.log('%c Hello World', styles);*/

/*const myString =new String('developer');

let myNewString;

myNewString = myString.charAt(0).toUpperCase()+myString.substring(1);
console.log(myNewString , typeof myNewString);*/

/*const x= Math.floor(Math.random()*100+1);
const y= Math.floor(Math.random()*50+1);
 

const sum= x+y;
const sumOutput= `${x}+${y}=${sum}`;  
console.log('sumOutput: ' + sumOutput);  

const difference= x-y;
const differenceOutput= `${x}-${y}=${difference}`;  
console.log('differenceOutput: ' + differenceOutput); 

const product= x*y;
const productOutput= `${x}*${y}=${product}`;  
console.log('productOutput: ' + productOutput   );

const quotient= x/y;
const quotientOutput= `${x}/${y}=${quotient}`;  
console.log('quotientOutput: ' + quotientOutput); 

const remainder= x%y;
const remainderOutput= `${x}%${y}=${remainder}`;  
console.log('remainderOutput: ' + remainderOutput); */

/*
const x =[1,2,3,4,5];
 
x.unshift(0);

x.push(6);

x.reverse();
                                                                                                                                
console.log(x);*/

/*
const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8,9,10];

const newArr2=arr2.slice(1,6);

const arr3=arr1.concat(newArr2 );

console.log(arr3);*/

/*
const library = [{
    title:'The Project',
    author:'Lokesh',
    status:{
        own:true,
        reading:false,
        read:false
    }
        },
    {
        title:'The Project 2',
    author:'Krish',
    status:{
        own:true,
        reading:false,
        read:false
    }
        },
    {
        title:'The Project 3',
    author:'john',
    status:{
        own:true,
        reading:false,
        read:false
    }
}];

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

const{title:firstbook}=library[0];

const books =JSON.stringify(library);

console.log(books);
*/

/*
function getCelsius(farenheit){
    return ((farenheit-32)*5)/9;
}
 console.log(`The temperature is ${getCelsius(32)}\xB0C`);
*/

/*
function minmax(arr){
    const min=Math.min(...arr);
    const max=Math.max(...arr);

    return{
        min,
        max,
    }
}

console.log(minmax([1,36,2,5,9]));
*/

/*((length,width) =>{
const area=length*width;

const output=`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
console.log(output);
})( 10,5 );
*/
/*
function calculator(num1,num2,operator){
    let result;
    switch (operator){
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;    
        case '*':
            result=num1*num2;
            break; 
        case '/':
            result=num1/num2;
            break; 
        default:
            result='Invalid operator';            
}
    console.log(result);
    return result;
}
calculator(5,2,'+');
*/

/*
for(let i=1;i<=100;i++){
      
   
    if(i%3===0 && i%5===0){
        console.log('FizzBuzz');
    }
    else if(i%3===0){
        console.log('Fizz');
    }
    else if(i%5===0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
   
}
*/

/*
const cart =[
    {id:1,name:'Laptop',price:1000,},
    {id:2,name:'Phone',price:500,},
   {id:3,name:'Tablet',price:300,}]

const totalPrice=cart

.filter(item=>item.price<600)

.reduce((total,item)=>total+item.price,0);
console.log(`Total Bill Amount: $ ${totalPrice}`);  */


/*
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];


const youngPeople=people
.filter((person)=>person.age<=25)
.map((person)=>({
    name:person.firstName+' '+person.lastName,
    email:person.email
}));

console.log(youngPeople);
//[1].name

*/

const numbers = [2, -30, ,25,85,50, 20, -12, -9, 7];

const positiveSum = numbers
.filter((number)=>number>0)
.reduce((acc,cur)=>acc+cur,0);

console.log(positiveSum);

const words=['coder','developer','programmer'];

const capitalizedWords=words.map((word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
});

console.log(capitalizedWords);
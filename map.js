/*1.Write a function that takes an array of numbers and returns a new array with each number squared. Use the Mapobject to accomplish this.*/
array=[3,6,8,9,5]
console.log("Output 1:",array.map(e=>e*e));

/*2.Write a function that takes an array of objects with a nameproperty and returns a new array of strings with the name of each object capitalized. Use the Mapobject to accomplish this.*/
const a=[{name:'haridha'},{name:'rajesh'},{name:'priya'}]
console.log("Output 2:",a.map(e=>e.name.toUpperCase()));

/*3.Write a function that takes an array of words and returns an object where the keys are the words and the values are the number of times each word appears in the array. Use the Mapobject to accomplish this.*/    const b=['cap','rat','cap','map','cap','rat','cap','map','cap','rat','cap','map'];
    const count={};
    b.map(e=>{count[e]=(count[e]||0)+1});
    console.log("Output 3:",count)

/*4.Write a function that takes a string and returns an object where the keys are the characters in the string and the values are the number of times each character appears in the string. Use the Mapobject to accomplish this. */
    const c="hihello";
    const Count={}
    str=c.split('')
    str.map((e)=>{Count[e]=(Count[e]||0)+1})
    console.log("Output 4:",Count)
  
/*5.Write a function that takes an array of objects with a categoryproperty and returns an object where the keys are the categories, and the values are arrays of objects with that category. Use  */ 
const arr=[{
    name:'hari',
    age:18,
    std:12,
    address:'chennai'
},
{
    name:'ram',
    age:18,
    std:12,
    address:'chennai'
},
{
    name:'priya',
    age:17,
    std:11,
    address:'chennai'
},
{
    name:'raj',
    age:16,
    std:10,
    address:'chennai'
}]
obj={}
arr.map(e=>{
    if(!(e.std in obj)){
        obj[e.std]=[]
    }    
    obj[e.std].push(e)
    })
    console.log("Output 5:",obj);

/*6.Write a function that takes an array of strings and returns a new array with only the unique strings. Use the Mapobject to accomplish this */

function Dup(d){
remove=d.map((e)=>{
    if((!(unique.includes(e))))
        unique.push(e)
})
return unique
}
d=['hari','priya','hari','rajesh','priya']
unique=[]
console.log("Output 6:",Dup(d));

/* 7.Write a function that takes an array of numbers and returns an object where the keys are the numbers and the values are arrays of their prime factors. Use the Mapobject to accomplish this*/
function isPrime(num){
if(num > 1){
    for(let i = 2; i<=num/2; i++){
    if(num % i == 0){
    return false;
    }
    }
    }
    return true;
    }
    function getPrimeFactors(n){
    let temp = n;
    let factors = [];
    if(isPrime(temp)){
    factors.push(temp);
     }else{
     for(let i=2;i<=temp;i++){
     if(isPrime(i) && (temp%i == 0)){
     factors.push(i);
     temp = temp/i;
     i = 1;
     if(isPrime(temp)){
     factors.push(temp);
     break;
         }
    }
    }    
    }   
    return {numer : n,factors:factors};
    }
    numbers = [27,21,25,12];
    let output = numbers.map((n)=>getPrimeFactors(n)); 
    console.log("Output 7:",output)
/* 8.Write a function that takes an array of objects with a nameand ageproperty and returns an object where the keys are the age and the values are arrays of objects with that age. Use the Mapobject to accomplish this.*/
const ar=[{
    name:'hari',
    age:18,
    std:12,
    address:'chennai'
},
{
    name:'ram',
    age:18,
    std:12,
    address:'chennai'
},
{
    name:'priya',
    age:17,
    std:11,
    address:'chennai'
},
{
    name:'raj',
    age:16,
    std:10,
    address:'chennai'
}]
obj=[]
ar.map(e=>{
    if(!(e.age in obj)){
        obj[e.age]=[]
    }    
    obj[e.age].push[e]
    })
    console.log("Output 8:",obj);

/*9.Write a function that takes an array of strings and returns an object where the keys are the strings sorted alphabetically and the values are arrays of the original strings that are anagrams of each other. Use the Mapobject to accomplish this */
sor=['haridha','priya']
obj={}
sor.map((e)=>{
 temp=e.split('')
 temp1=temp.sort()
 temp2= temp1.join('')
 obj[temp2]=e

})
console.log("Output:9",obj);

/*10.Write a function that takes an array of objects with a dateproperty and returns an object where the keys are the year and the values are arrays of objects with that year. Use the Mapobject to accomplish this */
const arra=[{
    name:'hari',
    age:18,
    std:12,
    address:'chennai',
    year:2001
},
{
    name:'ram',
    age:18,
    std:12,
    address:'chennai',
    year:2003
},
{
    name:'priya',
    age:17,
    std:11,
    address:'chennai',
    year:2001
},
{
    name:'raj',
    age:16,
    std:10,
    address:'chennai',
    year:2003
}]
obj={}
arra.map(e=>{
    if(!(e.year in obj)){
        obj[e.year]=[]
    }    
    obj[e.year].push(e)
    })
    console.log("Output 10:",obj);
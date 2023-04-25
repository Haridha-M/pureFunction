//square the numbers
array=[3,6,8,9,5]
console.log("Output 1:",array.map(e=>e*e));

//capitalize the String
const a=[{name:'haridha'},{name:'rajesh'},{name:'priya'}]
console.log("Output 2:",a.map(e=>e.name.toUpperCase()));


//number of occurance of words
    const b=['cap','rat','cap','map','cap','rat','cap','map','cap','rat','cap','map'];
    const count={};
    b.map(e=>{count[e]=(count[e]||0)+1});
    console.log("Output 3:",count)

//numbers of occurance of string
    const c="hihello";
    const Count={}
    str=c.split('')
    str.map((e)=>{Count[e]=(Count[e]||0)+1})
    console.log("Output 4:",Count)
 
//category of a key
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

//Unique string

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

//category of a key
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
obj={}
ar.map(e=>{
    if(!(e.age in obj)){
        obj[e.age]=[]
    }    
    obj[e.age].push(e)
    })
    console.log("Output 8:",obj);

//sort
sor=['haridha','priya']
obj={}
sor.map((e)=>{
 temp=e.split('')
 temp1=temp.sort()
 temp2= temp1.join('')
 obj[temp2]=e

})
console.log("Output:9",obj);

//category of year
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
//square the numbers
array=[3,6,8,9,5]
console.log(array.map(e=>e*e));

//capitalize the String
const a=[{name:'haridha'},{name:'rajesh'},{name:'priya'}]
console.log(a.map(e=>e.name.toUpperCase()));


//number of occurance of words
    const b=['cap','rat','cap','map','cap','rat','cap','map','cap','rat','cap','map'];
    const count={};
    b.map(e=>{count[e]=(count[e]||0)+1});
    console.log(count)

//numbers of occurance of string
    const c="hihello";
    const Count={}
    str=c.split('')
    str.map((e)=>{Count[e]=(Count[e]||0)+1})
    console.log(Count)
 
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
    console.log(obj);
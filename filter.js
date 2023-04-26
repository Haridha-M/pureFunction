// even number
arr=[1,2,3,4,5,6,7,8,9,10]
// console.log("Output 1:",arr.filter(e=>e%2!=1))
console.log("Output 1:",arr.filter(e=>e%2!=1))

//property of price
const ar=[{
    name:'hari',
    age:18,
    product:'watch',
    price:3500,
    address:'chennai'
},
{
    name:'ram',
    age:18,
    product:'watch',
    price:2500,
    address:'chennai'
},
{
    name:'priya',
    age:17,
    product:'watch',
    price:3000,
    address:'chennai'
},
{
    name:'raj',
    age:16,
    product:'watch',
    price:2500,
    address:'chennai'
}]
obj={}
ar.filter(e=>{
    if(!(e.price in obj)){
        obj[e.price]=[]
    }    
    obj[e.price].push(e)
    })
    console.log("Output 2:",obj);
//greater String
function filterByLength(len,b){
    return len.filter(str=>str.length>b)
}
len=['umasankari','pari','pri']
b=3
result=filterByLength(len,b)
console.log("Output 3:",result)

//category of a key
const arra=[{
    name:'hari',
    age:18,
    std:12,
    grade:'B',
    email:'aukdc@gmail.com',
    date:12,
    hobbies:'drawing',
    address:'chennai'
},
{
    name:'ram',
    age:18,
    std:12,
    grade:'A',
    email:'aukdc@gmail.com',
    date:11,
    hobbies:'playing',
    address:'chennai'
},
{
    name:'priya',
    age:17,
    std:11,
    grade:'B',
    email:'stucore@gmail.com',
    date:12,
    hobbies:'drawing',
    address:'chennai'
},
{
    name:'raj',
    age:16,
    std:10,
    grade:'A',
    email:'stucore@gmail.com',
    date:11,
    hobbies:'singing',
    address:'chennai'
}]
obj={}
obj1={}
obj2={}
obj3={}
obj4={}
obj5={}

arra.filter(e=>{
    if(!(e.std in obj5)){
        obj5[e.std]=[]
    }    
    obj5[e.std].push(e)
    })
    console.log("Output 4:",obj5);
arra.filter(e=>{
    if(!(e.age in obj)){
        obj[e.age]=[]
    }    
    obj[e.age].push(e)
    })
    console.log("Output 5:",obj);

arra.filter(e=>{
    if(!(e.hobbies in obj1)){
        obj1[e.hobbies]=[]
    }    
    obj1[e.hobbies].push(e)
    })
    console.log("Output 6:",obj1);

arra.filter(e=>{
    if(!(e.grade in obj2)){
        obj2[e.grade]=[]
    }    
    obj2[e.grade].push(e)
    })
    console.log("Output 7:",obj2);

arra.filter(e=>{
    if(!(e.date in obj3)){
        obj3[e.date]=[]
    }    
    obj3[e.date].push(e)
    })
    console.log("Output 8:",obj3);

arra.filter(e=>{
    if(!(e.email in obj4)){
        obj4[e.email]=[]
    }    
    obj4[e.email].push(e)
    })
    console.log("Output 9:",obj4);

//palindrome
pal=['racecar','world','life','level']
palindrome=pal.filter(str=>str===str.split('').reverse().join(''));
console.log("Output 10:",palindrome)

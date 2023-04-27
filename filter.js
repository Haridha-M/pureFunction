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
maxPrice=3000;
console.log("Output 2:",ar.filter(e=>e.price<maxPrice))

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
    category:12,
    grades:[65,70,80],
    email:['aukdc@gmail.com','finstein.ai'],
    date:'09-03-2023',
    hobbies:['drawing','singing'],
    address:'chennai'
},
{
    name:'ram',
    age:18,
    category:12,
    grades:[60,30,80],
    email:['aukdc@gmail.com','finstein.ai'],
    date:'11-03-2023',
    hobbies:['playing','painting'],
    address:'chennai'
},
{
    name:'priya',
    age:17,
    category:11,
    grades:[60,70,50],
    email:['stucore@gmail.com'],
    date:'12-03-2023',
    hobbies:['drawing','dancing'],
    address:'chennai'
},
{
    name:'raj',
    age:16,
    category:10,
    grades:[60,70,80],
    email:['stucore@gmail.com'],
    date:'14-03-2023',
    hobbies:['singing','drawing'],
    address:'chennai'
}]
//filter by category property
cat=arra.filter((obj,index,self)=>self.findIndex((t)=>(t.category===obj.category))===index).map(obj=>obj.category);
    console.log("Output 4:",cat);

//filter by age property
    minAge=16;
    console.log("Output 5:",arra.filter(e=>e.age>minAge));

//filter by hobbies
function Filter(hobby,arra){
return arra.filter(e=>e.hobbies.includes(hobby));
}
console.log("Output 6:",Filter('singing',arra))

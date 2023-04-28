// 1.Write a function that takes an array of numbers and returns a new array with only the even numbers. Use the filtermethod to accomplish this.
arr=[1,2,3,4,5,6,7,8,9,10]
// console.log("Output 1:",arr.filter(e=>e%2!=1))
console.log("Output 1:",arr.filter(e=>e%2!=1))

//2.Write a function that takes an array of objects with a priceproperty and returns a new array with only the objects that have a price less than a given amount. Use the filtermethod to accomplish this.
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

//3.Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than a given amount. Use the filtermethod to accomplish this.
function filterByLength(len,b){
    return len.filter(str=>str.length>b)
}
len=['umasankari','pari','pri']
b=3
result=filterByLength(len,b)
console.log("Output 3:",result)

//4.Write a function that takes an array of objects with a categoryproperty and returns a new array with only the unique categories. Use the filterand mapmethods to accomplish this.
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
//4.Write a function that takes an array of objects with a categoryproperty and returns a new array with only the unique categories. Use the filterand mapmethods to accomplish this.
cat=arra.filter((obj,index,self)=>self.findIndex((t)=>(t.category===obj.category))===index).map(obj=>obj.category);
    console.log("Output 4:",cat);

//5.Writea function that takes an array of objects with a nameand ageproperty and returns a new array with only the objects where the age is greater than a given amount. Use the filtermethod to accomplish this.
    minAge=16;
    console.log("Output 5:",arra.filter(e=>e.age>minAge));

//6.Write a function that takes an array of objects with a nameand hobbiesproperty and returns a new array with only the objects where the hobbies include a given hobby. Use the filtermethod to accomplish this
function Filter(hobby,arra){
return arra.filter(e=>e.hobbies.includes(hobby));
}
console.log("Output 6:",Filter('singing',arra))

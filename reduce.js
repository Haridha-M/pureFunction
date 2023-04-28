//1.Write a function that takes an array of numbers and returns the sum of all the numbers. Use the reduce method to accomplish this.
c=[6,8,9,11,20]
console.log("Output 1:",c.reduce((a,b)=>a+b))

// 2.Write a function that takes an array of objects with a price property and returns the total cost of all the objects. Use the reduce method to accomplish this
arr=[{
    product:'watch',
    quantity:2,
    price:500
},
{
    product:'ring',
    quantity:1,
    price:2500
},
{
    product:'watch',
    quantity:1,
    price:1500
},
{
    product:'pen',
    quantity:3,
    price:100
}
]
totalPrice=arr.reduce((total,obj)=>{return total+obj.price},0);
console.log("output 2:",totalPrice)

//3.Write a function that takes an array of numbers and returns the average of all the numbers. Use the reduce method to accomplish this.
num=[98,66,33,55,82,77]
average_number=num.reduce((total,avg)=> total+avg,0)/num.length;
console.log("output 3:",average_number)

//4.Write a function that takes an array of objects with a quantity and price property and returns the total cost of all the objects, considering the quantity of each object. Use the reduce method to accomplish this.
total_cost=arr.reduce((total,obj)=>{return total+(obj.quantity*obj.price)},0)
console.log("output 4:",total_cost)

//5.Write a function that takes an array of strings and returns an object where the keys are the strings, and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.
function occurancestr(b){
    return b.reduce((occ,str)=>{
    if(!occ[str]){
        occ[str]=1;
    }else{
        occ[str]++;
    }
    return occ;
},{});
}
const b=['cap','rat','cap','map','cap','rat','cap','map','cap','rat','cap','map'];
console.log("output 5:",occurancestr(b))

//6.Write a function that takes an array of objects with a name and age property and returns the average age of all the objects. Use the reduce method to accomplish this.
const ar=[{
    name:'hari',
    age:16,
    address:'chennai',
    salary:2500
},
{
    name:'ram',
    age:18,
    address:'chennai',
    salary:3000
},
{
    name:'priya',
    age:17,
    address:'chennai',
    salary:4000
},
{
    name:'raj',
    age:16,
    address:'chennai',
    salary:1000
}]
average_number=ar.reduce((total,obj)=> total+obj.age,0)/ar.length;
console.log("output 6:",average_number)

//7.Write a function that takes an array of strings and returns the longest string in the array. Use the reduce method to accomplish this.
len=['umasankari','pari','priya']
longestString=len.reduce((long,str)=>{
    if(str.length>long.length){
        return str;
    }else{
        return long;
    }
},'');
console.log("output 7:",longestString)

//8.Write a function that takes an array of objects with a name and salary property and returns the total salary of all the employees. Use the reduce method to accomplish this.
totalSalary=ar.reduce((total,obj)=>{return total+obj.salary},0);
console.log("output 8:",totalSalary)

//9.Write a function that takes an array of numbers and returns the product of all the numbers. Use the reduce method to accomplish this.
N=[3,2,4,5,6,7]
Product=N.reduce((a,b)=>a*b)
console.log("output 9:",Product)

//10.Write a function that takes an array of objects with a category property and returns an object where the keys are the categories, and the values are the total cost of all the objects with that category. Use the reduce method to accomplish this.

a=[{
category:'food',
quantity:2,
cost:500
},
{
category:'milk',
quantity:1,
cost:2500
},
{
category:'food',
quantity:1,
cost:1500
},
{
category:'milk',
quantity:3,
cost:100
}
]
totalCostObjects=a.reduce((result,item)=>{
    category=item.category;
    cost=item.cost;
    if(result[category]){
        result[category]+=cost;
    }else{
        result[category]=cost;
    }
    return result;

},{})
console.log( "output:10",totalCostObjects)

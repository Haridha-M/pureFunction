//sum of array
c=[6,8,9,11,20]
console.log("Output 1:",c.reduce((a,b)=>a+b))

// total price of objects
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

//average of numbers
num=[98,66,33,55,82,77]
average_number=num.reduce((total,avg)=> total+avg,0)/num.length;
console.log("output 3:",average_number)

//total cost of quantity and price
total_cost=arr.reduce((total,obj)=>{return total+(obj.quantity*obj.price)},0)
console.log("output 4:",total_cost)

//number of occurance of string
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

//average age of students
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

//Longest string in arrray
len=['umasankari','pari','priya']
longestString=len.reduce((long,str)=>{
    if(str.length>long.length){
        return str;
    }else{
        return long;
    }
},'');
console.log("output 7:",longestString)

//total salary of the employee
totalSalary=ar.reduce((total,obj)=>{return total+obj.salary},0);
console.log("output 8:",totalSalary)

//product of numbers
N=[3,2,4,5,6,7]
Product=N.reduce((a,b)=>a*b)
console.log("output 9:",Product)

//total cost of all objects
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

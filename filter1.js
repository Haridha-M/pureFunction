//category filter the grade
const range=[{
    name:'hari',
    grade:75,
    address:'chennai'
},
{
    name:'ram',
    grade:90,
    address:'chennai'
},
{
    name:'priya',
    grade:70,
    address:'chennai'
},
{
    name:'raj',
    grade:80,
    address:'chennai'
}]
studentgrade={}
range.filter(e=>{
     if(e.grade>=80 && e.grade<=90){ studentgrade['greaterthan 80%',e.name]=e}
})
console.log("Output 8:",studentgrade);
//category by mail
const array=[{
    name:'hari',
    age:18,
    email:['aukdc@gmail.com','finstein.ai'],
},
{
    name:'ram',
    age:18,
    email:['aukdc@gmail.com','finstein.ai'],
},
{
    name:'priya',
    age:17,
    email:['stucore@gmail.com'],
},
{
    name:'raj',
    age:16,
    email:['stucore@gmail.com'],
}]
function Filter(mail,array){
    return array.filter(e=>e.email.includes(mail));
    }
    console.log("Output 9:",Filter('finstein.ai',array))

//palindrome
pal=['racecar','world','life','level']
palindrome=pal.filter(str=>str===str.split('').reverse().join(''));
console.log("Output 10:",palindrome)
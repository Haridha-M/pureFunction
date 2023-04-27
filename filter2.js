
//category by date
const array=[{
    name:'hari',
    age:18,
    date:'2023-03-12'
},
{
    name:'ram',
    age:18,
    date:'2023-03-11'
},
{
    name:'priya',
    age:17,
    date:'2023-03-15'
},
{
    name:'raj',
    age:16,
    date:'2023-03-16'
}]
    
startDate=new Date('2023-03-11')
endDate=new Date('2023-03-14')
// //method 1
// items={};
//  array.filter(e=>{
//         objDate=new Date(e.date);
//        if(objDate>=startDate && objDate<=endDate){
//          items[e.name]=[e]
//        }
//     });
// console.log(items)
//method 2
function fil(array,startDate,endDate){
    return array.filter(obj=>{
        objDate=new Date(obj.date);
        return objDate>=startDate && objDate<=endDate;
    });
}
    DateRange=fil(array,startDate,endDate)
    console.log("Output 7:",DateRange)
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





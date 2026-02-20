// Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString);
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toJSON);
// console.log(myDate.toISOString);
// console.log(typeof myDate)

// let myCreatedDate = new Date (2023, 0, 23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let myCreatedDatee = new Date ("01-20-2024")
// console.log(myCreatedDatee);
// console.log(myCreatedDatee.toDateString());
// console.log(myCreatedDatee.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDatee.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long"
})
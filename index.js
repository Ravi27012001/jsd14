console.log("working...")
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];
let arr3 = [1,2,3,4,5];


let student1 = {
     fname : "ravikant",
     lname : "prasad",
     roll : 23 ,
}
let student2 = {
    fname : "Raj"
}

student2.__proto__ = student1;

console.log(arr1.__proto__);
console.log(arr1.__proto__.__proto__);
console.log(arr1.__proto__.__proto__.__proto__);

console.log(student2);
console.log(student2.lname);




let employ1 = {
    fname : "raju",
    fdesignation : "JE",
    fid : "10",
    showDetails : function(param){
        console.log(this.fname,this.fdesignation,this.fid);
    }
}
employ1.showDetails();
let employ2 = {
    fname : "shayam",
    fdesignation : "AE",
    fid : "11",
}
let employ3 = {
    fname : "ghanshyam",
    fdesignation : "SE",
    fid : "12",
}
employ1.showDetails.call(employ2);
employ1.showDetails.call(employ3);
employ1.showDetails.apply(employ3);

let a = employ1.showDetails.bind(employ2);
let b = employ1.showDetails.bind(employ3);
a();
b();


// let employee1 = {

//     name : "Rahul",
//     designation : "CSE",
//     id : 111,
//     showDetails: function(age,gender) {
//         console.log(this.name, this.id, this.designation);
//     }
// }

// function showDetails(){
//     console.log()
// }

// employee1.showDetails();

// let employee2 = {

//     name : "Karan",
//     designation : "IT",
//     id : 112,

// }

// let employee3 = {

//     name : "Raju",
//     designation : "ECE",
//     id : 113,
    
// }

// employee1.showDetails.call(employee2);//passing the arguments(23,M)
// employee1.showDetails.call(employee3);

// employee1.showDetails.apply(employee2);//[23,"M"]
// employee1.showDetails.apply(employee3);



// let res1 = employee1.showDetails.bind(employee2);
// let res2 = employee1.showDetails.bind(employee3);
// res1();//
// function add(){
//     console.log("I am an addition fn");
// }

// let arr = [1,2,3,4,5];
// let arr1 = [1,2,3,4,5];
// let arr2 = [1,2,3,4,5];

// let student1 = {
//     fname: "Sidhant",
//     lname: "Gupta",
//     age : 23,
// }

// let student2 = {
//     fname : "Raju",
// }

// student2.__proto__ = student1;
// console.log(student2);

// console.log(arr1.__proto__);
// console.log(arr1.__proto__.__proto__);
// console.log(arr1.__proto__.__proto__.__proto__);


// const dum = eval("")
console.log('hi');
var a=5;
console.log(a);
let t=99;
{// block2 
    var a=10;
let t=20;
console.log(t);
}
console.log(t);
console.log(a);
//datatypes
console.log(typeof(t));
var str='program';
console.log(typeof(str));
var m;
var arr1=[1,2,3,'orange'];
console.log(arr1.length);
console.log(arr1[1]);
//objects
var person={
    name:'miya',
    age:10,
    place:'tvm'
}
console.log(person);
console.log(person.age);
var car={
    number:2345,
    model:2005,
    place:'cky'
}
console.log(car);
console.log(car.place);
let carr=new Object();
carr.model='110';
carr.brand='hyundai';
console.log(carr);
let arrobj=[{name:'grace',age:20,place:'tvm'},
{name:'tiya',age:20,place:'cky'}]
console.log(arrobj[1].place);
var m=9;
var s=m++;
console.log(m)
//functions
function total(c,h)
{
    var sum=c+h;
    return(sum);
    //console.log('the sum of 2 numbers is '+sum);
}
var output=total(10,20);
console.log('the sum of 2 numbers is '+output);
//looping statements
for(let i=0;i<arr1.length;i++)
    console.log(arr1[i]);


console.log('Rest Operator');

// function add(z,c,...a){
    function add(...a){
    var b=0;
    for(const i of a){
        b+=i;
        // console.log(i);
    }
    // console.log(z);
    // console.log(c);
    console.log(b);
    
}
add(1,2);
add(1,2,3);
add(1,2,3,4);
add(1,2,3,4,5);

console.log('------------Sperad operator------------')
//Sperad operator
var arr=[1,2,3,4,5]
var arr1=[1,2,3,4,5]
var arr2=[...arr,...arr1];

console.log(...arr2);
// console.log(...arr,...arr1);
var demo=( 
    function(){
        let count=0;
        return function(){
            count+=1;
            return count;
        }
      
})();
 console.log(demo());
 console.log(demo());
 console.log(demo());
 console.log(demo());
(function(){
    console.log('sellf invoke')
})();
var b= ( (a)=>{console.log('arrow function'+a);return a })(10);
var c=b;
console.log(c);
var pr=new Promise((resolve,reject)=>{
    var condition=true;
    if(condition){
        console.log(`condition sucessfull`)
        resolve('Successful money is withdrawed');
    }
    else{
        console.log('failed')
        reject('insufficient amount');
    }
});
// pr.then(sucess,(failure)
// pr.then(sucess).catch(failure)
// pr.then(sucess).catch(failure).finally(def);
pr.then(function sucess(msg){
    console.log('call back');
    console.log(msg);
},failure);
function sucess(msg){
    console.log.apply('promise is successful');
    console.log(msg);
}
function failure(msg){
    console.log.apply('promise is not successful');
    console.log(msg);
}
function def(){
    console.log('finally')
}

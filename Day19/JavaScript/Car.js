class Car{
    // name;
    // model;
    // prize;

    constructor(name,model,price){
        this.name=name;
        this.model=model;
        this.price=price;
    }
    getCardetails(){
        console.log('name ' +this.name+" model " +this.model +" prize " +this.price);
    }
}

// var car=new Car('hundai','i20',20000);
// car.getCardetails();
class Hundai extends Car{
    constructor(name,model,price,type){
        super(name,model,price,)
        this.type=type;
    }
     getCardetails(){
        console.log("car type is " +this.type);
    }
}
class Maruthi extends Hundai{
    constructor(name,model,price,type){
        super(name,model,price,)
        this.type=type;
    }
    getCardetails(){
        console.log("car type is " +this.type);
    }
}
var car=new Hundai('hundai','i20',20000,'sedan');
car.getCardetails();
var car=new Maruthi('Maruthi','800',20000,'sedan');
car.getCardetails();
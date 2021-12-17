interface address{
    city:String;
    pincode:number;
}
interface Employee extends address{
    id:number;
    name:String;
}
var v:Employee={
    id:1,
    name:"Thanu",
    city:"Banglore",
    pincode:560068
};
console.log('Json Implementation')
console.log(`Name is ${v.name} and city is ${v.city}`)

class Manager implements Employee{
    id:number;
    name:String;
    city:String;
    pincode:number;

    constructor(id:number,name:String,city:String,pincode:number){
        this.id=id;
        this.name=name;
        this.city=city;
        this.pincode=pincode;
    }
    display():void{
        console.log(`Name is ${this.name} and city is ${this.city}`)
    }
}
console.log('Object Implementation')
var employee:Manager=new Manager(1,'Thanu','banglore',560068);
employee.display();
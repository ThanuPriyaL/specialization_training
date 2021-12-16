function abc()

{

    // this.name="Thanu";

    // console.log(this.name);

    // console.log(this.name.toLocaleLowerCase());

    // this.name=this.name.concat(" Priya");

    // console.log(this.name);

    // console.log(this.name.slice(0,9));

    // this.name=this.name.replace('and','or');

    // console.log(this.name);

    // console.log(this.name.lastIndexOf('Priya'));

    // console.log(this.name.startsWith('Hii'));

    // console.log(this.name.endsWith('Priya'));

    var cars=["Hundai","Swift","Tata","Audi"];
    cars[4]="Rover";
    cars.push(new Date());
    // cars.pop();
    for(var i=0;i<cars.length;i++){
        console.log(cars[i]);
    }
    console.log("---========++++++++++==========---------")

     var fruits=new Array();
     fruits[0]="Banana";
     fruits[1]="Apple";
     fruits[2]="orange";
     fruits.push("Grapes")

     fruits.sort();

     for(const items of fruits){
         console.log(items);
     }
     console.log('-------------')
     for(const items in fruits){
        console.log(items);
    }
    console.log('-------------')

    var date=new Date();
    console.log(date);
    console.log(date.getDate());
    console.log(date.getFullYear());
    console.log("time"+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
    console.log(date.getUTCDate());
    


}

abc();
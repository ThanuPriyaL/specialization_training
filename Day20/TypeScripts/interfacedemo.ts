interface Emp{
    name: string;
    age: number;
    salary?: number;
    display?():String;
    }
    
    var emp = { 'name': 'Thanu', 'age': 22, 'salary': 20000, 'city': 'banglore' };//here the object or interface is not invoked
                                                                                    //it will be accepting any  variables
    console.log(emp.city);
    var emp1: Emp = { 'name': 'Priya', 'age': 21, 'salary': 20000 }//invoke interface variables
                                                                    //json will accept onlt the variables which are declared in the interface
    var emp2: Emp = { 'name': 'Riya',
     'age': 21,
    display:():String=>{
        return "Hello this is meee";
    } };//salary variablre is optional
    console.log('****************')
    console.log("Employee name:" + emp1.name);
    console.log("Employee age:" + emp1.age);
    console.log("Employee salary:" + emp1.salary);
    console.log('****************')
    console.log("Employee name:" + emp2.name);
    console.log("Employee age:" + emp2.age);
    console.log("Employee details:" + emp2.display());
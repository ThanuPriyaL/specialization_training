export
class Student{
    id: number;
    name: string;
    marks: number;
    constructor(id: number, name: string, marks: number) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
}
class Teacher extends Student
{
    subject: string;
    constructor(id: number, name: string, marks: number,subject:string)
    {
        super(id, name, marks);
        this.subject = subject;
    }
    verify()
    {
        if (this.marks >= 35)
        {
            console.log(`Student name is ${this.name} and passed  in ${this.subject}`);

        }
        else {
            console.log('fail');
        }
    }
    }
var std1:Teacher = new Teacher(1, 'Thanu', 86,'English');
std1.verify()
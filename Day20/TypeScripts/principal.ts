import{Student} from './student'
class principal extends Student{
constructor(id:number,name:string,marks:number){
    super(id,name,marks)
    }
}
var pp:principal=new principal(1,'MinHo',75);
console.log(pp.name);
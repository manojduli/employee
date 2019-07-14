import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Empinterface } from './empinterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  employee: Empinterface[]; /* =
  [
    {
      empId: 1001,
      empName: 'Rahul',
      empSal: 9000,
      empDep: 'Java'
    },
    {
      empId: 1002,
      empName: 'Sachin',
      empSal: 19000,
      empDep: 'OraApps'
    },
    {
      empId: 1003,
      empName: 'Vikash',
      empSal: 29000,
      empDep: 'BI'
    }
  ];*/

b1: number;
b2: string;
b3: number;
b4: any;
  d: any;
  a: any;
  b: any;
  c: any;
  res: any;
addemp(a1: number, a2: string, a3: number, a4: string) {
  this.b1 = a1;
  this.b2 = a2;
  this.b3 = a3;
  this.b4 = a4;
  this.employee.push({"empId": this.b1,"empName": this.b2,"empSal": this.b3,"empDep": this.b4});
  /*this.employee.push({'empId': a1,'empName': a2,'empSal': a3,'empDep': a4});*/
}
delete(id: number) {
  this.employee.splice(id, 1);
}
updateemp(emp) {
  this.a = emp.empId;
  this.b = emp.empName;
  this.c = emp.empSal;
  this.d = emp.empDep;
  this.res = emp;
}
update(c1: number, c2: string, c3: number , c4: string) {
this.res.empId = c1;
this.res.empName = c2;
this.res.empSal = c3;
this.res.empDep = c4;
}

/*constructor(private httpService: HttpClient) {
  this.httpService.get('assets/empdata.json').subscribe(
     data => { this.employee = data as Empinterface[];
  },
  (err: HttpErrorResponse)=> {
    console.log(err.message);
  });
 }*/
}

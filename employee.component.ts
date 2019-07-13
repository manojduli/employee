import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  a: any;
  b: any;
  c: any;
  d: any;
  res: any;

  constructor() { }
  employee=
  
    [
      { 
        empId:1001,
        empName:"Rahul",
        empSal:9000,
        empDep:"Java"
        
      },
      {
        empId:1002
        ,empName:"Sachin",
        empSal:19000,
        empDep:"OraApps"
      },
      {empId:1003,
        empName:"Vikash",
        empSal:29000,
        empDep:"BI"
      },
      ];

  
  ngOnInit() {
  }

  addemployee(id:number,name:string,sal:number,dep:any){
   let t1=id;
   let t2=name;
   let t3=sal;
   let t4=dep;
   this.employee.push({"empId":t1,"empName":t2,"empSal":t3,"empDep":t4});
  }
  Delete(empId:number)
  {
      alert("Do you want to delete");
      this.employee.splice(empId,1)
  }
  update(emp)
  {
      this.a=emp.empId;
      this.b=emp.empName;
      this.c=emp.empSal;
      this.d=emp.empDep;
      this.res=emp;
  }
  update1(id1:number,name1:string,sal1:string,dep1:number)
  {
    alert("update empId,empName,empSal,empDep for"  +id1);
    this.res.empId=id1;
    this.res.empName=name1;
    this.res.empSal=sal1;
    this.res.empDep=dep1;


  }


}

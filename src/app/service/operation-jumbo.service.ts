import { Injectable } from '@angular/core';

@Injectable()
export class OperationJumboService {
  employeeRow:any;
  constructor() {
    this.employeeRow = [];
   }
  getEmployees():any{
    if(!this.employeeRow || this.employeeRow.length == 0){
      this.employeeRow = [
      {"name":"Tejas",
      "address":"Tejas Address",
      "id":"1"},
      {"name":"Tejas Chaudhari",
      "address":"Tejas Chaudhari Address",
      "id":"2"}
    ];
  }
    return this.employeeRow;
  }
  addEmployee(name: String, address: String):Object {
    var id =this.employeeRow.length+1;
    id=id.toString();
    this.employeeRow.push({"name":name,
    "address":address,
    "id":id});
    return  {"name":name,
    "address":address,
    "id":id};
  }

  deleteEmployee(ID: String):Object {
    var index = this.employeeRow.map(x => {
      return x.id;
    }).indexOf(ID);

    var abc = this.employeeRow.splice(index, 1);
    return abc;
  }
  returnEmployeeFromId(ID: String){
    var index = this.employeeRow.map(x => {
      return x.id;
    }).indexOf(ID);

    var abc = this.employeeRow[index];
    return abc;
  }
  updateEmployee(ID:String,name:String){
    var index = this.employeeRow.map(x => {
      return x.id;
    }).indexOf(ID);

    this.employeeRow[index].name = name;
  }
}

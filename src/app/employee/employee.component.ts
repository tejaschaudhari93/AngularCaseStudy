import { Component, OnInit } from '@angular/core';
import { OperationJumboService } from '../service/operation-jumbo.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeRows;
  constructor(private operationJumbo: OperationJumboService) {
    this.employeeRows = this.operationJumbo.getEmployees();
   }

  ngOnInit() {
  }
  add(name: string,address: string): void {
    name = name.trim();
    if (!name) { return; }
    address = address.trim();
    if (!address) { return; }
    var employeeAdded = this.operationJumbo.addEmployee(name, address);
    this.employeeRows = this.operationJumbo.getEmployees();
  }

  delete(id:String){
    this.operationJumbo.deleteEmployee(id);
  }

}

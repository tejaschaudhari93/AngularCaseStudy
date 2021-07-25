import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationJumboService } from '../service/operation-jumbo.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-emp',
  templateUrl: './detail-emp.component.html',
  styleUrls: ['./detail-emp.component.css']
})
export class DetailEmpComponent implements OnInit {
  employee:any;
  constructor( private route: ActivatedRoute, private serviceEmp:OperationJumboService, goBackEmployee: Location, private location: Location) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee(){
   var id =  this.route.snapshot.paramMap.get('id');
   this.employee= this.serviceEmp.returnEmployeeFromId(id.toString());
  }

  updateEmployee(){
    this.serviceEmp.updateEmployee(this.employee.id, this.employee.name);
  }

  goBackEmployee(){
    this.location.back();
  }

}

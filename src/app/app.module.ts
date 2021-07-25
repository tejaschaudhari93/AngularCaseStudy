import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './auth/auth.guard';
import { OperationJumboService } from './service/operation-jumbo.service';
import { DetailEmpComponent } from './detail-emp/detail-emp.component';
import { FormsModule }    from '@angular/forms';
const routes: Routes = [
  {path:"employee/detailemp/:id", component: DetailEmpComponent},
  {path: 'home', canActivate:[AuthGuard],component: HomeComponentComponent},
  {path: 'employee', component: EmployeeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HomeComponentComponent,
    EmployeeComponent,
    DetailEmpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AuthGuard,OperationJumboService],
  bootstrap: [AppComponent]
})
export class AppModule { }

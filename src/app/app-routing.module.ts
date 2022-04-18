import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveManagementCreateComponent } from './components/leave-management-create/leave-management-create.component';
import { LeaveManagementUpdateComponent } from './components/leave-management-update/leave-management-update.component';
import { LeaveManagementViewComponent } from './components/leave-management-view/leave-management-view.component';
import { TimesheetCreateComponent } from './components/timesheet-create/timesheet-create.component';
import { TimesheetUpdateComponent } from './components/timesheet-update/timesheet-update.component';
import { TimesheetViewComponent } from './components/timesheet-view/timesheet-view.component';
import { HomeComponent } from './components/home/home.component';
import { LeaveCalenderViewComponent } from './components/leave-calender-view/leave-calender-view.component';
import { LeaveCalenderCreateComponent } from './components/leave-calender-create/leave-calender-create.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { LoginComponent } from './components/loginAndSignup/login/login.component';
import { SignupComponent } from './components/loginAndSignup/signup/signup.component';
import { RegisterationUserViewComponent } from './components/registeration-user-view/registeration-user-view.component';
import { LeaveAppliedEmpListViewComponent } from './components/backend/leave-applied-emp-list-view/leave-applied-emp-list-view.component';
import { DashboardAdminListComponent } from './components/backend/Admin-Dashboard/dashboard-admin-list/dashboard-admin-list.component';
import { AdminCreateFormComponent } from './components/backend/Admin-Dashboard/admin-create-form/admin-create-form.component';
import { TimesheetInfoCreateComponent } from './components/backend/Timesheet-backend/timesheet-info-create/timesheet-info-create.component';
import { TimesheetInfoListComponent } from './components/backend/Timesheet-backend/timesheet-info-list/timesheet-info-list.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  // timesheet - module
  {
    path:"view",
    component: TimesheetViewComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "",
    component:HomeComponent

  },
  
  {
    path:"create",
    component: TimesheetCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    
    path:"edit/:id",
    component: TimesheetUpdateComponent,
    canActivate: [AuthGuard]
  },

  //leave management - module
  { path: "leave-management/view", component:LeaveManagementViewComponent, canActivate: [AuthGuard] },
  { path: "leave-management/create",component:LeaveManagementCreateComponent,  canActivate: [AuthGuard] },
  { path: "leave-management/edit/:id", component:LeaveManagementUpdateComponent,  canActivate: [AuthGuard] },
  
  //leave calender - module
  {path:"leave-calender/view",  component: LeaveCalenderViewComponent,  canActivate: [AuthGuard] },
  {path:"leave-calender/create", component:LeaveCalenderCreateComponent,  canActivate: [AuthGuard]},

  //user module

  { path:"user/view", component: UserViewComponent,  canActivate: [AuthGuard] },
  { path:"user/create", component: UserCreateComponent,  canActivate: [AuthGuard]},
  
  
  //login - module
  { path:"login" , component: LoginComponent },
  { path:"signup", component: SignupComponent },
  {path: "registered/user/view", component: RegisterationUserViewComponent, canActivate: [AuthGuard] },

  //leave apply - backend module 
  {path: "leave-apply/view", component:LeaveAppliedEmpListViewComponent,  canActivate: [AuthGuard] },

  //admin dashboard - backend
  {path: "admin-dashboard/view", component: DashboardAdminListComponent,  canActivate: [AuthGuard]  },
  {path: "admin/create", component:AdminCreateFormComponent,  canActivate: [AuthGuard]  },

  //timesheet-> backend

  {path: "timesheet/create", component: TimesheetInfoCreateComponent,  canActivate: [AuthGuard]},
  {path: "timesheet/view", component: TimesheetInfoListComponent,  canActivate: [AuthGuard]}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

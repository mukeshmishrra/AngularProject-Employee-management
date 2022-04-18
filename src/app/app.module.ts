import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TimesheetViewComponent } from './components/timesheet-view/timesheet-view.component';

import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { TimesheetUpdateComponent } from './components/timesheet-update/timesheet-update.component';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import ngx pagination
import { FilterPipeModule } from 'ngx-filter-pipe';  //<-- import ngx filterpipe

import { TimesheetCreateComponent } from './components/timesheet-create/timesheet-create.component';
import { LeaveManagementViewComponent } from './components/leave-management-view/leave-management-view.component';
import { LeaveManagementCreateComponent } from './components/leave-management-create/leave-management-create.component';
import { LeaveManagementUpdateComponent } from './components/leave-management-update/leave-management-update.component';
import { HomeComponent } from './components/home/home.component';
import { LeaveCalenderViewComponent } from './components/leave-calender-view/leave-calender-view.component';
import { LeaveCalenderCreateComponent } from './components/leave-calender-create/leave-calender-create.component';
import { LeaveCalenderUpdateDialogComponent } from './components/leave-calender-update-dialog/leave-calender-update-dialog.component';
import { LeaveCalenderFilterPipe } from './pipes/leave-calender-filter.pipe';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateDialogComponent } from './components/user-update-dialog/user-update-dialog.component';
import { SignupComponent } from './components/loginAndSignup/signup/signup.component';
import { LoginComponent } from './components/loginAndSignup/login/login.component';
import { RegisterationUserViewComponent } from './components/registeration-user-view/registeration-user-view.component';
import { ConfirmationAlertBoxComponent } from './components/confirmation-alert-box/confirmation-alert-box.component';
import { RegisterationUserEditDialogComponent } from './components/registeration-user-edit-dialog/registeration-user-edit-dialog.component';
import { LeaveAppliedEmpListViewComponent } from './components/backend/leave-applied-emp-list-view/leave-applied-emp-list-view.component';
import { LeaveApplyFormComponent } from './components/backend/leave-apply-form/leave-apply-form.component';


import { DashboardAdminListComponent } from './components/backend/Admin-Dashboard/dashboard-admin-list/dashboard-admin-list.component';
import { AdminCreateFormComponent } from './components/backend/Admin-Dashboard/admin-create-form/admin-create-form.component';
import { AdminUpdateDialogComponent } from './components/backend/Admin-Dashboard/admin-update-dialog/admin-update-dialog.component';
import { TimesheetInfoListComponent } from './components/backend/Timesheet-backend/timesheet-info-list/timesheet-info-list.component';
import { TimesheetInfoCreateComponent } from './components/backend/Timesheet-backend/timesheet-info-create/timesheet-info-create.component';
import { TimesheetInfoUpdateComponent } from './components/backend/Timesheet-backend/timesheet-info-update/timesheet-info-update.component';
import { UniqueEmailValidatorDirective } from './unique-email-validator.directive';
import { LogoutComponent } from './components/loginAndSignup/logout/logout.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
   
    TimesheetViewComponent,
   
    TimesheetUpdateComponent,
    TimesheetCreateComponent,
    LeaveManagementViewComponent,
    LeaveManagementCreateComponent,
    LeaveManagementUpdateComponent,
    HomeComponent,
    LeaveCalenderViewComponent,
    LeaveCalenderCreateComponent,
    LeaveCalenderUpdateDialogComponent,
    LeaveCalenderFilterPipe,
    UserViewComponent,
    UserCreateComponent,
    UserUpdateDialogComponent,
    SignupComponent,
    LoginComponent,
    RegisterationUserViewComponent,
    ConfirmationAlertBoxComponent,
    RegisterationUserEditDialogComponent,
    LeaveAppliedEmpListViewComponent,
    LeaveApplyFormComponent,

    DashboardAdminListComponent,
    AdminCreateFormComponent,
    AdminUpdateDialogComponent,
    TimesheetInfoListComponent,
    TimesheetInfoCreateComponent,
    TimesheetInfoUpdateComponent,
    UniqueEmailValidatorDirective,
    LogoutComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatListModule,
    MatBadgeModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    FlexLayoutModule,

    NgxPaginationModule,
    FilterPipeModule,
   

    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

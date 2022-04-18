import { Component, OnInit } from '@angular/core';
import { AdminDashboardModel } from 'src/app/models/backend/admin-dashboard/admin-dashboard-model';
import { AdminDashboardServiceService } from 'src/app/services/backend/admin-dashboard/admin-dashboard-service.service';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AdminUpdateDialogComponent } from '../admin-update-dialog/admin-update-dialog.component';
import { FilterPipe } from 'ngx-filter-pipe';
import { ConfirmationAlertBoxComponent } from 'src/app/components/confirmation-alert-box/confirmation-alert-box.component';

@Component({
  selector: 'app-dashboard-admin-list',
  templateUrl: './dashboard-admin-list.component.html',
  styleUrls: ['./dashboard-admin-list.component.css']
})
export class DashboardAdminListComponent implements OnInit {

  exform!: FormGroup;
  isEdit = false;
  alluser! : AdminDashboardModel[];
  // searchkey:any;

  userFilter: any = { firstname: '' };
  totalLength:any;
  p: number = 1;

  constructor(private _service:AdminDashboardServiceService, private dialog:MatDialog) { }

  ngOnInit(): void {

    this.getLatestUser();
  }


  getLatestUser(){
      this._service.getAlluser().subscribe(
        (res)=>{
          this.alluser = res;
        },
        (error)=>{
          alert("Something went Wrong" + error)
        }
      );
  }

  editData(user:any){
    this.dialog.open(AdminUpdateDialogComponent,{
      data:user
    }).afterClosed().subscribe(
      (res)=>{
        this.getLatestUser();
      }
    );
  }

  deleteuser(user:any){
    this.dialog.open(ConfirmationAlertBoxComponent,{
      width:"40%",
      data:user
    }).afterClosed().subscribe(res=>{
  
      if(res){

        this._service.deleteuser(user).subscribe(()=>{
          this.getLatestUser();
          return res;
      })

      }
    })
   
  }


  edituser(user:any){
   // this.isEdit=true;
   // this.userobj1=user;
   
  }

  updateuser(){
    // this.isEdit= !this.isEdit;
    // this.dashboardservice.updateuser(this.userobj1).subscribe(()=>{
    // this.getLatestUser()
    // this.exform.reset();
    // alert("updated sucessfully")
    // })
    }


}

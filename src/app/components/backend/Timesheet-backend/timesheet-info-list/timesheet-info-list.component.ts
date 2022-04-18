import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,NgForm,FormControl,FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TimesheetInfo } from 'src/app/models/backend/timesheet-backend/timesheet-info';
import { TimesheetInfoService } from 'src/app/services/backend/timesheet/timesheet-info.service';
import {MatDialog} from '@angular/material/dialog';
import { TimesheetCreateComponent } from 'src/app/components/timesheet-create/timesheet-create.component';
import { TimesheetInfoUpdateComponent } from '../timesheet-info-update/timesheet-info-update.component';
import { ConfirmationAlertBoxComponent } from 'src/app/components/confirmation-alert-box/confirmation-alert-box.component';

@Component({
  selector: 'app-timesheet-info-list',
  templateUrl: './timesheet-info-list.component.html',
  styleUrls: ['./timesheet-info-list.component.css']
})
export class TimesheetInfoListComponent implements OnInit {

  alluser !: TimesheetInfo[];
  userFilter: any = { username: '' };
  
  totalLength:any;
  page:number= 1;


  constructor(private _service:TimesheetInfoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getHomeData();
  }

  //GETTING ALL DATA -->  JSON FILE
  getHomeData(){
    this._service.getAllData().subscribe(
      (res)=>{
        this.alluser = res;
      },
      (error)=>{
        alert("something went wrong!! please try again lator");
      }
    );
  }


  edituser(user:any){
    this.dialog.open(TimesheetInfoUpdateComponent,{
      data:user
    }).afterClosed().subscribe(
      (res)=>{
        this.getHomeData();
        return res;
      }
    );
  

  }

  deleteuser(user:any){


    this.dialog.open(ConfirmationAlertBoxComponent,{
      width:"40%",
      data:user
    }).afterClosed().subscribe(res=>{
  
      if(res){

        this._service.deleteUser(user).subscribe(()=>{
          this.getHomeData();
          return res;
      })

      }
    })
  }
}


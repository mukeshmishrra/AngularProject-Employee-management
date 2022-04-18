import { Component, OnInit } from '@angular/core';
import { LeaveManagementService } from 'src/app/services/leave-management.service';
import { LeaveManagement } from 'src/app/models/leave-management';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationAlertBoxComponent } from '../confirmation-alert-box/confirmation-alert-box.component';


@Component({
  selector: 'app-leave-management-view',
  templateUrl: './leave-management-view.component.html',
  styleUrls: ['./leave-management-view.component.css']
})
export class LeaveManagementViewComponent implements OnInit {

  constructor( private _leaveServices:LeaveManagementService, private dialog:MatDialog) { }
  
  leaveManagement:any=[];
  
  displayedColumns: string[] = ['username','from_date', 'to_date', 'reason', 'status','actions'];
 
  ngOnInit(): any {
    this.getHomeData();
  }

  getHomeData(){
    //getting all leave records using services
    this._leaveServices.getAllLeaveRecords().subscribe(
      (result)=>{
        console.log(result); //working
         this.leaveManagement = result;       
      },
      (error)=>{
        alert("server not available");
      }
    );
  }

  delete_success:boolean = false; 
  //Deleting data from the table
  deleteSelectedData(id:any){
    this.dialog.open(ConfirmationAlertBoxComponent,{
      width:"40%",
      data:id
    }).afterClosed().subscribe(res=>{
  
      if(res){

        this._leaveServices.deleteSelectedData(id).subscribe(()=>{
          // this.ngOnInit();
          this.getHomeData();
        //display error msg
        this.delete_success=true;
        setTimeout(() => {
          this.delete_success = false;
          
     }, 3000)
          return res;
      })

      }
    })

  }
  
}

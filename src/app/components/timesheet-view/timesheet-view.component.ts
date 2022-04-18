import { Component, OnInit } from '@angular/core';
import { TimesheetService } from '../../services/timesheet.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationAlertBoxComponent } from '../confirmation-alert-box/confirmation-alert-box.component';

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styleUrls: ['./timesheet-view.component.css']
})
export class TimesheetViewComponent implements OnInit {

  constructor(private timesheet_service: TimesheetService, private dialog:MatDialog) { }
  
  emp_timesheet:any = [];
  //getting timesheet data from service class

  ngOnInit(): void {

        this.getHomeData();
  }

  getHomeData(){
      
    this.timesheet_service.getEmployeeWorkingTimeData().subscribe(
      (data)=>{
        console.log("testing")
        console.log(data);
        this.emp_timesheet=data;
      },
      (error)=>{
        console.log("server not responding")
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

        this.timesheet_service.deleteSelectedData(id).subscribe(()=>{
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveCalenderModel } from 'src/app/models/leave-calender-model';
import { LeaveCalenderService } from 'src/app/services/leave-calender.service'
import { MatDialog } from '@angular/material/dialog';
import { LeaveCalenderUpdateDialogComponent } from 'src/app/components/leave-calender-update-dialog/leave-calender-update-dialog.component';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ConfirmationAlertBoxComponent } from '../confirmation-alert-box/confirmation-alert-box.component';


@Component({
  selector: 'app-leave-calender-view',
  templateUrl: './leave-calender-view.component.html',
  styleUrls: ['./leave-calender-view.component.css']
})
export class LeaveCalenderViewComponent implements OnInit {

    leave!:LeaveCalenderModel[];
    public leaveCalenderSearchForm!:FormGroup;

    data!:string;

    //success message handling
    delete_Success: boolean = false;

  constructor(
    public dialog: MatDialog,
    private _service:LeaveCalenderService,
    private router:Router,
    private formBuilder:FormBuilder
    ) { }




  ngOnInit(): void {
    this.getHomeData();
    
    //search year filter form create
    this.leaveCalenderSearchForm = this.formBuilder.group({
      year:[''],
    })

  }

 getHomeData(){
   this._service.getAllData().subscribe((result)=>{
      this.leave = result;
      console.log("view part is done!!")
   },
   (error)=>{
     alert("server not responding..")
   });
 }


 deleteData(id:number){
   // console.log(id);
    this.dialog.open(ConfirmationAlertBoxComponent,{
      width:"40%",
      data: id
    }).afterClosed().subscribe(
      (res)=>{
        if(res){
          this._service.delete(id).subscribe(
            ()=>{
              this.delete_Success=true;
              setTimeout(() => {
                this.delete_Success=false;
                this.getHomeData();
              }, 2000);
            });
        }
      }
    );
  }

 editData(item:any){
  
   //this will open update form as popup
   this.dialog.open(LeaveCalenderUpdateDialogComponent,{
    width:'50%', 
    data:item
   }).afterClosed().subscribe(
     val=>{
       //this will refresh the data automatically after update dialog close
       this.getHomeData();
     }
   );


 }
 
}

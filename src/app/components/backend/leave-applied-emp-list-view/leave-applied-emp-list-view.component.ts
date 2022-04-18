import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LeaveService } from 'src/app/services/backend/leave.service';
import { LeaveApplyFormComponent } from '../leave-apply-form/leave-apply-form.component';
//model 
import { LeaveModel } from './leave-model';
import { Router } from '@angular/router';
import { ConfirmationAlertBoxComponent } from '../../confirmation-alert-box/confirmation-alert-box.component';

@Component({
  selector: 'app-leave-applied-emp-list-view',
  templateUrl: './leave-applied-emp-list-view.component.html',
  styleUrls: ['./leave-applied-emp-list-view.component.css']
})
export class LeaveAppliedEmpListViewComponent implements OnInit {
  displayedColumns : string[] = ['id', 'username', 'fromdate', 'todate','reason','dateofsubmission','status','actions'];
  dataSource!      : MatTableDataSource<LeaveModel>;
  dateSubmit!       :Date;
  date              = new Date()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
              private apis:LeaveService,
              private dialog:MatDialog,
              private routes : Router) { }

  ngOnInit(): void {
    this.GetDtata()
  }

  // get leave data
GetDtata(){
  this.apis.getData().subscribe({
    next:(res:any)=>{
      this.dataSource           = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort      = this.sort;
      this.dateSubmit           = new Date();
      this.dataSource.data = res;
    },
    error:(res:any)=>{
      alert('error while fetchong data');
      return res;
    }
  })
}



//create form 
openDialog() {
  this.dialog.open(LeaveApplyFormComponent,{
    panelClass:"full-width-dialog"
  }).afterClosed().subscribe((res:any)=>{
    this.GetDtata();
    return res;

  });

}







// filter method
applyFilter(event: any) {
  const filterValue      = (event.target as HTMLInputElement).value;
   
   this.dataSource.filter = filterValue.trim().toLowerCase();

 if (this.dataSource.paginator) {
   this.dataSource.paginator.firstPage();
 }
}



// delete leave
deleteData(row:any){
 
  this.dialog.open(ConfirmationAlertBoxComponent,{
    width:"40%",
    data:row
  }).afterClosed().subscribe(res=>{

    if(res){
      this.apis.deleteData(row.id).subscribe(res=>{
        this.GetDtata();
        return res;
      })  
    }
  })
  }


  editData(user:any){
    this.dialog.open(LeaveApplyFormComponent,{
      panelClass:'edit-dialog',
      data:user
    }).afterClosed().subscribe(res=>{
      this.GetDtata();
      return res;
    })
  }


  // create navigate
createLeave(){
  this.routes.navigate(['/apply-leave/create']);
}



}

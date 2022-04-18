import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { ConfirmationComponent } from '../confirmation/confirmation.component';
// import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { LoginModule } from 'src/app/models/login-module';
import { ConfirmationAlertBoxComponent } from '../confirmation-alert-box/confirmation-alert-box.component';
import { RegisterationUserEditDialogComponent } from '../registeration-user-edit-dialog/registeration-user-edit-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration-user-view',
  templateUrl: './registeration-user-view.component.html',
  styleUrls: ['./registeration-user-view.component.css']
})
export class RegisterationUserViewComponent implements OnInit {

  displayedColumns: string[] = ['firstname','lastname', 'emailid', 'mobile','password', 'designation','actions'];
  dataSource!: MatTableDataSource<any>;
  public allUser !: LoginModule[];
  
  constructor(
    private apiServices:UserAuthService, public dialog:MatDialog, private router:Router
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getData();

  }

   // getusers
   getData(){
    this.apiServices.getData().subscribe({
      next:(res:any)=>{
        this.dataSource           = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort      = this.sort
        this.allUser              = res;
      },error:(res:any)=>{
        alert(`error occurs ${res}`);
      }
    })
  }


   // update user
  updateUser(user:any){
    this.dialog.open(RegisterationUserEditDialogComponent,{
      width:"40&%",
      data:user
    }).afterClosed().subscribe(res=>{
      this.getData();
      return res;
    })
  }

  // delete user
  deleteUser(user:any){
   // console.log("deleted");
 
    this.dialog.open(ConfirmationAlertBoxComponent,{
      width:"40%",
      data:user
    }).afterClosed().subscribe(res=>{
      if(res){
        this.apiServices.deleteData(user.id).subscribe(res=>{
          this.getData();
          return res;
        })
      }
      return res;
    })
  }
}
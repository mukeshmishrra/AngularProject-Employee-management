import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user'; 
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserUpdateDialogComponent } from '../user-update-dialog/user-update-dialog.component';
import { ConfirmationAlertBoxComponent } from '../confirmation-alert-box/confirmation-alert-box.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
 
  user!:User[];
  delete_success:boolean=false;

  constructor(private user_Service:UserService ,private router:Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getHomeData();
  }

  getHomeData(){
      this.user_Service.getData().subscribe(
        (res)=>{
            //console.log(res)
            this.user =  res;

        },
        (error)=>{
          alert('server not available')
        }
      );
  }


  createPage(){
    this.router.navigate(['/user/create']);
  }

  deleteData(id:number){
   this.dialog.open(ConfirmationAlertBoxComponent,{
     width:"40%",
     data:id
   }).afterClosed().subscribe(
     (res)=>{
       if(res){
         this.user_Service.delete(id).subscribe(
           ()=>{
            this.getHomeData();
            //display error msg
            this.delete_success=true;
            setTimeout(() => {
              this.delete_success = false;
              
         }, 3000)
              return res;
    

           },
           (error)=>{
             console.log("server not responding");
           }
         );
       }
     }
   );

  }

  editData(item:any){
    //console
    this.dialog.open(UserUpdateDialogComponent,
      {
        width:"50%",
        data:item
      }
      ).afterClosed().subscribe(
        (res)=>{
          //this will refresh the data automatically after update dialog close
          this.getHomeData();
        },
        (error)=>{
          alert("updation failed..!")
        }

        );
  }

}

import { Component, OnInit,  Inject} from '@angular/core';
import { AdminDashboardModel } from 'src/app/models/backend/admin-dashboard/admin-dashboard-model';
import { AdminDashboardServiceService } from 'src/app/services/backend/admin-dashboard/admin-dashboard-service.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 



@Component({
  selector: 'app-admin-update-dialog',
  templateUrl: './admin-update-dialog.component.html',
  styleUrls: ['./admin-update-dialog.component.css']
})
export class AdminUpdateDialogComponent implements OnInit {

  alluser!:AdminDashboardModel[];
  exform!: FormGroup;
  dashModelObj  = new AdminDashboardModel();
  nonWhitespaceRegExp: RegExp = new RegExp("\\S");
  success_message:boolean=false;
	
 
	


  userobj1={

    date         : '',
    firstname    : '',
    lastname     : '',
    email        :  '',
    password     : '',
    role         : '', 
    designation  : '',
    
  }

  constructor(
    private _service:AdminDashboardServiceService, 
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataFetch:any, 
    private dataRef:MatDialogRef<AdminUpdateDialogComponent>,
    private router: Router
    ) 
    { 

    }

  ngOnInit(): void {


    this.exform = this.formBuilder.group({
      date          : ['',Validators.required,],
      firstname     : ['',[Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]],
      lastname      : ['',[Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]],
      email         : ['', [Validators.required, Validators.email] ],
      role         : ['', [Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]],
      designation : ['',[Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]],
      'password': new FormControl(null,[Validators.required,
                                        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/),
                                        Validators.minLength(8)]),
     
    });
    
    //console.log(this.dataFetch) -- success
        console.log(this.dataFetch.date)
    if(this.dataFetch){

      this.userobj1 = this.dataFetch;
      // this.exform.controls['date'].setValue(this.dataFetch.date);
      // this.exform.controls['firstname'].setValue(this.dataFetch.firstname);
      // this.exform.controls['lastname'].setValue(this.dataFetch.lastname);
      // this.exform.controls['password'].setValue(this.dataFetch.password);
      // this.exform.controls['email'].setValue(this.dataFetch.email);
      // this.exform.controls['role'].setValue(this.dataFetch.role);
      // this.exform.controls['designation'].setValue(this.dataFetch.designation);

    }
  }


  
  updateUser(){
    
    if(this.exform.valid){
      //console.log(this.exform.value);
        this._service.updateuser(this.dataFetch.id,this.exform.value).subscribe(
          (res)=>{

           
	
            //success message display
                      this.success_message=true;
                      setTimeout(() => {
                        this.success_message = false;
                        this.exform.reset();
                         //redirect to view 
                         this.dataRef.close();
                   }, 3000)

           
          },

          (error)=>{
              alert("Something went wrong !! please try again lator")
          }
        );
    }
  
    // this.isEdit= !this.isEdit;
    // this.dashboardservice.updateuser(this.userobj1).subscribe(()=>{
    // this.getLatestUser()
    // this.exform.reset();
    // alert("updated sucessfully")
    // })
    }


}

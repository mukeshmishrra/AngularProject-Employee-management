import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDashboardModel } from 'src/app/models/backend/admin-dashboard/admin-dashboard-model';
import { AdminDashboardServiceService } from 'src/app/services/backend/admin-dashboard/admin-dashboard-service.service';

@Component({
  selector: 'app-admin-create-form',
  templateUrl: './admin-create-form.component.html',
  styleUrls: ['./admin-create-form.component.css']
})

export class AdminCreateFormComponent implements OnInit {

  exform!: FormGroup;
 // dashModelObj: dashModel = new dashModel();
  isEdit = false;
  alluser !:AdminDashboardModel[];
  nonWhitespaceRegExp: RegExp = new RegExp("\\S");
  success_message:boolean=false;
	
 
	
  

  constructor(
    private formbuilder: FormBuilder,
    private  _service : AdminDashboardServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.exform = this.formbuilder.group({
      date          : ['',Validators.required,],
      firstname     : ['',[Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]],
      lastname      : ['',[Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]],
      email         : ['', [Validators.required, Validators.email] ],
      role         : ['', [Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]],
      designation : ['',[Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]],
      'password': new FormControl(null,[Validators.required,
                                        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/),
                                        Validators.minLength(8)]),
     })

  }

  adduser(){
    if(this.exform.valid){
      console.log(this.exform.value);
      this._service.createuser(this.exform.value).subscribe(
        (res)=>{
          this.success_message=true;
          setTimeout(() => {
            this.success_message = false;
            this.exform.reset();
           
          //redirecting to dashboard view
          this.router.navigate(['/admin-dashboard/view']);
       }, 3000)


        },
        (error)=>{
          alert("something went wrong! please try again lator")
        }
      );

    }
  }
}
import { Component, OnInit } from '@angular/core';
import { TimesheetInfo } from 'src/app/models/backend/timesheet-backend/timesheet-info';
import { TimesheetInfoService } from 'src/app/services/backend/timesheet/timesheet-info.service';
import { FormGroup,Validators,NgForm,FormControl,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';



@Component({
  selector: 'app-timesheet-info-create',
  templateUrl: './timesheet-info-create.component.html',
  styleUrls: ['./timesheet-info-create.component.css']
})
export class TimesheetInfoCreateComponent implements OnInit {

 
  minDate!: Date;
  maxDate!: Date;
  employeeform!:FormGroup;
  employeeModelObj: TimesheetInfo = new TimesheetInfo();

  alluser !:TimesheetInfo[];
  isEdit = false;
  searchkey:any;

  userobj={
    date    :'',
    project :'',
    username    :'',
    description :'',
    no_of_hrs    :'',
  }

  constructor(
    private fb : FormBuilder, 
    private dateAdapter: DateAdapter<Date>,
    private route:Router,
    private router:ActivatedRoute,
    private _service:TimesheetInfoService)
     {
      this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy(dateformat)
      const currentYear = new Date().getFullYear()
      this.minDate = new Date(currentYear - 0, 1, 0);
       this.maxDate = new Date(currentYear + 1, 11, 31)
     }

     totalLength:any;
     page:number= 1;
     nonWhitespaceRegExp: RegExp = new RegExp("\\S");
     success_message:boolean=false;

  ngOnInit(): void {
    this.employeeform = this.fb.group({
      date    : ['',Validators.required,],
      project : ['',Validators.required],
      username    : ['',[Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]],
      description : ['',[Validators.required, Validators.pattern(this.nonWhitespaceRegExp)] ],
      no_of_hrs    : ['',Validators.required],  
 })
  }



  adduser(){
    if(this.employeeform.valid){
      // console.log(this.employeeform.value)

      this._service.createUser(this.employeeform.value).subscribe(
        (res)=>{
            //success message display
            this.success_message=true;
            setTimeout(() => {
              this.success_message = false;
              this.employeeform.reset();
               //redirect to view 
               this.route.navigate(['/timesheet/view']);
         }, 3000)

           
           
        },
        (error)=>{
          alert("something went wrong!!")
        }
      );
    }
  }

}

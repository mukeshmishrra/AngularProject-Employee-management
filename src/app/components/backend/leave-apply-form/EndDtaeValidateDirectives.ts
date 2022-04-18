import { HttpClient } from "@angular/common/http";
import {  AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";


// export class EndDateValidations {
// constructor (public apiService:HttpClient ){}
//  emailValidation(email:AbstractControl){
// if(email){
//     const Email = email.value;
//     const Validation = this.apiService.get<any> ("http://localhost:5000/login_modules").subscribe((res:any)=>{
//         const EmailValidationsApi = res.data
//         const validations = EmailValidationsApi.emailid.find((mail:any)=>{
//             return mail
//         });
//         if(validations ===Email ){
// return {isValid:true}
//         }
//         });
    
// }
// }

// }

// async email validation
// async validation



// To validate password and confirm password
export function CompareDatesEnd(control:AbstractControl):any {
    
    if(control){
        const endDate =control.value ;
        const startDate = control.root.get('fromDate');
        if(startDate){
            const sDate = startDate.value;
            if(endDate < sDate){
                return {
                    isError :true
                };
            }
        }
    }
    }

    export function NameValidates(control:AbstractControl):any{
     const nameSpecial : RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

     if(control.value && nameSpecial.test(control.value)){
         return {
             isValid : true
         }
     }
        }

        // email validation
        export function emailValidation(control:AbstractControl):any{
        const apiService = HttpClient;

        }
    
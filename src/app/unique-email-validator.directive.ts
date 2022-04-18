import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UserAuthService } from './services/user-auth.service';

export function uniqueEmailValidator(authservice: UserAuthService):AsyncValidatorFn{
 return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{
  return authservice.getUserByEmail(control.value).pipe(
    map(users=>{
      return users && users.length > 0 ? {'uniqueEmail':true}: null; 
    })
  );
 };
}



@Directive({
  selector: '[uniqueEmail]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi:true }]
})
export class UniqueEmailValidatorDirective implements AsyncValidator{

  constructor(private auth_service:UserAuthService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueEmailValidator(this.auth_service)(control);
  }

}

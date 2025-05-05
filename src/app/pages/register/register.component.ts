import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly usersService =inject(UsersService)
  private readonly router=inject(Router);
  private readonly formBuilder=inject(FormBuilder)
 

  isloading:boolean=false
  msgError:string="";
  isSuccess:string=''

  register:FormGroup=this.formBuilder.group({
    name:[null,[Validators.required , Validators.minLength(3),Validators.maxLength(20)]],
    email:[null,[Validators.required , Validators.email]],
    password:[null],
    rePassword:[null,[]],
    dateOfBirth:[null,[]],
    gender:[null,[]],
  },{validators:this.confirmpassword})







submitForm():void{
 
  if(this.register.valid){
    this.isloading=true
    this.usersService.signUp(this.register.value).subscribe({
      next:(res)=>{
       console.log(res);
       if(res){
        this.isSuccess=res.messages

       setTimeout(() => {
        this.router.navigate(['/login'])
       }, 500);

       }
       this.isloading=false
       
      }
      ,
      error:(err)=>{
        console.log(err);
        this.isloading=false
        this.msgError=err.error.message;
        
      }
    })
  }
  else{
    this.register?.setErrors({mismatch:true})
    this.register.markAllAsTouched();
  }
  
  
  
}

confirmpassword(group:AbstractControl){             //  to valid rePassword

const password =group.get('password')?.value
const rePassword =group.get('rePassword')?.value

return password===rePassword? null : {mismatch:true};


}

}

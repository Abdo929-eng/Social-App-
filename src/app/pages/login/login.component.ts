
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';


import { UsersService } from '../../core/services/users.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly usersService =inject(UsersService)
  private readonly router=inject(Router);
   private readonly formBuilder=inject(FormBuilder)

  isloading:boolean=false
  msgError:string="";
  isSuccess:string=''

  loginForm:FormGroup=this.formBuilder.group({
    email:[null,[Validators.required , Validators.email]],
    password:[null],
   
  })



submitForm():void{
  if(this.loginForm.valid){
    this.isloading=true
    this.usersService.signin(this.loginForm.value).subscribe({
      next:(res)=>{
       console.log(res);
       if(res.message==="success"){
        this.isSuccess=res.message

        localStorage.setItem('userToken' , res.token)
        
        this.usersService.safeUserData();

       setTimeout(() => {
        this.router.navigate(['/timeline'])
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
  
  
  
}


}


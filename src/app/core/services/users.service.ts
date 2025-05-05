import { jwtDecode } from "jwt-decode";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from "../environment/environment";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  userData:any=null

  signUp(Data:object):Observable<any>{
    return this.httpClient.post(`https://linked-posts.routemisr.com/users/signup`,Data)
  }

  signin(Data:object):Observable<any>{
    return this.httpClient.post(`https://linked-posts.routemisr.com/users/signin`,Data)
  }

  changePassword(Data:object):Observable<any>{
    return this.httpClient.patch(`${environment.baseUrl}/users/change-password`,Data)
  }


  uploadProfilePhoto(Data:object):Observable<any>{
    return this.httpClient.put(`${environment.baseUrl}/users/upload-photo` , Data)
  }

  getLoggedUserData():Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}/users/profile-data`)
  }

  safeUserData():void{
  
  if(localStorage.getItem('userToken')!==null){
    this.userData= jwtDecode(localStorage.getItem('userToken')!)
  }
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }





  createPosts(data:object):Observable<any>{
    return this.httpClient.post(`https://linked-posts.routemisr.com/posts`,data 
     
    )
  }

  getAllPosts():Observable<any>{
    return this.httpClient.get(`https://linked-posts.routemisr.com/posts?limit=50`
     
    )    //ngx-infinite-scroll   اعمل سيرش عن علشان يغير في الصفحه
  }

  getMyPosts():Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}/users/664bcf3e33da217c4af21f00/posts`)
  }

  getSinglePosts(postId:any):Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}/posts/${postId}`)
  }
  
  updatePosts(postId:any,data:object):Observable<any>{
    return this.httpClient.put(`${environment.baseUrl}/posts/${postId}`,data)
  }

  deletePosts(postId:any):Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/posts/${postId}`)
  }
}

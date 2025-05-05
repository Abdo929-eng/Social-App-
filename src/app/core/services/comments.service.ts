import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }


 createComment(data:object):Observable<any>{
    return this.httpClient.post(`https://linked-posts.routemisr.com/comments`,data

     
    )
  }
  getPostComment(postId:any):Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}/posts/${postId}/comments`
     
    )
  }

  UpdateComment(commentId:any , data:object):Observable<any>{
    return this.httpClient.put(`${environment.baseUrl}/comments/${commentId}` , data)
  }

  deleteComment(commentId:any):Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/comments/${commentId}`)
  }

}

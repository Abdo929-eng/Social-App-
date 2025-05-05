
import { Component, inject, Input, input, OnInit } from '@angular/core';
import { CommentsService } from '../../../core/services/comments.service';
import { Icomments } from '../../../core/interfaces/Icomments/icomments';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comments',
  imports: [DatePipe,ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  private readonly commentsService=inject(CommentsService)
  private readonly formBuilder=inject(FormBuilder)
  @Input({required:true}) postId!:string 

  getComment:Icomments[]=[]
  commentGroup!:FormGroup
 

  ngOnInit(): void {

    this.commentGroup=new FormGroup({
      content:new FormControl(null),
      post:new FormControl(this.postId)
     
    })



     this.commentsService.getPostComment(this.postId).subscribe({
      next:(res)=>{
        
        this.getComment=res.comments;
      },
    
     })


     
  }

  sendComment():void{
  this.commentsService.createComment(this.commentGroup).subscribe({
  next:(res)=>{
   console.log(res);
   this.getComment=res.comments;
  },
  error:(err)=>{
    console.log('Error occurred:', err.message);
    
  }
  })
   }

}

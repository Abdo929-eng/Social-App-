import { DatePipe } from '@angular/common';
import { Iposts } from '../../core/interfaces/Iposts/iposts';
import { PostsService } from './../../core/services/posts.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommentsComponent } from "../../shared/ui/comments/comments.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-timeline',
  imports: [DatePipe, CommentsComponent,FormsModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {

private readonly postsService=inject (PostsService)

postsData:Iposts[]=[];
savedFile!:File
content:string=''

ngOnInit(): void {
 this.getPosts()
}
getPosts():void{
    this.postsService.getAllPosts().subscribe({
      next:(res)=>{
        console.log(res.posts);
        this.postsData=res.posts;
        
      },
      error:(err)=>{
        console.log(err);

      }
    })
}

changeImage(e:Event):void{
const input=e.target as HTMLInputElement
  if(input.files && input.files.length>0){
  this.savedFile=input.files[0];
  console.log(input.files[0]);
  
  }
}


createPost():void{
  const formData=new FormData()
  formData.append('body',this.content);
  formData.append('image',this.savedFile)
 
  
  this.postsService.createPosts(formData).subscribe({
    next:(res)=>{
     console.log(res);
     
    },
    error:(err)=>{
      console.log('Error occurred:', err.message);
      
    }
  })
}

}

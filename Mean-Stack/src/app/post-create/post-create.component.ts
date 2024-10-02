import { Component, ViewChild } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostListComponent } from "../post-list/post-list.component";

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, PostListComponent],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {
  addedPost: any[]=[]

  addText(content:string,title:string){
    const post ={
      "postTitle" : title,
      "postContent":content
    }
    this.addedPost?.push(post)
    
  }

}

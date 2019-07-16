import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Post } from '../post.model'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() postCreated=new EventEmitter<Post>();
  enteredTitle=''
  enteredContent=''
  onAddPost(){
    const post: Post={ title:this.enteredTitle, content:this.enteredContent};
    this.postCreated.emit(post);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  posts=[
    {title:"first", content:"First Post"},
    {title:"second", content:"2 Post"},
    {title:"third", content:"3 Post"}
  ]

}

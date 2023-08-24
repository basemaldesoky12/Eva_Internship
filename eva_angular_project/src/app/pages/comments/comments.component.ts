import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments : any
  id : any
  constructor(private commentService : CommentsService, 
    private route : ActivatedRoute,
    public nav : NavbarService){
  this.id = route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.nav.show()
    this.commentService.getComment(this.id).subscribe(data=>{
      console.log(data)
      this.comments=data
    })
  }

}

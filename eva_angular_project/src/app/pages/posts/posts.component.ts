import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { PostService } from 'src/app/services/post.service';
import { IPosts } from 'src/app/shared-classes-types/IPosts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  PostsList !: IPosts[]
  itemsPerPage =9
  p =1
constructor(private postService : PostService, 
  private router : Router,
  public nav : NavbarService){}
ngOnInit(): void {
  this.nav.show()
  this.postService.getAllPosts().subscribe(data=>{
    this.PostsList = data
    console.log(data)
  })
 

}
// pageChanged(event: any): void {
//   this.currentPage = event.page;
// }
navigateToComments(id : any){
this.router.navigate(['comments','post',id])
}
}

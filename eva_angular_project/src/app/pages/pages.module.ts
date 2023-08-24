import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    ProductsComponent,
    WelcomeComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }

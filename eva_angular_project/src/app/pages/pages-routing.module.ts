import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'; // Adjust component paths
import { ProductsComponent } from './products/products.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthGuard } from '../guards/auth.guard';

const pagesRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    {path : 'products', component : ProductsComponent, canActivate:[AuthGuard] },
    {path : 'posts', component : PostsComponent, canActivate:[AuthGuard]},
    {path : 'users', component : UsersComponent, canActivate:[AuthGuard]},
    {path : 'comments/post/:id', component : CommentsComponent, canActivate:[AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

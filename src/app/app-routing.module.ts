import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PostComponent } from './pages/post/post.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: ':post-slug',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

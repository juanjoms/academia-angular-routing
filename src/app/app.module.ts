import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

// Services
import { UserService } from './services/user.service';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'users', children: [
    { path: '', component: UsersComponent },
    { path: ':id', component: UserDetailComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    NotFoundComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

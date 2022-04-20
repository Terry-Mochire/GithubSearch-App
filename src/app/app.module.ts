import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DateCreatedPipe } from './date-created.pipe';
import { ReposComponent } from './repos/repos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoUserComponent } from './no-user/no-user.component';
import { NavComponent } from './nav/nav.component';
import { HoverDirective } from './hover.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DateCreatedPipe,
    ReposComponent,
    NoUserComponent,
    NavComponent,
    HoverDirective
  ],
  imports: [

    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path:'user',component: UserComponent},
      {path: 'repoes',component: ReposComponent},
      {path:'',redirectTo:'/user',pathMatch:'full'},
      {path:'**',component:NoUserComponent}
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DateCreatedPipe } from './date-created.pipe';
import { ReposComponent } from './repos/repos.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DateCreatedPipe,
    ReposComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

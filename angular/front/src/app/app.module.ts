import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { ChooseListSearchComponent } from './choose-list-search/choose-list-search.component';
import { LoginComponent } from './login/login.component';
import { DisplayDetailsComponent } from './display-details/display-details.component'

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    ChooseListSearchComponent,
    LoginComponent,
    DisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

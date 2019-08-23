import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule } from '@angular/material';
import {  ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,    
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

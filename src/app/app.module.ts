import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { AppComponent } from './app.component';
import { MatBadgeModule} from '@angular/material/badge'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar' ; 
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , 
    FormsModule , 
    MatButtonModule , 
    BrowserAnimationsModule , 
    MatIconModule , 
    MatButtonToggleModule , 
    MatBadgeModule , 
    MatProgressSpinnerModule , 
    MatSliderModule , 
    MatToolbarModule , 
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

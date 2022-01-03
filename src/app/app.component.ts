import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] , 
  animations : []
})
export class AppComponent {

  opened = false ; 
  badgeContent : number = 3 ; 
  progressSlider = 0 ; 
  title = 'AngularMaterial';
  hidden = false ; 
  timeInterval ; 

  constructor(){

    this.timeInterval = setInterval(()=>{
      if(this.progressSlider >=100)
      {
        clearInterval(this.timeInterval);
      }
      this.progressSlider += 20 ; 
    } , 2000) ; 
   
  }
  onButtonToggled(event : MatButtonToggleChange)
  {
    console.log(event.value);
    
  }

  toggleBadgeVisibility(){
    this.hidden = !this.hidden ; 
    this.badgeContent++;
  }

  showSideBar(){
    this.opened = !this.opened ; 
  }
}

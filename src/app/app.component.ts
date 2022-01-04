import { Component, ViewChild } from '@angular/core';
import { MatButtonToggle, MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatAccordion } from '@angular/material/expansion';
import { MatListOption } from '@angular/material/list/selection-list';
import { MatMenuTrigger } from '@angular/material/menu';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})

export class AppComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  opened = false;
  badgeContent: number = 3;
  progressSlider = 0;
  title = 'AngularMaterial';
  hidden = false;
  timeInterval;
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers'];

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor() {

    this.timeInterval = setInterval(() => {
      if (this.progressSlider >= 100) {
        clearInterval(this.timeInterval);
      }
      this.progressSlider += 20;
    }, 2000);

  }
  onButtonToggled(event: MatButtonToggleChange) {
    console.log(event.value);

  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    this.badgeContent++;
  }

  showSideBar() {
    this.opened = !this.opened;
  }

}

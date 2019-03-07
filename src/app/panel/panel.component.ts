import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  //templateUrl: './panel.component.html',
  template: `
  <button class="btn" [class.btn-primary]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
  `,
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  isActive = true;
  constructor() { }

  ngOnInit() {
  }

}

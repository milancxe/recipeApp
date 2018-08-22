import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedTab = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelectTab(chosenValue: string){
    this.selectedTab.emit(chosenValue);
  }
}

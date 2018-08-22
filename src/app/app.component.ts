import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() clickedTab :string;
  title = 'recipeApp';
  loadedTab: string= 'recipe';

  onSelectedTab(value: string){
    this.loadedTab = value;
  }
}

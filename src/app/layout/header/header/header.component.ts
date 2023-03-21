import { Component } from '@angular/core';
import { HeaderText } from './header-text';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public text: any;
  
  constructor(){
    this.text = this.getLanguage();
  }

  getLanguage(){
    let chosenLanguage = window.localStorage.getItem('language');

    if(chosenLanguage == 'english'){
      return HeaderText.english;
    }
    return HeaderText.portuguese;
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DocJoaoXavier';

  change(){
    if(window.localStorage.getItem('language')! == 'english'){
      window.localStorage.setItem('language', 'portuguese')
    }else{
      window.localStorage.setItem('language', 'english')
    }
    window.location.reload()
  }
}

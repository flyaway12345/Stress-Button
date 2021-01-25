import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stress-Button';

  playPop(){
    let audio = new Audio();
    audio.src = "src/assets/pop.mp3";
    audio.load();
    audio.play();
  }
}

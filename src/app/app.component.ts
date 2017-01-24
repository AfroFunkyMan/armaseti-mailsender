import { Component } from '@angular/core';
import { AppSocketService } from './app-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public appSocketService: AppSocketService){}





  //todo connect socket in root component
  //todo share socket to child component



  title = 'app works!';
}




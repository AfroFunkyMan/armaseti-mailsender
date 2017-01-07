import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../service/sockets.service';

@Component({
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private socketsService: SocketsService) {}

  ngOnInit() {
  }

}

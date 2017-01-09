import { Component, OnInit } from '@angular/core';
import { AppSocketService } from '../app-socket.service';



@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent implements OnInit {
    public number: number;
    lists = [
        {
            id: 1,
            name: 'Item 1'
        },
        {
            id: 2,
            name: 'Item 3'
        },
        {
            id: 3,
            name: 'Item 2'
        }
    ];

    constructor(private appSocketService: AppSocketService ) {
        this.number = this.appSocketService.number;
    }

    getLists(): void {
        this.number = this.appSocketService.getLists();
    }
    ngOnInit(): void {
        this.getLists();
    }


}

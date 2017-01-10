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
            name: 'Список контактов по запорной арматуре',
            subscribers_number: 0,
        },
        {
            id: 2,
            name: 'Список контактов по элементам трубопровода',
            subscribers_number: 0,
        },
        {
            id: 3,
            name: 'Список контактов по теплообменникам',
            subscribers_number: 0,
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

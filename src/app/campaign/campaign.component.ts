import { Component, OnInit } from '@angular/core';
import { AppSocketService } from '../app-socket.service';
import { List,Rate,Templates } from '../../../mailsender/models/lists.interface.model';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent implements OnInit {
    public number: number;
    subsCountSum: number = 45;
    lists: List[] = [
        {
            id: 1,
            name: 'Список контактов по запорной арматуре',
            create: new Date,
            rate: Rate.MidHi[Rate.MidHi],
            subsCount: 1,
            checked: false
        },
        {
            id: 2,
            name: 'Список контактов по запорной арматуре',
            create: new Date,
            rate: Rate.MidHi[Rate.MidHi],
            subsCount: 10,
            checked: false
        },
        {
            id: 3,
            name: 'Список контактов по запорной арматуре',
            create: new Date,
            rate: Rate.MidHi[Rate.MidHi],
            subsCount: 100,
            checked: false
        }];
    templates: Templates[] = [
        {
            id: 1,
            name: "First template",
            create: new Date,
            lastUpdate: new Date,
        },
        {
            id: 2,
            name: "Second template",
            create: new Date,
            lastUpdate: new Date,
        },
        {
            id: 3,
            name: "Third template",
            create: new Date,
            lastUpdate: new Date,
        },
        {
            id: 4,
            name: "Fourth template",
            create: new Date,
            lastUpdate: new Date,
        }
        ];


    constructor(private appSocketService: AppSocketService ) {
        this.number = this.appSocketService.number;
    }

    changeEvent(event){
        this.subsCountSum = this.lists.reduce((sum: number, current: any) => {
            if (current.checked) return sum + current.subsCount;
            else return sum;
        },0);
    }

    getLists(): void {
        this.number = this.appSocketService.getLists();
    }
    ngOnInit(): void {
        this.getLists();
    }
}


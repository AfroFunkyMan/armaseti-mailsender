import { Component, OnInit } from '@angular/core';
import { AppSocketService } from '../app-socket.service';
import { List, Templates, Rate, Setup } from './campaign.interface.model';
import { FormsModule } from '@angular/forms';


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
            _id: 1,
            name: 'Список контактов по запорной арматуре',
            create: new Date,
            rate: Rate.MidHi[Rate.MidHi],
            subsCount: 1,
            checked: false
        },
        {
            _id: 2,
            name: 'Список контактов по запорной арматуре',
            create: new Date,
            rate: Rate.MidHi[Rate.MidHi],
            subsCount: 10,
            checked: false
        },
        {
            _id: 3,
            name: 'Список контактов по запорной арматуре',
            create: new Date,
            rate: Rate.MidHi[Rate.MidHi],
            subsCount: 100,
            checked: false
        }];
    templates: Templates[] = [
        {
            _id: 1,
            name: "First template",
            create: new Date,
            lastUpdate: new Date,
            checked: true,
        },
        {
            _id: 2,
            name: "Second template",
            create: new Date,
            lastUpdate: new Date,
            checked: false,
        },
        {
            _id: 3,
            name: "Third template",
            create: new Date,
            lastUpdate: new Date,
            checked: false,
        },
        {
            _id: 4,
            name: "Fourth template",
            create: new Date,
            lastUpdate: new Date,
            checked: true,
        }
        ];
    setup: Setup =
        {
            letterName: "",
            letterSubj: "",
            senderName: "",
            senderAddr: ""
        }



    constructor(private appSocketService: AppSocketService ) {
        this.number = this.appSocketService.number;
    }

    changeEvent(event){
        this.subsCountSum = this.lists.reduce((sum: number, current: any) => {
            if (current.checked) return sum + current.subsCount;
            else return sum;
        },0);
    }


    setTemplate(template: Templates){
        this.templates.forEach((templateItem) => {
           if (templateItem._id !== template._id) templateItem.checked = false;
           else templateItem.checked = true;
        });
    }

    getLists(): void {
        this.number = this.appSocketService.getLists();
    }
    ngOnInit(): void {
        this.getLists();
    }

    Test() : void {
        console.log(this.setup.letterName)
    }
}


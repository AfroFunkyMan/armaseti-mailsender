import { Component, OnInit } from '@angular/core';
import { AppSocketService } from '../app-socket.service';
import { List, Templates, Rate, Setup, FormData } from './campaign.interface.model';
import { FormsModule } from '@angular/forms';
import { CampaignPipe } from './campaign.pipe';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent implements OnInit {
    public number: number;
    subsCountSum: number = 0;
    lists: List[] = [
        {
            _id: '1',
            name: 'Список контактов по запорной арматуре',
            create: new Date,
            rate: Rate.MidHi[Rate.MidHi],
            subsCount: 1,
            checked: false
        },
        {
            _id: '2',
            name: 'Список контактов по запорной арматуре',
            create: new Date,
            rate: Rate.MidHi[Rate.MidHi],
            subsCount: 10,
            checked: false
        },
        {
            _id: '3',
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
            checked: false,
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
            checked: false,
        }
        ];

    formData: FormData = {
        lists: [],
        template: '',
        fields: {
            companyName: '',
            subject: '',
            fromName: '',
            fromEmail: ''
        }
    }

    constructor(private appSocketService: AppSocketService) {
        this.number = this.appSocketService.number;
    }

    selectList(id){
        if (this.formData.lists.indexOf(id) > -1) this.formData.lists.splice(this.formData.lists.indexOf(id), 1)
        else this.formData.lists.push(id);
        console.log(this.formData.lists);
        this.subsCountSum = this.lists.reduce((sum: number, current: any) => {
            if (current.checked) return sum + current.subsCount;
            else return sum;
        },0);
    }


    selectTemplate(template: Templates){
        this.templates.forEach((templateItem) => {
           if (templateItem._id === template._id) {
           templateItem.checked = true;
           this.formData.template = templateItem._id;
           console.log(this.formData.template);
           }
           else templateItem.checked = false;
        });
    }

    checkAndSendData(): void{
        if (this.formData.lists.length === 0) return alert('Вы не выбрали списки!');
        if (this.formData.template === '') return alert('U not select Template!');
        if (this.formData.fields.companyName === '') return alert('U not input Company Name');
        if (this.formData.fields.fromEmail === '') return alert('U not select from Email!');
        if (this.formData.fields.fromName === '') return alert('U not select from Name!');
        if (this.formData.fields.subject === '') return alert('U not select Subject!');
        else {
            this.appSocketService.sendFormData(this.formData);
            alert('All right!');
        }
    }

    getLists(): void {
        this.number = this.appSocketService.getLists();
    }
    ngOnInit(): void {
        this.getLists();
    }
}


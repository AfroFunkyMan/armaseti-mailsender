import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  testToggle: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleStatus(){
    console.log(this.testToggle);
  }


}

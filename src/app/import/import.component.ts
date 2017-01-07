import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import',
  templateUrl: 'import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  filename = "";

  constructor() {
  }

  ngOnInit() {
    document.getElementById("uploadBtn").onchange = function () {
      document.getElementById("uploadFile").value = this.files[0].name;
      document.getElementById("uploadBtn").value = "";
    };
  }


  // getName(str) {
  //   let i;
  //   if (str.lastIndexOf('\\')) {
  //     i = str.lastIndexOf('\\') + 1;
  //   }
  //   else {
  //     i = str.lastIndexOf('/') + 1;
  //   }
  //   this.filename = str.slice(i);
  // }
}

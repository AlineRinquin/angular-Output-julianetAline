import { Component, Input, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  yourName;
  data = [];
  dataFilter;
  dataFilterRadioButton = 'first';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log(this.dataService.getUsersData());
    this.data = this.dataService.getUsersData();
  }

  applyFilter(filter) {
    this.dataFilter = filter.toLowerCase();
    this.searchData();
  }

  applyFilterRadioButton(filter) {
    console.log(filter);
    this.dataFilterRadioButton = filter;
    this.searchData();
  }

  searchData() {
    this.data = this.dataService
      .getUsersData()
      .filter((user) =>
        user.name[this.dataFilterRadioButton]
          .toLowerCase()
          .includes(this.dataFilter)
      );
  }
}

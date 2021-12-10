import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchStr = '';
  constructor() {}

  ngOnInit() {}

  onSearchChange(searchValue: string): void {
    console.log(searchValue);
    this.search.emit(searchValue);
  }
}

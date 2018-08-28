import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() resource: string;
  @Output() onSearch = new EventEmitter<any>();

  private searchTerms = new Subject<string>();

  constructor(private service: AppHttpService) { }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
      .subscribe((term) => {
        if (term) {
          this.service.build(this.resource)
            .search(term)
            .subscribe((data) => {
              this.onSearch.emit(data);
            });
        } else {
          this.service.build(this.resource)
            .list()
            .subscribe((data) => {
              this.onSearch.emit(data);
            });
        }
    });
  }

  search(term) {
    this.searchTerms.next(term);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  @Input() resource: string;
  @Input() totalPage: number = 0;
  @Input() activePage: number = 0;
  @Output() onChangePage = new EventEmitter<any>();
  pages: Array<number> = [];

  constructor(private service: AppHttpService) { }

  ngOnInit() {
    this.service.build(this.resource)
      .list()
      .subscribe((data) => {
        this.onChangePage.emit(data);
      });
  }

  ngOnChanges(changes: any) {
    if (changes.totalPage) {
      this.pages = Array(this.totalPage)
        .fill(this.totalPage)
        .map((x, i) => {
          return i + 1;
        });
    }
  }

  changePage($event, page) {
    $event.preventDefault();
    this.service.build(this.resource)
      .list(page)
      .subscribe((data) => {
        this.onChangePage.emit(data);
      });
  }

}

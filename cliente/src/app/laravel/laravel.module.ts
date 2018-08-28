import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginateComponent } from './paginate/paginate.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, PaginateComponent],
  exports: [SearchComponent, PaginateComponent]
})
export class LaravelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from "./utils.service";
import { DataStoreService } from "./data-store.service";
import { CustomNgModelDirective } from './custom-ng-model.directive';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DataStoreService, UtilsService],
  declarations: [CustomNgModelDirective, SearchFilterPipe],
  exports: [CustomNgModelDirective, SearchFilterPipe]
})
export class SharedModule { }

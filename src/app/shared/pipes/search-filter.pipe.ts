import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: Array<NoteItem>, searchText: string, capturedRef): Array<NoteItem> {

    if (!searchText) {
      /**
       * Capturing the  filtered list
       */
      capturedRef.filteredItems = items;
      return items;
    }

    let deepSearchFilter = (item: NoteItem) => {
      if (item.content.toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
        return true;
      }

      return false
    }

    let filteredItems = items ? items.filter(deepSearchFilter) : []
    /**
     * Capturing the  filtered list
     */
    capturedRef.filteredItems = filteredItems;

    return filteredItems;
  }

}

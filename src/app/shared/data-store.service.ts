import { Injectable } from '@angular/core';
import { UtilsService } from "./utils.service";

@Injectable()
export class DataStoreService {

  constructor(private _utils: UtilsService) { };

  /**
   * List of all the user notes
   */
  private userNotes: Array<NoteItem> = null;
  private filteredUserNotes: Array<NoteItem> = null;  
  private localStorageIdentifierKey: string = "editorAppKey";
  private newNoteItem: NoteItem = {
    content: "",
    uid: 0,
    timeStamp: "",
    title: ""
  }

  getLocalStorageIdentifier() {
    return this.localStorageIdentifierKey;
  }

  getUserNotes(): Array<NoteItem> {
    /**
     * reading user notes for the first time
     */
    if (!this.userNotes) {
      let userNotes = this._utils.getAllNotes(this.localStorageIdentifierKey);
      /**
       * if user notes exists in localstorage
       */
      if (!!userNotes) {
        this.userNotes = userNotes;
        return userNotes
      } else {
        /**
         * If no note exist in localstorage
         */
        this.userNotes = userNotes;
        return [];
      }
    }

    return this.userNotes;
  }

  setFilteredNoteItems(items: Array<NoteItem>) {
    this.filteredUserNotes = items;
  }

  getFilteredNoteItems() {
    return this.filteredUserNotes;
  }

  getNewInitializedNoteItem() {
    let newItem = this._utils.getShallowClonedItem(this.newNoteItem);
    return newItem;
  }

}

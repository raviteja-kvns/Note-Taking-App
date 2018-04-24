import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStoreService } from "../../shared/data-store.service";
import { UtilsService } from "../../shared/utils.service";
import { NoteslistComponent } from "../dcomponents/noteslist/noteslist.component";

@Component({
  selector: 'editor-ruser',
  templateUrl: './ruser.component.html',
  styleUrls: ['./ruser.component.css']
})
export class RuserComponent implements OnInit {

  currentItemForEditing: NoteItem = null;
  /**
   * String entered by user based on which filtering is to be done
   */
  searchText: string = "";
  /**
   * Accessing the child instance to trigger its methods
   */
  @ViewChild(NoteslistComponent) noteListInstance;

  constructor(private _dataStore: DataStoreService,
    private _utils: UtilsService) { }

  ngOnInit() {

  }

  currentSelectedNote(item) {
    /**
     * This again is a pass by reference
     */
    this.currentItemForEditing = item;
  }

  handleCreateNewNote() {

    let newItem = this._dataStore.getNewInitializedNoteItem();
    /**
     * Adding the time stamp
     */
    newItem.timeStamp = new Date().toString();
    /**
     * creating new unique id
     */
    newItem.uid = this._dataStore.getUserNotes().length;
    /**
     * Inserting it into our datasore
     * Need not set again as it is pass by reference
     */
    this._dataStore.getUserNotes().unshift(newItem);

    /**
     * sending this new item to edit-pad
     */
    this.currentItemForEditing = newItem;
  }

  deleteNote() {
    let allNoteItems = this._dataStore.getUserNotes();
    for (let i = 0; i < allNoteItems.length; i++) {
      if (allNoteItems[i].uid == this.currentItemForEditing.uid) {
        allNoteItems.splice(i, 1);
        /**
         * Saving data after deleting
         */
        this._utils.saveAllNotes(this._dataStore.getLocalStorageIdentifier(), this._dataStore.getUserNotes());
        /**
         * Select next available note
         */
        this.noteListInstance.onNoteSelect(allNoteItems[(i < allNoteItems.length) ? i : allNoteItems.length]);

        break;
      }
    }
  }
}

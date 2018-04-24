import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DataStoreService } from "../../../shared/data-store.service";

@Component({
  selector: 'editor-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent implements OnInit {

  noteItems: Array<NoteItem> = [];
  @Input() searchText: string = "";
  @Output() currentSelectedNote = new EventEmitter<NoteItem>();
  currentSelectedNoteItemRef: NoteItem = null;
  noteListInstance = this;
  capturedReferences = {
    filteredItems: []
  }

  constructor(private _dataStore: DataStoreService) { }

  ngOnInit() {
    this.noteItems = this._dataStore.getUserNotes();
    if (this.noteItems.length) {
      this.currentSelectedNoteItemRef = this.noteItems[0];
      this.currentSelectedNote.emit(this.currentSelectedNoteItemRef);
    }
  }

  ngOnChanges(changes) {
    if (changes["searchText"]) {
      window.setTimeout(() => {
        let filteredItems = this.capturedReferences.filteredItems;
        this._dataStore.setFilteredNoteItems(filteredItems);
        this.onNoteSelect(filteredItems ? filteredItems[0] : null);
      }, 0)
    }
  }

  onNoteSelect(noteItem: NoteItem) {
    this.currentSelectedNoteItemRef = noteItem;
    this.currentSelectedNote.emit(this.currentSelectedNoteItemRef);
  }

  getRelaventTimeStamp_For_View(timeStamp) {

    if (!timeStamp) {
      /**
       * If no timestamp exists --> Note not yet saved
       */
      return "saving ..."
    }

    let currentDate = new Date(), givenDate = new Date(Date.parse(timeStamp)),
      delta_day = 86400000, delta_week = delta_day * 7,
      delta_computed = (+currentDate - (+givenDate)),
      daysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      MonthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (delta_computed <= delta_day) {
      /**
       * 24 Hr Format
       */
      return givenDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    } else if ((delta_computed > delta_day) && (delta_day <= delta_week)) {
      return daysList[givenDate.getDay()]
    } else {
      return givenDate.getDate() + " " + MonthsList[givenDate.getMonth()];
    }
  }

  filterCompleteCallback(filteredItems: Array<NoteItem>) {
    this.onNoteSelect(filteredItems[0] ? filteredItems[0] : null);
  }

}

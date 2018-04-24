import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'editor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() searchText: string = "";
  @Output() searchTextChange = new EventEmitter<string>();  
  // @Output() filterNotesDeepSearchTrigger = new EventEmitter<string>();
  @Output("createNew") createNewNoteTrigger = new EventEmitter<any>();
  @Output("deleteNote") deleteCurrentNoteTrigger = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  createNew() {
    this.searchText = "";
    this.triggerSearchTextChange();
    this.createNewNoteTrigger.emit({ "action": "create" });
  };

  deleteNote() {
    this.deleteCurrentNoteTrigger.emit();
  }

  triggerSearchTextChange() {
    this.searchTextChange.emit(this.searchText);
  }

}

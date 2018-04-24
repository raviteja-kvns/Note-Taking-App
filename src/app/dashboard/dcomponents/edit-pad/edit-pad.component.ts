import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinct';
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";

import { UtilsService } from "../../../shared/utils.service";
import { DataStoreService } from "../../../shared/data-store.service";

@Component({
  selector: 'editor-edit-pad',
  templateUrl: './edit-pad.component.html',
  styleUrls: ['./edit-pad.component.css']
})
export class EditPadComponent implements OnInit, OnDestroy {

  /**
   * Pass by reference
   */
  @Input() currentNote: NoteItem = null;
  saveFrequency: number = 500;

  periodicTrigger = new Subject<any>();
  periodicTriggerSubscription: Subscription;

  constructor(private _utils: UtilsService,
    private _dataStore: DataStoreService) { }

  ngOnInit() {
    this.initiatePeriodicSave();
  }

  /**
   * e -> is the value entered by user 
   * that is being emitted from our custom directive
   */
  onEditContent(e) {
    this.periodicTrigger.next(e);
  }

  initiatePeriodicSave() {
    this.periodicTriggerSubscription = this.periodicTrigger
      .debounceTime(this.saveFrequency) // Pools the triggers 
      .distinct() // Will trigger only if the new value is a distinct value
      .subscribe((value) => {
        // this.currentNote.content = this.editorContent;
        /**
         * Updating time stamp
         */
        this.currentNote.timeStamp = new Date().toString();
        // this.currentNote.content = this.editorContent;

        /**
         * Triggering save
         */
        this._utils.saveAllNotes(this._dataStore.getLocalStorageIdentifier(), this._dataStore.getUserNotes());

      })
  }

  ngOnDestroy() {
    /**
     * Clear all the observables when exiting from the component
     */
    this.periodicTriggerSubscription.unsubscribe();
  }

}

import { Injectable } from '@angular/core';
import { DataStoreService } from "./data-store.service";

/**
 * Aim of utils is to access all the resources through this single channel
 * Also put all the stateless reusable code and the functions to do data marshalling
 */
@Injectable()
export class UtilsService {

  constructor() { };
  /**
   * Returns localstorage
   */
  getLocalStorage() {
    return window.localStorage
  }

  /**
   * Saving the notes into localStorage
   * 
   * This is not the best way to save in practical scenarios. But going forward with this as it is prototyping
   */
  saveAllNotes(key, notesData) {
    this.getLocalStorage().setItem(key, JSON.stringify(notesData));
  }

  /**
   * retrieve the notes of user
   */
  getAllNotes(key) {
    return JSON.parse(this.getLocalStorage().getItem(key));
  }

  /**
   * returns a new empty Note Item
   * Shallow cloning serves the purpose here
   */
  getShallowClonedItem(Item) {
    return Object.assign({}, Item);
  }
}

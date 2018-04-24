import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditPadComponent } from './edit-pad/edit-pad.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [EditPadComponent, NoteslistComponent, HeaderComponent],
  exports: [EditPadComponent, NoteslistComponent, HeaderComponent]
})
export class DcomponentsModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPadComponent } from './edit-pad.component';

describe('EditPadComponent', () => {
  let component: EditPadComponent;
  let fixture: ComponentFixture<EditPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

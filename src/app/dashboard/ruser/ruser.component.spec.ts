import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuserComponent } from './ruser.component';

describe('RuserComponent', () => {
  let component: RuserComponent;
  let fixture: ComponentFixture<RuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

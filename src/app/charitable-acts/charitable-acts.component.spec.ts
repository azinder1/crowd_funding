/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharitableActsComponent } from './charitable-acts.component';

describe('CharitableActsComponent', () => {
  let component: CharitableActsComponent;
  let fixture: ComponentFixture<CharitableActsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitableActsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

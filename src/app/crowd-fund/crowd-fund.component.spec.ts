/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrowdFundComponent } from './crowd-fund.component';

describe('CrowdFundComponent', () => {
  let component: CrowdFundComponent;
  let fixture: ComponentFixture<CrowdFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

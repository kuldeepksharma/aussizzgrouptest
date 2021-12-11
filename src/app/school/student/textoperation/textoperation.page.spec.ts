import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoperationPage } from './textoperation.page';

describe('TextoperationPage', () => {
  let component: TextoperationPage;
  let fixture: ComponentFixture<TextoperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoperationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

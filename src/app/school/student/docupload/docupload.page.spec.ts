import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuploadPage } from './docupload.page';

describe('DocuploadPage', () => {
  let component: DocuploadPage;
  let fixture: ComponentFixture<DocuploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocuploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

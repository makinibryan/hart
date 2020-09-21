import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookByPhoneLeftComponent } from './book-by-phone-left.component';

describe('BookByPhoneLeftComponent', () => {
  let component: BookByPhoneLeftComponent;
  let fixture: ComponentFixture<BookByPhoneLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookByPhoneLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookByPhoneLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

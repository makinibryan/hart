import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookByPhoneRightComponent } from './book-by-phone-right.component';

describe('BookByPhoneComponent', () => {
  let component: BookByPhoneRightComponent;
  let fixture: ComponentFixture<BookByPhoneRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookByPhoneRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookByPhoneRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

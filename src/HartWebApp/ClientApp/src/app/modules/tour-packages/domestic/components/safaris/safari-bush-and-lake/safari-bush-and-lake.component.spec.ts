import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariBushAndLakeComponent } from './safari-bush-and-lake.component';

describe('SafariBushAndLakeComponent', () => {
  let component: SafariBushAndLakeComponent;
  let fixture: ComponentFixture<SafariBushAndLakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafariBushAndLakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariBushAndLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

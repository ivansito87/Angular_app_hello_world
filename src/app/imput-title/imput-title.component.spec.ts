import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputTitleComponent } from './imput-title.component';

describe('ImputTitleComponent', () => {
  let component: ImputTitleComponent;
  let fixture: ComponentFixture<ImputTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

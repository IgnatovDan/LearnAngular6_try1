import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheroDetailComponent } from './myhero-detail.component';

describe('MyheroDetailComponent', () => {
  let component: MyheroDetailComponent;
  let fixture: ComponentFixture<MyheroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

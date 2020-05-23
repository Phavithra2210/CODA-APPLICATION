import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseListSearchComponent } from './choose-list-search.component';

describe('ChooseListSearchComponent', () => {
  let component: ChooseListSearchComponent;
  let fixture: ComponentFixture<ChooseListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

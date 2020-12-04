import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompetitionJoinPage } from './competition-join.page';

describe('CompetitionJoinPage', () => {
  let component: CompetitionJoinPage;
  let fixture: ComponentFixture<CompetitionJoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionJoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitionJoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

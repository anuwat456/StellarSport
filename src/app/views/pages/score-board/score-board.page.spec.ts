import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScoreBoardPage } from './score-board.page';

describe('ScoreBoardPage', () => {
  let component: ScoreBoardPage;
  let fixture: ComponentFixture<ScoreBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreBoardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

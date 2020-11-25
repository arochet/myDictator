import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouvelleTachePage } from './nouvelle-tache.page';

describe('NouvelleTachePage', () => {
  let component: NouvelleTachePage;
  let fixture: ComponentFixture<NouvelleTachePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleTachePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelleTachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

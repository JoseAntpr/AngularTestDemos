import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty } from 'rxjs';

class FakeRouter {
  navigate( params) {}
}

class FakeActivatedRoute {
  params: Observable<any> =  empty();
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {
          provide: Router,
          useClass: FakeRouter
        },
        {
          provide: ActivatedRoute,
          useClass: FakeActivatedRoute
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shlould redirect to medico when it is saved', () => {

    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.saveMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);

  });
});

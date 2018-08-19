import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shlould have a link to hospital', () => {

    const debugElements = fixture.debugElement.queryAll( By.directive(RouterLinkWithHref));

    console.log(debugElements);

    let exists = false;

    for ( const elem of debugElements) {
      if ( elem.attributes['routerLink'] === '/hospital') {
        exists = true;
        break;
      }
    }

    expect( exists ).toBeTruthy();
  });
});

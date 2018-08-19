import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Should have a router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query( By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });

  it('shlould have a link to hospital', () => {
    const fixture = TestBed.createComponent(AppComponent);

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

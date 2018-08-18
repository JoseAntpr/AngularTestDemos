import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Should show legend', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML).toContain('Progreso de carga');

    });

    it('Should show value of progress in input', () => {
        component.cambiarValor(5);

        fixture.detectChanges();

        fixture.whenStable().then( () => {

            const input = fixture.debugElement.query( By.css('input')).nativeElement;

            expect( input.value ).toBe('55');

        });

    });

});

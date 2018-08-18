import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';



describe( 'Medico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicoService ],
            imports: [ HttpClientModule]
        });

        fixture = TestBed.createComponent( MedicoComponent );
        component =  fixture.componentInstance;
    });


    it('Should create the component', () => {
        expect( component ).toBeTruthy();
    });

    it('Should return doctor´s name', () => {

        const name = 'Jose';
        const res = component.helloDoctor(name);
        console.log(res);
        expect( res ).toContain(name);
    });
});

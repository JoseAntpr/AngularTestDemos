import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError} from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Should be load doctors', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( servicio, 'getMedicos').and.callFake(() => {
            return from( [medicos]);
        });

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);
    });

    it('Should be call server to add doctor', () => {
        const spy = spyOn( servicio, 'agregarMedico').and.callFake((medico) => {
            return empty();
        });

        componente.agregarMedico();

        expect( spy ).toHaveBeenCalled();
    });

    it('Should add new doctor to doctors array', () => {
        const medico = { id: 1, name: 'jose' };

        spyOn( servicio, 'agregarMedico')
                .and.returnValue( from([ medico ]) );

        componente.agregarMedico();

        // expect( componente.medicos.length ).toBe(1);
        expect( componente.medicos.indexOf(medico) ).toBeGreaterThanOrEqual(0);
    });

    it('if add doctor failed then service error', () => {

        const miError = 'No se puedo agregar el medico';

        spyOn( servicio, 'agregarMedico').and
                .returnValue( throwError( miError) );

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe( miError);

    });

    it('Call server to delete doctor', () => {
        spyOn( window, 'confirm').and.returnValue(true);
        const spy = spyOn(servicio, 'borrarMedico').and.
                        returnValue( empty());

        componente.borrarMedico('1');

        expect( spy ).toHaveBeenCalledWith('1');
    });


    it('No Should Call server to delete doctor', () => {
        spyOn( window, 'confirm').and.returnValue(false);
        const spy = spyOn(servicio, 'borrarMedico').and.
                        returnValue( empty());

        componente.borrarMedico('1');

        expect( spy ).not.toHaveBeenCalledWith('1');
    });


});

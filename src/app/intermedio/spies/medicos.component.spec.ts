import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty} from 'rxjs';


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


});

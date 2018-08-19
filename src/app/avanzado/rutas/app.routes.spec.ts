import { routes } from './app.routes';
import { MedicoComponent } from '../../intermedio2/medico/medico.component';

describe('Routes tests', () => {
    it( 'Shloud exists route /medico/:id', () => {

        expect( routes ).toContain({
            path: 'medico/:id',
            component: MedicoComponent
        });

    });

});

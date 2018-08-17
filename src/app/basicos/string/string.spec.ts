import { message } from './string';

/* Todos los archivos con .spec evaluaran las pruebas

Todas las pruebas tienen la parte de describe()
describe('Pruebas de Strings'): Sirve para agrupar pruebas
it('Debe retornar un string'): para realizar pruebas en especifico*/



describe(' String tests', () => {
    it('Should be return string', () => {
        const resp = message('Jose');

        expect( (typeof resp) ).toBe('string');
    });
});


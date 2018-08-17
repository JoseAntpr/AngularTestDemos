import { increment } from './numbers';

describe('Number test', () => {

    it( 'Should return 100 if number is high than 100', () => {
        const res = increment( 300 );

        expect( res ).toBe(100);
    });

    it('Should return number + 1, If number is minor than 100', () => {
        const res = increment( 20 );

        expect( res ).toBe(21);
    });
});

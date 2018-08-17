
import { getRobots } from './arrays';

describe('Test case for arrays', () => {

    it('Should return more or less 3 robots', () => {
        const res = getRobots();

        expect( res.length ).toBeGreaterThanOrEqual(3);
    });

    it('Should exists Megaman & Robocop', () => {
        const res = getRobots();

        expect( res ).toContain('Megaman');
        expect( res ).toContain('Robocop');
    });

});

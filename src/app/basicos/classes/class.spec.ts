
import { Player } from './class';

describe('Test case for classes', () => {

    it('Should be return 80 hp if take 20 of damage', () => {

        const player = new Player();
        
        const res = player.takeDamage(20);

        expect(res).toBe(80);
    });
});

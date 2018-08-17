import { Player2 } from './player2';


describe('Test case for eventEmitter', () => {

    let player: Player2;

    beforeEach(() => {
        player = new Player2();
    });

    it('Should be emit an event when player take damage', () => {

        let newHP = 0 ;

        player.hpChange.subscribe( hp => {
            newHP = hp;
        });

        player.takeDamage(1000);

        expect(newHP).toBe(0);

    });

    it('Should be emit an event when player take damage and survive', () => {

        let newHP = 0 ;

        player.hpChange.subscribe( hp => {
            newHP = hp;
        });

        player.takeDamage(90);

        expect(newHP).toBe(10);

    });

});

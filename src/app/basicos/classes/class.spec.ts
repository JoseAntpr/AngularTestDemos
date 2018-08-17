
import { Player } from './class';

describe('Test case for classes', () => {

    // beforeAll()
    // beforeEach()

    // afterAll()
    // afterEach()

    let player = new Player();

    beforeAll( () => {
        console.log('beforeAll');
    });

    beforeEach( () => {
        console.log('BeforeEach');
        player = new Player();
    });

    afterAll(() => {
        console.log('AfterAll');
    });

    afterEach(() => {
        console.log('AfterEach');
    });

    it('Should be return 80 hp if take 20 of damage', () => {

        const res = player.takeDamage(20);

        expect(res).toBe(80);
    });

    it('Should be return 50 hp if take 50 of damage', () => {

        const res = player.takeDamage(50);

        expect(res).toBe(50);
    });
});

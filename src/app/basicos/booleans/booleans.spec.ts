import { userLogged } from './booleans';

describe( 'Test case for booleans', () => {
    it('Should be return true', () => {

        const res = userLogged();

        expect(res).toBeTruthy();

    });
});

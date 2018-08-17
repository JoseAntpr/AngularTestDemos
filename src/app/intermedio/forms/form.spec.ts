import { RegisterForm } from './form';
import { FormBuilder} from '@angular/forms';
import { controlNameBinding } from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name';


describe('Test case for forms', () => {

    let component: RegisterForm;

    beforeEach(() => {
        component = new RegisterForm( new FormBuilder());
    });

    it('Form should be two inputs', () => {

        expect( component.form.contains('email')).toBeTruthy();
        expect( component.form.contains('password')).toBeTruthy();

    });

    it('Email should be required', () => {
        const emailControl = component.form.get('email');

        emailControl.setValue('');
        expect( emailControl.valid ).toBeFalsy();
    });

    it('Email should be valid email', () => {
        const emailControl = component.form.get('email');

        emailControl.setValue('joseantpalaciosramirez@gmail.com');
        expect( emailControl.valid ).toBeTruthy();
    });

});

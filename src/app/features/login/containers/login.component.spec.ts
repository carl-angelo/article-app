import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
  

describe('Login Component', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
            LoginComponent
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should be invalid when form is empty', () => {
        expect(component.loginForm.valid).toBeFalsy();
    });

    it('should be invalid when email is incorrect', () => {
        let email = component.loginForm.controls['email']; (1)
        expect(email.valid).toBeFalsy(); (2)
    });

    it('submitting a form emits a user', () => {
        expect(component.loginForm.valid).toBeFalsy();
        component.loginForm.controls['email'].setValue("Sincere@april.biz");
        component.loginForm.controls['username'].setValue("Bret");
        expect(component.loginForm.valid).toBeTruthy();
        component.submitForm();

        const key = localStorage.getItem('userToken');

        // Now we can check to make sure the emitted value is correct
        expect(key).toBe("test@test.com");
    });
});

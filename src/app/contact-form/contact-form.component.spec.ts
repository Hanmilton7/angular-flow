import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () =>
{
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () =>
             {
               await TestBed.configureTestingModule({
                                                      declarations: [ContactFormComponent]
                                                    })
                            .compileComponents();

               fixture   = TestBed.createComponent(ContactFormComponent);
               component = fixture.componentInstance;
               fixture.detectChanges();
             });

  it('should create', () =>
  {
    expect(component)
      .toBeTruthy();
  });

  it('should be email valid', () =>
  {
    component.contactForm.setValue({
                                     name   : '',
                                     email  : 'hanmilton.777@gmial.com',
                                     message: ''
                                   })

    expect(component.contactForm.get('email')?.errors?.['email'])
      .toBeFalsy();
  })

  it('should be name required', () =>
  {
    component.contactForm.setValue({
                                     name   : 'Hanmilton',
                                     email  : '',
                                     message: ''
                                   })

    expect(component.contactForm.get('name')?.errors?.['required'])
      .toBeFalsy();
  })

  it('should be message required', () =>
  {
    component.contactForm.setValue({
                                     name   : '',
                                     email  : '',
                                     message: 'Esto es un mensaje'
                                   })

    expect(component.contactForm.get('message')?.errors?.['required'])
      .toBeFalsy();
  })

  it('should form to be valid', () =>
  {
    component.contactForm.setValue({
                                     name   : 'Hanmilton',
                                     email  : 'hanmilton.777@gmail.com',
                                     message: 'Esto es un mensaje'
                                   })

    expect(component.contactForm.valid)
      .toBeTruthy();
  })
});

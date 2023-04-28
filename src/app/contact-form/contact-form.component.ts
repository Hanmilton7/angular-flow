import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
}                    from "@angular/forms";

@Component({
             selector   : 'app-contact-form',
             templateUrl: './contact-form.component.html',
             styleUrls  : ['./contact-form.component.css']
           })
export class ContactFormComponent
{
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder)
  {
  }

  ngOnInit(): void
  {
    this.initForm();
  }


  private initForm()
  {
    this.contactForm = this.fb.group(
      {
        name   : ['', [Validators.required]],
        email  : ['', [Validators.email]],
        message: ['', [Validators.required]]
      }
    )
  }

  sendMessage()
  {
    console.log("Created method!!!")
  }
}

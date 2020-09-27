import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../../../core/models';
import { MultiPurposeService } from '../../../../core/services/multi-purpose.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  model: ContactForm;
  isSubmitted: boolean = false;
  isError: boolean = false;

  constructor(private multiPurposeService: MultiPurposeService) {
    this.model = new ContactForm();
  }

  ngOnInit(): void {  }

  async submitForm(contactForm: NgForm) {
    this.multiPurposeService.submitContactForm(this.model).subscribe(
      () => {
        this.isSubmitted = true;
        contactForm.resetForm();
        console.log(`Contact form successfully submitted for processing`);
      },
      error => {
        this.isError = true;
        console.log(`Error occurred submitting contact form with the following error: ${error}`);
      }
    );
  }
}


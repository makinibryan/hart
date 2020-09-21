import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../../../core/models';
import { MultiPurposeService } from '../../../../core/services/multi-purpose.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  model = new ContactForm();

  constructor(private multiPurposeService: MultiPurposeService) { }

  ngOnInit(): void {
  }

  async submitForm() {
    this.multiPurposeService.submitContactForm(this.model).subscribe(
      success => {
        if (success.wasSuccessful) {
          console.log(`Contact form successfully submitted for processing`);
        }
      },
      error => {
        console.log(`Error occurred submitting contact form with the following error: ${error}`);
      }
  );
  }
}


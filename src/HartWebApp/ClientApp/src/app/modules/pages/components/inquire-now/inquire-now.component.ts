import { Component, OnInit } from '@angular/core';
import { InquiryForm } from '../../../../core/models';
import { MultiPurposeService } from '../../../../core/services/multi-purpose.service';

@Component({
  selector: 'app-inquire-now',
  templateUrl: './inquire-now.component.html',
  styleUrls: ['./inquire-now.component.css']
})
export class InquireNowComponent implements OnInit {

  model = new InquiryForm();

  constructor(private multiPurposeService: MultiPurposeService) { }

  ngOnInit(): void {
  }

  async submitForm() {
  //   this.multiPurposeService.submitContactForm(this.model).subscribe(
  //     success => {
  //       if (success.wasSuccessful) {
  //         console.log(`Contact form successfully submitted for processing`);
  //       }
  //     },
  //     error => {
  //       console.log(`Error occurred submitting contact form with the following error: ${error}`);
  //     }
  // );
  }
}

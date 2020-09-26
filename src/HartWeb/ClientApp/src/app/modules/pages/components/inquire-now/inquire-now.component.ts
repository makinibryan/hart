import { Component, OnInit } from '@angular/core';
import { InquiryForm } from '../../../../core/models';
import { MultiPurposeService } from '../../../../core/services/multi-purpose.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inquire-now',
  templateUrl: './inquire-now.component.html',
  styleUrls: ['./inquire-now.component.css']
})
export class InquireNowComponent implements OnInit {

  model = new InquiryForm();
  isSubmitted: boolean = false;
  package: any = 'Select Package';

  //selectedPackage: any = 'Select Package';

  constructor(private multiPurposeService: MultiPurposeService) {
  }

  ngOnInit(): void {
    this.model = new InquiryForm();
  }

  async submitForm(inquiryForm: NgForm) {
    this.multiPurposeService.submitInquiryForm(this.model).subscribe(
      () => {
        this.isSubmitted = true;
        inquiryForm.resetForm();
        console.log(`Inquiry form successfully submitted for processing`);
      },
      error => {
        console.log(`Error occurred submitting inquiry form with the following error: ${error}`);
      }
    );
  }
}

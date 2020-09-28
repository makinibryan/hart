import { Component, OnInit } from '@angular/core';
import { InquiryForm } from '../../../../core/models';
import { MultiPurposeService } from '../../../../core/services/multi-purpose.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ThreeDaysDianiXWasiniIslandExcursionComponent } from '@app/modules/campaigns';

@Component({
  selector: 'app-inquire-now',
  templateUrl: './inquire-now.component.html',
  styleUrls: ['./inquire-now.component.css']
})
export class InquireNowComponent implements OnInit {
  model = new InquiryForm();
  package: any = 'Select Package';
  isSubmitted: boolean = false;
  isError: boolean = false;
  showSpinner: boolean = false;
  validDates: boolean = false;
  showInvalidDateMessage = false;

  constructor(private multiPurposeService: MultiPurposeService) { }

  ngOnInit(): void {
    this.model = new InquiryForm();
  }

  async submitForm(inquiryForm: NgForm) {

    const arrivalDate = this.model.arrivalDate;
    const departureDate = this.model.departureDate;

    this.validDates = this.compareDates(arrivalDate, departureDate);

    // Todo: Allow all dates
    this.validDates = true;

    if (this.validDates) {
      this.showSpinner = true;
      this.multiPurposeService.submitInquiryForm(this.model).subscribe(
        () => {
          this.showSpinner = false;
          this.isSubmitted = true;
          inquiryForm.resetForm();
          console.log(`Inquiry form successfully submitted for processing`);
        },
        error => {
          this.isError = true;
          console.log(`Error occurred submitting inquiry form with the following error: ${error}`);
        }
      );
    }
    else {
      this.showInvalidDateMessage = true;
    }
  }

  compareDates(startDate, endDate) {
    return (startDate <= endDate);
  }
}

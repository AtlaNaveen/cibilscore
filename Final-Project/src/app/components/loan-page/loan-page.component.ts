import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { MatSliderModule } from '@angular/material/slider';

// import { creditcard } from 'creditcard.interface';
// import Highcharts from 'highcharts';
// import { ToastrService } from 'ngx-toastr';
// import { SharedService } from 'src/shared.service';

@Component({
  selector: 'app-loan-page',
  templateUrl: './loan-page.component.html',
  styleUrls: ['./loan-page.component.scss']
})
export class LoanPageComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private sharedService: SharedService,
    // private toastr: ToastrService
  ) {}

  uid: string | undefined;
  // selectedUserCreditCard: creditcard[] | undefined;
  // highcharts = Highcharts;
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  loanAmount = 0;
  rateOfInterest = 0;
  loanTerm = 0;

  ngOnInit(): void {
    // this.uid = this.route.snapshot.paramMap?.get("uid") || "";
    // this.sharedService
    //   .getUserCreditCard(this.uid)
    //   .subscribe((creditCards: creditcard[]) => {
    //     this.selectedUserCreditCard = creditCards;
    //     console.log("hellloooo",this.selectedUserCreditCard);
    //     // this.updateChart();
    //   });
  }
  // updateChart() {
  //   const chart = Highcharts.chart("loanChart", {
  //     chart: {
  //       type: "pie",
  //     },
  //     title: {
  //       text: "Loan Details",
  //     },
  //     tooltip: {
  //       valueSuffix: "",
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: "pointer",
  //         dataLabels: {
  //           enabled: true,
  //           format: "{point.name}: {y}",
  //         },
  //         showInLegend: true,
  //       },
  //     },
  //     series: [
  //       {
  //         name: "Value",
  //         colorByPoint: true,
  //         type: "pie",
  //         innerSize: "75%",
  //         data: [],
  //       },
  //     ],
  //   } as any);

  //   const interest = this.loanAmount * (this.rateOfInterest / 100);
  //   const totalAmount = this.loanAmount + interest;
  //   const monthlyInstallment = totalAmount / (this.loanTerm * 12);

  //   chart.series[0].setData([
  //     { name: "Loan Amount", y: this.loanAmount },
  //     { name: "Rate of Interest", y: this.rateOfInterest },
  //     { name: "Loan Term", y: this.loanTerm },
  //     { name: "Total Interest", y: interest },
  //     { name: "Total Amount", y: totalAmount },
  //     { name: "Monthly Installment", y: monthlyInstallment },
  //   ]);
  // }

  

  calculateLoan() {
    const interest = this.loanAmount * (this.rateOfInterest / 100);
    const totalAmount = this.loanAmount + interest;
    const monthlyInstallment = totalAmount / (this.loanTerm * 12);

    console.log("Interest:", interest);
    console.log("Total Amount:", totalAmount);
    console.log("Monthly Installment:", monthlyInstallment);
    // this.updateChart();
  }
  calculateMonthlyInstallment() {
    const interest = this.loanAmount * (this.rateOfInterest / 100);
    const totalAmount = this.loanAmount + interest;
    const monthlyInstallment = totalAmount / (this.loanTerm * 12);
    return monthlyInstallment.toFixed(2);
  }

  calculateTotalAmount() {
    const interest = this.loanAmount * (this.rateOfInterest / 100);
    const totalAmount = this.loanAmount + interest;
    return totalAmount.toFixed(2);
  }

  calculateInterest() {
    const interest = this.loanAmount * (this.rateOfInterest / 100);
    return interest.toFixed(2);
  }
}

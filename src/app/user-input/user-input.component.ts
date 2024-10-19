import { Component,output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../data.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentservice:InvestmentService){}
enteredInitialInvestment= signal('0')
enteredAnnualInvestment =signal('0')
enteredDuration=signal('0')
enteredExpectedReturn=signal('0')


 onSubmit() {
  this.investmentservice.CalculateInvestmentResults(
    {initialInvestment: +this.enteredInitialInvestment(),
    duration: +this.enteredDuration(),
    expectedReturn : +this.enteredExpectedReturn(),
    annualInvestment:+this.enteredAnnualInvestment()})

 

}


}

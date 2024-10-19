import { Component, input } from '@angular/core';
import { Result } from '../result.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

constructor(private investmentservice:InvestmentService){}

get results(){
 return this.investmentservice.resultData
}
}

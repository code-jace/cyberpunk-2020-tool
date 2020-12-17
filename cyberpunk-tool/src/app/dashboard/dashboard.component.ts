import { Component, OnInit } from '@angular/core';
import { DiceService } from '../services/dice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dice: DiceService) {

  }

  ngOnInit(): void {

  }

  humanityLoss = (hl: string): number => {
    if (hl.indexOf('d') === -1) {
      return +hl;
    } else {
      return this.dice.roll(hl);
    }
  }



}

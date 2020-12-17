import { Injectable } from '@angular/core';
import { LifeEvent } from '../models/lifeEvent';
import { DiceService } from './dice.service';

@Injectable({
  providedIn: 'root'
})
export class CharGenService {

  constructor(public dice: DiceService) { }

  generateLifeEvent = (year: number) => {

    const le = new LifeEvent();

    switch (this.dice.roll()) {
      case 1 || 2: {
        if (this.dice.roll() % 2 === 0) {
          // if even, DISASTER STRIKES!
          le.eventCategory = 'DISASTER STRIKES !';
          switch (this.dice.roll()) {
            case 1: {
              le.event = `<h3>Financial Loss or Debt.</h3>
              <p><strong>' + this.dice.roll() * 100 + '.</strong>
              You have lost this much in EuroDollars.
              If you can't pay this now, you have a debt to pay, in cash - or blood.</p>`;
            }
          }

        } else {
          // YOU GET LUCKY
          le.eventCategory = 'YOU GET LUCKY';
        }

        break;
      }
    }
  }

}

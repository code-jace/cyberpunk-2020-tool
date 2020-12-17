import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() {
    // Test roller to see % rolls
    if (false){
      this.testRandom();
    }

  }

  rollDie = (d: number): number => {
    const min = 1;
    const max = d;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  roll = (toRoll?: string): number => {
    let numberOfDice = 1;
    let die = 10;
    // expect as 1d10 ect
    if (!toRoll){
      return this.rollDie(die);
    }
    toRoll = toRoll.toLowerCase();

    const beforeD = toRoll.substring(0, toRoll.indexOf('d'));
    if (beforeD.length > 0) {
      // if there is a value before d e.g. 2d, set number of dice
      numberOfDice = +beforeD;
    }

    toRoll = toRoll.substring(toRoll.indexOf('d') + 1);

    const rolls: Array<number> = [];

    if (this.isNumeric(toRoll)) {
      die = +toRoll;

      for (let i = 0; i < numberOfDice; i++){
        rolls.push(this.rollDie(die));

      }

      return rolls.reduce((acc, val) => acc + val);

    } else if (toRoll.indexOf('!') !== -1) {
      // handle exploding dice as 1d10! used for general rolls
      // roll as normal, if 10, keep 10 and roll again
      toRoll = toRoll.substring(0, toRoll.indexOf('!') - 1);
      for (let i = 0; i < numberOfDice; i++) {
        const numRolled = this.rollDie(die);
        rolls.push(numRolled);
        if (numRolled === die) {
          numberOfDice ++;
        }
      }
      return rolls.reduce((acc, val) => acc + val);

    } else if (toRoll.indexOf('/') !== -1 || toRoll.indexOf('+') !== -1){
      // maths time
      if (toRoll.indexOf('/') !== -1){
        const z = +toRoll.substring(toRoll.indexOf('/') + 1);
        toRoll = toRoll.substring(0, toRoll.indexOf('/') - 1);
        for (let i = 0; i < numberOfDice; i++) {
          const numRolled = this.rollDie(die);
          rolls.push(numRolled);
        }

        return rolls.reduce((acc, val) => acc + val) / z;

      }
      if (toRoll.indexOf('+') !== -1){
        const z = +toRoll.substring(toRoll.indexOf('+') + 1);
        toRoll = toRoll.substring(0, toRoll.indexOf('+') - 1);
        for (let i = 0; i < numberOfDice; i++) {
          const numRolled = this.rollDie(die);
          rolls.push(numRolled);
        }

        return rolls.reduce((acc, val) => acc + val) + z;

      }

    }

    throw new Error('not handled! dice roll not input in the form of 1d10');

  }

  private isNumeric = (num: any): boolean => {
    return !isNaN(num);
  }

  private testRandom = (): void => {
    const throws = 10000;
    const results: Array<number> = [];
    for (let i = 0; i < throws; i++) {
      results.push(this.rollDie(10));
    }
    const valueNames = results.filter((v, i, s) => s.indexOf(v) === i);
    valueNames.sort((a, b) => a - b).forEach((x: number) => {
      const count = results.filter(y => y === x).length;
      const percent = (count / throws) * 100 + '%';
      console.log(x, count, percent);
    });
  }

}

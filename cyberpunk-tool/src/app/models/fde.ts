import { Item, Cybernetic } from './item';
import { Skill } from './skill';

export class Fde {
    name = '';
    role = '';
    int = 0;
    ref = 0;
    refMod = 0;
    tech = 0;
    cool = 0;
    attr = 0;
    luck = 0;
    ma = 0;
    body = 0;
    emp = 0;
    empMod = 0;

    run = 0;
    leap = 0;
    humanity = 0;
    lift = 0;
    save = 0;
    btm = 0;

    skills: Array<Skill> = [];
    cyberware: Array<Cybernetic> = [];
    possessions: Array<Item> = [];

    constructor(data?: any) {
        if (!data){ data = {}; }
        const self = this;
        Object.assign(self, data);

        self.emp = data.emp;

        this.calcDerivatives();

    }

    private calcDerivatives = () => {
        this.run = this.ma * 3;
        this.leap = Math.floor(this.run / 4);
        this.humanity = this.emp * 10;
        this.lift = this.body * 40;
        this.save = this.body;
        if (this.body === 2) {
            this.btm = -0;
        } else if (this.body >= 3 && this.body <= 4) {
            this.btm = -1;
        } else if (this.body >= 5 && this.body <= 7) {
            this.btm = -2;
        } else if (this.body >= 8 && this.body <= 9) {
            this.btm = -3;
        } else if (this.body === 10) {
            this.btm = -4;
        }
    }
}

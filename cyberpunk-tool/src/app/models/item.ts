export class Item {
    name?: string;
    details?: string;

    sp?: number;
    ev?: number;

    constructor(data?: any) {
        if (!data){ data = {}; }
        const self = this;
        Object.assign(self, data);
    }
}

export class Cybernetic extends Item {
    type?: string;
    humanityCost: Array<number> = [];
    humanityLoss?: number;


    constructor(data?: any) {
        super(data);
        if (!data){ data = {}; }
        const self = this;
        Object.assign(self, data);
        if (data.humanityCost) {
            self.humanityCost = [];
            data.humanityCost.forEach((x: number) => {
                self.humanityCost.push(x);
            });
        }

        // if (this.humanityCost.length === 1) {
        //     this.humanityLoss = this.humanityCost[0];
        // } // else roll
    }
}

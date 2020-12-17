export class Skill {
    name = '';
    level = 0;
    costMod = 0;
    stat = '';

    constructor(data?: any) {
        if (!data){ data = {}; }
        const self = this;
        Object.assign(self, data);


    }
}

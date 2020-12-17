export class LifeEvent {
    year = 0;
    eventCategory = '';
    event = '';

    constructor(data?: any) {
        if (!data){ data = {}; }
        const self = this;
        Object.assign(self, data);


    }

}
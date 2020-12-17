import { Socket } from "dgram";
import { Cybernetic } from "./item";
import { LifeEvent } from "./lifeEvent";
import { Skill } from "./skill";

export class Character {
    handle = '';
    role = '';
    characterPoints = 0;

    // STATS
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
    lift = 0;
    humanity = 0;
    save = 0;
    btm = 0;

    // ARMOUR
    armourHead = 0;
    armourTorso = 0;
    armourRArm = 0;
    armourLArm = 0;
    armourRLeg = 0;
    armourLLeg = 0;

    damage = 0;

    skills: Array<Skill> = [];
    cybernetics: Array<Cybernetic> = [];

    lifeEvents: Array<LifeEvent> = [];
    age = 16;

    constructor(data?: any) {
        if (!data){ data = {}; }
        const self = this;
        Object.assign(self, data);

    }

}

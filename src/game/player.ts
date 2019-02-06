'use strict';

import { Coaster } from "./coaster";

interface playerAttributes {
    name: string,
    color: string // TODO - hex?
}

export class Player {

    name: string;
    color: string;
    hand: Array<Coaster>;
    tableStack: Array<Coaster>;
    score: number;
    
    constructor(player: playerAttributes) {
        this.name = player.name;
        this.color = player.color;
        this.score = 0;
        this.tableStack = [];
        this.hand = [
            new Coaster(false),
            new Coaster(false),
            new Coaster(false),
            new Coaster(true)
        ]
    }
}

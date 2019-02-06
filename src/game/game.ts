'use strict';

import { Player } from "./player";

enum Phase {
    ChoosingFirstCoaster,
    AddingCoasterToStack,
    BettingOrFolding,
    RevealingCoasters
}

export class Game {

    players: Array<Player>;
    phase: Phase;
    activePlayer: Player;
    
    constructor() {
        this.phase = Phase.ChoosingFirstCoaster;
        this.players = [
            new Player({name: "Alice", color: "red"}),
            new Player({name: "Bob", color: "blue"})
        ]
        this.activePlayer = this.players[0];
    }

    start(): void {
        console.log("==== GAME START ====");
        console.dir(this.players);
    }
}

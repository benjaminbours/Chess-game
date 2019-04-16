import { IPlayer, Player } from "./Player";
import { Colors } from "../utils";

export interface IGame {
    players: [IPlayer, IPlayer];
    lap: number;
}

export class Game implements IGame {
    players: [IPlayer, IPlayer];
    lap = 0;

    constructor() {
        this.players = [
            new Player(Colors.white),
            new Player(Colors.black)
        ];

        this.updateLap();
        this.updateLap();
        this.updateLap();
    }

    updateLap() { this.lap++; console.log(this.lap)}
}
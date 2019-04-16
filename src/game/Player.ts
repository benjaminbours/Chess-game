import { Colors } from "../utils";

export interface IPlayer {
    // moves: any[]; // historique des mouvements
    color: Colors;
}

export class Player implements IPlayer {
    // moves = [];
    color: Colors;
    constructor(c: Colors) {
        this.color = c;
    }

    // addMove(move) {
    //     this.moves.push(move);
    // }
}
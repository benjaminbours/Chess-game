export type PiecesType = "king" | "queen" | "tower" | "bishop" | "knight" | "pawn";

export interface IPieceData {
    x: string;
    y: number;
    type: PiecesType;
    color: string;
    // TODO: store the possible value
}

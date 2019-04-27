export type PiecesType = "king" | "queen" | "tower" | "bishop" | "knight" | "pawn";
export type PieceDataArr = IPieceData[];
export type History = PieceDataArr[];

export interface ICoordinate {
    x: string;
    y: number;
}

export interface IPieceData extends ICoordinate {
    type: PiecesType;
    color: string;
    hasAlreadyMoved: boolean;
    index: number;
}

export interface IAvailableMovement {
    selectedPiece: IPieceData | undefined;
    possibleTarget: ICoordinate[];
}

export interface IPiecesState {
    history: History;
    pieces: PieceDataArr;
    selectedPiece: IPieceData | undefined;
    possibleTarget: ICoordinate[];
}

// ACTIONS
export enum EPiecesActions {
    SET_SELECTED_PIECE = "SET_SELECTED_PIECE",
    SET_POSSIBLE_TARGET = "SET_POSSIBLE_TARGET",
    MOVE_PIECE = "MOVE_PIECE",
}

export interface ISetSelectedPieceAction {
    type: EPiecesActions.SET_SELECTED_PIECE;
    payload: IPieceData | undefined;
}

export interface IMovePieceAction {
    type: EPiecesActions.MOVE_PIECE,
    payload: {
        piece: IPieceData;
        target: ICoordinate;
    };
}

export type PiecesActionTypes = ISetSelectedPieceAction | IMovePieceAction;
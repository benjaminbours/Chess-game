import { EPiecesActions, ISetSelectedPieceAction, IPieceData, ICoordinate, IMovePieceAction } from "./types";

export function setSelectedPiece(piece: IPieceData | undefined): ISetSelectedPieceAction {
    return {
        type: EPiecesActions.SET_SELECTED_PIECE,
        payload: piece,
    };
}

export function movePiece(piece: IPieceData, target: ICoordinate): IMovePieceAction {
    return {
        type: EPiecesActions.MOVE_PIECE,
        payload: {
            piece,
            target,
        },
    };
}
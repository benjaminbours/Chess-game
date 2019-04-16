import { EGridActions, ISetSelectedPieceAction, IPieceData, ICoordinate, ISetPossibleTargetAction, IMovePieceAction } from "./types";

export function setSelectedPiece(piece: IPieceData | undefined): ISetSelectedPieceAction {
    return {
        type: EGridActions.SET_SELECTED_PIECE,
        payload: piece,
    };
}

export function setPossibleTarget(coordinates: ICoordinate[]): ISetPossibleTargetAction {
    return {
        type: EGridActions.SET_POSSIBLE_TARGET,
        payload: coordinates,
    };
}

export function movePiece(piece: IPieceData, target: ICoordinate): IMovePieceAction {
    return {
        type: EGridActions.MOVE_PIECE,
        payload: {
            piece,
            target,
        },
    };
}
import { EGridActions, ISetSelectedPieceAction, IPieceData, ICoordinate, ISetPossibleTargetAction } from "./types";

export function setSelectedPiece(piece: IPieceData | undefined): ISetSelectedPieceAction {
    return ({
        type: EGridActions.SET_SELECTED_PIECE,
        payload: piece,
    });
}

export function setPossibleTarget(coordinates: ICoordinate[]): ISetPossibleTargetAction {
    return ({
        type: EGridActions.SET_POSSIBLE_TARGET,
        payload: coordinates,
    });
}
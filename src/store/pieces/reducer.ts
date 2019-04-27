import {
    IPiecesState,
    PiecesType,
    EPiecesActions,
    PiecesActionTypes,
    ICoordinate,
    PieceDataArr,
} from "./types";
import { pawn } from "../../moves/pawn";

function createInitialPieces(): PieceDataArr {
    const initialGridState: PieceDataArr = [];
    const pieceTypes = ["king", "queen", "tower", "bishop", "knight", "pawn"];
    const teams = ["black", "white"];
    const coordinateX = ["a", "b", "c", "d", "e", "f", "g", "h"];

    let index = 0;
    teams.forEach((teamColor) => {
        const t = pieceTypes.reduce<PieceDataArr>((dataArr, pieceType) => {
            const data = {
                type: pieceType as PiecesType,
                color: teamColor,
                y: teamColor === "black" ? 8 : 1,
                hasAlreadyMoved: false,
            };
            switch (pieceType) {
                case pieceTypes[0]:
                    dataArr.push({
                        ...data,
                        x: "e",
                        index
                    });
                    index++;
                    break;
                case pieceTypes[1]:
                    dataArr.push({
                        ...data,
                        x: "d",
                        index
                    });
                    index++;
                    break;
                case pieceTypes[2]:
                    for (let i = 0; i < 2; i++) {
                        dataArr.push({
                            ...data,
                            x: i === 0 ? "a" : "h",
                            index
                        });
                        index++;
                    }
                    break;
                case pieceTypes[3]:
                    for (let i = 0; i < 2; i++) {
                        dataArr.push({
                            ...data,
                            x: i === 0 ? "c" : "f",
                            index
                        });
                        index++;
                    }
                    break;
                case pieceTypes[4]:
                    for (let i = 0; i < 2; i++) {
                        dataArr.push({
                            ...data,
                            x: i === 0 ? "b" : "g",
                            index
                        });
                        index++;
                    }
                    break;
                case pieceTypes[5]:
                    coordinateX.forEach((item) => {
                        dataArr.push({
                            ...data,
                            x: item,
                            y: teamColor === "black" ? 7 : 2,
                            index
                        })
                        index++;
                    });
                    break;
            }
            if (index === pieceTypes.length - 1 && teamColor === "black") {
                dataArr.push({
                    x: "d",
                    y: 3,
                    color: "black",
                    type: "pawn",
                    hasAlreadyMoved: false,
                    index: dataArr.length,
                });
            }
            return dataArr;
        }, []);
        initialGridState.push(...t);
    });
    return initialGridState;
}

export const initialState: IPiecesState = {
    history: [],
    pieces: createInitialPieces(),
    selectedPiece: undefined,
    possibleTarget: [],
};

// function calculPossibleTarget(selectedPiece: IPieceData, pieces: PieceDataArr): ICoordinate[] {
//     console.log(selectedPiece, pieces);
//     return [];
// }

// TODO: fix bug only a bishop black move
export function piecesReducer(state = initialState, action: PiecesActionTypes): IPiecesState {
    switch (action.type) {
        case EPiecesActions.SET_SELECTED_PIECE:
            let possibleTarget: ICoordinate[] = [];
            if (action.payload) {
                // calculPossibleTarget(action.payload, state.pieces);
                possibleTarget = pawn(action.payload, state.pieces);
            }
            return {
                ...state,
                selectedPiece: action.payload,
                possibleTarget,
            };
        case EPiecesActions.MOVE_PIECE:
            // console.log(action.payload);
            const { piece, target } = action.payload;
            console.log(state.pieces);
            console.log(piece, target);
            const pieces = state.pieces.slice();
            console.log(pieces[piece.index]);
            pieces[piece.index].x = target.x;
            pieces[piece.index].y = target.y;
            return {
                ...state,
                pieces,
            };
        default:
            return state;
    }
}
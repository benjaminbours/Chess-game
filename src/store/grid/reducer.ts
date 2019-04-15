import {
    IGridState,
    IPieceData,
    PiecesType,
    EGridActions,
    GridActionTypes,
    ICoordinate,
    PieceDataArr,
} from "./types";
import { pawn } from "../../moves/pawn";

function createInitialPieces(): PieceDataArr {
    const initialGridState: PieceDataArr = [];
    const pieceTypes = ["king", "queen", "tower", "bishop", "knight", "pawn"];
    const teams = ["black", "white"];
    const coordinateX = ["a", "b", "c", "d", "e", "f", "g", "h"];

    teams.forEach((teamColor) => {
        const t = pieceTypes.reduce<PieceDataArr>((dataArr, pieceType, index) => {
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
                    });
                    break;
                case pieceTypes[1]:
                    dataArr.push({
                        ...data,
                        x: "d",
                    });
                    break;
                case pieceTypes[2]:
                    for (let i = 0; i < 2; i++) {
                        dataArr.push({
                            ...data,
                            x: i === 0 ? "a" : "h",
                        });
                    }
                    break;
                case pieceTypes[3]:
                    for (let i = 0; i < 2; i++) {
                        dataArr.push({
                            ...data,
                            x: i === 0 ? "c" : "f",
                        });
                    }
                    break;
                case pieceTypes[4]:
                    for (let i = 0; i < 2; i++) {
                        dataArr.push({
                            ...data,
                            x: i === 0 ? "b" : "g",
                        });
                    }
                    break;
                case pieceTypes[5]:
                    coordinateX.forEach((item) => {
                        dataArr.push({
                            ...data,
                            x: item,
                            y: teamColor === "black" ? 7 : 2,
                        })
                    });
                    break;
            }
            if (index === pieceTypes.length - 1 && teamColor === "black") {
                dataArr.push({
                    x: "d",
                    y: 3,
                    color: "black",
                    type: "pawn",
                    hasAlreadyMoved: false
                });
            }
            return dataArr;
        }, []);
        initialGridState.push(...t);
    });
    return initialGridState;
}

export const initialState: IGridState = {
    history: [],
    pieces: createInitialPieces(),
    selectedPiece: undefined,
    possibleTarget: [],
};

function calculPossibleTarget(selectedPiece: IPieceData, pieces: PieceDataArr): ICoordinate[] {
    console.log(selectedPiece, pieces);
    return [];
}

export function gridReducer(state = initialState, action: GridActionTypes): IGridState {
    switch (action.type) {
        case EGridActions.SET_SELECTED_PIECE:
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
        default:
            return state;
    }
}
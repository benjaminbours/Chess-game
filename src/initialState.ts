import { IPieceData, PiecesType } from "./types";

const pieceTypes = ["king", "queen", "tower", "bishop", "knight", "pawn"];
const teams = ["black", "white"];
const coordinateX = ["a", "b", "c", "d", "e", "f", "g", "h"];

// TODO: optimize
export const initialState: IPieceData[] = [];

teams.forEach((teamColor) => {
    const t = pieceTypes.reduce<IPieceData[]>((dataArr, pieceType) => {
        const data = {
            type: pieceType as PiecesType,
            color: teamColor,
        };
        switch (pieceType) {
            case pieceTypes[0]:
                dataArr.push({
                    ...data,
                    x: "e",
                    y: teamColor === "black" ? 8 : 1,
                });
                break;
            case pieceTypes[1]:
                dataArr.push({
                    ...data,
                    x: "d",
                    y: teamColor === "black" ? 8 : 1,
                });
                break;
            case pieceTypes[2]:
                for (let i = 0; i < 2; i++) {
                    dataArr.push({
                        ...data,
                        x: i === 0 ? "a" : "h",
                        y: teamColor === "black" ? 8 : 1,
                    });
                }
                break;
            case pieceTypes[3]:
                for (let i = 0; i < 2; i++) {
                    dataArr.push({
                        ...data,
                        x: i === 0 ? "c" : "f",
                        y: teamColor === "black" ? 8 : 1,
                    });
                }
                break;
            case pieceTypes[4]:
                for (let i = 0; i < 2; i++) {
                    dataArr.push({
                        ...data,
                        x: i === 0 ? "b" : "g",
                        y: teamColor === "black" ? 8 : 1,
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
        return dataArr;
    }, []);
    initialState.push(...t);
});
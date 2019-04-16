import { PieceDataArr, IPieceData, ICoordinate } from "../store/grid/types";
import { letterValue } from "../utils";

export function pawn(selectedPiece: IPieceData, pieces: PieceDataArr) {
    const { hasAlreadyMoved, x, y, color } = selectedPiece;
    const displacementX = 1;
    const displacementY = hasAlreadyMoved ? 1 : 2;

    let possibleTarget: ICoordinate[] = [];

    for (let i = 1; i <= displacementY; i++) {
        possibleTarget.push({
            x: x,
            y: color === "white" ? y + i : y - i,
        });
    }

    const attackDisplacementX = color === "white" ? y + 1 : y - 1;
    const possibleAttack = pieces.reduce<ICoordinate[]>((array, item) => {
        // same color ? can't attack
        if (item.color === color) {
            return array;
        }

        // extract the possibleTarget case already occupied or inaccessible
        for (let i = 0; i < possibleTarget.length; i++) {
            const target = possibleTarget[i];
            const isOccupied = item.x === target.x && item.y === target.y;
            if (isOccupied && i === 0) {
                possibleTarget.splice(possibleTarget.indexOf(target), 2);
            } else if (isOccupied) {
                possibleTarget.splice(possibleTarget.indexOf(target), 1);
            }
        }

        const matchX = letterValue[item.x]() === letterValue[x]() + displacementX || letterValue[item.x]() === letterValue[x]() - displacementX;
        const matchY = item.y === attackDisplacementX;
        if (matchX && matchY) {
            array.push({
                x: item.x,
                y: item.y,
            });
        }
        return array;
    }, []);

    return [
        ...possibleTarget,
        ...possibleAttack,
    ];
}
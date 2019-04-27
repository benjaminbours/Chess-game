import React from 'react';
// import { Piece } from "./Piece";
// import { IPieceData } from "../store/pieces/types";
import classNames from "classnames";

interface IOwnProps {
    // className: string;
    x: string;
    y: number;
    color: string;
    // piece: IPieceData | undefined;
    // handleClick: () => void;
}

type Props = IOwnProps;

export function Box({ x, y, color }: Props) {
    const cssClass = classNames({
        box: true,
        [`box--${color}`]: true,
        // "case--selected-piece": selectedPiece && x === selectedPiece.x && y === selectedPiece.y,
        // "case--possible-target": isPossibleTarget,
    });
    return (
        <div className={cssClass}>
            {/* helper */}
            {`${x} ${y}`}
            {/* {piece &&
                <Piece {...piece} />
            } */}
        </div>
    );
}

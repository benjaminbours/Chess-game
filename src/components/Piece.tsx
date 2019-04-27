import React from 'react';
import { capitalizeFirstLetter } from "../utils";
import { PiecesType } from "../store/pieces/types"; 

interface IPieceProps {
    color: string;
    type: PiecesType;
    x: string;
    y: number;
}

export function Piece({ color, type, x, y }: IPieceProps) {
    const fileName = `${type}${capitalizeFirstLetter(color)}`;
    return (
        <img
            className="piece"
            src={`/pieces/${fileName}.svg`}
            alt={fileName}
            // onClick={() => dispatch(toggleTestAction(false))}
        />
    );
}
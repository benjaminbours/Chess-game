import React from 'react';
import { capitalizeFirstLetter } from "../utils";
import { PiecesType } from "../types";

interface IPieceProps {
    color: string;
    type: PiecesType;
}

export function Piece({ color, type }: IPieceProps) {
    const fileName = `${type}${capitalizeFirstLetter(color)}`;
    return(
        <img className="piece" src={`/pieces/${fileName}.svg`} alt={fileName} />
    );
}
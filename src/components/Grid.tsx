import React from 'react';
import { isEven } from "../utils";
import { Case } from "./Case";
import { Row } from "./Row";
import { connect } from "react-redux";
import { AppState } from "../store";
import { IGridState } from '../store/grid/types';
import classNames from "classnames";
import { Dispatch } from "redux";
import { setSelectedPiece, movePiece } from '../store/grid/actions';
import { incrementLap } from '../store/game/actions';
import { equals } from "ramda";
import { Colors } from "../utils";
import "./Grid.css";
import { IGameState } from '../store/game/types';

const coordinateX = ["a", "b", "c", "d", "e", "f", "g", "h"];
const coordinateY = [8, 7, 6, 5, 4, 3, 2, 1];

interface IStateProps {
    grid: IGridState;
    game: IGameState;
}

interface IDispatchProps {
    setSelectedPiece: typeof setSelectedPiece;
    incrementLap: typeof incrementLap;
    movePiece: typeof movePiece;
    dispatch: Dispatch;
}

type Props = IStateProps & IDispatchProps;

export function Grid({ grid, dispatch, setSelectedPiece, game, movePiece }: Props) {
    const { pieces, possibleTarget, selectedPiece } = grid;

    console.log(game.lap);
    console.log(possibleTarget);

    return (
        <div className="grid">
            {coordinateY.map((y, i) => {
                const isYEven = isEven(i);
                return (
                    <Row key={y}>
                        {coordinateX.map((x, j) => {
                            const isXEven = isEven(j + 1);
                            const isWhite = isXEven && !isYEven || !isXEven && isYEven;
                            const color = isWhite ? Colors.white : Colors.black;
                            const piece = pieces.find((item) => item.x === x && item.y === y);

                            const isPossibleTarget = possibleTarget.reduce<boolean>((bool, item) => {
                                if (item.x === x && item.y === y) {
                                    bool = true;
                                }
                                return bool;
                            }, false);

                            const caseColor = `case--${color}`;
                            const cssClass = classNames({
                                case: true,
                                [caseColor]: true,
                                "case--selected-piece": selectedPiece && x === selectedPiece.x && y === selectedPiece.y,
                                "case--possible-target": isPossibleTarget,
                            });

                            // TODO: When the player click on a possible target, move the piece on the case
                            const handleClick = () => {
                                if (isPossibleTarget && selectedPiece) {
                                    dispatch(movePiece(selectedPiece, { x, y }));
                                    dispatch(incrementLap());
                                }
                                else if (piece && equals(piece, selectedPiece)) {
                                    dispatch(setSelectedPiece(undefined));
                                } else if (piece) {
                                    dispatch(setSelectedPiece(piece));
                                }
                                return;
                            };

                            return (
                                <Case
                                    className={cssClass}
                                    key={`${x}${y}`}
                                    x={x}
                                    y={y}
                                    piece={piece}
                                    handleClick={handleClick}
                                />
                            );
                        })}
                    </Row>
                );
            })}
        </div>
    );
}

function mapStateToProps(state: AppState): IStateProps {
    return {
        grid: state.grid,
        game: state.game,
    };
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
    return {
        dispatch,
        setSelectedPiece,
        incrementLap,
        movePiece,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
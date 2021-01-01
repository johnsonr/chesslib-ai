import { Evaluator } from "./ChessAI";

import { BoardEvaluations } from "./BoardEvals";
import { Chessboard, COLORS, Piece } from "@chesslib/core";

const PIECE_VALUES = {
    P: 10,
    B: 31,
    N: 30,
    R: 50,
    Q: 90,
    K: 900,
};

export interface EvaluatorRule {

    readonly name: string;

    /**
     * Positive or negative numbers for this rule
     * @param board 
     * @param side 
     */
    delta(board: Chessboard, side): number;
}


export class RuleBasedEvaluator implements Evaluator {

    private readonly rules: EvaluatorRule[];

    constructor(...pRules: EvaluatorRule[]) {
        this.rules = pRules;

    }

    evaluateBoard(board: Chessboard, side) {
        var boardValue = 0;

        board.forEachPiece(piece => {
            if (side == piece.color) {
                boardValue += PIECE_VALUES[piece.type] + BoardEvaluations[piece.color][piece.type][piece.square.y][piece.square.x];
            } else {
                boardValue -= PIECE_VALUES[piece.type] + BoardEvaluations[piece.color][piece.type][piece.square.y][piece.square.x];
            }

            //Already kind of does with piece square table
            // if (penalizeBackRank) {
            //     if (side == COLORS.WHITE && side == piece.color) {
            //         const fen = board.PositionToFEN(piece.square.x, piece.square.y);
            //         //console.log(`"${fen}"`)
            //         if (["g1", "f1", "e1"].indexOf(fen) !== -1) {
            //             //console.log("Penalize " + fen)
            //             boardValue -= 4;
            //         }
            //         if (["b1", "c1"].indexOf(fen) !== -1) {
            //             boardValue -= 3;
            //         }
            //     }
            // }


        });
        //console.log(`Returning ${boardValue}`);


        // if (this.opts.doubledPawnPenalty) {
        //     const pawns = board.findPieces("P", side);
        //     if
        //     console.log(pawns);
        // }

        // Mobility?
        // if (this.opts.mobility && board.history.length > 5) {
        //     const legalMoves = board.getMoves(side);
        //     boardValue += legalMoves.length / 3;
        // }

        this.rules.forEach(rule => {
            const delta = rule.delta(board, side);
            //console.log(`Rule ${rule.name}: delta ${delta}`);
            boardValue += delta;
        });


        return boardValue;
    }
}

export function bishopPairBoost(boost: number): EvaluatorRule {
    return {
        name: "BishopPair",
        delta: (board, side) => {
            const bishops = board.findPieces("B", side);
            return (bishops.length === 2) ? boost : 0;
        }
    }
}
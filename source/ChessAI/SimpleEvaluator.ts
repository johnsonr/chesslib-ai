import { Evaluator } from "./ChessAI";

import { BoardEvaluations } from "./BoardEvals";

const PIECE_VALUES = {
    P: 10,
    B: 30,
    N: 30,
    R: 50,
    Q: 80,
    K: 900,
};

export class SimpleEvaluator implements Evaluator {

    evaluateBoard(board, side) {
        var boardValue = 0;
        board.forEachPiece(piece => {
            if (side == piece.color) {
                boardValue += PIECE_VALUES[piece.type] + BoardEvaluations[piece.color][piece.type][piece.square.y][piece.square.x];
            } else {
                boardValue -= PIECE_VALUES[piece.type] + BoardEvaluations[piece.color][piece.type][piece.square.y][piece.square.x];
            }

        });
        //console.log(`Returning ${boardValue}`);

        return boardValue;
    }
}
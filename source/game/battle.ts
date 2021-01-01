
import { COLORS, Chessboard, Positions } from "@chesslib/core";
import { ChessAI } from "../ChessAI";


const board = new Chessboard();
board.loadPositions(Positions.default);

let moveCount = 0;

while (board) {
    ++moveCount;

    move(board, COLORS.WHITE, moveCount, 5);
    move(board, COLORS.BLACK, moveCount, 5);

}

function move(board, color, moveCount, depth) {
    const ai = new ChessAI(board, color, 2);
    const startTime = new Date().getTime();
    const bestMoves = ai.getBestMoves(depth, 15);
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    //console.log("Best Moves for black:", bestMoves);
    const bestMove = bestMoves[0];

    // Make it always the score for white
    const score = (color === COLORS.BLACK) ? -bestMove.score : bestMove.score;

    console.log(`${color === COLORS.WHITE ? (moveCount + ":") : "  "} ${bestMove.from}-${bestMove.to} (W${score}): ${ai.terminalPositions} terminal positions in ${elapsedTime}ms`);
    board.doMoveFEN(bestMove);

    //console.log("chessboard", board.getBoard());
}


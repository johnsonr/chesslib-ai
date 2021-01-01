
import { COLORS, Chessboard, Positions } from "@chesslib/core";
import { ChessAI, Evaluator } from "../ChessAI";
import { SimpleEvaluator } from "../ChessAI/SimpleEvaluator";


const board = new Chessboard();
board.loadPositions(Positions.default);

let moveCount = 0;

const whiteEvaluator: Evaluator = new SimpleEvaluator();
const blackEvaluator: Evaluator = new SimpleEvaluator();
const depth = 5;


while (board) {
    ++moveCount;

    move(board, COLORS.WHITE, moveCount, whiteEvaluator, depth);
    move(board, COLORS.BLACK, moveCount, blackEvaluator, depth);

}

function move(board, color, moveCount, evaluator: Evaluator, depth) {
    const ai = new ChessAI(board, color, evaluator);
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



import { COLORS, Chessboard, Positions } from "@chesslib/core";
import { ChessAI } from "../ChessAI";
import { RuleBasedEvaluator } from "../ChessAI/RuleBasedEvaluator";

import { question } from "readline-sync";


const board = new Chessboard();
board.loadPositions(Positions.default);

let moveCount = 0;

const aiColor = COLORS.BLACK;

while (true) {
    ++moveCount;

    const move = question(`${moveCount}: `);
    // TODO: Log the answer in a database

    const from = move.substring(0, 2);
    const to = move.substring(2, 4);

    // TODO error handling
    //console.log(`You played: ${from}-${to}`);

    board.doMoveFEN({ from, to });

    //var moves = board.getMoves();
    //console.log("Moves:", moves);

    const ai = new ChessAI(board, aiColor, new RuleBasedEvaluator());
    const startTime = new Date().getTime();
    const bestMoves = ai.getBestMoves(5, 15);
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    //console.log("Best Moves for black:", bestMoves);
    const bestMove = bestMoves[0];

    // Make it always the score for white
    const score = (aiColor === COLORS.BLACK) ? -bestMove.score : bestMove.score;

    console.log(`${moveCount}: ${bestMove.from}-${bestMove.to} (${score}): ${ai.terminalPositions} terminal positions in ${elapsedTime}ms`);
    board.doMoveFEN(bestMove);


    //console.log("chessboard", board.getBoard());


}


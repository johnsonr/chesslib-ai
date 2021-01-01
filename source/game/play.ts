
import { COLORS, Chessboard, Positions } from "@chesslib/core";
import { ChessAI } from "../ChessAI";

import { question } from "readline-sync";


const board = new Chessboard();
board.loadPositions(Positions.default);

while (true) {

    const move = question("Enter your move, formatted like e2e4: ");
    // TODO: Log the answer in a database

    console.log(move);
    const from = move.substring(0, 2);
    const to = move.substring(2, 4);

    console.log(`You played: ${from}-${to}`);


    board.doMoveFEN({ from, to });


    var moves = board.getMoves();
    //console.log("Moves:", moves);

    // AI
    var ai = new ChessAI(board, COLORS.BLACK, 2);
    var bestMoves = ai.getBestMoves(3, 12);
    //console.log("Best Moves for black:", bestMoves);
    const bestMove = bestMoves[0];

    console.log(`Computer played: ${bestMove.from}-${bestMove.to}`);

    board.doMoveFEN(bestMove);


    console.log("chessboard", board.getBoard());


}


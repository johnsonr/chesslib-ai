import * as core from "@chesslib/core";

import { COLORS, Chessboard, Positions } from "@chesslib/core";
import { ChessAI } from "../ChessAI";

console.log("Gotcha")

//console.log(JSON.stringify(core.Chess))

var board = new Chessboard();
board.loadPositions(Positions.default);
console.log("chessboard", board.getBoard());

var moves = board.getMoves();
console.log("Moves:", moves);

// AI
var ai = new ChessAI(board, COLORS.BLACK, 2);
var bestMoves = ai.getBestMoves(2, 10);
console.log("Best Moves for black:", bestMoves);
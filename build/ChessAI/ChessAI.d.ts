import { Chessboard } from "@chesslib/core";
export declare class ChessAI {
    chessboard: Chessboard;
    moves: any[];
    playingSide: number;
    playerCount: number;
    searchTime: number;
    constructor(chessboard: any, playingSide: any, playerCount: any);
    setBoard(chessboard: any): void;
    loadBoard(positions: any): void;
    doMove(move: any): boolean;
    doMoveFEN(move: any): boolean;
    makeMoves(searchDepth?: number, amount?: number): any[];
    getBestMove(side: any, searchDepth: any): any;
    getBestMoves(searchDepth: any, limit?: number): any[];
    getNextPlayerSide(playerSide: any): number;
    evaluateBestMove(playerSide: any, depth: any, alpha: any, beta: any, isMaximisingPlayer: any): number;
    getRandomMove(): any;
    evaluateBoard(side: any): number;
}

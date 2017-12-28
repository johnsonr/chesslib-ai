(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArray(array) {
    return array.slice().reverse();
}
;
exports.boardEvalsWhite = {
    P: [
        [10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0],
        [5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0],
        [1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 1.0],
        [0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5],
        [0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0],
        [0.5, -0.5, -1.0, 0.0, 0.0, -1.0, -0.5, 0.5],
        [0.5, 1.0, 1.0, -2.0, -2.0, 1.0, 1.0, 0.5],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    ],
    N: [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0, 0.0, 0.0, 0.0, 0.0, -2.0, -4.0],
        [-3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0, -3.0],
        [-3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5, -3.0],
        [-3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0, -3.0],
        [-3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5, -3.0],
        [-4.0, -2.0, 0.0, 0.5, 0.5, 0.0, -2.0, -4.0],
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
    ],
    B: [
        [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
        [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
        [-1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0, -1.0],
        [-1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, -1.0],
        [-1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0],
        [-1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0],
        [-1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, -1.0],
        [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
    ],
    R: [
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0]
    ],
    Q: [
        [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
        [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
        [-1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
        [-0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
        [0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
        [-1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
        [-1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, -1.0],
        [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
    ],
    K: [
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
        [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
        [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
        [2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0],
        [2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0]
    ]
};
exports.boardEvalsBlack = {
    P: reverseArray(exports.boardEvalsWhite.P),
    N: reverseArray(exports.boardEvalsWhite.N),
    B: reverseArray(exports.boardEvalsWhite.B),
    R: reverseArray(exports.boardEvalsWhite.R),
    Q: reverseArray(exports.boardEvalsWhite.Q),
    K: reverseArray(exports.boardEvalsWhite.K),
};
exports.BoardEvaluations = [
    exports.boardEvalsBlack,
    exports.boardEvalsWhite,
];



},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chess_1 = require("../Chess");
var BoardEvals_1 = require("./BoardEvals");
var PIECE_VALUES = {
    P: 10,
    B: 30,
    N: 30,
    R: 50,
    Q: 80,
    K: 900,
};
var ChessAI = /** @class */ (function () {
    function ChessAI(chessboard, playingSide, playerCount) {
        this.chessboard = null;
        this.moves = [];
        this.playingSide = 0;
        this.playerCount = 2;
        this.searchTime = 0;
        this.chessboard = chessboard;
        this.playingSide = playingSide;
        this.playerCount = playerCount;
    }
    ChessAI.prototype.setBoard = function (chessboard) {
        this.chessboard = chessboard;
    };
    ChessAI.prototype.loadBoard = function (positions) {
        this.chessboard = Chess_1.Chessboard.fromPosition(positions);
    };
    ChessAI.prototype.doMove = function (move) {
        if (!this.chessboard.doMove(move)) {
            return false;
        }
        return true;
    };
    ChessAI.prototype.doMoveFEN = function (move) {
        if (!this.chessboard.doMoveFEN(move)) {
            return false;
        }
        return true;
    };
    ChessAI.prototype.makeMoves = function (searchDepth, amount) {
        if (searchDepth === void 0) { searchDepth = 4; }
        if (amount === void 0) { amount = 1; }
        var bestMoves = this.getBestMoves(searchDepth, amount);
        if (!bestMoves.length) {
            return null;
        }
        for (var _i = 0, bestMoves_1 = bestMoves; _i < bestMoves_1.length; _i++) {
            var bestMove = bestMoves_1[_i];
            this.doMove(bestMove);
        }
        return bestMoves;
    };
    ChessAI.prototype.getBestMove = function (side, searchDepth) {
        var bestMoves = this.getBestMoves(searchDepth);
        if (!bestMoves.length) {
            return this.getRandomMove();
        }
        // var bestMove = null;
        // var bestValue = -9999;
        // if(move.score > bestValue)
        // {
        // 	bestMove = move;
        // 	bestValue = move.score;
        // }
        return bestMoves[0];
    };
    ChessAI.prototype.getBestMoves = function (searchDepth, limit) {
        if (limit === void 0) { limit = 5; }
        this.searchTime = Date.now() + 100;
        var moves = this.chessboard.getMovesFEN(this.playingSide);
        for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
            var move = moves_1[_i];
            this.chessboard.moveFEN(move.from, move.to);
            // Do not allow the king to be killed?
            move.score = this.evaluateBestMove(this.playingSide, searchDepth - 1, -10000, 10000, false);
            this.chessboard.undo();
        }
        return moves.sort(function (a, b) {
            if (a.score < b.score)
                return 1;
            if (a.score > b.score)
                return -1;
            return 0;
        }).slice(0, limit);
    };
    ChessAI.prototype.getNextPlayerSide = function (playerSide) {
        return (playerSide + 1) % this.playerCount;
    };
    ChessAI.prototype.evaluateBestMove = function (playerSide, depth, alpha, beta, isMaximisingPlayer) {
        if (depth === 0) {
            return this.evaluateBoard(this.playingSide);
        }
        var currentPlayer = this.getNextPlayerSide(playerSide);
        var moves = this.chessboard.getMoves(currentPlayer);
        if (isMaximisingPlayer) {
            var bestValue = -9999;
            for (var _i = 0, moves_2 = moves; _i < moves_2.length; _i++) {
                var move = moves_2[_i];
                this.chessboard.move(move.from, move.to);
                bestValue = Math.max(bestValue, this.evaluateBestMove(currentPlayer, depth - 1, alpha, beta, !isMaximisingPlayer));
                this.chessboard.undo();
                alpha = Math.max(alpha, bestValue);
                if (beta <= alpha) {
                    return bestValue;
                }
            }
            return bestValue;
        }
        else {
            var bestValue = 9999;
            for (var _a = 0, moves_3 = moves; _a < moves_3.length; _a++) {
                var move = moves_3[_a];
                this.chessboard.move(move.from, move.to);
                bestValue = Math.min(bestValue, this.evaluateBestMove(currentPlayer, depth - 1, alpha, beta, !isMaximisingPlayer));
                this.chessboard.undo();
                beta = Math.min(beta, bestValue);
                if (beta <= alpha) {
                    return bestValue;
                }
            }
            return bestValue;
        }
    };
    ChessAI.prototype.getRandomMove = function () {
        var moves = this.chessboard.getMovesFEN(this.playingSide);
        if (!moves.length)
            return null;
        var randMove = moves[Math.floor(Math.random() * moves.length)];
        randMove.score = 0;
        return randMove;
    };
    ChessAI.prototype.evaluateBoard = function (side) {
        var boardValue = 0;
        this.chessboard.forEachPiece(function (piece) {
            if (side == piece.color) {
                boardValue += PIECE_VALUES[piece.type] + BoardEvals_1.BoardEvaluations[piece.color][piece.type][piece.square.y][piece.square.x];
            }
            else {
                boardValue -= PIECE_VALUES[piece.type] + BoardEvals_1.BoardEvaluations[piece.color][piece.type][piece.square.y][piece.square.x];
            }
        });
        return boardValue;
    };
    return ChessAI;
}());
exports.ChessAI = ChessAI;
;



},{"../Chess":17,"./BoardEvals":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChessAIWorker = /** @class */ (function () {
    function ChessAIWorker(workerPath) {
        var _this = this;
        this.worker = null;
        this.listeners = [];
        this.worker = new Worker(workerPath);
        this.worker.onmessage = function (message) {
            if (_this.listeners[message.data.event]) {
                for (var _i = 0, _a = _this.listeners[message.data.event]; _i < _a.length; _i++) {
                    var event = _a[_i];
                    event.apply(event, message.data.arguments);
                }
            }
        };
    }
    ChessAIWorker.prototype.emit = function (event, data) {
        this.worker.postMessage(event);
    };
    ChessAIWorker.prototype.on = function (type, callback) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    };
    ChessAIWorker.prototype.exec = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.worker.postMessage({
            method: method,
            arguments: Array.prototype.slice.call(arguments).slice(1)
        });
    };
    ChessAIWorker.prototype.destroy = function () {
        this.worker.terminate();
    };
    return ChessAIWorker;
}());
exports.ChessAIWorker = ChessAIWorker;
;



},{}],4:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./ChessAI"));
__export(require("./ChessAIWorker"));



},{"./ChessAI":2,"./ChessAIWorker":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = require("./Square");
var Piece_1 = require("./Piece");
// Pieces
var Pawn_1 = require("./Pieces/Pawn");
var Bishop_1 = require("./Pieces/Bishop");
var Knight_1 = require("./Pieces/Knight");
var Rook_1 = require("./Pieces/Rook");
var Queen_1 = require("./Pieces/Queen");
var King_1 = require("./Pieces/King");
// Third Party
var Utils_1 = require("./Utils");
var Chessboard = /** @class */ (function () {
    function Chessboard(sizeX, sizeY) {
        if (sizeX === void 0) { sizeX = 8; }
        if (sizeY === void 0) { sizeY = 8; }
        this.boardSize = {
            x: 8,
            y: 8,
        };
        this.history = [];
        this.squares = new Array();
        this.onPromote = new Utils_1.ChessEventEmitter();
        this.boardSize.x = sizeX;
        this.boardSize.y = sizeY;
        this.reset();
    }
    Chessboard.fromPosition = function (position) {
        var sizeY = position.length;
        var sizeX = position[0].length;
        var board = new Chessboard(sizeX, sizeY);
        board.loadPositions(position);
        return board;
    };
    Chessboard.prototype.clone = function () {
        return Chessboard.fromPosition(this.savePositions());
    };
    Chessboard.prototype.reset = function () {
        this.squares = new Array();
        for (var y = 0; y < this.boardSize.y; ++y) {
            this.squares[y] = new Array();
            for (var x = 0; x < this.boardSize.x; ++x) {
                this.squares[y][x] = new Square_1.Square(this, x, y);
            }
        }
        this.history = [];
    };
    Chessboard.prototype.forEach = function (callback) {
        for (var y = 0; y < this.boardSize.y; ++y) {
            for (var x = 0; x < this.boardSize.x; ++x) {
                callback(this.squares[y][x], x, y);
            }
        }
    };
    Chessboard.prototype.forEachPiece = function (callback) {
        this.forEach(function (square, x, y) {
            if (square.piece) {
                callback(square.piece, x, y, square);
            }
        });
    };
    Chessboard.prototype.findPieces = function (pieceType, color) {
        if (pieceType === void 0) { pieceType = null; }
        if (color === void 0) { color = null; }
        var pieces = [];
        this.forEachPiece(function (piece) {
            if (pieceType && piece.type != pieceType)
                return;
            if (color && piece.color != color)
                return;
            pieces.push(piece);
        });
        return pieces;
    };
    Chessboard.prototype.map = function (callback) {
        var newSquares = new Array();
        for (var y = 0; y < this.boardSize.y; ++y) {
            newSquares[y] = new Array();
            for (var x = 0; x < this.boardSize.x; ++x) {
                newSquares[y][x] = callback(this.squares[y][x], x, y);
            }
        }
        return newSquares;
    };
    Chessboard.prototype.loadPositions = function (positions) {
        this.reset();
        if (positions.length > this.boardSize.y || positions[0].length > this.boardSize.x) {
            return false;
        }
        for (var y = 0; y < positions.length; ++y) {
            for (var x = 0; x < positions[y].length; ++x) {
                var square = this.getSquare(x, y);
                this.setSquare(square, positions[y][x][1], Piece_1.COLORS.getColor(positions[y][x][0]));
            }
        }
        return true;
    };
    Chessboard.prototype.savePositions = function () {
        var positions = [];
        for (var y = 0; y < this.boardSize.y; ++y) {
            positions[y] = [];
            for (var x = 0; x < this.boardSize.x; ++x) {
                if (this.squares[y][x].piece) {
                    positions[y][x] = Piece_1.COLORS.getName(this.squares[y][x].piece.color) + this.squares[y][x].piece.type;
                }
                else {
                    positions[y][x] = "";
                }
            }
        }
        return positions;
    };
    Chessboard.prototype.setBoard = function (board) {
        this.reset();
        var keys = Object.keys(board);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var square = this.FENToSquare(key);
            if (!square)
                return;
            var color = board[key][0];
            var piece = board[key][1];
            this.setSquare(square, piece, Piece_1.COLORS.getColor(color));
        }
    };
    Chessboard.prototype.getBoard = function () {
        var _this = this;
        var positions = {};
        this.forEach(function (square) {
            if (square.piece) {
                positions[_this.SquareToFEN(square)] = square.piece.getSymbol();
            }
        });
        return positions;
    };
    Chessboard.prototype.getSquare = function (x, y) {
        if (x >= (this.boardSize.x) || x < 0 || y >= (this.boardSize.y) || y < 0)
            return null;
        return this.squares[y][x];
    };
    Chessboard.prototype.setSquare = function (square, type, color) {
        if (!square)
            return null;
        if (!type)
            return this.clearSquare(square);
        if (!Chessboard.PIECES[type])
            return null;
        return this.createPiece(type, color, square);
    };
    Chessboard.prototype.createPiece = function (type, color, square) {
        var newPiece = new Chessboard.PIECES[type](this, square);
        newPiece.setColor(color);
        newPiece.initialize();
        return newPiece;
    };
    Chessboard.prototype.setPiece = function (square, piece) {
        if (!square)
            return false;
        // Remove the old piece from the square
        if (square.piece) {
            square.piece.square = null;
        }
        // Set the new piece
        square.piece = piece;
        if (piece) {
            piece.square = square;
        }
        return true;
    };
    Chessboard.prototype.clearSquare = function (square) {
        if (square.piece) {
            square.piece.setSquare(null);
            square.setPiece(null);
        }
    };
    Chessboard.prototype.isValidMoveFEN = function (from, to) {
        var fromSquare = this.FENToSquare(from);
        var toSquare = this.FENToSquare(to);
        return this.isValidMove(fromSquare, toSquare);
    };
    Chessboard.prototype.isValidMove = function (from, to) {
        if (!from || !to)
            return false;
        if (!from.piece)
            return false;
        return !!this.getAllowedMovesOf(from.piece).find(function (move) {
            if (from == move.from && to == move.to)
                return true;
            return false;
        });
    };
    Chessboard.prototype.doMove = function (move) {
        this.move(move.from, move.to);
    };
    Chessboard.prototype.doMoveFEN = function (move) {
        this.tryMoveFEN(move.from, move.to);
    };
    Chessboard.prototype.move = function (from, to, simulatedMove) {
        if (simulatedMove === void 0) { simulatedMove = false; }
        if (!from || !to)
            return false;
        if (!from.piece)
            return false;
        var movingPiece = from.piece;
        // Add the move to the history
        this.history.push([]);
        // this.forEachPiece( piece => {
        // 	piece.BeforePieceMoved(movingPiece, to);
        // });
        var result = movingPiece.move(to);
        // this.forEachPiece( piece => {
        // 	piece.AfterPieceMoved(movingPiece, to);
        // });
        return result;
    };
    Chessboard.prototype.addHistory = function (piece, data) {
        var history = {
            piece: piece,
            data: data,
        };
        this.history[this.history.length - 1].push(history);
    };
    // pushHistory(piece, data)
    // {
    // 	var historyEvent = {
    // 		piece: piece,
    // 		type: type,
    // 		data: data,
    // 	};
    // 	this.history[this.history.length - 1].push(historyEvent);
    // }
    // popHistory()
    // {
    // 	var history = this.history.pop()
    // 	history.piece.undo(history.data);
    // 	return history;
    // }
    // newHistory()
    // {
    // 	this.history.push([]);
    // }
    // Undo the last actions.
    Chessboard.prototype.undo = function () {
        var history = this.history.pop();
        if (!history) {
            return null;
        }
        var historySize = history.length;
        for (var i = 0; i < historySize; ++i) {
            var event = history.pop();
            event.piece.undo(event.data);
        }
        return history;
    };
    Chessboard.prototype.moveFEN = function (from, to, simulatedMove) {
        if (simulatedMove === void 0) { simulatedMove = false; }
        var fromSquare = this.FENToSquare(from);
        var toSquare = this.FENToSquare(to);
        return this.move(fromSquare, toSquare, simulatedMove);
    };
    Chessboard.prototype.tryMove = function (from, to, simulatedMove) {
        if (simulatedMove === void 0) { simulatedMove = false; }
        if (!this.isValidMove(from, to))
            return false;
        return this.move(from, to, simulatedMove);
    };
    Chessboard.prototype.tryMoveFEN = function (from, to, simulatedMove) {
        if (simulatedMove === void 0) { simulatedMove = false; }
        var fromSquare = this.FENToSquare(from);
        var toSquare = this.FENToSquare(to);
        if (!this.isValidMove(fromSquare, toSquare)) {
            return false;
        }
        return this.move(fromSquare, toSquare, simulatedMove);
    };
    Chessboard.prototype.getAllowedMovesOf = function (piece) {
        return piece.getAllowedMoves().map(function (toSquare) {
            return {
                from: piece.square,
                to: toSquare,
            };
        });
    };
    Chessboard.prototype.getMovesOf = function (piece) {
        return piece.getLegalMoves().map(function (toSquare) {
            return {
                from: piece.square,
                to: toSquare,
            };
        });
    };
    Chessboard.prototype.getMovesAtFEN = function (fen) {
        var square = this.FENToSquare(fen);
        if (square && square.piece) {
            return this.getAllowedMovesOf(square.piece);
        }
        return [];
    };
    Chessboard.prototype.getFENMovesatFEN = function (fen) {
        var _this = this;
        return this.getMovesAtFEN(fen).map(function (move) {
            move.from = _this.PositionToFEN(move.from.x, move.from.y);
            move.to = _this.PositionToFEN(move.to.x, move.to.y);
            return move;
        });
    };
    Chessboard.prototype.getMoves = function (color) {
        var _this = this;
        if (color === void 0) { color = null; }
        var moves = [];
        this.forEachPiece(function (piece) {
            if (color !== null && color != piece.color) {
                //console.log("not same color?");
                return;
            }
            moves.push.apply(moves, _this.getAllowedMovesOf(piece));
        });
        return moves;
    };
    Chessboard.prototype.getMovesFEN = function (color) {
        var _this = this;
        if (color === void 0) { color = null; }
        return this.getMoves(color).map(function (move) {
            move.from = _this.PositionToFEN(move.from.x, move.from.y);
            move.to = _this.PositionToFEN(move.to.x, move.to.y);
            return move;
        });
    };
    Chessboard.prototype.PositionToFEN = function (x, y) {
        return this.charIndex(x) + (this.boardSize.y - y);
    };
    Chessboard.prototype.FENtoPosition = function (fen) {
        return {
            x: this.indexOfChar(fen[0]),
            y: (this.boardSize.y - fen[1])
        };
    };
    Chessboard.prototype.FENToSquare = function (fen) {
        var position = this.FENtoPosition(fen);
        return this.getSquare(position.x, position.y);
    };
    Chessboard.prototype.SquareToFEN = function (square) {
        var position = square.getPosition();
        return this.PositionToFEN(position.x, position.y);
    };
    Chessboard.prototype.charIndex = function (index) {
        return Chessboard.SIDE[index];
    };
    Chessboard.prototype.indexOfChar = function (char) {
        return Chessboard.SIDE.indexOf(char);
    };
    Chessboard.prototype.clearDebug = function () {
        this.forEach(function (square) {
            square.debug = false;
        });
    };
    Chessboard.prototype.debugSquare = function (square, debugColor) {
        square.debug = debugColor;
    };
    Chessboard.prototype.debugFEN = function (fen, debugColor) {
        var square = this.FENToSquare(fen);
        if (square) {
            square.debug = debugColor;
        }
    };
    Chessboard.prototype.debugMoves = function (fen, debugColor) {
        var square = this.FENToSquare(fen);
        if (square && square.piece) {
            var piece = square.getPiece();
            var moves = piece.getLegalMoves();
            moves.forEach(function (square) {
                square.debug = debugColor;
            });
            return true;
        }
        return false;
    };
    Chessboard.SIDE = "abcdefghijklmnopqrstuvwxyz";
    Chessboard.RANKS = ["Pawn", "Knight", "Bishop", "Rook", "Queen", "King"];
    Chessboard.PIECES = {
        P: Pawn_1.PawnPiece,
        B: Bishop_1.BishopPiece,
        N: Knight_1.KnightPiece,
        R: Rook_1.RookPiece,
        Q: Queen_1.QueenPiece,
        K: King_1.KingPiece,
    };
    return Chessboard;
}());
exports.Chessboard = Chessboard;
;



},{"./Piece":7,"./Pieces/Bishop":8,"./Pieces/King":9,"./Pieces/Knight":10,"./Pieces/Pawn":11,"./Pieces/Queen":12,"./Pieces/Rook":13,"./Square":15,"./Utils":16}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var ChessMoveEvent = /** @class */ (function (_super) {
    __extends(ChessMoveEvent, _super);
    function ChessMoveEvent(from, to) {
        var _this = _super.call(this) || this;
        _this.from = null;
        _this.to = null;
        _this.from = from;
        _this.to = to;
        return _this;
    }
    return ChessMoveEvent;
}(Utils_1.ChessEvent));
exports.ChessMoveEvent = ChessMoveEvent;
;
var ChessPromoteEvent = /** @class */ (function (_super) {
    __extends(ChessPromoteEvent, _super);
    function ChessPromoteEvent(square, piece, fen) {
        var _this = _super.call(this) || this;
        _this.fen = null;
        _this.piece = null;
        _this.square = null;
        _this.fen = fen;
        _this.piece = piece;
        _this.square = square;
        return _this;
    }
    return ChessPromoteEvent;
}(Utils_1.ChessEvent));
exports.ChessPromoteEvent = ChessPromoteEvent;
;



},{"./Utils":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define Movement Vectors
var MovementVectors = /** @class */ (function () {
    function MovementVectors() {
    }
    MovementVectors.Diagonal = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
    MovementVectors.Lateral = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    MovementVectors.Omni = MovementVectors.Diagonal.concat(MovementVectors.Lateral);
    return MovementVectors;
}());
exports.MovementVectors = MovementVectors;
;
var COLORS = /** @class */ (function () {
    function COLORS() {
    }
    COLORS.getColor = function (color) {
        return COLORMAP[color];
    };
    COLORS.getName = function (color) {
        var keys = Object.keys(COLORMAP);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (COLORMAP[key] == color)
                return key;
        }
        return "";
    };
    COLORS.BLACK = 0;
    COLORS.WHITE = 1;
    COLORS.GREEN = 2;
    COLORS.ORANGE = 3;
    return COLORS;
}());
exports.COLORS = COLORS;
;
var COLORMAP = {
    w: COLORS.WHITE,
    b: COLORS.BLACK,
    g: COLORS.GREEN,
    o: COLORS.ORANGE
};
// Simploe Piece inmplementation
var Piece = /** @class */ (function () {
    function Piece(board, square) {
        // Board & Square 
        this.board = null;
        this.square = null;
        // Piece description
        this.name = "Piece";
        this.color = null;
        this.type = null;
        // Movement information
        this.moves = 0;
        this.index = null;
        this.pieceTimer = null;
        this.moveDelay = 5000;
        this.lastMoved = 0;
        this.board = board;
        this.setSquare(square);
    }
    Piece.prototype.initialize = function () {
        // Not implemented
    };
    Piece.prototype.setSquare = function (square) {
        if (this.square) {
            this.square.piece = null;
        }
        if (square) {
            square.piece = this;
        }
        this.square = square;
    };
    Piece.prototype.setColor = function (color) {
        this.color = color;
    };
    Piece.prototype.getColor = function () {
        return this.color;
    };
    // Moves piece to a new square
    Piece.prototype.move = function (square) {
        if (!square)
            return false;
        // If square has piece capture it.
        this.capture(square);
        this.addHistory({
            move: {
                from: this.square,
                to: square,
            },
            lastMoved: this.lastMoved
        });
        // Change positions
        this.moves++;
        // Clear previous square
        this.square.setPiece(null);
        // set new position
        this.setSquare(square);
        this.lastMoved = Date.now();
        return true;
    };
    Piece.prototype.undo = function (event) {
        if (event.move) {
            this.square.setPiece(null);
            this.setSquare(event.move.from);
            this.lastMoved = event.lastMoved;
            this.moves--;
        }
        if (event.captured) {
            event.square.setPiece(event.captured);
        }
    };
    Piece.prototype.capture = function (square) {
        if (!square)
            return;
        if (square.piece) {
            // Add capture to the history
            this.addHistory({
                captured: square.piece,
                square: square,
            });
        }
        square.setPiece(null);
    };
    Piece.prototype.getAllowedMoves = function () {
        if (this.lastMoved > Date.now() - this.moveDelay)
            return [];
        return this.getLegalMoves();
    };
    Piece.prototype.getLegalMoves = function () {
        var _this = this;
        return this.getMoves().filter(function (square) {
            if (square.piece && square.piece.color == _this.color)
                return false;
            return true;
        });
    };
    Piece.prototype.getMoves = function () {
        throw new Error("Not implemented");
    };
    Piece.prototype.getMovesByVectors = function (vectors, limit) {
        if (limit === void 0) { limit = undefined; }
        var moves = [], steps, vector, square;
        for (var i = 0, l = vectors.length; i < l; i++) {
            steps = 0;
            vector = vectors[i];
            square = this.square;
            // Add all squares in path
            while (square = square.getSibling(vector[0], vector[1])) {
                if (square.getPiece()) {
                    // Square is occupied by opponent
                    if (square.getPiece().color != this.color) {
                        // Occupied by other player - piece can be captured
                        moves.push(square);
                    }
                    break;
                }
                moves.push(square);
                steps++;
                // Check if steps limit exceeded
                if (limit && steps >= limit)
                    break;
            }
        }
        return moves;
    };
    Piece.prototype.getSymbol = function () {
        return COLORS.getName(this.color) + this.type;
    };
    Piece.prototype.BeforePieceMoved = function (piece, square) {
        // Not implemented
    };
    Piece.prototype.AfterPieceMoved = function (piece, square) {
        // Not implemented
    };
    Piece.prototype.addHistory = function (data) {
        this.board.addHistory(this, data);
    };
    return Piece;
}());
exports.Piece = Piece;
;



},{}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Piece_1 = require("../Piece");
var BishopPiece = /** @class */ (function (_super) {
    __extends(BishopPiece, _super);
    function BishopPiece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Bishop";
        _this.type = "B";
        return _this;
    }
    BishopPiece.prototype.getMoves = function () {
        return this.getMovesByVectors(Piece_1.MovementVectors.Diagonal);
    };
    return BishopPiece;
}(Piece_1.Piece));
exports.BishopPiece = BishopPiece;
;



},{"../Piece":7}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Piece_1 = require("../Piece");
var KingPiece = /** @class */ (function (_super) {
    __extends(KingPiece, _super);
    function KingPiece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "King";
        _this.type = "K";
        return _this;
        // setCastling(from, to, castledFrom, castledTo)
        // {
        // 	this.castling = {
        // 		castlingfrom: from,
        // 		castlingTo: to,
        // 		castledPiece: this,
        // 		castledFrom: castledFrom,
        // 		castledTo: castledTo,
        // 	};
        // }
    }
    KingPiece.prototype.move = function (square) {
        if (Math.abs(square.getPosition().x - this.square.getPosition().x) > 1) {
            // Castle Left rook
            if (square.getPosition().x - this.square.getPosition().x < 0) {
                return this.castle(-4, -1, -2);
            }
            // Castle Right rook
            if (square.getPosition().x - this.square.getPosition().x > 0) {
                return this.castle(3, 1, 2);
            }
        }
        if (!_super.prototype.move.call(this, square))
            return false;
        return true;
    };
    KingPiece.prototype.getMoves = function () {
        return this.getCastlingMoves([[-1, 0, 4], [1, 0, 3]], 2, 'R');
    };
    KingPiece.prototype.getCastlingMoves = function (vectors, distance, castlingPieceType) {
        var moves = this.getMovesByVectors(Piece_1.MovementVectors.Omni, 1);
        if (this.moves > 0)
            return moves;
        var steps, vector, square;
        for (var i = 0, l = vectors.length; i < l; i++) {
            steps = 0;
            vector = vectors[i];
            square = this.square;
            // Check if the castling piece is available
            var castlingTarget = this.square.getSibling(vector[0] * vector[2], vector[1] * vector[2]);
            if (castlingTarget && castlingTarget.piece && castlingTarget.piece.type == castlingPieceType && castlingTarget.piece.color == this.color && castlingTarget.piece.moves == 0) {
                // Add all squares in path
                while (square = square.getSibling(vector[0], vector[1])) {
                    // Square is occupied
                    if (square.getPiece()) {
                        break;
                    }
                    moves.push(square);
                    steps++;
                    // Check if steps limit exceeded
                    if (distance && steps >= distance)
                        break;
                }
            }
        }
        return moves;
    };
    KingPiece.prototype.castle = function (rookPosition, kingPosition, castlePosition) {
        var rookSquare = this.square.getSibling(rookPosition, 0);
        var kingSquare = this.square.getSibling(kingPosition, 0);
        var castlingSquare = this.square.getSibling(castlePosition, 0);
        // this.addHistory({
        // 	castling: {
        // 		rookSquare: rookSquare,
        // 		kingSquare: kingSquare,
        // 		castlingSquare: castlingSquare,
        // 	},
        // 	castling: this.canCastle,
        // });
        //this.setCastling(rookSquare, kingSquare, current, castlingSquare);
        rookSquare.piece.move(kingSquare);
        return _super.prototype.move.call(this, castlingSquare);
    };
    return KingPiece;
}(Piece_1.Piece));
exports.KingPiece = KingPiece;
;



},{"../Piece":7}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Piece_1 = require("../Piece");
var KnightPiece = /** @class */ (function (_super) {
    __extends(KnightPiece, _super);
    function KnightPiece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Knight";
        _this.type = "N";
        return _this;
    }
    KnightPiece.prototype.getMoves = function () {
        return this.getMovesByVectors(KnightPiece.MovementVectors, 1);
    };
    KnightPiece.MovementVectors = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    return KnightPiece;
}(Piece_1.Piece));
exports.KnightPiece = KnightPiece;
;



},{"../Piece":7}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Piece_1 = require("../Piece");
var Events_1 = require("../Events");
var PawnPiece = /** @class */ (function (_super) {
    __extends(PawnPiece, _super);
    function PawnPiece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Pawn";
        _this.type = "P";
        _this.enpassant = false;
        return _this;
    }
    PawnPiece.prototype.move = function (square) {
        var current = this.square;
        // Set enpassant flag if it was a big move
        if (Math.abs(current.getPosition().y - square.getPosition().y) > 1) {
            this.enpassant = true;
        }
        else {
            this.enpassant = false;
        }
        if (!_super.prototype.move.call(this, square))
            return false;
        // Check if the move was enpassant capture
        var back = this.square.getSibling(0, (this.color == Piece_1.COLORS.WHITE ? 1 : -1));
        if (back && back.piece && back.piece.color != this.color && back.piece.enpassant) {
            this.capture(back);
        }
        // Queening
        var forwardSquare = this.square.getSibling(0, (this.color == Piece_1.COLORS.WHITE ? -1 : 1));
        if (!forwardSquare) {
            var newPiece = this.board.createPiece("Q", this.color);
            newPiece.setSquare(this.square);
            this.board.onPromote.emit(new Events_1.ChessPromoteEvent(this.square, newPiece, this.board.SquareToFEN(this.square)));
        }
        return true;
    };
    PawnPiece.prototype.onMoved = function (square) {
        this.board.addToHistory("move", {
            lastMoved: this.lastMoved,
            moves: this.moves,
            enpassant: this.enpassant,
            piece: this,
            from: this.square,
            to: square
        });
    };
    PawnPiece.prototype.undoMove = function (move) {
        this.enpassant = move.enpassant;
        this.lastMoved = move.lastMoved;
        this.moves = move.moves;
        this.setSquare(move.from);
    };
    PawnPiece.prototype.AfterPieceMoved = function (piece, square) {
        // If any piece is moved no enpassant moves are allowed
        // if(piece.color != this.color)
        // {
        // 	this.enpassant = false;
        // }
    };
    PawnPiece.prototype.getMoves = function () {
        var moves = [];
        var direction = (this.color == Piece_1.COLORS.WHITE ? -1 : 1);
        // 1 Forward
        var square1 = this.square.getSibling(0, direction);
        if (square1 && !square1.piece) {
            moves.push(square1);
        }
        // 2 Forward (if didn't move yet)
        var square2 = this.square.getSibling(0, direction * 2);
        if (square2 && !square2.piece && this.moves == 0 && !square1.piece) {
            moves.push(square2);
        }
        // Capture 1
        var capture1 = this.square.getSibling(1, direction);
        if (capture1 && capture1.piece && capture1.piece.color != this.color) {
            moves.push(capture1);
        }
        // Capture 2
        var capture2 = this.square.getSibling(-1, direction);
        if (capture2 && capture2.piece && capture2.piece.color != this.color) {
            moves.push(capture2);
        }
        // En passant capture 1
        var enpassant1 = this.square.getSibling(1, 0);
        if (enpassant1 && enpassant1.piece && enpassant1.piece.color != this.color && enpassant1.piece.moves == 1 && enpassant1.piece.enpassant) {
            moves.push(this.square.getSibling(1, direction));
        }
        /// En passant capture 2
        var enpassant2 = this.square.getSibling(-1, 0);
        if (enpassant2 && enpassant2.piece && enpassant2.piece.color != this.color && enpassant2.piece.moves == 1 && enpassant2.piece.enpassant) {
            moves.push(this.square.getSibling(-1, direction));
        }
        return moves;
    };
    return PawnPiece;
}(Piece_1.Piece));
exports.PawnPiece = PawnPiece;
;



},{"../Events":6,"../Piece":7}],12:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Piece_1 = require("../Piece");
var QueenPiece = /** @class */ (function (_super) {
    __extends(QueenPiece, _super);
    function QueenPiece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Queen";
        _this.type = "Q";
        return _this;
    }
    QueenPiece.prototype.getMoves = function () {
        return this.getMovesByVectors(Piece_1.MovementVectors.Omni);
    };
    return QueenPiece;
}(Piece_1.Piece));
exports.QueenPiece = QueenPiece;
;



},{"../Piece":7}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Piece_1 = require("../Piece");
var RookPiece = /** @class */ (function (_super) {
    __extends(RookPiece, _super);
    function RookPiece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Rook";
        _this.type = "R";
        return _this;
    }
    RookPiece.prototype.getMoves = function () {
        return this.getMovesByVectors(Piece_1.MovementVectors.Lateral);
    };
    return RookPiece;
}(Piece_1.Piece));
exports.RookPiece = RookPiece;
;



},{"../Piece":7}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Positions = /** @class */ (function () {
    function Positions() {
    }
    Positions.default = [
        ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
        ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
        ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
    ];
    Positions.castling = [
        ["bR", "", "", "", "bK", "", "", "bR"],
        ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
        ["wR", "", "", "", "wK", "", "", "wR"],
    ];
    Positions.singlePawn = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "wP", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ];
    Positions.pawnSacrafice = [
        ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
        ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
        ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    ];
    Positions.singleQueen = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "wQ", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ];
    Positions.queenSacrafice = [
        ["bQ", "bQ", "bQ", "bQ", "bQ", "bQ", "bQ", "bQ"],
        ["bQ", "bQ", "bQ", "bQ", "bQ", "bQ", "bQ", "bQ"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["wQ", "wQ", "wQ", "wQ", "wQ", "wQ", "wQ", "wQ"],
        ["wQ", "wQ", "wQ", "wQ", "wQ", "wQ", "wQ", "wQ"],
    ];
    Positions.singleBishop = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "bP", "", "", "", ""],
        ["", "", "bP", "wB", "bP", "", "", ""],
        ["", "", "", "bP", "", "", "", ""],
        ["", "bP", "", "bP", "", "bP", "", "bP"],
        ["bP", "", "bP", "", "bP", "", "bP", ""],
        ["", "bP", "", "bP", "", "bP", "", "bP"],
    ];
    Positions.singleRook = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "wR", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ];
    Positions.singleKing = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "wK", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ];
    Positions.singleKnight = [
        ["", "", "bP", "", "", "", "", ""],
        ["", "bP", "", "bP", "", "", "", ""],
        ["", "bP", "bP", "", "", "", "", ""],
        ["", "", "", "wN", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ];
    return Positions;
}());
exports.Positions = Positions;
;



},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square = /** @class */ (function () {
    function Square(board, x, y) {
        this.piece = null;
        this.board = null;
        this.x = -1;
        this.y = -1;
        this.board = board;
        this.x = x;
        this.y = y;
    }
    Square.prototype.setPiece = function (piece) {
        this.piece = piece;
    };
    Square.prototype.getPiece = function () {
        return this.piece;
    };
    Square.prototype.getSibling = function (offsetX, offsetY) {
        return this.board.getSquare(this.x + offsetX, this.y + offsetY);
    };
    Square.prototype.getColor = function () {
        var xor = function (a, b) { return !a != !b; };
        return xor(this.x % 2, this.y % 2) ? 'w' : 'b';
    };
    Square.prototype.getPosition = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    Square.prototype.getFENPosition = function () {
        return this.board.PositionToFEN(this.x, this.y);
    };
    return Square;
}());
exports.Square = Square;



},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChessEvent = /** @class */ (function () {
    function ChessEvent() {
        this.messageObject = null;
        this._defaultPervented = false;
        this._shouldPropagate = true;
    }
    ChessEvent.prototype.preventDefault = function () {
        this._defaultPervented = true;
    };
    ChessEvent.prototype.isPrevented = function () {
        return this._defaultPervented;
    };
    ChessEvent.prototype.trigger = function () {
        if (this.messageObject) {
            this.messageObject();
        }
    };
    ChessEvent.prototype.stopPropagation = function () {
        this._shouldPropagate = false;
    };
    ChessEvent.prototype.shouldPropagate = function () {
        return this._shouldPropagate;
    };
    return ChessEvent;
}());
exports.ChessEvent = ChessEvent;
;
var ChessEventEmitter = /** @class */ (function () {
    function ChessEventEmitter() {
        this.listeners = [];
    }
    ChessEventEmitter.prototype.emit = function (event, messageObject) {
        if (messageObject === void 0) { messageObject = null; }
        event.messageObject = messageObject;
        this.listeners.forEach(function (callback) {
            if (event.shouldPropagate()) {
                callback(event);
            }
        });
    };
    ChessEventEmitter.prototype.broadcast = function (messsage) {
        this.listeners.forEach(function (callback) {
            callback(event);
        });
    };
    ChessEventEmitter.prototype.on = function (callback) {
        this.listeners.push(callback);
    };
    ChessEventEmitter.prototype.off = function (callback) {
        this.listeners.splice(this.listeners.indexOf(callback), 1);
    };
    return ChessEventEmitter;
}());
exports.ChessEventEmitter = ChessEventEmitter;
;



},{}],17:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Chessboard"));
__export(require("./Square"));
__export(require("./Piece"));
__export(require("./Positions"));
__export(require("./Events"));



},{"./Chessboard":5,"./Events":6,"./Piece":7,"./Positions":14,"./Square":15}],18:[function(require,module,exports){
exports.Chess = {
	Chess: require("./build/Chess/index.js"),
	ChessAI: require("./build/ChessAI/index.js"),
};
},{"./build/Chess/index.js":17,"./build/ChessAI/index.js":4}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArray(array) {
    return array.slice().reverse();
}
;
exports.boardEvalsWhite = {
    P: [
        [10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0],
        [5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0],
        [1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 1.0],
        [0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5],
        [0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0],
        [0.5, -0.5, -1.0, 0.0, 0.0, -1.0, -0.5, 0.5],
        [0.5, 1.0, 1.0, -2.0, -2.0, 1.0, 1.0, 0.5],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    ],
    N: [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0, 0.0, 0.0, 0.0, 0.0, -2.0, -4.0],
        [-3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0, -3.0],
        [-3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5, -3.0],
        [-3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0, -3.0],
        [-3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5, -3.0],
        [-4.0, -2.0, 0.0, 0.5, 0.5, 0.0, -2.0, -4.0],
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
    ],
    B: [
        [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
        [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
        [-1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0, -1.0],
        [-1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, -1.0],
        [-1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0],
        [-1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0],
        [-1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, -1.0],
        [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
    ],
    R: [
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
        [0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0]
    ],
    Q: [
        [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
        [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
        [-1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
        [-0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
        [0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
        [-1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
        [-1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, -1.0],
        [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
    ],
    K: [
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
        [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
        [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
        [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
        [2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0],
        [2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0]
    ]
};
exports.boardEvalsBlack = {
    P: reverseArray(exports.boardEvalsWhite.P),
    N: reverseArray(exports.boardEvalsWhite.N),
    B: reverseArray(exports.boardEvalsWhite.B),
    R: reverseArray(exports.boardEvalsWhite.R),
    Q: reverseArray(exports.boardEvalsWhite.Q),
    K: reverseArray(exports.boardEvalsWhite.K),
};
exports.BoardEvaluations = [
    exports.boardEvalsBlack,
    exports.boardEvalsWhite,
];
},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@chesslib/core");
var BoardEvals_1 = require("./BoardEvals");
var PIECE_VALUES = {
    P: 10,
    B: 30,
    N: 30,
    R: 50,
    Q: 80,
    K: 900,
};
var ChessAI = /** @class */ (function () {
    function ChessAI(chessboard, playingSide, playerCount) {
        this.chessboard = null;
        this.moves = [];
        this.playingSide = 0;
        this.playerCount = 2;
        this.searchTime = 0;
        this.chessboard = chessboard;
        this.playingSide = playingSide;
        this.playerCount = playerCount;
    }
    ChessAI.prototype.setBoard = function (chessboard) {
        this.chessboard = chessboard;
    };
    ChessAI.prototype.loadBoard = function (positions) {
        this.chessboard = core_1.Chessboard.fromPosition(positions);
    };
    ChessAI.prototype.doMove = function (move) {
        if (!this.chessboard.doMove(move)) {
            return false;
        }
        return true;
    };
    ChessAI.prototype.doMoveFEN = function (move) {
        if (!this.chessboard.doMoveFEN(move)) {
            return false;
        }
        return true;
    };
    ChessAI.prototype.makeMoves = function (searchDepth, amount) {
        if (searchDepth === void 0) { searchDepth = 4; }
        if (amount === void 0) { amount = 1; }
        var bestMoves = this.getBestMoves(searchDepth, amount);
        if (!bestMoves.length) {
            return null;
        }
        for (var _i = 0, bestMoves_1 = bestMoves; _i < bestMoves_1.length; _i++) {
            var bestMove = bestMoves_1[_i];
            this.doMove(bestMove);
        }
        return bestMoves;
    };
    ChessAI.prototype.getBestMove = function (side, searchDepth) {
        var bestMoves = this.getBestMoves(searchDepth);
        if (!bestMoves.length) {
            return this.getRandomMove();
        }
        // var bestMove = null;
        // var bestValue = -9999;
        // if(move.score > bestValue)
        // {
        // 	bestMove = move;
        // 	bestValue = move.score;
        // }
        return bestMoves[0];
    };
    ChessAI.prototype.getBestMoves = function (searchDepth, limit) {
        if (limit === void 0) { limit = 5; }
        this.searchTime = Date.now() + 100;
        var moves = this.chessboard.getMovesFEN(this.playingSide);
        for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
            var move = moves_1[_i];
            this.chessboard.moveFEN(move.from, move.to);
            // Do not allow the king to be killed?
            move.score = this.evaluateBestMove(this.playingSide, searchDepth - 1, -10000, 10000, false);
            this.chessboard.undo();
        }
        return moves.sort(function (a, b) {
            if (a.score < b.score)
                return 1;
            if (a.score > b.score)
                return -1;
            return 0;
        }).slice(0, limit);
    };
    ChessAI.prototype.getNextPlayerSide = function (playerSide) {
        return (playerSide + 1) % this.playerCount;
    };
    ChessAI.prototype.evaluateBestMove = function (playerSide, depth, alpha, beta, isMaximisingPlayer) {
        if (depth === 0) {
            return this.evaluateBoard(this.playingSide);
        }
        var currentPlayer = this.getNextPlayerSide(playerSide);
        var moves = this.chessboard.getMoves(currentPlayer);
        if (isMaximisingPlayer) {
            var bestValue = -9999;
            for (var _i = 0, moves_2 = moves; _i < moves_2.length; _i++) {
                var move = moves_2[_i];
                this.chessboard.move(move.from, move.to);
                bestValue = Math.max(bestValue, this.evaluateBestMove(currentPlayer, depth - 1, alpha, beta, !isMaximisingPlayer));
                this.chessboard.undo();
                alpha = Math.max(alpha, bestValue);
                if (beta <= alpha) {
                    return bestValue;
                }
            }
            return bestValue;
        }
        else {
            var bestValue = 9999;
            for (var _a = 0, moves_3 = moves; _a < moves_3.length; _a++) {
                var move = moves_3[_a];
                this.chessboard.move(move.from, move.to);
                bestValue = Math.min(bestValue, this.evaluateBestMove(currentPlayer, depth - 1, alpha, beta, !isMaximisingPlayer));
                this.chessboard.undo();
                beta = Math.min(beta, bestValue);
                if (beta <= alpha) {
                    return bestValue;
                }
            }
            return bestValue;
        }
    };
    ChessAI.prototype.getRandomMove = function () {
        var moves = this.chessboard.getMovesFEN(this.playingSide);
        if (!moves.length)
            return null;
        var randMove = moves[Math.floor(Math.random() * moves.length)];
        randMove.score = 0;
        return randMove;
    };
    ChessAI.prototype.evaluateBoard = function (side) {
        var boardValue = 0;
        this.chessboard.forEachPiece(function (piece) {
            if (side == piece.color) {
                boardValue += PIECE_VALUES[piece.type] + BoardEvals_1.BoardEvaluations[piece.color][piece.type][piece.square.y][piece.square.x];
            }
            else {
                boardValue -= PIECE_VALUES[piece.type] + BoardEvals_1.BoardEvaluations[piece.color][piece.type][piece.square.y][piece.square.x];
            }
        });
        return boardValue;
    };
    return ChessAI;
}());
exports.ChessAI = ChessAI;
;
},{"./BoardEvals":19,"@chesslib/core":18}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChessAIWorker = /** @class */ (function () {
    function ChessAIWorker(workerPath) {
        var _this = this;
        this.worker = null;
        this.listeners = [];
        this.worker = new Worker(workerPath);
        this.worker.onmessage = function (message) {
            if (_this.listeners[message.data.event]) {
                for (var _i = 0, _a = _this.listeners[message.data.event]; _i < _a.length; _i++) {
                    var event = _a[_i];
                    event.apply(event, message.data.arguments);
                }
            }
        };
    }
    ChessAIWorker.prototype.emit = function (event, data) {
        this.worker.postMessage(event);
    };
    ChessAIWorker.prototype.on = function (type, callback) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    };
    ChessAIWorker.prototype.exec = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.worker.postMessage({
            method: method,
            arguments: Array.prototype.slice.call(arguments).slice(1)
        });
    };
    ChessAIWorker.prototype.destroy = function () {
        this.worker.terminate();
    };
    return ChessAIWorker;
}());
exports.ChessAIWorker = ChessAIWorker;
;
},{}],22:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./ChessAI"));
__export(require("./ChessAIWorker"));
},{"./ChessAI":20,"./ChessAIWorker":21}],23:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var ChessAI = require("./ChessAI");
window.ChessAI = ChessAI;
__export(require("./ChessAI"));
},{"./ChessAI":22}]},{},[23])

//# sourceMappingURL=client.js.map

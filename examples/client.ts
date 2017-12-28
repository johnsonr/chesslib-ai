import { Chessboard, Positions, COLORS } from "./Library/Chessboard";
import { ChessAI } from "./Library/AI/ChessAI";
import { ChessAIWorker } from "./ChessAIWorker";

// Create AI Worker and Chess board
var chess = new Chessboard();
var aiWorker = new ChessAIWorker( "client/worker.js" );

// AI used to debug & get best moves for local user states
//var helperAI = new ChessAI(chess, COLORS.WHITE, 2);

$(document).ready(() =>
{
	setInterval(() => {
		aiWorker.exec("setDifficulty", $("#aiDifficulty").val());
	}, 1000);

	chess.loadPositions(Positions.default);
	aiWorker.exec("init", COLORS.BLACK, 2, Positions.default);

	// Whenever the ai performs a move update the local chess game and the board
	aiWorker.on("moved", (move) => {
		console.log("AI Moved:", move.from, move.to);
		chess.doMoveFEN(move);
		board.position(chess.board());
	});

	aiWorker.on("moves", (moves) => {
		console.log("AI Found Moves:", moves.length);
	});


	// Board setup down there..
	chess.onPromote.on((event) => {
		setTimeout(() => {
			board.position(chess.board());
		}, 1)
	});
	
	var firstDrag = true;
	var onDrop = function(source, target)
	{

		if(!chess.isValidMoveFEN(source, target))
		{
			return 'snapback';
		}

		if(!chess.tryMoveFEN(source, target))
		{
			return 'snapback';
		}
		
		aiWorker.exec("move", source, target);
		//aiWorker.exec("think");
		//aiWorker.exec("updateBoard", chess.savePositions());
		setTimeout(() => {
			board.position(chess.board());
		}, 100);
	};

	function highlightSquare(square, backgroundb, background)
	{
		
		var squareEl = $('#board .square-' + square);

		if (squareEl.hasClass('black-3c85d') === true)
		{
			background = backgroundb;
		}

		squareEl.css('background', background);
	}


	var board = ChessBoard('board', {
		draggable: true,
		position: 'start',
		onDrop: onDrop,
		// onDragStart: function(source, piece, position, orientation)
		// {
		// 	var square = chess.FENToSquare(source);
		// 	if(square.piece && square.piece.color != COLORS.WHITE)
		// 		return false;
		// 	return true;
		// },
		onMouseoutSquare: function(square, piece)
		{
			$('#board .square-55d63').css('background', '');
		},
		onMouseoverSquare: function(source, piece)
		{
			var square = chess.FENToSquare(source);
			if(square.piece && square.piece.color != COLORS.WHITE)
				return;
		
			if(!piece)
				return;

			var moves = chess.getFENMovesatFEN(source);
			for(var move of moves)
			{
				highlightSquare(move.to, '#00ff00', '#aaffaa');
			}
			highlightSquare(source, '#ff0000', '#ffaaaa');
		},
	});
	
	board.position(chess.board());
	
	$("#undobutton").click(() => {
		chess.undo();

		aiWorker.exec("stop");
		aiWorker.exec("undo");
		aiWorker.exec("start");

		board.position(chess.board());
	});

	$("#stopbutton").click(() => {
		aiWorker.exec("stop");
		board.position(chess.board());
	});

	$("#startbutton").click(() => {
		aiWorker.exec("start");
		board.position(chess.board());
	});

	$("#refreshboard").click(() => {
		chess.loadPositions(Positions.default);
		board.position(chess.board());
	});
	
	$("#resetboard").click(() => {
		chess.loadPositions(Positions.default);
		aiWorker.exec("init", COLORS.BLACK, 2, Positions.default);
		board.position(chess.board());
	});

	$("#stepAI").click(() => {	
		nextAIMove();
	});
	aiWorker.exec("start");
	
});


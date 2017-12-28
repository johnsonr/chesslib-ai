import { Chessboard, Positions, COLORS } from "./Library/Chessboard";
import { ChessAI } from "./Library/AI/ChessAI";

// AI Variables
const DIFFICULTY_TIMES = [
	[6000, 10000],
	[3500, 6000],
	[2000, 3500],
	[1000, 2000],
	[500, 1000],
	[100, 500],
];

const THINKING_TIMES = [
	5000,
	4000,
	3000,
	2000,
	1000,
	1000,
];

const AI_DEPTH = [
	1,
	1,
	2,
	3,
	4,
	4,
];

const AI_MOVES = [
	1,
	2,
	4,
	8,
	10,
	20,
];

const AI_RANDOM_CHANCES = [
	17,
	23,
	35,
	50,
	80,
	90,
	100
];


export class AIWorker
{
	constructor()
	{
		self.onmessage = (input) =>
		{
			var evt = input.data;
			if(evt.method)
			{
				aiWorker[evt.method].apply(aiWorker, evt.arguments);
			}
		}
	}

	emit(event)
	{
		postMessage({
			event: event,
			arguments: Array.prototype.slice.call(arguments).slice(1)
		});
	}
};

class ChessAIWorker extends AIWorker
{
	movesAvailable = [];
	aiDifficulty = 0;
	aiRunning = true;
	board = null;
	ai = null;

	constructor()
	{
		super();
		this.board = new Chessboard();
	}

	init(color, playerCount, positions)
	{
		this.stop();
		this.board = Chessboard.fromPosition(positions);
		this.ai = new ChessAI(this.board, color, playerCount);
	}

	updateBoard(board)
	{
		console.log("new board:", board);
		this.board.loadPositions(board);
		//this.think();
	}

	setDifficulty(aiDifficulty)
	{
		this.aiDifficulty = aiDifficulty;
	}

	reset()
	{
		this.stop();
		this.movesAvailable = [];
	}

	start()
	{
		this.stop();
		console.log("AI Started");
		this.think();
		this.nextAIMove();
		this.toggleThinking(true);
	}

	stop()
	{
		console.log("AI Stopped");
		clearTimeout(this.thinkingTimer);
		clearTimeout(this.moveTimer);
		this.toggleThinking(false);
	}

	undo()
	{
		this.board.undo();
	}

	toggleThinking(aiRunning)
	{
		this.aiRunning = aiRunning;
	}

	move(source, target)
	{
		console.log("AI received moved:", source, target);
		this.board.tryMoveFEN(source, target);
	}

	thinkingTimer = null;
	moveTimer = null;

	think()
	{
		if(this.aiRunning)
		{
			console.log("Thinking");
			this.movesAvailable = this.ai.getBestMoves(AI_DEPTH[this.aiDifficulty], AI_MOVES[this.aiDifficulty]);
			this.emit("moves", this.movesAvailable);
		}

		this.thinkingTimer = setTimeout(() => {
			this.think();
		}, THINKING_TIMES[this.aiDifficulty]);
	}

	nextAIMove()
	{
		
		this.doAiMove();

		var time = Math.floor(Math.random() * (DIFFICULTY_TIMES[this.aiDifficulty][1] - DIFFICULTY_TIMES[this.aiDifficulty][0] + 1)) + DIFFICULTY_TIMES[this.aiDifficulty][0];
		console.log("AI Randomized Move Time", time);
		this.moveTimer = setTimeout(() => {
		 	this.nextAIMove();
		}, time);
	}
	
	doAiMove()
	{
		if(this.aiRunning)
		{
			var chance = Math.random() * 100;

			if ( chance <= AI_RANDOM_CHANCES[this.aiDifficulty])
			{
				var move = this.movesAvailable.shift();
				if(!move)
				{
					move = this.ai.getRandomMove();
				}
			}else{
				var move = this.ai.getRandomMove();
			}

			if(move)
			{
				this.ai.doMoveFEN(move);
				this.emit("moved", move);
			}

		}
	}
};
var aiWorker = new ChessAIWorker();
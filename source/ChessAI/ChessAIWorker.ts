export class ChessAIWorker
{
	worker: Worker = null;
	
	listeners = [];
	constructor(workerPath)
	{
		this.worker = new Worker( workerPath );
		this.worker.onmessage = (message) => {
			
			if(this.listeners[message.data.event])
			{
				for(var event of this.listeners[message.data.event])
				{
					event.apply(event, message.data.arguments);
				}
			}
		};
	}

	emit(event, data)
	{
		this.worker.postMessage(event);
	}
	
	on(type, callback)
	{
		if(!this.listeners[type])
		{
			this.listeners[type] = [];
		}

		this.listeners[type].push(callback);
	}
	
	exec(method, ...args: any[])
	{
		this.worker.postMessage({
			method: method,
			arguments: Array.prototype.slice.call(arguments).slice(1)
		});
	}

	destroy()
	{
		this.worker.terminate();
	}
};


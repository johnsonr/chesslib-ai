export class AIWorker
{
	constructor()
	{
		self.onmessage = (input) => {
			var evt = input.data;
			if(evt.method)
			{
				this[evt.method].apply(this, evt.arguments);
			}
		}
	}

	emit(event, ... args:any[] )
	{
		console.log({
			event: event,
			arguments: args
		});
		self.postMessage({
			event: event,
			arguments: args
		}, undefined);

		
	}
};
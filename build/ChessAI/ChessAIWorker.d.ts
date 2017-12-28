export declare class ChessAIWorker {
    worker: Worker;
    listeners: any[];
    constructor(workerPath: any);
    emit(event: any, data: any): void;
    on(type: any, callback: any): void;
    exec(method: any, ...args: any[]): void;
    destroy(): void;
}

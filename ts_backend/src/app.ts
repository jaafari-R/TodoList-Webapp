import { Application } from 'express';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';

export class TodoListServer {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public start(): void {
        this.standardMiddleware();
        this.errorHandler();
        this.startServer();
    }

    private standardMiddleware(): void {

    }

    private securityMiddleware(): void {
        this.app.use(
            cors({
                origin: '*'
            })
        )
        this.app.use(hpp());
        this.app.use(helmet());
    }

    private errorHandler(): void {

    }

    private startServer(): void {

    }
}
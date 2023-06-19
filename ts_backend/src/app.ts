import { Application, json, urlencoded } from 'express';
/* Security Middleware */
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
/* Standard Middleware */
import compression from 'compression';

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
        this.app.use(compression());
        this.app.use(json({ limit: '1mb'}));
        this.app.use(urlencoded({extended: true, limit: '2mb'}));
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
import { Application, json, urlencoded } from 'express';
import http from 'http';
/* Security Middleware */
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
/* Standard Middleware */
import compression from 'compression';

const SERVER_PORT = 5000;

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

    private async startServer(): Promise<void> {
        try {
            const httpServer: http.Server = new http.Server(this.app);
            this.startHttpServer(httpServer);
        }
        catch (error) {
            console.log(error);
        }
    }

    private startHttpServer(httpServer: http.Server): void {
        httpServer.listen(SERVER_PORT, () => {
            console.log(`Server is listening on port ${SERVER_PORT}`);
        })
    }
}
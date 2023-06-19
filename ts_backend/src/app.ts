import express, { Express } from 'express'
import { TodoListServer } from './setupServer'

class Application {
    public initialize(): void {
        const app: Express = express();
        const server: TodoListServer = new TodoListServer(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();
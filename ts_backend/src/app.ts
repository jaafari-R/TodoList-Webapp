import express, { Express } from 'express'
import { TodoListServer } from './setupServer'
import dbConnect from './setupDatabase';

class Application {
    public initialize(): void {
        dbConnect();

        const app: Express = express();
        const server: TodoListServer = new TodoListServer(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();
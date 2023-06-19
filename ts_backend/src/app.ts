import express, { Express, Request, Response } from 'express';
import { Application } from 'express';

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

    private errorHandler(): void {

    }

    private startServer(): void {

    }
}
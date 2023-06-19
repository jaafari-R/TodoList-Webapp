import dotenv from 'dotenv';

dotenv.config({});

class Config {
    public DATABASE_URL: string;

    private readonly DEFAULT_DATABASE_URL = 'mongodb://127.0.0.1:27017/todolist';

    constructor() {
        this.DATABASE_URL = process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
    }
};

export const config: Config = new Config();
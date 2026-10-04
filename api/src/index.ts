import express from 'express';
import { createApp } from './app.js';
import { databaseConfig } from './config.js';

const app = express();
app.use(await createApp(databaseConfig()));

export default app;

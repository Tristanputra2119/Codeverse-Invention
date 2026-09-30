import { createApp } from './app.js';

const port = Number(process.env.PORT ?? 4000);
const databasePath = process.env.DATABASE_PATH ?? 'eduverse.sqlite';
createApp(databasePath).listen(port, () => console.log(`EduVerse API: http://localhost:${port}`));

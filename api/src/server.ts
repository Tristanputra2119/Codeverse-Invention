import { createApp } from './app.js';
import { databaseConfig } from './config.js';

const port = Number(process.env.PORT ?? 4000);
const app = await createApp(databaseConfig());
app.listen(port, () => console.log(`EduVerse API: http://localhost:${port}`));

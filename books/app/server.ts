import express from 'express';

export function createServer(port: number = 8080) {
    const app = express();

    app.listen(port, () => console.log(`App is listening on port ${port}!`));
    return app;
}

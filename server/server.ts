import path from 'path';
import express from "express";
import routes from './lib/routes';
const port = 8080;
const app = express();
const reactFolder = path.resolve(__dirname, '../client/build')
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(reactFolder, 'index.html'));
});
app.use(express.static(reactFolder));

const server = app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

module.exports = server
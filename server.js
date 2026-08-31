import express from 'express';
import { posts } from './data/posts.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});
app.get('/bacheca', (req, res) => {
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
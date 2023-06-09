const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3031;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`)});

app.use(cors());
app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));
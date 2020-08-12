const express = require('express');
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 3400;

let app = express();

app.use(express.json());
app.use(express.static('__dirname' + '/../public'));

// app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
})
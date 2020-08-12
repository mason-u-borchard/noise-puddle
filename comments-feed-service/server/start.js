const app = require('./index.js');
const errorHandler = require('errorhandler');

app.use(errorHandler({ dumpExceptions: true, showStack: true }));

const port = process.env.NODE_ENV === 'test' ? 3001 : 3099;

const server = app.listen(port, () => {console.log(`Running comments feed on ${port}`)});

let killServer = () => {
  server.close();
};

module.exports = server;
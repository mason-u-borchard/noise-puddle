// const axios = require('axios');
const app = require('../server/index.js');
const request = require('supertest');
// const request = supertest(app);

let server;

describe.skip("Tests Server Endpoints", () => {

  beforeAll((done) => {
    // process.env.NODE_ENV = 'test';
    const port = 3005;
    server = app.listen(port, () => {
      global.agent = request.agent(server);
      console.log(`Testing server on port ${port}`)
      done();
    })
  })

  afterAll((done) => {
      return server && server.close(done);
  });

  // Also works for TCPSERVERWRAPPER error in Jest
  // afterAll(async () => {
  //   await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  // });

  test("/artist endpoint returns object with artist name", async (done) => {
    const res = await request(app).get("/artist");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'the1975');
    done();
  });

  test("/song endpoint returns object with song title", async (done) => {
    const res = await request(app).get("/song");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title', 'Frail State of Mind');
    done();
  });

  test("/artist endpoint returns object", async (done) => {
    const res = await request(app).get("/comments");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    done();
  });

  test("/comments endpoint returns 200 status code", async (done) => {
    let testComment = {
      user_name: 'Jean Valjean',
      text: 'Bonjour, monsieur!'
    }
    const res = await request(app)
      .post('/comments')
      .send(testComment);
      // .expect(201)
      // .then(function(err, res) {
      //   if (err) return done(err);
      //   done();
      // })
      expect(res.statusCode).toBe(201);
      done();

  });

});

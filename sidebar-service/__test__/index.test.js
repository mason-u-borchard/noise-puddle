const app = require('../server/index.js');
const request = require('supertest');

var testServer;

// simple tests

test('1 plus 1 equals 2', () => {
  expect(1+1).toEqual(2);
})

/////////// SERVER STUFF BELOW //////

describe('Checking all get requests', () => {

  // Set up server to test
  beforeAll((done) => {
    testServer = app.listen(4444, () => {
      global.agent = request.agent(testServer);
      done();
    });
  });

  afterAll((done) => {
    return testServer && testServer.close(done);
  });


  test('random artist endpoint responds with a random artist name', async (done) => {
    const res = await request(app).get('/artist');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    done();

  })

  test('specific artist endpoint responds with the actual artist', async (done) => {
    var name = 'Snool_Snool'
    const res = await request(app).get(`/artistname/?name=Snool_Snool`);
    expect(res.status).toBe(200);
    expect(res.body.artist).toBeDefined();
    expect(res.body.likedSongs).toBeDefined();
    done();
  })

  test('if artist cannot be found in the database on specific art req, return error', async (done) => {
    const res = await request(app).get(`/artistname/?name=nonexistantartist`);
    expect(res.status).toBe(404);
    done();
  })

});

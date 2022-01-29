const request = require('supertest')
const app = require('../server') 


describe('Post addItems', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/item')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})

describe(' GetItems ', () => {
    it('should create a new post', async () => {
      const res = await request(app)
        .get('/getItems')
        .send({
          userId: 1,
          title: 'test is cool',
        })
      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('post')
    })
  })

  describe('Post Endpoints', () => {
    it('should create a new post', async () => {
      const res = await request(app)
        .post('/api/posts')
        .send({
          userId: 1,
          title: 'test is cool',
        })
      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('post')
    })
  })

  describe('Post Endpoints', () => {
    it('should create a new post', async () => {
      const res = await request(app)
        .post('/api/posts')
        .send({
          userId: 1,
          title: 'test is cool',
        })
      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('post')
    })
  })
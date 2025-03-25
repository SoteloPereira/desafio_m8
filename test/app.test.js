 
const request = require('supertest'); 
const express = require('express'); 
const app = require('../app'); 
describe('Tests', () => { 
    it('GET /task - Obtener elementos', async () => { 
        const res = await request(app).get('/task'); 
        expect(res.status).toBe(200); 
        expect(res.body).toHaveProperty('list'); 
    }); 
 
    it('PUT /task:id - Actualizar un elemento', async () => { 
        const res = await request(app).put('/task/1').send({ name: 'Nuevo Item' }); 
        expect(res.status).toBe(201); 
        expect(res.body).toHaveProperty('message', 'Item updated'); 
    }); 
 
}); 
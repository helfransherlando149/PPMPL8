const request = require('supertest'); // Import supertest
const app = require('./app'); // Import aplikasi yang diekspor

describe('Integration Tests', () => {
    it('should return "Hello, World!" from GET /', async () => {
        const res = await request(app).get('/'); // Kirim permintaan ke root URL
        expect(res.statusCode).toBe(200); // Periksa status HTTP
        expect(res.text).toBe('Hello, World!'); // Periksa respon teks
    });
});

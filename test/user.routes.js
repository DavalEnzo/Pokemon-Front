const request = require('supertest');
const app = require('../src/index');

describe('Tests de fonctionnement de l\'application', () => {
    it('La route devrait être en status 200', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            done();
        });
    });

    it('La route sera status 404', (done) => {
        request(app)
        .get('/yarien')
        .expect(404)
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            done();
        });
    })
});

describe('Tests de fonctionnement de l\'API', () => {
    it('L\'API devrait être en status 200', (done) => {
        request('https://pokeapi.co/api/v2')
        .get('/pokemon')
        .expect(200)
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            done();
        });
    });

    it('L\'API devrait être en status 404', (done) => {
        request('https://pokeapi.co/api/v2')
        .get('/pokemon/1200')
        .expect(404)
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            done();
        });
    })
})

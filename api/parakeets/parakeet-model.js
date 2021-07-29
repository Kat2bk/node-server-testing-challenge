const db = require('../../migrations/db-config');

function allParakeets() {
return db('parakeets')
}

function findParakeet(id) {
    return db('parakeets as p')
        .join('adopted as a', 'a.id', 'p.adopted_id')
        .select('p.name', 'p.color', 'p.age', 'a.adoptee')
}

function addParakeet(bird) {
    return db('parakeets').insert(bird, 'id');
}

module.exports = {
    allParakeets,
    findParakeet,
    addParakeet
}
const { application } = require('express');
const { audiofile } = require('./models');

// ********* CREATE PLAYER
Player.create({
    name: 'Keljin Blevins',
    number: 21,
    position: 'Guard',
    college: 'Montana State',
    salary: 7_700_000,
    height: 63,
    weight: 200,
    team: 'La Clippers'
})
    .then(function (newPlayer) {
        console.log(newPlayer.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating player', error)
    })
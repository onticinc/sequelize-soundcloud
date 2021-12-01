const { application } = require('express');
const { audiofile } = require('./models');

// ********* CREATE PLAYER
AudioFile.create({
    fileName: 'New Song Title',
    fileDescription: 'New File Description',
    public: 0,
    tags: 'dope'
})
    .then((newFile) => {
        console.log(newFile.toJSON());
    })
    .catch((error) => {
        console.log('Error creating player', error)
    })
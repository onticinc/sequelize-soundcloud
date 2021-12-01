const { application } = require('express');
const { UserInfo } = require('./models');

// ********* CREATE PLAYER
UserInfo.create({
    userName: 'audiostar',
    firstName: 'mike',
    lastName: 'smith',
    email: 'audiostarinc@gmail.com',
})
    .then((newUser) => {
        console.log(newUser.toJSON());
    })
    .catch((error) => {
        console.log('Error creating users', error)
    })
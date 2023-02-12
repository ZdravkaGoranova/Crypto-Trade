const mongoose = require('mongoose');

function getFirstMongooseError(error) {

    const errors = Object.keys(error.errors).map(key => error.errors[key].message);
    //масив от стрингове на message на всички грешки
    return errors[0];
};

exports.getErrorMessage = (error) => {

    // console.log(error)
    // console.log(error.name)
    // console.log(error.message)

    switch (error.name) {
        case 'Error':
            return error.message;

        case 'ValidationError':
            return getFirstMongooseError(error);

        default:
            return error.message;
    };
}
const mongoose = require('mongoose');
const URI = 'mongodb://localhost/sam13-mean';

mongoose.connect(URI)
    .then(db => console.log('DB is connected...'))
    .catch(err => console.error(err));

//Export the model
module.exports = mongoose;
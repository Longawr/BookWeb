const mongoose = require('mongoose');

async function connect() {
    
    const db = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Book_Store_DB'

    try {

        await mongoose.connect(db);
        console.log('Connected to ' + db);

    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
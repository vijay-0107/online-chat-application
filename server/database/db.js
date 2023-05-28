import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.mkhmsot.mongodb.net/?retryWrites=true&w=majority`;
    try {
        // await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        await mongoose.connect(URL);
        console.log('Database Connected Successfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
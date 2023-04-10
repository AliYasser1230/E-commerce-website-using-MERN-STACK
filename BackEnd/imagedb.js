const mongoose = require('mongoose');

module.exports = async function connection(){
    try{
        const connectionParams={
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
        await mongoose.connect("mongodb://localhost/image-upload",connectionParams)
        console.log('Connnected to database')
    }
    catch(error)
    {
console.log(error);
console.log('not found')
    }
}
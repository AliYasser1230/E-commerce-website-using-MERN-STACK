const mongoose=require('mongoose');

module.exports=async function connection(){
    try{
        const connectionParams={
            useNewUrl:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        }
        await mongoose.connect(process.env.DB,connectionParams)
        console.log('Connnected to database')
    }
    catch(error)
    {
console.log(error);
console.log('not found')
    }
}
const mongoose=require('mongoose')
const url='mongodb+srv://foadal:foadal@cluster0.eeziv.mongodb.net/volunteer?retryWrites=true&w=majority'
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


    module.exports = mongoose;
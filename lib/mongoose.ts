import mongoose from 'mongoose'

let isConnected =  false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB_URL is not defined')

    if(isConnected) return console.log('=> using existing database connection')

    try {
        await mongoose.connect(process.env.MONGODB_URI)

        isConnected = true

        console.log('MONGODB IS CONNECTED')
    } catch (error) {
        console.log(error)
    }
}


import dotenv from 'dotenv';
dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in the environment variables");
}

if(!process.env.IMAGEKIT_KEY){
    throw new Error("IMAGEKIT_KEY is not defined in the environment variables");
}

 const config ={
    MONGO_URI: process.env.MONGO_URI,
    IMAGEKIT_KEY: process.env.IMAGEKIT_KEY
}

export default config;
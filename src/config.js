import{config} from 'dotenv';
config();

export const MONGODB_URI =  "mongodb://localhost/crud"; //|| process.env.MONGODB_URI 
export const PORT = process.env.PORT || 3000;
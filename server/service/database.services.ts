import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import { IBook, IUser}  from '../types/';

// Global Variables
export const collections: {
  books?: mongoDB.Collection<IBook>,
  users?: mongoDB.Collection<IUser>,
} = {};

// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();

  // Create a new MongoDB client
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string);

  // Connect to the cluster
  await client.connect();

  // Connect to the database with the name specified in .env
  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  // Connect to the collection 
  const bookCollection =  db.collection<IBook>(process.env.BOOK_COLLECTION_NAME as string);
  const userCollection =  db.collection<IUser>(process.env.USER_COLLECTION_NAME as string);

  // Persist the connection 
  collections.books =  bookCollection;
  collections.users =  userCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collections: ${collections.books.collectionName} and ${collections.users.collectionName} 🚀`);
}
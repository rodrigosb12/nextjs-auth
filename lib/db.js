import { MongoClient } from "mongodb";

const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://rodrigo-nextjs:gQZDShGgtfZRS4GY@cluster0.pnlkh.mongodb.net/nextjsauth?retryWrites=true&w=majority"
  );

  return client;
};

export default connectToDatabase;

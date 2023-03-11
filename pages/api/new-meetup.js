
// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client= await MongoClient.connect("mongodb+srv://Kenzie:lsnQHD1yhogaJjpK@cluster0.zqood4h.mongodb.net/meetups?retryWrites=true&w=majority",{ useUnifiedTopology: true });

  const db=client.db();
  const meetupsCollection= db.collection('meetups');
    const result = await meetupsCollection.insert(data);

    console.log(result);
    client.close();

    res.status(201).json({message:"Meetup inserted!"});
    
  }
}

export default handler;

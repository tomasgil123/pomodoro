import { connectToDatabase } from 'src/utils/mongodb'

export default async (req, res): Promise<any> => {
  const { db } = await connectToDatabase()
  const dbUsers = await db.collection('users')
  const result = await dbUsers.insert({ name: 'Lucaasx', date: new Date() })
  //const result = await db.listCollections().toArray()
  console.log('result add user', result)
  res.statusCode = 200
  res.json({ result: result })
}

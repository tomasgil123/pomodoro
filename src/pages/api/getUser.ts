import { connectToDatabase } from 'src/utils/mongodb'

export default async (req, res): Promise<any> => {
  const { db } = await connectToDatabase()
  const dbUsers = await db.collection('users')
  const result = await dbUsers
    .find({
      date: { $gte: new Date('2013-10-01T00:00:00.000Z') },
    })
    .toArray()
  console.log('result', result)
  res.statusCode = 200
  res.json(result)
}

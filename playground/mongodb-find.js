const { MongoClient, ObjectID } = require('mongodb');
 


MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, client) =>{
   if(err){
   	console.log('unable to connect to database server');
   }
 console.log('Connected to MongoDB server');
 const db = client.db('TodoApp');

// db.collection('Todos').find({
// 	_id : new ObjectID('5ab3aab25c59dd33b89e1261')
// }).toArray().then((docs) => {
// 	console.log('Todos');
// 	console.log(JSON.stringify(docs, undefined, 8));

// }).catch((err) => {
// 	console.log('unable to fetch ', err);
// })

// db.collection('Todos').find().count().then((count) => {
// 	console.log(`Todos count: ${count}`)
// }).catch((err) => {
// 	console.log('unable to fetch todods', err);
// });
db.collection('Users').find({
	age: 22
}).toArray().then((docs) => {
	console.log(JSON.stringify(docs, undefined, 2));
}).catch((err) => {
	console.log('unable to fetch todods', err);
});

client.close();
});

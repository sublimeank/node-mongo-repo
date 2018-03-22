const { MongoClient, ObjectID } = require('mongodb');
 
 let obj = new ObjectID();
 console.log(obj);

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, client) =>{
   if(err){
   	console.log('unable to connect to database server');
   }
 console.log('Connected to MongoDB server');
 const db = client.db('TodoApp');

// db.collection('Todos').insertOne({
//     name: 'Ankit kumar',
//     change: 'No change',
//     length: 'no length'
// }, (err, result) =>{
// 	if(err){
// 		return console.log('Unable to insert todo', err);
// 	}

// 	console.log(JSON.stringify(result.ops, undefined, 2));
// });
// Insert new doc into users (name, age, location)

db.collection('Users').insertOne({
	name: 'Ankit',
	age: 22,
	location: 'Pune'
}, (err, result) => {
	if(err){
		return console.log('Unable to insert user ', err)
	}
	console.log(result.ops[0]._id.getTimestamp());

});



client.close();
});

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if(err){
 	console.log('Error: ',err);
 }
 const db = client.db('TodoApp');


db.collection('Users').findOneAndUpdate({
	name: 'Ankit'
}, {
	$set:{
		name: 'khattarnak'
	},
	$inc:{
		age: 1
	}
},{
	returnOriginal: false
}).then((result) =>{
	console.log(result);
});
client.close();
});
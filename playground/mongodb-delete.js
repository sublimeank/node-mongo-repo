const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
     if(err){
     	console.log('Unable to connect');
     }
     console.log('connected to database');

     const db = client.db('TodoApp');

     // db.collection('Todos').insertMany([
     //           {
     //           	text: 'Eat lunch',
     //           	completed: false
     //           },
     //           {
     //           	text: 'Eat lunch',
     //           	completed: false
     //           },
     //           {
     //           	text: 'Eat lunch',
     //           	completed: false
     //           },
     //           {
     //           	text: 'Eat lunch',
     //           	completed: false
     //           },
     // 	]).then(() => {
     // 		console.log('inserted');
     // 	}).catch((err) => {
     // 		console.log('Error: ',err);
     // 	})

     //deleteMany
     // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
     // 	console.log(result);
     // });

      //deleteOne
       // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(() => {
       // 	console.log('Item deleted');
       // }).catch((err) => {
       // 	console.log('Error: ', err);
       // })   
     //findOneAndDelete
     db.collection('Users').findOneAndDelete({name: 'jaspreet'}).then((result) => {
     	console.log(result);
     })
     //showAll
     db.collection('Todos').find().toArray().then((result) => {
     	console.log(JSON.stringify(result, undefined, 2));
     });
     client.close();
});
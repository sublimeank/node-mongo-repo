const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
let id = '5ab895070a4a7b600fd6b555';

if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}


// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });
// Todo.findById(id).then((todo) => {
// 	if(!todo)
// 		console.log("I'd not found");
// 	else
// 	console.log('Find by ID ',todo);
// }).catch((e) =>{ console.log('Something went wrong ')});

let user1 = new User({
	name: 'shan',
	email: 'ak@gj.com'
});
user1.save(()=> {
	console.log('data inserted');
}).catch((e)=> {
	console.log('error occured');
});

User.findById(id).then((user) => {
	if(!user)
		console.log(' user not available');
	else
	console.log('user found :  ',user);
}).catch((e) => {
console.log("something went wrong");
});
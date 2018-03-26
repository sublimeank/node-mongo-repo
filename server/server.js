let express =require('express');
let bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let { mongoose} = require('./db/mongoose.js');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app =express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
let todo = new Todo({
	text: req.body.text
}); 

todo.save().then((doc) => {
res.send(doc);
}, (e) => {
	res.status(400).send(e);
});
});

app.get('/todos', (req,res) => {
	Todo.find().then((todos) =>{
		res.send(todos);
	}).catch((err) => {
		res.status(400).send(err);
	});
});

app.get('/todos/:id', (req,res) => {
	let id = req.params.id;
	if(!ObjectID.isValid(id)){
	res.status(404).send({error: "bad request"} );
}
	else{
          Todo.findById(id).then((todo) => {
	if(!todo)
		res.status(400).send({msg: 'ID not found'});
	else
	res.send(todo);
}).catch((err) => {
	res.status(400).send(err);
})
}
});

app.listen(3000, () => {
	console.log('Started on port');
});

module.exports ={ app };
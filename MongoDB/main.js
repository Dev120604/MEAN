import mongoose from 'mongoose';
import express from 'express';
import {Todo} from './models/Todo.js';

await mongoose.connect('mongodb://localhost:27017/todoApp');
console.log('Conneted to MongoDB');

const app = express();
app.use(express.json());
const port = 3000;

app.post('/todos',async(req,res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json(todo);

    } catch(err) {
        res.status(400).json({error: err.message});
    }
});

app.get('/todos',async (req,res)=> {
    const todos = await Todo.find();
    res.json(todos);
});

app.get('/todos/:id',async(req,res) => {
    const todo = await Todo.findById(req.params.id);

    if(!todo) return res.status(404).send('Not Found');

    res.json(todo);
});

app.put('/todos/:id',async(req,res) => {

    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body , {new: true , runValidators: true});

        if(!todo) return res.status(404).send("Not Found");
        res.json(todo);

    } catch (err) {
        res.status(400).josn({error : err.message});
    }
});

app.delete('/todos/:id',async(req,res) => {

    const todo = await Todo.findByIdAndDelete(req.params.id);
    if(!todo) return res.status(404).send('Not Found');
    res.send(`Deleted ${todo.title}`);
});

app.get('/pending',async (req,res) => {
    const todo = await Todo.find({isDone:false, days: {$lt : 30}});
    res.json(todo);
});

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String , required:true },
    isDone: { type:Boolean, default: false},
    days: {
        type: Number,
        min: [0, "Days cannot be negative"],
        max: [365, "Days cannot be exceed 365"]
    },
    createdAt: { type: Date, default: Date.now}
});

TodoSchema.pre('save',function(next) {
    console.log(`About to save ${this.title}`);
    next();
});

export const Todo = mongoose.model('Todo', TodoSchema);
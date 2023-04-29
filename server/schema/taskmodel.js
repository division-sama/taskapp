import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const taskmodel = mongoose.Schema({
    task:String,
    deadline:String
});

autoIncrement.initialize(mongoose.connection);
taskmodel.plugin(autoIncrement.plugin,'task');

const task = mongoose.model('task',taskmodel);

export default task;
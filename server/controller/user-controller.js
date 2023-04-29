import { response } from 'express';
import Task from '../schema/taskmodel.js';

export const addUser = async (req, res) => {
    
    const task = req.body;
    console.log(task);
    const newTask = new Task(task);

    try{
        await newTask.save();
        res.status(201).json(newTask);
    }catch (error) {
        res.status(409).json({message: error.message});
    }

}

export const getUsers = async (req, res) => {

    try {
        const alltask = await Task.find({});
        res.status(200).json(alltask);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const editTask = async (req, res) => {

    let task  = req.body;
    const editTask = new Task(task);

    try {
        await Task.updateOne({_id : editTask._id}, editTask);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteTask = async (req,res) => {

    try {
        console.log(req.params.id);
        await Task.deleteOne({_id : req.params.id});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


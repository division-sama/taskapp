import axios from 'axios';

const URL = 'http://localhost:8000';
export const addUser = async (data) =>{
    try {
        return await axios.post(`${URL}/add`,data);
    } catch (error) {
        console.log('Error While calling add user API',error);
    }
}

export const getUsers = async () =>{
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log('Error while loading data from server');
    }
}


export const editTask = async (data,id) =>{
    try {
        return await axios.post(`${URL}/edittask`,data,id)
    } catch (error) {
        console.log('Error while editing data from server');
    }
}


export const deleteTask = async (id) =>{
    try {
        console.log(id);
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while Deleting data from server');
    }
}


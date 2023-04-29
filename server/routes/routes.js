import express from 'express';

import { addUser } from '../controller/user-controller.js';
import {getUsers} from '../controller/user-controller.js';
import {editTask,deleteTask} from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addUser)
router.get('/all',getUsers);
router.post('/edittask',editTask);
router.delete('/:id',deleteTask);


export default router;
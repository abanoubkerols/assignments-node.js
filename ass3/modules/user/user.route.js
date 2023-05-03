
import {Router} from 'express';
import {users,oneuser,reverseUsers,adduser,update,deleteuser,search,searchAge,startWithChar,endWithChar,containChar,softDelete} from './controller/user.control.js';


const router=Router();

// 1-GetAllUsers
router.get('/user',users);

// 2-AddUser
router.post('/user',adduser);

// 3-UpdateUserByID
router.patch('/update/:id',update);

// 4-DeleteUserByID
router.delete('/delete/:id',deleteuser);

// 5-GetUserByID
router.get('/oneuser',oneuser);

// 6-Search by name use like
router.get('/user/search',search);

// 7-Get all user reversed
router.get('/reverseUsers',reverseUsers);

// 8- search user age between 20 and 40
router.get('/searchAge',searchAge);

// 9-get user name start with A and age less than 30 
router.get('/startWithChar',startWithChar);

// 10-get user name end with  d or age greater than 50 
router.get('/endWithChar',endWithChar);

// 11-get user name contain  r   and  age greater than 20 and less than 25
router.get('/containChar',containChar);

// 12- soft delete user
router.patch('/softDelete/:id',softDelete);

export default router;

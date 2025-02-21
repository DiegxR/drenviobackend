import { Router } from 'express';
import { getUserByEmail, getUsers, requestUsers } from '../controllers/usersController';

const router = Router();

// Crear un precio especial 
router.post('/', requestUsers);

router.get('/', getUsers);

router.get('/:email', getUserByEmail)

export default router;

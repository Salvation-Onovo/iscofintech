import { createAdmin, adminLogin } from '../controllers/adminController.js';
// eslint-disable-next-line no-undef
import { Router } from 'express';

const router = Router();

router.post('/', createAdmin)
router.post('/login', adminLogin)

export default router;
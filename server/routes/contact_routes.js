import { contactUs, getTheContacts } from '../controllers/contactController.js';
// eslint-disable-next-line no-undef
import { Router } from "express";

const router = Router();

router.post('/', contactUs)
router.get('/', getTheContacts)

export default router;
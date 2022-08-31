import { Router } from "express";
import item from './apis/items/index.js';

const router = new Router();

router.use('/items', item);

export default router;
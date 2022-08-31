import {Router} from "express";
import { addItem, getItems } from "./controller.js";

const router = new Router();

router.post('/add', addItem);
router.get('/items', getItems);

export default router;
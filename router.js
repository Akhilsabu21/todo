import { Router } from "express";
import * as controller from './controller.js'

const router=Router();

router.route("/add").post(controller.addTask);
router.route("/list").get(controller.listTask);


export default router;
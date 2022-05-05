import express from 'express'
const router=express.Router();
import StudentController from "../controller/studentController.js";

router.get('/',StudentController.getAllDOc)
 router.post('/',StudentController.createDoc)
 router.get('/edit/:id',StudentController.editDOc)
 router.post('/update/:id',StudentController.updateDOcById)
 router.post('/delete/:id',StudentController.deleteDOcById)

export default router;
const express =require('express');
const StudentsController=require("../controllers/StudentsController")
const router =express.Router();


// C=Create
router.post("/CreateStudent",StudentsController.CreateStudent);



// R=Read
router.get("/ReadStudent",StudentsController.ReadStudent);
router.get("/ReadStudentByID/:id",StudentsController.ReadStudentByID);



// U=Update
router.post("/UpdateStudent/:id",StudentsController.UpdateStudent);


// Delete
router.get("/DeleteStudent/:id",StudentsController.DeleteStudent);



module.exports=router;
//route page
import express from "express";
import { createPost, deletePost, getPost, getPosts, putPost }  from "../controllers/postController.js";
const router = express.Router();


//static routing
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname ,'public','index.html'));
//   });

//   app.get('/about',(req,res)=>{
//       res.sendFile(path.join(__dirname ,'public','about.html'));
//   });


//get  ,all posts 
router.get("/",getPosts );

//get   ,single post
router.get("/:id",getPost );

//create new post 
router.post("/",createPost );

//put post 
router.put('/:id',putPost);

//delete post 
router.delete('/:id',deletePost);


// module.exports = router;  //commom js modules
export default router;

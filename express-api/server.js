// routing the app file
import express from "express";
import posts from "./routes/post.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";
import {fileURLToPath} from 'url';
import path from "path";
const port = process.env.PORT || 8000; //environment variables with fallback port

const app = express(); //create  the app

//resolve the api joining with frontend 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//creating a middleware ,efficient file request and response handler
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware 
app.use(express.json());//raw post request 
app.use(express.urlencoded({ extended: false }));//urlencoded post request 
app.use(logger);

//create routes
app.use("/api/posts", posts);


//error handler 
//app.use(notFound);
app.use(errorHandler);

//defined port for server
app.listen(8000, () => {
  console.log(`expres server  running on port ${port} `);
});

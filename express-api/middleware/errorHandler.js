
const errorHandler = (err,req,res,next) => {
    //if the  error is found call it ,else call the default 
  if(err.status){
    res.status(err.status).json({msg:err.message});
  }else{
    res.status(500).json({msg:err.message});
  }

    next();
};
export default errorHandler


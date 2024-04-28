const ctrlWrapper=ctrl=>{
    const funcWrapper = async (req,res,next) => {
      try{
        await ctrl(req,res,next);
      }catch(err){
            next(err);
      }
    }
    return funcWrapper;
}
module.exports=ctrlWrapper
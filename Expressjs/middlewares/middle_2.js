function mymiddleware2 (req,res,next){
    console.log('I am Second middleware...');
    next();
}

module.exports=mymiddleware2;
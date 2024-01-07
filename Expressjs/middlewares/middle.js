function mymiddleware1 (req,res,next){
    console.log('I am First middleware...');
    next();
}

module.exports=mymiddleware1;
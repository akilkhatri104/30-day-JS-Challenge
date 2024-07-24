on fun(){
    try{
        let success = false
        if(!success)
            throw new Error("Operation Failed")
        console.log("Operation successful");
    }catch(e){
        console.error(e);
    }finally{
        console.log("Operation completed");
    }
}
fun()
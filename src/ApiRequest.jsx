    const apiRequest =async (url = '',optionObject = null , errMsg = null) =>{
        try{
            const response = await fetch(url,optionObject);
            if(!response.ok) throw Error("Please Reload the pages")
        }catch (err){
            errMsg = err.message;
        }finally{
            return errMsg;
        }
}

export default apiRequest;
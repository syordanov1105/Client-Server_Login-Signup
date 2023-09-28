function getReqData(req){
    return new Promise((resolve, reject)=>{
        try{
            let reqBody = "";

            req.on("data", chunk => {
            reqBody += chunk.toString();
        });

        req.on("end", () => {
            const jsonData = JSON.parse(reqBody);
            resolve(jsonData);
        });
        }catch(error){
            reject(error);
        }
    });
}

module.exports = { getReqData };

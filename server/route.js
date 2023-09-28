const controller = require("./controller.js");
const { getReqData } = require("./getReqData.js");


const route = async (req, res)=>{

    if(req.url === "/" && req.method === "GET"){
        var users = await controller.GetAllUsers();
        res.statusCode = 200;
        res.end(users); 
    }else if(req.url === "/register" && req.method === "POST"){

        try {
            const user_data = await getReqData(req);
            const { email, fName, lName, password } = user_data;
            const userStatus = await controller.CreateUser(email, fName, lName, password);
    
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ userStatus }));
        } catch (error) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Invalid request or data" }));
        }

      
    }else{
        res.statusCode = 404;
        res.end(JSON.stringify({ "message": "URL Not Found"}));
    }

}

module.exports = route;
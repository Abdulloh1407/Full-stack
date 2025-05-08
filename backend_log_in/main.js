const http=require("http");
const mongodb=require("./mongodb/mongodb.js");
const bcrypt=require("./bctypt/bcrypt.js");
const server=http.createServer(async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","Content-Type")

    if(req.method==="OPTIONS"){
        res.writeHead(204)
        res.end()
        return
    }
    const db =await mongodb.getDB();
    if(req.url==="/register" && req.method==="POST"){
        let body=''
        for await(let chunk of req) {body+=chunk}
        body=JSON.parse(body)
        body.password=await bcrypt.hash(body.password)
        await db.collection("users").insertOne(body);
        res.setHeader("Content-Type","application/json")
        res.end(JSON.stringify({message:"User Created"}))
    }
    else if(req.url==='/login'&& req.method==="POST"){
        let body = "";
        for await (let chunk of req) {body += chunk}
        body=JSON.parse(body)
        const user=await db.collection("users").findOne({username:body.username})
        res.setHeader("Content-Type", "application/json");
        if(!user) return res.end(JSON.stringify({message:"User not found"}))
        if(await bcrypt.verify(user.password,body.password)){
            res.end(JSON.stringify({message:"User loged in"}))
        }
        else{
            res.end(JSON.stringify({message:"Invalid credentials"}))
        }
    }

})
mongodb.connect().then( ()=>{
    console.log('Connected to MongoDb');
    server.listen(8000,()=>{
        console.log('Server is Runing');
    })
}).catch((error)=>{
    console.log(error)
});
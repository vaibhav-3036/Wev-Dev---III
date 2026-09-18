const express=require("express");
const app=express();
const PORT=3000


const logmiddleware=(req,res,next)=>{
    req.name="john";
    console.log("Request url:",req.url,"req.method:",req.method);
    next();
}

const apicheckMidleware=(req,res,next)=>{
    if(req.query.API_KEY==="1234"){
        console.log("Authenticated");
        next();
    } else {
        res.send("Unauthorized");
    }
}

app.use(logmiddleware);
app.use(apicheckMidleware);

app.get("/",(req,res)=>{
    console.log("Request name:",req.name);
    console.log("hello world");
    res.send("hello world")
})

app.get("/data",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
const express = require("express");
const app = express();
const port = 3000;
app.use("/hello",(req, res)=>{
    res.send("Hello World from hello");
})
app.use("/test",(req, res)=>{
    res.send("Hello World");
})
app.use("/test2",(req, res)=>{
    res.send("Hello World from test2");
})
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


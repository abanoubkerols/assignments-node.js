// let express = require("express")
// let server =express()

// server.get("/",function(req,res){
//     res.json("welcome")
// })

// const user=[
//     {name:"khaled" ,age:22},
//     {name:"salah", age:29},
//     {name:"abdo", age:27},
//     {name:"hema", age:21}
// ]


// server.get("/alluser",(req,res)=>{
//     res.json(JSON.stringify(user))
// })

// server.post("/adduser",express.json(),(req,res)=>{
    
     
//     console.log(req.body);
    

//     const newUser = req.body

//     user.push(newUser)

//     res.json({is:"done"});



// })

// server.get("/allUserReversed",(req,res)=>{
//     res.json(JSON.stringify([...user].reverse()))
// })
// server.listen(5000)


// // __________________________________________________________________________________________


// let express = require("express")
// let server =express()

// server.get("/",function(req,res){
//     res.json("welcome")
// })

// const posts=[
//     {post1:"News" },
//     {post2:"stars", },
//     {post3:"players", },
//     {post4:"science", }
// ]
// server.get("/allPosts",(req,res)=>{
//     res.json(JSON.stringify(posts))
// })

// server.post("/addPosts",express.json(),(req,res)=>{
//     console.log(req.body);
//     res.json({is:"done"});
// })

// server.get("/allPostsReversed",(req,res)=>{
//     res.json(JSON.stringify(posts.reverse()))
// })
// server.listen(5000)
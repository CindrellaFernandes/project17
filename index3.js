
const express = require('express')
const nodemon = require('nodemon')
const app=express()

app.use(express.json())

let users=[
    {id:1,name:"alice",email:"abc@gmail.com"},
    {id:2,name:"rose",email:"abcd@gmail.com"}
]

//get all users
app.get('/users',(req,res)=>{
    res.json(users)

})

//POST
app.post('/users',(req,res)=>{
    const newUser={id:users.length+1, ...req.body};
    users.push(newUser);
    res.status(201).json(newUser);//Added response after adding a

});

//PUT - Update a user
app.put('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if(!users) return res.status(404).json ({message:"user not found"})
    user.name=req.body.name ||req.name
    user.email =req.body.email ||req.email
    res.json(user)
})

//DELETE
app.delete('/users/:id',(req,res)=>{
    users=users.filter(user=>user.id !==parseInt(req.params.id))
    res.json({message:'User Deleted'})
})
app.listen(8000,()=>console.log("server is running in port in 8000"))



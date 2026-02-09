// import express from 'express';
const express =require('express');
const app=express();
const PORT=5000;

app.get('/',(req,res)=>{
    res.send('<h1>hi this is my first server</h1>')
});
app.get('/about',(req,res)=>{
    res.send('about')
});
app.get('/contactus',(req,res)=>{
    res.send('9058860864')
});
app.get('/jokes',(req,res)=>{
    const jokes = [
  {
    id: 1,
    question: "Why don’t scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    id: 2,
    question: "What do you call fake spaghetti?",
    answer: "An impasta!"
  },
  {
    id: 3,
    question: "Why did the math book look sad?",
    answer: "Because it had too many problems."
  },
  {
    id: 4,
    question: "Why was the computer cold?",
    answer: "It left its Windows open!"
  },
  {
    id: 5,
    question: "What did one ocean say to the other ocean?",
    answer: "Nothing, they just waved."
  }
];
    res.send(jokes);
})

app.listen(PORT,()=>{
    console.log(`Server is running at: ${PORT}`)
})

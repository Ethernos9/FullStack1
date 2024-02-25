const express = require('express')
const app = express()

const port= process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Sign up')
})
app.get('/api/quotes', (req, res) => {

    const quotes = [
        {
            id:1,
            title :"Quote1",
            text :"Believe you can and you're halfway there."
            
        },
        {
            id:2,
            title :"Quote2",
            text :"In the midst of chaos, there is also opportunity."
            
        },
        {
            id:3,
            title :"Quote3",
            text :"The only way to do great work is to love what you do."
            
        },
        {
            id:4,
            title :"Quote4",
            text :"Be yourself; everyone else is already taken."
            
        },
        {
            id:5,
            title :"Quote5",
            text :"Success is not final, failure is not fatal: It is the courage to continue that counts."
            
        },
    ]
  res.send(quotes)
})

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})
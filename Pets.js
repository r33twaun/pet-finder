const express = require('express')
const data = require('./data.js')
const app = express()

 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/pets', (req, res) => {
    console.log(data)
    res.send(data)
})

app.get('/pets/:name', (req, res) => {
    const name = req.params.name
    console.log(name)
    res.send(data.filter((pet) => name===pet.name))
})

app.get('/pets/pet/owner', (req, res) => {
    const owner = req.query.name
    res.send(data.filter((pet) => owner===pet.owner))
})




const PORT = 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
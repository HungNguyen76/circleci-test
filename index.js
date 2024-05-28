const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, CircleCI!')
})

app.get('/about', (req, res) => {
    res.send('Hello, About CircleCI!')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
module.exports = app
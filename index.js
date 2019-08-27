const app = require('express')()

app.get('/', (req, res) => {
    res.send('Hello from node app')
})

app.listen(3000, () => console.log('app is running on port 3000'))

module.exports = app
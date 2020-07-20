const express = require('express');
const app = express();

const mochUserData = [
    { name: 'Mark' },
    { name: 'Jill'}
]
app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users:mochUserData
    })
})

app.listen(8000, function () {
    console.log("Server is running")
})
const express = require('express')
const app = express()
const port = 3000
app.get('/',(req, res) => {
    res.send('TEXTODEPRUEBA1')

})
app.listen(port, () =>{
    console.log('La aplicación se esta ejecutando desde el puerto'+ port)
})

